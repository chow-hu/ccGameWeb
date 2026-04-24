// 新字符串

const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // 请使用 uuid@8.3.2

// ========== 配置 ==========
const SOURCE_DIR = "./assets/subGames/abChicken2";  // 源目录
const DEST_DIR = "./assets/subGames/abChicken1"; // 目标目录
const OLD_STR = 'Chicken2';               // 要替换的普通字符串
const NEW_STR = 'Chicken1';               // 替换后的字符串

// 需要处理 UUID 引用的资源扩展名
const JSON_RESOURCE_EXTS = ['.prefab', '.scene', '.anim', '.fire', '.skel'];
const SOURCE_EXTS = ['.ts', '.js'];

// 需要忽略的目录名（完全匹配，不进行任何处理）
const IGNORE_DIRS = ['.git'];
// =========================

// 存储映射
const uuidMap = new Map();       // oldUuid -> newUuid
const typeIdMap = new Map();     // oldTypeId -> newTypeId

// 生成新 UUID
function generateNewUuid() {
    return uuidv4();
}

/**
 * 将标准 UUID（带连字符）转换为 Cocos Creator 的 __type__ 字符串（22 字符）
 * 算法：去掉连字符的 32 位十六进制 -> 16 字节 -> Base64 -> 替换 +/ 为 -_ -> 去掉末尾 =
 */
// function uuidToTypeId(uuid) {
//     const hex = uuid.replace(/-/g, '');
//     const buffer = Buffer.from(hex, 'hex');
//     let base64 = buffer.toString('base64');
//     base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
//     return base64;
// }

const BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function uuidToTypeId(uuid) {
    const hex = uuid.replace(/-/g, '');
    if (hex.length < 32) return uuid;
    let out = hex.substring(0, 5);
    for (let i = 5; i < 32; i += 3) {
        const n = parseInt(hex.substring(i, i + 3), 16); // 12 bits
        out += BASE64_KEYS[(n >> 6) & 0x3f] + BASE64_KEYS[n & 0x3f];
    }
    return out;
}


// ========== 第一阶段：收集所有 .meta 文件的映射 ==========
async function collectMappings(dir) {

    // 如果当前目录是需要忽略的，直接返回
    const dirName = path.basename(dir);
    if (IGNORE_DIRS.includes(dirName)) {
        console.log(`⏭️ 跳过忽略目录: ${dir}`);
        return;
    }

    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // 递归前检查子目录名是否忽略
            if (!IGNORE_DIRS.includes(entry.name)) {
                await collectMappings(fullPath);
            } else {
                console.log(`⏭️ 跳过忽略目录: ${fullPath}`);
            }
        } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.meta') {
            try {
                const content = await fs.readFile(fullPath, 'utf8');
                const meta = JSON.parse(content);
                const oldUuid = meta.uuid;
                if (oldUuid && typeof oldUuid === 'string' && !uuidMap.has(oldUuid)) {
                    const newUuid = generateNewUuid();
                    const oldTypeId = uuidToTypeId(oldUuid);
                    const newTypeId = uuidToTypeId(newUuid);
                    uuidMap.set(oldUuid, newUuid);
                    typeIdMap.set(oldTypeId, newTypeId);
                    console.log(`📦 脚本/资源: ${path.basename(fullPath)}`);
                    console.log(`   UUID: ${oldUuid} → ${newUuid}`);
                    console.log(`   TypeId: ${oldTypeId} → ${newTypeId}`);
                }
            } catch (err) {
                console.error(`❌ 解析 .meta 失败: ${fullPath}`, err.message);
            }
        }
    }
}

// ========== 递归替换 JSON 对象中的所有字符串和 __type__ 值 ==========
function replaceInJson(obj, strMap, uuidMap, typeIdMap) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj === 'string') {
        let result = obj;
        // 普通字符串替换
        for (const [oldStr, newStr] of strMap) {
            result = result.split(oldStr).join(newStr);
        }
        // UUID 字符串替换
        for (const [oldUuid, newUuid] of uuidMap) {
            result = result.split(oldUuid).join(newUuid);
        }
        // TypeId 替换（关键！用于 __type__ 字段的值）
        for (const [oldTypeId, newTypeId] of typeIdMap) {
            result = result.split(oldTypeId).join(newTypeId);
        }
        return result;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => replaceInJson(item, strMap, uuidMap, typeIdMap));
    }
    if (typeof obj === 'object') {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            // 替换 key 中的普通字符串（如属性名包含 aaa）
            let newKey = key;
            for (const [oldStr, newStr] of strMap) {
                newKey = newKey.split(oldStr).join(newStr);
            }
            // 递归处理值
            newObj[newKey] = replaceInJson(value, strMap, uuidMap, typeIdMap);
        }
        return newObj;
    }
    return obj;
}

