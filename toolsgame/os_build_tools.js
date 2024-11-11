const path = require('path');
const fs = require('fs');
const tools = require('./core/tools');


let modifyBuild_buildConfig_android = function (md5, build_env, app_id) {
    // 修改md5Cache
    let configStr = fs.readFileSync(path.join(urlPack, "buildConfigJson/buildConfig_android.json"), { encoding: 'utf-8' });
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
    configStr = configStr.replace(/"packageName": "*.*",/gi, `"packageName": "${app_id}",`);
    // let temp = JSON.parse(configStr);
    // temp.packages.android.packageName = app_id;
    // fs.writeFileSync(path.join(urlPack, "buildConfigJson/buildConfig_android.json"), JSON.stringify(temp));
    fs.writeFileSync(path.join(urlPack, "buildConfigJson/buildConfig_android.json"), configStr);
}

let modifyBuild_channelCOnfig_android = function (app_id, af_key, pkg_type) {
    let config = { app_id, af_key, pkg_type };
    fs.writeFileSync(path.join(urlBuild, "data/channel.json"), JSON.stringify(config));
}

let modifyBuild_buildConfig_web_mobile = function (md5, build_env) {
    // 修改md5Cache
    let configStr = fs.readFileSync(path.join(urlPack, "buildConfigJson/buildConfig_web_mobile.json"), { encoding: 'utf-8' });
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

    fs.writeFileSync(path.join(urlPack, "buildConfigJson/buildConfig_web_mobile.json"), configStr);
}


let modifyBuildFiles = function () {
    let tagJson = JSON.parse(fs.readFileSync(path.join(urlPack, "tagJson/server_tag.json"), { encoding: 'utf-8' }));
    // 修改server
    let mainStr = fs.readFileSync(path.join(urlBuild, "data/assets/main/index.js"), { encoding: 'utf-8' });
    mainStr = mainStr.replace(/host:\"http.*com\"/g, `host:"${tagJson[server_tag].host}"`);
    mainStr = mainStr.replace(/version:".*?"/g, `version:"${tagJson[server_tag].version}"`);
    mainStr = mainStr.replace(/astver:".*?"/g, `astver:"${tagJson[server_tag].astver}"`);
    fs.writeFileSync(path.join(urlBuild, "data/assets/main/index.js"), mainStr);
}


let backupApk = function (pkg_type, pre_name) {
    let src = path.join(urlBuild, "proj/build/ccgame/outputs/apk/release/ccgame-release.apk");
    let version = getVersion();
    let date = new Date();
    let dist = path.join(urlPack, `pack/${server_tag}/apk/${pre_name}_${pkg_type}_${getServer()}_${version}_${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(date.getDate())}_${addZero(date.getHours())}${addZero(date.getMinutes())}${addZero(date.getSeconds())}`);
    dist += ".apk";
    if (fs.existsSync(dist)) {
        fs.unlinkSync(dist);
    }
    tools.copyFile(src, dist);
}

let backupManifest = function () {
    let src = path.join(urlBuild, "project.manifest");
    let version = getVersion();
    let date = new Date();
    let dist = path.join(urlPack, `pack/${server_tag}/manifest/${version}_${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(date.getDate())}_${addZero(date.getHours())}${addZero(date.getMinutes())}${addZero(date.getSeconds())}`);
    dist += ".manifest"
    if (fs.existsSync(dist)) {
        fs.unlinkSync(dist);
    }
    tools.copyFile(src, dist);
}

let backupManifestToBuildUpdate = function () {
    let src = path.join(urlBuild, "project.manifest");
    let version = getVersion();
    let dist = path.join(urlBuildUpdate, `manifest/${version}`);
    dist += ".manifest"
    if (fs.existsSync(dist)) {
        fs.unlinkSync(dist);
    }
    tools.copyFile(src, dist);
}

let getVersion = function () {
    let manifestPath = path.join(urlBuild, 'project.manifest');
    let manifestData = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
    let manifestObj = JSON.parse(manifestData);
    return manifestObj.version;
}

let getServer = function () {
    let configPath = path.join(__dirname, '../assets/plug-in/config/config-dis.ts');
    let confStr = fs.readFileSync(configPath, "utf8");
    let config = JSON.parse(confStr);
    return ['内网测试', '外网测试', '外网正式', '预发布'][Number(config.io) - 1]
}

function addZero(num) {
    return num < 10 ? "0" + String(num) : String(num);
}


let server_tag;
let urlBuildUpdate = path.join(__dirname, "../buildUpdate");
let urlPack = path.join(__dirname, "../ccgamePack");
let urlBuild = path.join(__dirname, "../build/android")
let run = function (os_param) {
    step = os_param["--step"];
    server_tag = os_param["--server_tag"];
    try {
        if (step == 1) {
            let app_id = os_param["--app_id"] || 'com.Y1.lucky';
            let md5 = os_param["--md5"];
            let build_env = os_param["--build_env"];
            let build_type = os_param["--build_type"];
            if (build_type == "web-mobile") {
                modifyBuild_buildConfig_web_mobile(md5, build_env)
            } else {
                modifyBuild_buildConfig_android(md5, build_env, app_id);
            }
            //modifyBuildFiles() // 脚本加密,无法修改
        } else if (step == 2) {
            let build_channel = os_param["--build_channel"];
            // 备份apk
            backupApk(os_param["--pkg_type"], os_param["--pre_name"]);
            // 备份manifest
            backupManifest();
            if (server_tag === "dis" && build_channel === "official" && build_channel === "topone") {
                // 拷贝到buildUpdate
                backupManifestToBuildUpdate();
            }
        } else if (step == 3) {
            modifyBuild_channelCOnfig_android(os_param["--app_id"] || '', os_param["--af_key"] || '', os_param["--pkg_type"] || 'officail');
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    run
}