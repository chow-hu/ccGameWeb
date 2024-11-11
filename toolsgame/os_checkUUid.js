
let fs = require('fs-extra');
let path = require('path');
let sp = require('./core/scanPath');
let ProgressBar = require('./core/progress-bar');
process.on('exit', function (code) { console.log(code) });
let deal_asset_stay = false;
let imgFilter = ['font', 'spine', 'particle', 'shader'];
//========================================================================================


let checkAll = function (prefix, endsfix) {

    let uids = {};
    let func = (filePath, _endfix) => {
        sp.scan(filePath, `.${_endfix}`, (newPp, name) => {
            if (endsfix === 'png' || endsfix === 'jpg') {
                if (imgFilter.find(type => newPp.includes(type))) {
                    return;
                }
            }
            let pngMeta = fs.readJsonSync(newPp + '.meta');
            uids[pngMeta.uuid] = { newPp, name };
        });
    }
    if (endsfix === 'png' || endsfix === 'jpg') {//图片
        func(path.join(__dirname, '../assets/res'), endsfix);
    }
    else if (endsfix === 'skel') {//spine
        func(path.join(__dirname, '../assets/res/spine'), 'skel');
        func(path.join(__dirname, '../assets/res/spine'), 'json');
    } else if (endsfix === 'fnt') {//fnt
        func(path.join(__dirname, '../assets/res/font'), endsfix);
    }
    //查找预制体和场景引用
    const uuisList = Object.keys(uids);
    const allFilePath = path.join(__dirname, '../assets');
    sp.scan(allFilePath, '.mtl;.prefab;.scene', (newPp, name) => {
        let prefab = fs.readFileSync(newPp, { encoding: 'utf-8' });
        for (let index = uuisList.length - 1; index > -1; index--) {
            const onUuid = uuisList[index];
            if (prefab.indexOf(onUuid) > -1) {
                uuisList.splice(index, 1);
                delete uids[onUuid];
            }
        }
    });

    const len = Object.keys(uids).length;
    if (len > 0) {
        const date = new Date();
        const writeFilePath = path.join(__dirname, `../temp/${date.toLocaleDateString().split('/').join('_')}_${date.getHours()}_${date.getMinutes()}.json`)

        if (prefix) {
            let str = '';
            for (const key in uids) {
                const element = uids[key];
                if (!element.name.includes(prefix) && delete uids[key]) {

                } else {
                    str += uids[key].newPp + '\n';
                }
            }
            str += `【数量：${Object.keys(uids).length}】`
            fs.writeFileSync(writeFilePath, str);
            console.log('===> 未找引用数量：', uids);
            console.log(`===> 未找引用前缀为${prefix}数量：`, Object.keys(uids).length, `或也可前往${writeFilePath}查阅对应修改`);
        } else {
            fs.writeFileSync(writeFilePath, JSON.stringify(uids));
            console.log('===> 未找引用数量：', uids);
            console.log('===> 未找引用数量：', len, `或也可前往${writeFilePath}查阅对应修改`);
        }

        process.stdout.write("......\n");
        process.stdout.write("需要继续执行删除吗(y/n)？");
        deal_asset_stay = true;
        process.stdin.on('data', (input) => {
            if (!deal_asset_stay) {
                return;
            }
            deal_asset_stay = false;
            input = input.toString().trim();
            if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) {
                process.stdin.emit('end');
                process.nextTick(() => { deal_asset(uids, endsfix) });
            } else if (['N', 'n', 'NO', 'no'].indexOf(input) > -1) process.exit(0);
        })
    }
}

let deal_asset = function (uids, endsfix) {//{'uuid':{"newPp":"F:\\XiuZhen\\shanHai\\xxc\\assets\\res\\spine\\activityXRSC\\scanniu.skel","name":"scanniu.skel"}}
    let arr = [];
    let failArr = [];
    for (const key in uids) {
        if (Object.hasOwnProperty.call(uids, key)) {
            const element = uids[key];
            let delArr = [];
            delArr.push(element.newPp);
            delArr.push(element.newPp + '.meta');
            //删除目标记录
            if (fs.existsSync(element.newPp)) {
                arr.push(element.newPp)
                //删除当前目录下同命名文件
                const name = element.name.split('.')[0];
                if (element.name.indexOf('skel') > -1) {
                    let resRootArr = element.newPp.split(path.sep);
                    resRootArr.pop();
                    let resRoot = resRootArr.join(path.sep);
                    delArr.push(resRoot + path.sep + name + '.png');
                    delArr.push(resRoot + path.sep + name + '.png.meta');
                    delArr.push(resRoot + path.sep + name + '.atlas');
                    delArr.push(resRoot + path.sep + name + '.atlas.meta');
                }
                else if (element.name.indexOf('fnt') > -1) {
                    let resRootArr = element.newPp.split(path.sep);
                    resRootArr.pop();
                    let resRoot = resRootArr.join(path.sep);
                    delArr.push(resRoot + path.sep + name + '.png');
                    delArr.push(resRoot + path.sep + name + '.png.meta');
                }

                for (let index = 0; index < delArr.length; index++) {
                    const delPath = delArr[index];
                    if (fs.existsSync(delPath)) {
                        fs.rmSync(delPath);
                    } else {
                        failArr.push(delPath);
                    }
                }
            }
        }
    }
    // let str = arr.join('\n');
    // console.log(str)
    // fs.writeFileSync(`F:\\XiuZhen\\shanHai\\nodeJs_main\\delforLB.txt`, str)
    console.log('删除长度:', arr.length);
    failArr.length > 0 && console.log('请检查不存在文件：', failArr);
}

let run = function (os_parm = {}) {
    //测试
    // console.log(tools.compressUuid('ae77bfb0-3c37-4720-bffb-7a901dc6a721'));
    //end
    try {
        let endsfix = os_parm['--endsfix'];
        endsfix = endsfix || 'png';
        let prefix = os_parm['--prefix'];
        checkAll(prefix, endsfix);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    run
}