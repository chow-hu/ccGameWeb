import { isValid } from "cc";
import { IBundleOption } from "../../../framework/asset/AssetsLoader";
import { AppConst } from "../../common/AppConst";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { GameDownloadTask } from "./GameDownloadTask";
import { GameDownLoadEvent, IGameDownLoad, IGameDownLoadCb } from "./interface";

export class GameDownloadManager extends IManager {
    private _task: Map<string, GameDownloadTask> = new Map();
    private _downloadMap: Map<string, IGameDownLoad> = new Map();

    private static _instance: GameDownloadManager;

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GameDownloadManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.GAMEDOWNLOAD);
        this.on([GameDownLoadEvent.task_progress, GameDownLoadEvent.task_complete, GameDownLoadEvent.task_error]);
    };

    public destroyTask(option: IBundleOption) {
        let task = this._task.get(option.name);
        task && this._task.delete(option.name);
    }

    private createTask(option: IBundleOption) {
        let task = new GameDownloadTask(option);
        this._task.set(option.name, task);
        task.download();
    }

    public download(option: IBundleOption) {
        let task = this._task.get(option.name);
        if (!task) {
            this.createTask(option);
        } else if (task.option.md5 !== option.md5) {
            this._task.delete(option.name);
            this.createTask(option);
        }
    }

    public onEvents(event: string, data: any) {
        switch (event) {
            case GameDownLoadEvent.task_progress:
                this.downloadProgress(data as IBundleOption);
                break;
            case GameDownLoadEvent.task_complete:
                this.downloadComplete(data as IBundleOption);
                break;
            case GameDownLoadEvent.task_error:
                this.downloadError(data as IBundleOption);
                break;
            default:
                break;
        }
    }

    public getTask(option: IBundleOption) {
        return this._task.get(option.name) || null;
    }

    private isComplete(options: IBundleOption[]) {
        for (let i = 0; i < options.length; i++) {
            let task = this.getTask(options[i]);
            if (!task || !task.isLoaded) {
                return false;
            }
        }
        return true;
    }

    public downloadAbs(gameId: string, listener?: IGameDownLoadCb) {
        const options = [AppConst.GetGamePackageConfById(gameId)];
        if (options[0] == null) {
            if (listener && listener.error) {
                if (!listener.target || isValid(listener.target)) {
                    listener.error && listener.error.call(listener.target, 'gameId error', gameId);
                }
            }
            return;
        }
        let depends = options[0].depends || [];
        depends.forEach((depend) => {
            let option = AppConst.GetSubPackageConfById(depend) || AppConst.GetGamePackageConfById(depend) || AppConst.GetPackageConfByName(depend);
            option && options.unshift(option);
        })

        options.forEach((option) => {
            gameDownloadMgr.download(option);
        })

        if (this.isComplete(options)) {
            return listener && listener.complete && listener.complete.call(listener.target);
        }

        let download = this._downloadMap.get(gameId);
        if (!download) {
            download = { options, listeners: listener ? [listener] : [], percent: 0 }
        } else {
            download.options = options;
            listener && download.listeners.push(listener);
        }
        this._downloadMap.set(gameId, download);
        // GameCache.setDownloadType(gameId, 0);
    }

    downloadProgress(option: IBundleOption) {
        this._downloadMap.forEach((download, gameId) => {
            let isCheck = false;
            for (let i = 0; i < download.options.length; i++) {
                if (download.options[i].name == option.name) {
                    isCheck = true;
                    break;
                }
            }
            if (isCheck) {
                let finished = 0;
                let total = 0;
                let percent = 0;
                for (let i = 0; i < download.options.length; i++) {
                    let task = this.getTask(download.options[i]);
                    finished += task ? task.finished : 0;
                    total += task ? task.total : 0;
                    percent += (task && task.finished && task.total) ? task.finished / task.total / download.options.length : 0;
                }
                download.percent = percent = Math.max(download.percent, percent);
                for (let i = download.listeners.length - 1; i >= 0; i--) {
                    let listener = download.listeners[i];
                    if (!isValid(listener.target)) {
                        download.listeners.splice(i, 1);
                        continue;
                    }
                    listener.progress && listener.progress.call(listener.target, finished, total, percent);
                }
                this.emit(GameDownLoadEvent.game_progress, { gameId, finished, total, percent });
                // GameCache.updateGameProgress(gameId, finished / total);
            }
        })
    }

    downloadComplete(option: IBundleOption) {
        const ids = [];
        this._downloadMap.forEach((download, gameId) => {
            let isCheck = false;
            for (let i = 0; i < download.options.length; i++) {
                if (download.options[i].name == option.name) {
                    isCheck = true;
                    break;
                }
            }
            if (isCheck) {
                // for (let i = 0; i < download.options.length; i++) {
                //     let task = this.getTask(download.options[i]);
                //     if (!task || !task.isLoaded) {
                //         return;
                //     }
                // }
                if (!this.isComplete(download.options)) return;
                for (let i = download.listeners.length - 1; i >= 0; i--) {
                    let listener = download.listeners[i];
                    if (!isValid(listener.target)) {
                        download.listeners.splice(i, 1);
                        continue;
                    }
                    listener.complete && listener.complete.call(listener.target)
                }
                ids.push(gameId);
                this.emit(GameDownLoadEvent.game_complete, { gameId });
                // GameCache.setDownloadType(gameId, 1);
                // GameCache.downloadComplete(gameId);
            }
        })
        ids.forEach((gameId) => {
            this._downloadMap.delete(gameId);
        })
    }

    downloadError(option: IBundleOption) {
        const ids = [];
        this._downloadMap.forEach((download, gameId) => {
            let isCheck = false;
            for (let i = 0; i < download.options.length; i++) {
                if (download.options[i].name == option.name) {
                    isCheck = true;
                    break;
                }
            }
            if (isCheck) {
                for (let i = download.listeners.length - 1; i >= 0; i--) {
                    let listener = download.listeners[i];
                    if (!isValid(listener.target)) {
                        download.listeners.splice(i, 1);
                        continue;
                    }
                    listener.error && listener.error.call(listener.target, 'download error', gameId);
                }
                ids.push(gameId);
                this.emit(GameDownLoadEvent.game_error, { gameId });
            }
        })
        ids.forEach((gameId) => {
            this._downloadMap.delete(gameId);
        })
    }
}

export const gameDownloadMgr: GameDownloadManager = GameDownloadManager.instance; 