let fs = require('fs');
let path = require('path');
let tools = require('./core/tools');
let zipper = require('zip-local');
let relative = require('./relative');
let sp = require('./core/scanPath');

let ProgressBar = require('./core/progress-bar');
//========================================================================================
let progress_bar = new ProgressBar("> ", 50);
let target, version, server_tag;
let error_msg = function (key) {
    switch (key) {
        case "invalid":
            return "> 参数异常，请使用 node asset --h 阅读规范";
        case "target-none":
            return "> 构建目录不存在，请检查路径";
        default:
            break;
    }
    return "> unknown error";
}
let check_pack_dir = function () {
    let dst = path.join(__dirname, '../build/' + target);
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        throw error_msg("target-none");
    }
}
//========================================================================================

let back_up_asset_async = function () {
    let target_path = path.join(__dirname, '../build/' + target + '/data');
    let dist = path.join(__dirname, '../buildUpdate/');
    tools.rmdirsSync(dist + '/version/temp');       // 删除
    tools.rmdirsSync(dist + '/version/' + version);
    tools.mkdirsSync(dist + '/version/' + version); // 创建
    tools.mkdirsSync(dist + '/manifest');

    tools.copyDirectory(target_path + '/assets', dist + '/version/temp/' + 'assets');
    tools.copyDirectory(target_path + '/src', dist + '/version/temp/' + 'src');
    tools.copyDirectory(target_path + '/jsb-adapter', dist + '/version/temp/' + 'jsb-adapter');
    fs.copyFileSync(target_path + '/main.js', dist + '/version/temp/' + 'main.js');
    fs.copyFileSync(path.join(target_path, '/../project.manifest'), dist + '/version/temp/' + 'project.manifest');
    fs.copyFileSync(path.join(target_path, '/../project.manifest'), dist + '/manifest/' + version + '.manifest');
}

let compare_version_diff = function (baseData, distData) {
    let assetKeys = Object.keys(baseData.assets);
    let diffAssetData = {};
    for (let index = 0; index < assetKeys.length; index++) {
        const key = assetKeys[index];
        if (!baseData.assets[key]) {
            continue;
        }

        // 新增子游戏这里需要添加
        if (key.includes("abActivity")) {
            continue;
        }

        if (!distData.assets[key] || distData.assets[key].md5 != baseData.assets[key].md5) {
            diffAssetData[key] = baseData.assets[key];
        }
    }
    return diffAssetData;
}

let build_diff_files = function (version_list, idx, version_diff_list) {
    const versionName = version_list[idx++];
    if (!versionName) {
        console.log(`> 构建版本${version}热更文件结束`);
        return;
    }
    let diffAssetData = version_diff_list[versionName];
    let zipData = { size: 0, md5: '', version };
    let keys = Object.keys(diffAssetData);
    let dist = path.join(__dirname, '../buildUpdate/')
    for (let index = 0; index < keys.length; index++) {
        let url = keys[index];
        let urlData = diffAssetData[url];
        if (!urlData) {
            throw '异常差异信息';
        }
        zipData.size += +urlData.size;
        tools.copyFile(dist + '/version/temp/' + url, dist + '/version/' + version + '/' + versionName + '/' + url);
    }
    diffAssetData.zip = zipData;
    let target_path = dist + '/version/' + version + '/' + versionName;
    let tmp_file = dist + '/version/' + version + '/' + versionName + '.diff.zip';
    zipper.zip(target_path, function (error, zipped) {
        if (!error) {
            zipped.compress(); // compress before exporting
            zipped.save(tmp_file, function (error) {
                if (!error) {
                    diffAssetData.zip.md5 = tools.fileMd5(tmp_file);
                    if (!diffAssetData.zip.md5) {
                        console.log(`> 构建版本${versionName}-${version}差异文件出错-md5 errro`);
                        return
                    }
                    let str = JSON.stringify(diffAssetData);
                    let temp = dist + '/version/' + version + '/' + versionName + '.diff.manifest';
                    fs.writeFileSync(temp, str)
                    console.log(`> 构建版本${versionName}-${version}差异文件结束`);
                    tools.rmdirsSync(target_path);
                    build_diff_files(version_list, idx, version_diff_list);
                } else {
                    console.log(`> 构建版本${versionName}-${version}差异文件出错`, error);
                    tools.rmdirsSync(target_path);
                }
            });
        } else {
            console.log(`> 构建版本${versionName}-${version}差异文件出错`, error);
        }
    });
}

let built_version_diff = function () {
    let manifests = {};
    let dist = path.join(__dirname, '../buildUpdate/');
    sp.scan(dist + '/manifest/', '.manifest', (file, name) => {
        let fileName = path.basename(file, '.manifest');
        if (fileName != version) manifests[fileName] = file;
    });
    let keys = Object.keys(manifests);
    let sort_func = (a, b) => {
        let spl1 = a.split('.');
        let spl2 = b.split('.');
        for (let index = 0; index < Math.max(spl1.length, spl2.length); index++) {
            if (spl1[index] === undefined) {
                return -1;
            }
            if (spl2[index] === undefined) {
                return 1;
            }
            if (+spl1[index] === +spl2[index]) {
                continue;
            }
            if (+spl1[index] > +spl2[index]) {
                return 1;
            }
            if (+spl1[index] < +spl2[index]) {
                return -1;
            }
        }
        return -1;
    };
    keys.sort(sort_func);
    console.log("keys:" + JSON.stringify(keys))
    let baseurl = path.join(__dirname, '../buildUpdate/manifest/' + version + '.manifest');
    let baseData = fs.readFileSync(baseurl, { encoding: 'utf-8' });
    baseData = JSON.parse(baseData)
    let version_diff_list = {};
    for (let index = 0; index < keys.length; index++) {
        const versionName = keys[index];
        let url = manifests[versionName];
        let distData = fs.readFileSync(url, { encoding: 'utf-8' });
        distData = JSON.parse(distData)
        let diffAssetData = compare_version_diff(baseData, distData);
        version_diff_list[versionName] = diffAssetData;
    }
    console.log('> 解析差异文件结束');
    keys = Object.keys(version_diff_list);
    keys.sort(sort_func);
    build_diff_files(keys, 0, version_diff_list);
}

let getVersion = function () {
    let manifestPath = path.join(__dirname, '../build/' + target + '/project.manifest');
    let manifestData = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
    let manifestObj = JSON.parse(manifestData);
    return manifestObj.version;
}
//========================================================================================

let run = function (os_parm) {
    target = os_parm['--t'];
    if (!target) {
        throw error_msg('invalid');
    }

    version = getVersion()//os_parm['--v']
    if (!version) {
        throw error_msg('invalid');
    }

    console.log('version:' + version);
    check_pack_dir();
    back_up_asset_async();
    built_version_diff();
}
module.exports = {
    run
}