let fs = require('fs');
let path = require('path');
let tools = require('./core/tools');
let sp = require('./core/scanPath');
let assets_helper = require('./assets_helper');
let ProgressBar = require('./core/progress-bar');
//========================================================================================
let progress_bar = new ProgressBar("> ", 50);
let target, clean_type, fail_list;
let error_msg = function (key) {
    switch (key) {
        case "invalid":
            return "> 参数异常，请使用 node asset --h 阅读规范";
        case "target-none":
            return "> 构建目录不存在，请检查路径";
        default:
            break;
    }
    return "unknown error";
}
let check_pack_dir = function () {
    let dst = path.join(__dirname, '../../build-pack/res/');
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        tools.mkdirsSync(dst);
    }

    dst = path.join(__dirname, '../../build/' + target);
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        throw error_msg("target-none");
    }
}
//========================================================================================
let clean_file_async = function (deal_list, max) {
    progress_bar.render({ completed: (max - deal_list.length), total: max });
    if (deal_list.length <= 0) {
        console.log("\n> 处理结束>>>>>>");
        if (fail_list.length > 0) {
            //console.log("> 失败文件 => \n", fail_list);
        }
        return;
    }
    let asset = deal_list.shift();

    fs.access(asset, function (err0) {
        if (err0) {
            fail_list.push(asset);
        }
        !err0 ? fs.unlink(asset, (err) => {
            err && err != '' && console.log('ERROR:', err)
            clean_file_async(deal_list, max);
        }) : clean_file_async(deal_list, max);

    });

}
let clean_res = function (os_parm) {
    fail_list = [];
    let dist = path.join(__dirname, '../../build/' + target + '/res/raw-assets/')
    let pack = path.join(__dirname, '../../build-pack/res/')
    console.log('> 正在扫描文件>>>>>>');
    let deal_list = assets_helper.scan(dist, pack, "", '.png;.jpg');
    console.log('> 处理文件数量：', deal_list.length);
    console.log("> 正在清理文件>>>>>>");
    if (deal_list.length > 0) {
        let list = [];
        if (clean_type == 'file') {
            deal_list.forEach(element => {
                element.file && list.push(element.file)
            })
        } else if (clean_type == 'pack') {
            let assetPack = [];
            deal_list.forEach(element => {
                element.pack && assetPack.push(element.pack)
            })
            console.log(assetPack.length)
            sp.scan(pack, '.png;.jpg', (file, name) => {
                if (assetPack.indexOf(file) == -1) {
                    list.push(file);
                }
            });
        }
        console.log(list.length)
        clean_file_async(list, list.length);
    } else {
        console.log("> 清理文件结束>>>>>>");
    }
}
//========================================================================================

let run = function (os_parm) {
    target = os_parm['--t'];
    if (!target) {
        throw error_msg('invalid');
    }
    if (os_parm['--pack']) {
        clean_type = 'pack';
    } else {
        clean_type = 'file';
    }
    check_pack_dir();
    clean_res(os_parm);
}
module.exports = {
    run
}