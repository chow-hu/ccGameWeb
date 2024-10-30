import { GetAppEventID } from "../../common/AppEvent";


/** 自定义事件 */
export const ReportEvent = {
    /** 客户端点击上报 */
    REPORT_CLIENT_CLICK: GetAppEventID(),

    /** 客户端日志上报 */
    REPORT_CLIENT_LOG: GetAppEventID(),
}
/** 上报类型 */
export const ReportType = {
    /** 点击上报 */
    Click: 1,
    /** 错误日志 */
    Error: 2
}
/** 点击上报的数据参数 */
export interface IReportClick {
    /** 事件ID */
    eventID: any,
    /** 事件参数 */
    body?: any,
    /** 上报时间(不需要主动加 提交时会带上) */
    time?: number,
}

/** 错误上报的数据参数 */
export interface IReportError {
    /** 事件参数 */
    body: any,
    /** 上报时间 */
    time: number,
}

/** 上报的错误 */
export interface IError {
    message: string,
    stack: Array<string>,
}