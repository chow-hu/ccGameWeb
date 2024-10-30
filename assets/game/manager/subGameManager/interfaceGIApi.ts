import { SpriteFrame } from "cc";
export interface GiAudioControl {
    /** 总开关 */
    allAllow?: boolean,
    /** 音乐总开关 */
    musicAllow?: boolean,
    /** 音效总开关 */
    effectAllow?: boolean,
    /** 音乐大小 */
    musicVolume?: number,
    /** 音效大小 */
    effectVolume?: number,
}
/** 点击上报 */
export interface GiReportClick {
    /** 事件ID */
    eventID: any,
    /** 事件参数 */
    body?: any,
    /** 上报时间(不需要主动加 提交时会带上) */
    time?: number,
}

/** 游戏包下载监听传参 */
export interface GiGameDownLoadCb {
    /** 监听对象 */
    target: any,
    /** 下载进度 */
    progress?: (finished: number, total: number, percent: number) => void,
    /** 完成事件 */
    complete?: (err: Error | null | string, data: any) => void,
    /** 错误回调 */
    error?: Function,
}

/**
 * Net：注册监听到game的事件
 * 通过 game.on game.emit 收发
 */
export enum GiGameEvent {
    /** 重连进房 */
    NET_RECONNECT_ROOM = "gievent-net-reconnect-room",
    /** 网络断开 */
    NET_CLOSE = "gievent-net-close",
    /** 消息接收 */
    NET_MESSAGE_RECEIVE = "gievent-net-receive",
    /** 消息发送 */
    NET_MESSAGE_SEND = "gievent-net-send",
    /** 资产变更推送 参数为变更数额(有正负) */
    GAME_PUSH_GETMONEY = "gievent-platform-getMoney",
}

/**
 * game.emit(GiGameEvent.NET_MESSAGE_SEND) 发送的数据格式
 */
export interface GiNetGameSend {
    /** 关键命令字 */
    cmd: number,
    /** dsttype */
    dsttype: number,
    /** dstid */
    dstid: number,
    /** 是否加密:1加密(默认) */
    bitflag?: number
    /** 纯数据(已加密) */
    data: Uint8Array,
}
/**
 * game.on(GiGameEvent.NET_MESSAGE_RECEIVE) 接收的数据格式
 */
export interface GiNetGameReceive {
    /** 关键命令字 */
    cmd: number,
    /** dsttype */
    dsttype: number,
    /** dstid */
    dstid: number,
    /** 是否加密:1加密(默认) */
    bitflag?: number
    /** 纯数据(未解密) */
    data: Uint8Array,
}

/**
 * 重连数据 也可通过 game.on(GiGameEvent.NET_RECONNECT_ROOM) 接收
 */
export interface GiNetGameReconnData {
    /** 游戏id */
    game_id: number;
    /** 游戏服务 */
    game_srvtype: number;
    /** 游戏svid */
    game_svid: number;
    /** 游戏tid */
    game_tid: number;
    /** 游戏平台 */
    game_plat: string;
    /** 横竖屏 */
    screen_mode: number;
    /** 自研类型 c1 c2 */
    y1studio: string;
}

export interface GiApi {

    /**
     * 注册游戏Net转发事件
     * 注册成功的命令可以通过 GiGameEvent.NET_MESSAGE_RECEIVE、GiGameEvent.NET_MESSAGE_SEND发送和接收
     * @param cmdList cmd命令数组 
     * @returns 
     */
    regNetCmd: (cmdList: Array<number>) => void;

    /** 游戏内通过平台socket发送的数据(与 game.emit(GiGameEvent.NET_MESSAGE_SEND,data) 一致) */
    sendNetData: (param: GiNetGameSend) => void;

    /** 根据ID获取默认的头像SpriteFrame */
    getDefaultHeadSpriteFrame: (avatar_id: number | string) => SpriteFrame | null;

    /**
     * 获取登录Token
     * @returns : string | null
     */
    getLoginToken: () => string | null;

    /**
     * 获取游戏ID
     * @returns : number 为0则是不存在
     */
    getGameID: () => number;

    /**
     * 获取重连数据
     * @returns GiNetGameReconnData | null
     */
    getReconnData: () => GiNetGameReconnData | null;

    /** 清空重连数据 */
    cleanReconnData: () => void;
    /**
     * 设置音乐配置
     * @param GiAudioControl 对象 
     */
    setMusicConf: (control: GiAudioControl) => void;

    /**
     * 获取音乐配置
     * @return GiAudioControl 对象
    */
    getMusicConf: () => GiAudioControl;

    /**
     * 发送跳转
     * @param param 跳转参数 详见:https://docs.google.com/spreadsheets/d/1jluCzVyVXBvU8ZtTyvzp8kBES9vpJy7IrfOWLYjSAdg/edit?gid=0#gid=0
     * @param jumpCall 跳转回调
     * @returns 
     */
    jumpTo: (param, jumpCall) => void;


    /**
     * 打开游戏
     * @param gameID 游戏ID
     * @param producer 厂商 c1 c2
     * @param orientation  0:竖屏 1:横屏 2：自动 
     * @returns 
     */
    openGame: (gameID, producer, orientation) => void;

    /**
     * 关闭游戏场景退出到scMian
     * @returns 
     */
    closeGame: () => void;


    /**
     * 点击上报
     * @param param 上报参数 详见 GiReportClick
     * @param isForce 是否立即上报 默认false
     * @returns 
     */
    reportClick: (param: GiReportClick, isForce) => void;

    /**
     * 游戏资源下载
     * @param gameId 游戏ID
     * @param listener 回调监听
     * @returns 
     */
    gameDownload: (gameId: string, listener?: GiGameDownLoadCb) => void;
}