// ========== 处理 JSON 资源文件（.prefab, .scene 等） ==========
async function processJsonFile(srcPath, destPath, strMap, uuidMap, typeIdMap) {
    const content = await fs.readFile(srcPath, 'utf8');
    let obj;
    try {
        obj = JSON.parse(content);
    } catch (err) {
        console.error(`JSON 解析失败，直接复制: ${srcPath}`, err.message);
        await fs.copyFile(srcPath, destPath);
        return;
    }
    const newObj = replaceInJson(obj, strMap, uuidMap, typeIdMap);
    await fs.writeFile(destPath, JSON.stringify(newObj, null, 2), 'utf8');
    console.log(`✅ 已更新 JSON: ${path.basename(destPath)}`);
}

// ========== 处理源码文件（.ts, .js） ==========
async function processSourceFile(srcPath, destPath, strMap, uuidMap, typeIdMap) {
    let content = await fs.readFile(srcPath, 'utf8');
    for (const [oldStr, newStr] of strMap) {
        content = content.split(oldStr).join(newStr);
    }
    for (const [oldUuid, newUuid] of uuidMap) {
        content = content.split(oldUuid).join(newUuid);
    }
    for (const [oldTypeId, newTypeId] of typeIdMap) {
        content = content.split(oldTypeId).join(newTypeId);
    }
    await fs.writeFile(destPath, content, 'utf8');
    console.log(`📄 已更新源码: ${path.basename(destPath)}`);
}

// ========== 处理 .meta 文件（只替换 uuid 字段，不替换普通字符串） ==========
async function processMetaFile(srcPath, destPath, uuidMap) {
    try {
        let content = await fs.readFile(srcPath, 'utf8');
        let meta = JSON.parse(content);
        // 递归替换所有 uuid 字段
        function replaceUuidField(obj) {
            if (obj && typeof obj === 'object') {
                for (const key in obj) {
                    if (key === 'uuid' && typeof obj[key] === 'string') {
                        const old = obj[key];
                        if (uuidMap.has(old)) {
                            obj[key] = uuidMap.get(old);
                        }
                    } else if (typeof obj[key] === 'object') {
                        replaceUuidField(obj[key]);
                    }
                }
            }
        }
        replaceUuidField(meta);
        await fs.writeFile(destPath, JSON.stringify(meta, null, 2), 'utf8');
        console.log(`🔧 已更新 .meta: ${path.basename(destPath)}`);
    } catch (err) {
        console.error(`处理 .meta 失败: ${srcPath}`, err.message);
        await fs.copyFile(srcPath, destPath);
    }
}

// ========== 第二阶段：复制目录并应用所有替换 ==========
async function copyDir(src, dest, strMap, uuidMap, typeIdMap) {
    // 如果源目录是需要忽略的，直接返回（不创建目标目录）
    const srcBaseName = path.basename(src);
    if (IGNORE_DIRS.includes(srcBaseName)) {
        console.log(`⏭️ 跳过忽略目录: ${src}`);
        return;
    }

    const destRenamed = dest.replaceAll(OLD_STR, NEW_STR);
    await fs.mkdir(destRenamed, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        let newName = entry.name.replaceAll(OLD_STR, NEW_STR);
        const destPath = path.join(destRenamed, newName);
        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath, strMap, uuidMap, typeIdMap);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (ext === '.meta') {
                await processMetaFile(srcPath, destPath, uuidMap);
            } else if (JSON_RESOURCE_EXTS.includes(ext)) {
                await processJsonFile(srcPath, destPath, strMap, uuidMap, typeIdMap);
            } else if (SOURCE_EXTS.includes(ext)) {
                await processSourceFile(srcPath, destPath, strMap, uuidMap, typeIdMap);
            } else {
                await fs.copyFile(srcPath, destPath);
                console.log(`📎 已复制: ${path.basename(destPath)}`);
            }
        }
    }
}

// ========== 主函数 ==========
(async () => {
    try {
        console.log('🔍 第一阶段：收集所有 .meta 文件的 UUID 和 TypeId 映射...');
        await collectMappings(SOURCE_DIR);
        console.log(`📊 共收集到 ${uuidMap.size} 个 UUID 映射。\n`);

        if (uuidMap.size === 0) {
            console.error('⚠️ 未找到任何 .meta 文件，请检查源目录路径是否正确。');
            return;
        }

        // 构建普通字符串替换映射
        const strReplaceMap = new Map([[OLD_STR, NEW_STR]]);

        console.log('🚀 第二阶段：复制并应用所有替换...');
        await copyDir(SOURCE_DIR, DEST_DIR, strReplaceMap, uuidMap, typeIdMap);
        console.log('\n✨ 操作成功完成！');
    } catch (err) {
        console.error('💥 发生错误:', err);
    }
})();