import { HTML5 } from "cc/env";

/*
 * @Description: 调试环境
 * @Author: zy
 * @Date: 2021-04-01 16:23:41
 * @Reference:
 */
export const _config_: Record<string, any> = {
    report_2: "https://hdsf8pm230.dpeuk328fvdjkweizm29fn0k.org/collect_data",        //上报地址(动态)
    report_3: "https://prod-collection.topbigdata.com/collect_data",                //上报地址(动态)
    io: 2, // 1 内网  2 外网测试  3 外网正式  4 预发布
    version: '1.1.1',
    fps: false,                                 //是否显示帧率
    lanuage: 'en',
    timezone: "Asia/Kolkata",                  //时区：印度-加尔各答
}

if (HTML5 && window.location && window.location.href) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "io") {
            _config_.io = pair[1];
        }
    }
}