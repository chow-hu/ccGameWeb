let fs = require('fs');
let path = require('path');
let ext = {};

ext.load = function (json_path) {
    let stream = fs.readFileSync(json_path || path.join(__dirname, '/relative.json'));
    ext._data = JSON.parse(stream.toString());
}
ext.data = function (link, def) {
    let dic = link.split('.');
    let index = 0;
    let value = this._data
    let deepLink = function () {
        let key = dic[index];
        value = value[key];
        if (typeof value === 'undefined') {

            return def || null;
        }
        index++;

        if (index >= dic.length) {
            return value;
        }
        return deepLink(value);
    }
    return deepLink();
}

module.exports = ext