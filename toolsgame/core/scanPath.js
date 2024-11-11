var fs = require('fs');
var path = require('path');
let sp = module.exports = {
    scan: function (pp, suffix, cb) {
        let myFiles = fs.readdirSync(pp);
        for (let i in myFiles) {
            let name = myFiles[i];
            let newPp = path.join(pp, name);
            let stat = fs.lstatSync(newPp);

            if (stat.isDirectory()) {
                sp.scan(newPp, suffix, cb);
            } else {
                if (!suffix || suffix == '' || suffix.split(";").includes(path.extname(newPp))) cb(newPp, name);
            }
        }
    },
};