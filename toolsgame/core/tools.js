var path = require('path');
var fs = require('fs');
var md5_func = require('md5');
const readline = require('readline');

function mkdirsSync(dirpath, mode) {
    try {
        if (!fs.existsSync(dirpath)) {
            let pathtmp;
            dirpath.split(/[/\\]/).forEach(function (dirname) {  //这里指用/ 或\ 都可以分隔目录  如  linux的/usr/local/services   和windows的 d:\temp\aaaa
                if (pathtmp) {
                    pathtmp = path.join(pathtmp, dirname);
                }
                else {
                    pathtmp = dirname;
                }
                if (!fs.existsSync(pathtmp)) {
                    fs.mkdirSync(pathtmp, mode);
                }
            });
        }
        return true;
    } catch (e) {
        console.error("create director fail! path=" + dirpath + " errorMsg:" + e);
        return false;
    }
}
function rmdirsSync(dirpath) {
    try {
        let files = [];
        if (fs.existsSync(dirpath)) {
            files = fs.readdirSync(dirpath);
            files.forEach(function (file, index) {
                let curPath = dirpath + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    if (!rmdirsSync(curPath)) return false;
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(dirpath);
        }
    } catch (e) {
        console.error("remove director fail! path=" + dirpath + " errorMsg:" + e);
        return false;
    }
    return true;
};

function deleteImage(imagePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(imagePath, (err) => {
            if (err) {
                reject(err);
                return;
            }
        });
    });
}

var copy = function (src, dst) {
    let paths = fs.readdirSync(src); //同步读取当前目录
    paths.forEach(function (path) {
        var _src = src + '/' + path;
        var _dst = dst + '/' + path;
        var stat = fs.statSync(_src);
        if (stat && stat.isFile()) {
            fs.copyFileSync(_src, _dst);
        } else {
            copyDirectory(_src, _dst);
        }
    });
}
var copyFile = function (src, dst) {
    let dirPath = path.dirname(dst);
    mkdirsSync(dirPath);
    fs.copyFileSync(src, dst);

}
var delEmptyDir = function (dirpath) {
    let files = [];
    if (fs.existsSync(dirpath)) {
        files = fs.readdirSync(dirpath);
        files.forEach(function (file, index) {
            let curPath = dirpath + "\\" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                delEmptyDir(curPath);
            }
        });
        try {
            fs.rmdirSync(dirpath);
        } catch (e) {
            console.error("remove empty director fail! path=" + dirpath + " errorMsg:" + e);
            return false;
        }
    }
    return true;
};

var copyFilter = function (src, dst, filter = '.png,.jpg') {
    let paths = fs.readdirSync(src); //同步读取当前目录
    let arr = filter.split(',');
    paths.forEach(function (path) {
        var _src = src + '\\' + path;
        var _dst = dst + '\\' + path;
        var stat = fs.statSync(_src);
        if (stat && stat.isFile()) {
            for (let i = 0; i < arr.length; i++) {
                let b = confirmEnding(_src, arr[i]);
                if (b) {
                    fs.copyFileSync(_src, _dst);
                    break;
                }
            }
        } else {
            copyDirectoryFilter(_src, _dst, filter);
        }
    });
}

var confirmEnding = function (str, target) {
    let strLen = str.length;
    let targetLen = target.length;
    if (str.substring(strLen - targetLen) == target) {
        return true;
    }
    return false;
}

var copyDirectoryFilter = function (src, dst, filter) {
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
        copyFilter(src, dst, filter);
    } catch (err) {
        mkdirsSync(dst);
        copyFilter(src, dst);
    }

};

var copyDirectory = function (src, dst) {
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
        copy(src, dst);
    } catch (err) {
        mkdirsSync(dst);
        copy(src, dst);
    }

};

function createInput(msg) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(function (resolve, reject) {
        rl.question(`请输入${msg}: `, data => {
            rl.close()
            resolve(data)
        })
    })
}

var input = function (msg) {
    return createInput(msg);
}

var fileMd5 = function (file) {
    let contents = fs.readFileSync(file);
    return md5_func(new Uint8Array(contents));
}

module.exports = {
    mkdirsSync,
    rmdirsSync,
    deleteImage,
    copy,
    copyFile,
    copyDirectory,
    input,
    copyFilter,
    copyDirectoryFilter,
    delEmptyDir,
    fileMd5
};