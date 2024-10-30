/*
 * @Description: 事件枚举
 * @Author: zy
 * @Date: 2021-03-31 15:27:22
 * @Reference: 
 */

/** 
 * Name = AppEvent
 * URL = db://assets/config/AppEvent.ts
 * Time = Sat Apr 02 2022 17:47:24 GMT+0800 (中国标准时间)
 * Author = aby
 * 事件定义
 */
//全局唯一
let AppEventID = 0

const key = "CC"
/** 获取一个新的事件ID */
export const GetAppEventID = function (): string {
    AppEventID = AppEventID + 1
    return (key + "_" + AppEventID.toString())
}

/** 系统事件配置 */
export class AppEvent {
    /** ** --------系统事件------------ */
    /** 前后台事件 */
    static SYS_SHOW_OR_HIDE = "SysEvent_ShowOrHide";
    /** 网络连接中 */
    static SYS_NET_READY = "SysEvent_NetReady";
    /** 网络连接失败 */
    static SYS_NET_CONNECT_FAILED = "SysEvent_NetConnectFail";
    /** 网络已关闭 */
    static SYS_NET_CLOSED = "SysEvent_NetClosed";
    /** 网络延迟更新 */
    static SYS_NET_DELAY_UPDATE = "SysEvent_NetDelayUpdate";
    /** 语言切换事件 */
    static SYS_LANGUAGE_CHANGE = "SysEvent_LanguageChange";

    /** 浮动土司 */
    static FLOAT_TIPS = "SysEvent_FloatTips";

    static GLOBAL_MSG_STATE = "SysEvent_GlobalMsgState";
    static SHOW_RULE = GetAppEventID();

    /**------------Socket---------- */
    static BTMS_VISIBLE = "SysEvent_BtmsVisible";

    static SYS_ORIENTATION = 'sys_orientaion'
}