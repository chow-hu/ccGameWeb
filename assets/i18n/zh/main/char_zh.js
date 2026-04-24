/*
 * @Description: 文字ID中文映射
 * @Author: zy
 * @Date: 2021-02-26 14:50:08
 * @Reference:
 */

const mapping = {
    //-------------------------------net
    NET_RECONNECT_FAILED: "网络连接失败，请重试。",
    NET_DISCONNECT: "与服务器断开连接。。。",
    NET_UNSTABLE: "网络不稳定，请稍后重试。",
    NET_UNSTABLE_TO_CHECK: "网络不稳定，请检查您的网络状态。",
    NET_NONE_SERVER: "找不到服务器，请稍后重试。",
    NET_INVALID_PARAM: "参数错误",
    //-------------------------------login
    LOGIN_SDK_FAILED: '账号或密码不正确。',
    LOGIN_INVALID_PARAM: '账号异常，请联系客服处理。',
}

globalThis["char_zh"] = { ...globalThis["char_zh"], ...mapping };
