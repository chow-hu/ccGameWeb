let fs = require('fs');
let path = require('path');

const filterPath = [
    'res\\spine',
    'res\\animation',
    'res\\font',
    'res\\shader',
    'res\\particle',
    'nopack',
];
let presetId = "a45uAsp9RAX41McOCxIU3s" // 压缩纹理预设ID

let searchPacAndNone = function (dir, pacFiles, dirNone) {
    let files = fs.readdirSync(dir);

    // files = files.filter((file) => {
    //     return !file.endsWith('.meta');
    // })

    // console.log(files);
    let img_count = 0;
    let pac_files = [];
    for (let i = 0; i < files.length; i++) {
        let file = path.join(dir, files[i]);
        if (file.endsWith('.pac.meta')) {
            pac_files.push(file);
        } else if (file.endsWith(".png") || file.endsWith(".jpg")) {
            img_count++;
        } else if (file.endsWith('.meta')) {
            continue;
        } else {
            let fileState = fs.lstatSync(file);
            if (fileState.isDirectory()) {
                searchPacAndNone(file, pacFiles, dirNone);
            }
        }
    }
    if (pac_files.length > 1) {
        console.error(`${dir} has more pac file`);
    } else if (pac_files.length) {
        pacFiles.push(pac_files[0]);
    } else {
        if (img_count > 0) {
            let work = "../assets/";
            work = path.join(__dirname, work);
            work = path.relative(work, dir);
            let index = filterPath.findIndex((element) => {
                return work.indexOf(element) >= 0;
            })
            if (index < 0) {
                dirNone.push(work);
            }
            // console.log()
        }
    }
}

let modifyPac = function (files, modify) {
    for (let i = 0; i < files.length; ++i) {
        let content = fs.readFileSync(files[i], { encoding: 'utf-8' });
        let data = JSON.parse(content);

        if (!data.userData.compressSettings ||
            !data.userData.compressSettings.useCompressTexture ||
            data.userData.compressSettings.presetId !== presetId) {
            data.userData.compressSettings = {
                "useCompressTexture": true,
                "presetId": presetId
            }
            modify.push(files[i]);
            fs.writeFileSync(files[i], JSON.stringify(data, null, 2));
        }
    }
}

let run = function (os_parm) {
    let dirs = ["../assets/res/"];
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });
    // console.log(dirs);

    let pacFiles = [];
    let dirNone = [];
    let modify = [];
    dirs.forEach((dir) => {
        searchPacAndNone(dir, pacFiles, dirNone);
    });
    // console.log(`pacFiles:`, pacFiles);
    modifyPac(pacFiles, modify);
    console.log(`modify:`, modify);
    console.log(`dirNone:`, dirNone);
}

// run();
module.exports = {
    run
}