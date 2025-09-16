
let fs = require('fs-extra');
let path = require('path');
let sp = require('./core/scanPath');
const { file } = require('jszip');
process.on('exit', function (code) { console.log(code) });
let child = require('child_process');

let excuteCompress = function (file) {
    let string = "D:\\tools\\Pngyu\\pngquant\\pngquant.exe" + ' ' + file + ' --force --ext .png --speed 3 --nofs'
    console.log(string);
    try {
        child.exec(string);
    } catch {

    }
}

let checkFileSize = function (file, size = 5) {
    fs.stat(file, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        if (stats.size / 1024 > size) {
            console.log(`${file}: ${stats.size} bytes`);
            excuteCompress(file);
        }
    });

}

let compress = function (dir) {
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        let file = path.join(dir, files[i]);
        if (file.endsWith(".png")/*  || file.endsWith(".jpg") */) {
            // excuteCompress(file);
            let fileState = fs.lstatSync(file);
            if (fileState.size / 1024 > 5) {
                console.log(`${file}: ${fileState.size} bytes`);
                excuteCompress(file);
            }
        } else {
            let fileState = fs.lstatSync(file);
            if (fileState.isDirectory()) {
                compress(file);
            }
        }
    }
}

let run = function (os_parm = {}) {
    let dirs = ["../build/web-mobile"];
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });
    console.log(dirs);
    dirs.forEach((dir) => {
        compress(dir)
    });
}

module.exports = {
    run
}