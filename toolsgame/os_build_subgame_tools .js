const path = require('path');
let fs = require('fs-extra');
const tools = require('./core/tools');
const { writeJSONSync } = require('fs-extra');
let zipper = require('zip-local');

let modifyBuild_buildConfig_web_mobile = function (md5, build_env, bundles, orientation, size) {
    // 修改md5Cache
    let configStr = fs.readFileSync(path.join(urlPack, `buildConfigJson/buildConfig_${platorm}.json`), { encoding: 'utf-8' });
    if (md5 == "true") {
        configStr = configStr.replace(/"md5Cache":\s*false,/g, '"md5Cache": true,');
    } else {
        configStr = configStr.replace(/"md5Cache":\s*true,/g, '"md5Cache": false,');
    }

    if (build_env == "release") {
        configStr = configStr.replace(/"debug":\s*true,/g, '"debug": false,');
        configStr = configStr.replace(/"embedWebDebugger":\s*true,/g, '"embedWebDebugger": false,');
    } else if (build_env == "debug") {
        configStr = configStr.replace(/"debug":\s*false,/g, '"debug": true,');
        configStr = configStr.replace(/"embedWebDebugger":\s*false,/g, '"embedWebDebugger": true,');
    }

    let sct = ct == 'true' ? 'false' : 'true';
    configStr = configStr.replace(
        /("skipCompressTexture":\s*)(true|false)/,
        `$1${sct}`
    );

    configStr = configStr.replace(/"orientation":\s*"([a-z"]+)",/g, `"orientation": "${orientation}",`);
    let setingStr = fs.readFileSync(path.join(__dirname, "../settings/v2/packages/project.json"), { encoding: 'utf-8' });
    let setingCon = JSON.parse(setingStr);
    // let max = Math.max(setingCon.general.designResolution.width, setingCon.general.designResolution.height);
    // let min = Math.min(setingCon.general.designResolution.width, setingCon.general.designResolution.height);
    let max = Math.max(size[0], size[1]);
    let min = Math.min(size[0], size[1]);
    setingCon.general.designResolution.width = orientation == 'landscape' ? max : min;
    setingCon.general.designResolution.height = orientation == 'landscape' ? min : max;
    console.log(setingCon)
    fs.writeFileSync(path.join(__dirname, "../settings/v2/packages/project.json"), JSON.stringify(setingCon, undefined, 4));

    let str = JSON.parse(configStr);
    str.bundleConfigs.length = 3;
    for (let i = 0; i < bundles.length; i++) {
        let name = rename(bundles[i]);
        str.bundleConfigs.push({ root: `db://assets/subGames/${bundles[i]}`, name: name, output: true });
    }
    fs.writeFileSync(path.join(urlPack, `buildConfigJson/buildConfig_${platorm}.json`), JSON.stringify(str, undefined, 4));
}

let rename = function (name) {
    let dst = `${name}`;
    if (!dst.startsWith('ab')) {
        dst = `ab${name}`;
    }
    return dst;
}

let modifyBuildTemplate = function (name, orientation, id, tl) {
    fs.emptyDirSync(`build-templates/${platorm}`);
    // let path = name == 'Crash' ? `build-templates/${platorm}-spribe${kb ? '-kb' : ''}/` : `build-templates/${platorm}-koolbet${kb ? `-kb-${orientation}` : `-${orientation}`}/`;
    let path;
    // if (/* name == 'Crash' */id == 101) {
    //     path = `build-templates/${platorm}-abCrash${kb ? '-kb' : ''}/`;
    // } else if (/* name == 'abJet' || name == 'abChicken2' || name == 'abSquid' */id == 103 || id == 107 || id == 108) {
    //     path = `build-templates/${platorm}-abJet${kb ? '-kb' : ''}/`;
    // } else if (id == 110 || id == 109 || id == 111 || id == 112 || id == 113) {
    //     path = `build-templates/${platorm}-jili${kb ? '-kb' : ''}/`;
    // } else {
    //     path = `build-templates/${platorm}-koolbet${kb ? `-kb-${orientation}` : `-${orientation}`}/`;
    // }
    if (tl == 'koolbet') {
        path = `build-templates/${platorm}-${tl}${kb ? `-kb-${orientation}` : `-${orientation}`}/`;
    } else {
        path = `build-templates/${platorm}-${tl}${kb ? '-kb' : ''}/`;
    }
    console.log(path);
    fs.copySync(path, `build-templates/${platorm}`, { overwrite: true })
}

