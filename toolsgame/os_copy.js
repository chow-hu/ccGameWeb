
let fs = require('fs');
let path = require('path');
let tools = require('./core/tools');
let relative = require('./relative');
let assets_helper = require('./assets_helper');
let ProgressBar = require('./core/progress-bar');
//========================================================================================
let progress_bar = new ProgressBar("> ", 50);
let target, fail_list;
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
let copy_file_async = function (deal_list, max) {
    progress_bar.render({ completed: (max - deal_list.length), total: max });
    if (deal_list.length <= 0) {
        console.log("\n> 处理结束>>>>>>");
        if (fail_list.length > 0) {
            console.log("> 失败文件 => \n", fail_list);
        }
        return;
    }
    let asset = deal_list.shift();
    fs.access(asset.pack, function (err0) {
        if (err0) {
            fail_list.push(item.pack);
        }
        !err0 ? fs.copyFile(asset.pack, asset.file, (err) => {
            err && err != '' && console.log('ERROR:', err)
            copy_file_async(deal_list, max);
        }) : copy_file_async(deal_list, max);
    });
}

let copy_res = function (os_parm) {
    let filterlist = relative.data('copyfilter');
    let filter = filterlist.join(';') + ';';
    let dist = path.join(__dirname, '../../build/' + target + '/res/raw-assets/')
    let pack = path.join(__dirname, '../../build-pack/res/')
    console.log('> 正在扫描文件>>>>>>');
    let deal_list = assets_helper.scan(dist, pack, filter, '.png;.jpg');
    console.log('> 处理文件数量：', deal_list.length);
    console.log("> 正在应用文件>>>>>>");
    copy_file_async(deal_list, deal_list.length);
}
//========================================================================================
let run = function (os_parm) {
    target = os_parm['--t'];
    if (!target) {
        throw error_msg('invalid');
    }
    fail_list = [];
    check_pack_dir();
    copy_res(os_parm);
}
module.exports = {
    run
}