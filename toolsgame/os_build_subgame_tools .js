const path = require('path');
let fs = require('fs-extra');
const tools = require('./core/tools');
const { writeJSONSync } = require('fs-extra');

let modifyBuild_buildConfig_web_mobile = function (md5, build_env, bundles) {
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

    let str = JSON.parse(configStr);
    str.bundleConfigs.length = 4;
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

let backupApk = function (build_env, bundle) {
    let name = rename(bundle);
    dst = path.join(__dirname, `../ccgamePack/game/${build_env}/${getVersion()}/${name}`);//${platorm}/
    console.log(dst);
    if (fs.existsSync(dst)) {
        fs.emptydirSync(dst);
    }
    fs.copySync(urlBuild, dst, { overwrite: true })
}

let urlPack = path.join(__dirname, "../ccgamePack");
let urlBuild = path.join(__dirname, "../build/web-mobile")
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
            modifyBuild_buildConfig_web_mobile(md5, build_env, bundles);
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