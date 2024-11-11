let fs = require('fs');
let path = require('path');

let doPriority = function (path) {
    let content = fs.readFileSync(path, { encoding: 'utf-8' });
    if (content.search(/"isBundle": true,/gi) != -1) {
        let temp;
        if (content.search(/"priority": \d/gi) != -1) {
            temp = content.replace(/"priority": \d/gi, `"priority": ${priority}`);
        } else {
            temp = content.replace(/"isBundle": true,/gi, `"isBundle": true,\n    "priority": ${priority},`);
        }
        console.log(path);
        fs.writeFileSync(path, temp);
    }
}

let doMeta = function (path, meta) {
    let content = fs.readFileSync(path, { encoding: 'utf-8' });
    if (content.search(/"isBundle": true/gi) != -1) {
        // let str = JSON.parse(content);
        // str.userData.bundleConfigID = meta;
        // fs.writeFileSync(path, JSON.stringify(str, undefined, 4));
        if (content.search(/"bundleConfigID": \s*"([^"]+)"/gi) != -1) {
            temp = content.replace(/"bundleConfigID": \s*"([^"]+)"/gi, `"bundleConfigID": "${meta}"`);
            fs.writeFileSync(path, temp);
        } else {
            let str = JSON.parse(content);
            str.userData.bundleConfigID = meta;
            fs.writeFileSync(path, JSON.stringify(str, undefined, 4));
        }
        console.log(path);
    }
}

let doSearch = function (dir, meta) {
    try {
        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = path.join(dir, files[i]);
            if (file.endsWith('.meta') && files[i] != 'resources.meta') {
                // console.log(file);
                if (meta) {
                    doMeta(file, meta);
                } else {
                    doPriority(file);
                }
            }
        }
    } catch {
        console.log(`${dir} not exist`);
    }
}

let priority;

let run = function (os_parm) {
    let meta = os_parm["--m"];
    priority = os_parm["--p"] || 2;
    let dirs = [];
    if (meta) {
        dirs = dirs.concat(['../assets/kbpGames/']);
    } else {
        dirs = dirs.concat(["../assets/", "../assets/subGames/"])
    }
    dirs = dirs.map((dir) => {
        return path.join(__dirname, dir);
    });
    // console.log(dirs);

    dirs.forEach((dir) => {
        doSearch(dir, meta);
    });
}

module.exports = {
    run
}