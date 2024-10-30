import { IBundleOption } from "../../../framework/asset/AssetsLoader";

export const GameDownLoadEvent = {
    task_progress: 'game_download_task_progress',
    task_complete: 'game_download_task_complete',
    task_error: 'game_download_task_error',
    game_progress: 'game_download_game_progress',
    game_complete: 'game_download_game_complete',
    game_error: 'game_download_game_error',
}
/** 游戏包下载监听传参 */
export interface IGameDownLoadCb {
    /** 监听对象 */
    target: any,
    /** 下载进度 */
    progress?: (finished: number, total: number, percent: number) => void,
    /** 完成事件 */
    complete?: (err: Error | null | string, data: any) => void,
    /** 错误回调 */
    error?: Function,
}

export interface IGameDownLoad {
    options: IBundleOption[];
    listeners: IGameDownLoadCb[];
    percent: number;
}