let fs = require('fs');
let path = require('path');
let md5_func = require('md5');
let sp = require('./core/scanPath');
//============================================================================
let file_md5 = function (file) {
    let contents = fs.readFileSync(file);
    return md5_func(new Uint8Array(contents));
}
let scan = function (target, pack, filter, types) {
    let dist_assets = [];
    sp.scan(target, types, (file, name) => {
        if (filter && filter.indexOf(name.split('.')[0] + ';') != -1) {
            return;
        }
        let md5 = file_md5(file);
        dist_assets.push({ file, md5 });
    });
    let packed_assets = {};
    sp.scan(pack, '.png;.jpg', (file, name) => packed_assets[name] = file);
    let deal_list = [];
    for (let i = 0; i < dist_assets.length; i++) {
        let asset = dist_assets[i];
        let ext_name = path.extname(asset.file);
        let md5file = asset.md5 + ext_name;
        let pack = packed_assets[md5file];

        if (asset.md5 && pack) {
            deal_list.push({ file: asset.file, pack });
        }
    }
    return deal_list;
}

module.exports = {
    scan
}