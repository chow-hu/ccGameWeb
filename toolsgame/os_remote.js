
let fs = require('fs-extra');
let path = require('path');
let sp = require('./core/scanPath');
const { file } = require('jszip');
process.on('exit', function (code) { console.log(code) });
//========================================================================================
let getVersion = function () {
    let manifestPath = path.join(__dirname, '../build/' + platorm + '/project.manifest');
    let manifestData = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
    let manifestObj = JSON.parse(manifestData);
    return manifestObj.version;
}

let doRemote = function (dir, name) {
    let path = config[getUrlByName(name)].url;
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        let file = files[i];//path.join(dir, files[i]);
        if (file.endsWith('json') && file !== 'cc.config.json') {
            let temps = file.split('.');
            let md5 = temps[temps.length - 2];
            let dst = `${path}\\${name}\\${mode}\\${md5}\\${name}\\`;
            console.log(dst);
            fs.copySync(dir, dst, { overwrite: true })
            break;
        }
    }
}

let mode = '';
let platorm = '';

const config = {
    kbp: { url: '' },
    ab: { url: '' },
}

const abGames = ['abActivity', 'abAndarBahar', 'abCrash', 'abJackPot', 'abJet', 'abUpDown'];

let getUrlByName = function (name) {
    if (abGames.includes(name)) {
        return 'ab';
    }
    return 'kbp';
}

let run = function (os_parm = {}) {
    platorm = os_parm['--p'] || 'android';
    mode = os_parm['--m'] || 'release';
    let dirs = [`../build/${platorm}/remote`];
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });
    console.log(dirs);
    for (let key in config) {
        let dst;
        if (key == 'ab') {
            dst = path.join(__dirname, `../ccgamePack/${key}_pack/${getVersion()}`);//${platorm}/
        } else {
            dst = path.join(__dirname, `../ccgamePack/${key}_pack/${getVersion()}`);//${platorm}/
            // dst = path.join(__dirname, `../ccgamePack/ab_pack/${key}`);//${platorm}/
        }
        config[key].url = dst;
        console.log(dst);
        fs.emptydirSync(dst);
    }

    dirs.forEach((dir) => {
        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = path.join(dir, files[i]);
            let fileState = fs.lstatSync(file);
            if (fileState.isDirectory()) {
                doRemote(file, files[i]);
            }
        }
    })
}

module.exports = {
    run
}