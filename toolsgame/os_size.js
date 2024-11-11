
let fs = require('fs-extra');
let path = require('path');
let sp = require('./core/scanPath');
const { file } = require('jszip');
process.on('exit', function (code) { console.log(code) });
//========================================================================================

let checkSize = function (dir, size) {
    let files = fs.readdirSync(dir);
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
        let file = path.join(dir, files[i]);
        if (file.endsWith(".png") || file.endsWith(".jpg")) {
            checkFileSize(file, size);
        } else {
            let fileState = fs.lstatSync(file);
            if (fileState.isDirectory()) {
                checkSize(file, size);
            }
        }
    }
}

let checkFileSize = function (file, size) {
    fs.stat(file, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        if (stats.size / 1024 > size) {
            console.log(`${file}: ${stats.size} bytes`);
            let dst = file.slice().replace('assets', 'out\\assets')
            fs.cpSync(file, dst, { recursive: true }, (err) => {
                if (err) {
                    console.error(err);
                }
            })
        }
    });

}

let run = function (os_parm = {}) {
    let dirs = ["../assets/res", "../assets/res-static", "../assets/resources"];
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });
    // console.log(dirs);
    let size = 100;
    dirs.forEach((dir) => {
        checkSize(dir, size)
    });
}

module.exports = {
    run
}