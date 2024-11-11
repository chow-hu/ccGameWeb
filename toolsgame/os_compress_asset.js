/*
 * @Description: 图片资源一键配置
 */

let fs = require('fs');
let path = require('path');
const tFilter = {
    ["res-static/begin"]: 1,
    ["simheihykaitis.png.meta"]: 1,
    ["dazuotexiao.png.meta"]: 1,
}
let getFilesNeedCompress = function (dir, result) {
    let files = fs.readdirSync(dir);
    let pacFile = "";
    let temp = [];
    let dirName = path.basename(dir);
    for (let i = 0; i < files.length; ++i) {
        let file = path.join(dir, files[i]);
        let fileState = fs.lstatSync(file);
        if (fileState.isDirectory() && !tFilter[dirName + "/" + files[i]]) {
            getFilesNeedCompress(file, result);
        } else {
            if (tFilter[path.basename(file)]) {
                continue;
            }
            if (file.endsWith(".png.meta") || file.endsWith(".jpg.meta")) {
                temp.push(file);
            } else if (file.endsWith(".pac.meta")) {
                pacFile = file;
            }
        }
    }

    if (pacFile.length > 0) {
        result.push(pacFile);
    } else {
        result.push(...temp);
    }
}

let setAssetCompressFormat = function (files) {
    for (let i = 0; i < files.length; ++i) {
        let content = fs.readFileSync(files[i], { encoding: 'utf-8' });
        let data = JSON.parse(content);

        let presetId = files[i].endsWith(".jpg.meta") ? astc_jpg : astc_png;

        if (!data.userData.compressSettings ||
            !data.userData.compressSettings.useCompressTexture ||
            data.userData.compressSettings.presetId !== presetId) {
            data.userData.compressSettings = {
                "useCompressTexture": true,
                "presetId": presetId
            }

            fs.writeFileSync(files[i], JSON.stringify(data, null, 2));
        }
    }
}

const astc_jpg = "53xND9LQZCdY1AIAB/oeNr";
const astc_png = "43u0Adv0VKxqZNFb+WsZZN";

let run = function (os_parm) {
    let dirs = ["../assets/res", "../assets/res-static", "../assets/resources"];
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });

    let files = [];
    dirs.forEach((dir) => {
        getFilesNeedCompress(dir, files);
    });

    setAssetCompressFormat(files);

    console.log("Finished: os_compress_asset.");
}

module.exports = {
    run
}