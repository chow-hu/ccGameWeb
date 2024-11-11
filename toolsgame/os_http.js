var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
//========================================================================================
let target;
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
    let dst = path.join(__dirname, '../../build/' + target);
    try {
        fs.accessSync(dst, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        throw error_msg("target-none");
    }
}
//========================================================================================
let open_http = function (params) {
    http.createServer(function (req, res) {
        var pathname = path.join(__dirname, '../../build/' + target + '/') + url.parse(req.url).pathname;
        if (path.extname(pathname) == "") {
            pathname += "/";
        }
        if (pathname.charAt(pathname.length - 1) == "/") {
            pathname += "index.html"; // 入口文件，此处默认index.html
        }
        fs.exists(pathname, function (exists) {
            if (exists) {
                switch (path.extname(pathname)) {
                    case ".html":
                        res.writeHead(200, { "Content-Type": "text/html" });
                        break;
                    case ".js":
                        res.writeHead(200, { "Content-Type": "text/javascript" });
                        break;
                    case ".css":
                        res.writeHead(200, { "Content-Type": "text/css" });
                        break;
                    case ".gif":
                        res.writeHead(200, { "Content-Type": "image/gif" });
                        break;
                    case ".jpg":
                        res.writeHead(200, { "Content-Type": "image/jpeg" });
                        break;
                    case ".png":
                        res.writeHead(200, { "Content-Type": "image/png" });
                        break;
                    default:
                        res.writeHead(200, { "Content-Type": "application/octet-stream" });
                }

                // res可以自己添加信息来简单交互 比如可以修改点header信息 或者修改返回的资源数据
                fs.readFile(pathname, function (err, data) {
                    res.end(data);
                });
            }
            else {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Not Found</h1>");
            }
        });
    }).listen(8085); // 服务器端口
}
//========================================================================================

let run = function (os_parm) {
    target = os_parm['--t'];
    if (!target) {
        throw error_msg('invalid');
    }
    check_pack_dir();
    console.log('> http server listening');
    console.log('> port 8085');
    open_http();
}
module.exports = {
    run
}