import { IBundleOption } from "../../../framework/asset/AssetsLoader";

/** 游戏厂商 */
export enum SubGameProducer {
    c1 = 'c1',
    c2 = 'c2',
}
/** 横竖屏 */
export enum SubGameOrientation {
    /** 竖 */
    portrail = 0,
    /** 横 */
    landScape = 1,
    /** 自动 */
    auto = 2,
}
/** 二级游戏详情 */
export type SubGameDetail = {
    /** 游戏ID */
    gameID: number,
    /** 渠道商 */
    producer: string,
    /** 包配置参数 */
    bundleConf: IBundleOption,
    /** 附属包配置,预先加载 */
    subBundleConf?: Array<IBundleOption>,
    /** 横竖屏 */
    orientation?: SubGameOrientation,
    /** 错误的回调 */
    errCallback?: Function,
    /** 完成的回调 */
    finishCallback?: Function,
}

/** 自定义事件 */
export const SubGameEventGame = {
    /** 即将打开游戏 */
    prepare: 'SubGameEvent_prepare',
    /** 打开游戏 */
    open: 'SubGameEvent_open',
    /** 重连打开游戏 */
    reconnect: 'SubGameEvent_reconnect',
    /** 退出游戏 */
    close: 'SubGameEvent_close',
    /**start*/
    start: 'SubGameEvent_start',
}

