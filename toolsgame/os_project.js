
let fs = require('fs-extra');
let path = require('path');
let sp = require('./core/scanPath');
const { file } = require('jszip');
process.on('exit', function (code) { console.log(code) });
const filter =
    ['framework',
        'net',
        'sdk',
        'game\\common',
        'game\\manager\\account',
        'game\\manager\\game',
        'game\\manager\\subGameManager',
        'game\\manager\\user',
        'shared',
        'game-scene',
        'guide',
        'plug-in',
        'LocalizedLabelPlus',
        'relCommon',
        'spine\\loading'
    ];
const fFilters =
    [
        'Guide',
        'GameCommonUI',
        'AlertDialog',
        'pfLoading',
        // 'pfRedPoint',
        // 'pfNumRedPoint',
        'gmgr',
        'IManager',
        'game\\manager\\interface',
        'AlertStackHelper',
        'pfTipsPanel',
        'Montserrat',
    ];
//========================================================================================
let checkFilter = function (dir) {
    for (let i = 0; i < filter.length; i++) {
        let temp = `${dir}`;
        if (temp.includes(filter[i])) {
            return true;
        }
    }
    return false;
}
let checkFileFilter = function (file) {
    for (let i = 0; i < fFilters.length; i++) {
        if (file.includes(fFilters[i])) {
            return true;
        }
    }
    return false;
}
let doCp = function (dir) {
    // console.log(dir);
    let isRm = true;
    let files = fs.readdirSync(dir);
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
        let file = path.join(dir, files[i]);
        // console.log(file);
        // if (filter.includes(files[i])) {
        //     isRm = false;
        //     continue;
        // }
        if (checkFilter(file)) {
            isRm = false;
            continue;
        }
        let fileState = fs.lstatSync(file);
        if (fileState.isDirectory()) {
            if (!doCp(file)) {
                isRm = false;
                continue;
            }
        } else {
            let dst = file.slice().replace('assets', 'hall\\assets')
            // console.log(file);
            if (checkFileFilter(file)) {
                isRm = false;
                continue;
            }
            fs.cpSync(file, dst, { recursive: true })
            fs.unlinkSync(file);
        }
    }
    if (isRm) {
        // console.log(dir);
        fs.removeSync(dir);
    }
    return isRm;
}

let run = function (os_parm = {}) {
    let project = os_parm['--p'];
    if (project == 'hall') {
        fs.copySync('hall\\assets', 'assets', { overwrite: true })
        fs.emptyDir('hall')
    } else if (project = 'game') {
        let dirs = ["../assets"];
        dirs = dirs.map((dir) => {
            return path.join(__dirname, dir);
        });
        dirs.forEach((dir) => {
            doCp(dir);
        });
    }
}
module.exports = {
    run
}