/*
 * @Description: 网络接口
 * @Author: zy
 * @Date: 2021-03-02 15:11:34
 * @Reference: 
 */
export interface INetContract {
    onNet(event: NetEvent, data?: any): void;
};

export type NetMsg = {
    route: string,
    rc?: number,
    data?: any,
    body?: any,
    structure?: any,
};

export enum NetEvent { WILLOPEN, DATA, READY, NOT_READY, AUTH_ERROR, CONNECT_FAILED, CLOSED, DELAY };
export enum NetState { NONE, WAITING, READY, CLOSED };
export enum NetFailure {
    // ConnectTimeout,
    HeartBeatTimeout,
    ReconnectTimeout,
    NormalSocketClose,
}

/** 消息名映射 */
export const CmdToPbName: { [key: number]: string } = {};

/** 游戏需要转发的命令 */
export const GameCmdMap = new Map<number, any>();

