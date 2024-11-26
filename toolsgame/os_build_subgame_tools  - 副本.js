const path = require('path');
let fs = require('fs-extra');
const tools = require('./core/tools');
const { writeJSONSync } = require('fs-extra');

let modifyBuild_buildConfig_web_mobile = function (md5, build_env, bundles, orientation) {
    // 修改md5Cache
    let configStr = fs.readFileSync(path.join(urlPack, "buildConfigJson/buildConfig_web-mobile.json"), { encoding: 'utf-8' });
    if (md5 == "true") {
        configStr = configStr.replace(/"md5Cache":\s*false,/g, '"md5Cache": true,');
    } else {
        configStr = configStr.replace(/"md5Cache":\s*true,/g, '"md5Cache": false,');
    }

    if (build_env == "release") {
        configStr = configStr.replace(/"debug":\s*true,/g, '"debug": false,');
    } else if (build_env == "debug") {
        configStr = configStr.replace(/"debug":\s*false,/g, '"debug": true,');
    }

    configStr = configStr.replace(/"orientation":\s*"([a-z"]+)",/g, `"orientation": "${orientation}",`);

    let str = JSON.parse(configStr);
    str.bundleConfigs.length = 3;
    for (let i = 0; i < bundles.length; i++) {
        let name = rename(bundles[i]);
        str.bundleConfigs.push({ root: `db://assets/subGames/${bundles[i]}`, name: name, output: true });
    }
    fs.writeFileSync(path.join(urlPack, "buildConfigJson/buildConfig_web-mobile.json"), JSON.stringify(str, undefined, 4));
}

let rename = function (name) {
    let dst = `${name}`;
    if (!dst.startsWith('ab')) {
        dst = `ab${name}`;
    }
    return dst;
}

let modifyBuildTemplate = function (name) {
    fs.emptyDirSync('build-templates/web-mobile');
    let path = name == 'Crash' ? 'build-templates/web-mobile-spribe/' : 'build-templates/web-mobile-koolbet/';
    // console.log(path);
    fs.copySync(path, 'build-templates/web-mobile', { overwrite: true })
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

let backupApk = function (build_env, bundle) {
    fs.copySync('./build-templates/web-mobile', `./build/web-mobile`, { overwrite: true })
    var buildHtml = __importDefault(require("../extensions/super-html/dist/core/build.js"))
    let input = path.join(__dirname, `../build/web-mobile`);
    let out = path.join(__dirname, `../build/super-html`);
    console.log(`input:${input} out:${out}`)
    new buildHtml.default("3.8.3", input, out, () => {
        console.log("success");

        let name = rename(bundle);
        dst = path.join(__dirname, `../ccgamePack/game/${build_env}/${getVersion()}/${name}`);//${platorm}/
        console.log(dst);
        if (fs.existsSync(dst)) {
            fs.emptydirSync(dst);
        }
        fs.copySync(urlBuild, `${dst}/index.html`, { overwrite: true })
        fs.copySync('./build-templates/web-mobile/logo.gif', `${dst}/logo.gif`, { overwrite: true })
    });
}

let urlPack = path.join(__dirname, "../ccgamePack");
let urlBuild = path.join(__dirname, "../build/super-html/common_min/ccgame_common_min.html")
let run = function (os_param) {
    step = os_param["--step"];
    let bundle = os_param["--bundle"] || '';
    let bundles = bundle.split('_');
    let build_env = os_param["--build_env"];
    if (bundles.length == 0) {
        process.exit(1);
    }
    try {
        if (step == 1) {
            let md5 = os_param["--md5"] || true;
            let orientation = { "port": 'portrait', 'land': 'landscape' }[os_param["--orientation"]] || 'auto';
            modifyBuild_buildConfig_web_mobile(md5, build_env, bundles, orientation);
            modifyBuildTemplate(bundles[0]);
        } else if (step == 2) {
            backupApk(build_env, bundles[0]);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    run
}