let getGameVersion = function (id) {
    let config = path.join(__dirname, '../assets/plug-in/config/index.ts');
    let confStr = fs.readFileSync(config, "utf8");
    const regex = new RegExp(`\\b${id}:\\s*\\{\\s*version:\\s*['"]([^'"]+)['"]\\s*\\}`);
    const match = confStr.match(regex);
    if (match) {
        return match[1];
    } else {
        return getVersion();
    }
}

let getVersion = function () {
    let config = path.join(__dirname, '../assets/plug-in/config/config-dis.ts');
    let confStr = fs.readFileSync(config, "utf8");
    let version = /(?<=version: ').*(?=',)/.exec(confStr)[0];
    console.log('BUILD-VERSION>', version);
    return version;
}

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

function addZero(num) {
    return num < 10 ? "0" + String(num) : String(num);
}

let backupApk = function (build_env, bundle, id) {
    fs.copySync(`./build-templates/${platorm}`, `./build/${platorm}`, { overwrite: true })
    var buildHtml = __importDefault(require("../extensions/super-html/dist/core/build.js"))
    let input = path.join(__dirname, `../build/${platorm}`);
    let out = path.join(__dirname, `../build/super-html`);
    console.log(`input:${input} out:${out}`)

    let name = rename(bundle);
    let date = new Date();
    let file = `${id}-${name}-(v${getGameVersion(id)})-(${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(date.getDate())}_${addZero(date.getHours())}${addZero(date.getMinutes())}${addZero(date.getSeconds())})`;
    dst = path.join(__dirname, `../ccgamePack/game/${platorm}/${build_env}/${getVersion()}/${file}`);//${platorm}/
    console.log(dst);
    if (fs.existsSync(dst)) {
        fs.emptydirSync(dst);
    }
    tools.copyDirectory(`./build/${platorm}`, `${dst}`, { overwrite: true })
    zipper.zip(dst, (error, zipped) => {
        if (!error) {
            zipped.compress();
            const zipfile = `${dst}/${file}.zip`;
            // console.log(zipfile);
            zipped.save(zipfile, (error) => {
                if (!error) {
                    console.log('success');
                }
            })
        }
    })
    return

    new buildHtml.default("3.8.3", input, out, () => {
        console.log("success");

        fs.copySync(`./build/${platorm}/index.html`, `${dst}/${platorm}/index.html`, { overwrite: true })
        fs.copySync(`./build/${platorm}`, `${dst}`, { overwrite: true })
        fs.copySync(urlBuild, `${dst}/index.html`, { overwrite: true })
    });
}

let urlPack = path.join(__dirname, "../ccgamePack");
let urlBuild = path.join(__dirname, "../build/super-html/common_min/ccgame_common_min.html")
let platorm = 'web-mobile';
let kb = false;
let ct = 'false';
let run = function (os_param) {
    step = os_param["--step"];
    let bundle = os_param["--bundle"] || '';
    let groups = bundle.split('-');
    let orientation = ['landscape', 'land', 'l', 'Land', "Landscape", 'Land'].includes(groups[1] || 'port') ? 'landscape' : 'portrait';
    let bundles = groups[0].split('_');
    console.log(`orientation = ${orientation}, bundles = ${bundles}`);
    let build_env = os_param["--build_env"];
    platorm = os_param["--platorm"] || platorm;
    kb = os_param["--kb"] || false;
    ct = os_param["--ct"] || 'false';
    if (bundles.length == 0) {
        process.exit(1);
    }
    try {
        if (step == 1) {
            let md5 = os_param["--md5"] || true;
            let size = (os_param["--size"] || '768/1366').split('/');
            // let orientation = { "port": 'portrait', 'land': 'landscape' }[os_param["--orientation"]] || 'auto';
            modifyBuild_buildConfig_web_mobile(md5, build_env, bundles, orientation, size);
            modifyBuildTemplate(bundles[0], orientation, os_param["--id"], os_param["--tl"] || 'koolbet');
        } else if (step == 2) {
            backupApk(build_env, bundles[0], os_param["--id"]);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    run
}