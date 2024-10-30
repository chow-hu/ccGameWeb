/*
 * @Description: 正式配置
 * @Author: zy
 * @Date: 2021-04-01 16:17:40
 * @Reference: 
 */
export const _config_: Record<string, any> = {
    host_1: "http://192.168.2.60:8784",        // php内网
    host_2: "https://acc.y1one.net/api",       // php外网测试服
    host_3: "https://acc.y1online.net/api",    // php外网正式服
    host_4: "https://pre-admin41dagu239fd.freey1.com/account_api", // php预发布服务器
    report: "http://192.168.2.60:8785",        //上报地址(动态)
    chat: "http://192.168.2.60:8784/livechat.html", //聊天客服(动态)
    io: 2, // 1 内网  2 外网测试  3 外网正式  4 预发布
    version: '1.1.0',
    astver: '0.0.1',
    ip: '',
    use_abpackage: true,                       //是否使用ab包
    fps: false,                                 //是否显示帧率
}