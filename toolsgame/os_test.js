
// 脚本测试代码

let path = require('path');
let fs = require('fs');
const tools = require('./core/tools');


let modifyBuildFiles = function () {
    let tagJson = JSON.parse(fs.readFileSync(path.join(urlPack, "tagJson/server_tag.json"), { encoding: 'utf-8' }));
    // 修改server
    let mainStr = fs.readFileSync(path.join(urlBuild, "data/assets/main/index.js"), { encoding: 'utf-8' });
    mainStr = mainStr.replace(/host:\"http.*com\"/g, `host:"${tagJson[server_tag].host}"`);
    mainStr = mainStr.replace(/version:".*?"/g, `version:"${tagJson[server_tag].version}"`);
    mainStr = mainStr.replace(/astver:".*?"/g, `astver:"${tagJson[server_tag].astver}"`);
    fs.writeFileSync(path.join(urlBuild, "data/assets/main/index.js"), mainStr);
}



let backupApk = function () {
    let src = path.join(urlBuild, "../../native/engine/android/app/release/ccgame-release.apk");
    let version = getVersion();
    let date = new Date();
    let dist = path.join(urlPack, `apk/${version}_${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(date.getDate())}_${addZero(date.getHours())}${addZero(date.getMinutes())}${addZero(date.getSeconds())}`);
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
    let dist = path.join(urlPack, `manifest/${version}_${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(date.getDate())}_${addZero(date.getHours())}${addZero(date.getMinutes())}${addZero(date.getSeconds())}`);
    dist += ".manifest"
    if (fs.existsSync(dist)) {
        fs.unlinkSync(dist);
    }
    tools.copyFile(src, dist);
}


let modifyBuildConfig = function () {
    // 修改md5Cache
    let configStr = fs.readFileSync(path.join(urlPack, "buildConfigJson/buildConfig_android.json"), { encoding: 'utf-8' });
    console.log("configStr: " + configStr)
    configStr = configStr.replace(/"md5Cache":\s*false,/g, '"md5Cache": true,'); 
    fs.writeFileSync(path.join(urlPack, "buildConfigJson/buildConfig_android.json"), configStr);
}


function addZero(num) {
    return num < 10 ? "0" + String(num) : String(num);
}


let getVersion = function () {
    let tagJson = JSON.parse(fs.readFileSync(path.join(urlPack, "tagJson/server_tag.json"), { encoding: 'utf-8' }));
    return tagJson[server_tag].version
}



let server_tag;
let urlPack = path.join(__dirname, "../ccgamePack");
let urlBuild = path.join(__dirname, "../build/android")

let run = function (os_parm) {
    server_tag = "dev"
    
    // 修改构建资源相关文件
    //modifyBuildFiles();
    //console.log("修改构建资源相关文件")

    // // 备份apk
    // backupApk();
    // console.log("备份apk")

    // // 备份manifest
    // backupManifest();
    // console.log("备份manifest")


    modifyBuildConfig();


}



module.exports = {
    run
}