import _ from "lodash";
import { StorageData } from "../../../framework/storage/StorageData";
import { CacheBase } from "../../cache/CacheBase";
import { AppConst } from "../../common/AppConst";
import { SubGameCache } from "./SubGameCache";

export class GameCache {
    static SubGameDownloadStatus: { [key: string]: { status: number, md5: string, progress: number } } = {};

    /** 桌子缓存 */
    static Desk = null;  //暂存

    /** 子游戏数据 */
    static SubGame: { [name: string]: CacheBase } = {};
    /** 子游戏通用数据 */
    static game: SubGameCache = new SubGameCache('game');

    public static init() {
        GameCache.setDesk(null);
        GameCache.initDownStatus();
    }

    public static initDownStatus() {
        let result = StorageData.local.get(`subgame_download`, '');
        if (!_.isEmpty(result)) {
            GameCache.SubGameDownloadStatus = JSON.parse(result);
        }
    }

    public static saveDownStatus() {
        StorageData.local.set(`subgame_download`, JSON.stringify(GameCache.SubGameDownloadStatus));
    }


    //初始化桌子
    public static setDesk(deskClass) {
        if (deskClass) {
            GameCache.Desk = new (deskClass)();
        } else {
            GameCache.Desk = null
        }
    }

    public static getDownloadStatusById(gameId: string) {
        if (!GameCache.SubGameDownloadStatus[gameId]) {
            GameCache.SubGameDownloadStatus[gameId] = { status: -1, progress: 0, md5: '' };
        }
        return GameCache.SubGameDownloadStatus[gameId];
    }


    /**
     * 判断游戏下载是否完成
     * @param gameId 子游戏ID
     * @returns 是否完成下载
     */
    static isDownloadComplete(gameId: string): boolean {
        const config = AppConst.GetGamePackageConfById(gameId);
        let status = GameCache.getDownloadStatusById(gameId);
        if (status.md5 != '' && status.md5 != config.md5) {
            status.status = -1;
            GameCache.saveDownStatus();
        }
        return status.status == 1;
    }


    static downloadComplete(gameId: string) {
        const config = AppConst.GetGamePackageConfById(gameId)
        GameCache.SubGameDownloadStatus[gameId] = { status: 1, progress: 100, md5: config.md5 };
        GameCache.saveDownStatus();
    }


    /**
     * 设置下载状态
     * @param gameId 子游戏ID
     * @param status -1待下载, 0下载中, 1下载完成
     */
    static setDownloadType(gameId: string, status: number) {
        GameCache.getDownloadStatusById(gameId).status = status;
    }

    static getDownloadType(gameId: string): number {
        return GameCache.getDownloadStatusById(gameId).status;
    }

    /**
     * 更新游戏下载进度
     * @param gameId 子游戏ID
     * @param downloadedSize 已下载大小
     */
    static updateGameProgress(gameId: string, progress: number): void {
        GameCache.getDownloadStatusById(gameId).progress = progress;
    }

    /**
     * 获取游戏下载进度
     * @param gameId 子游戏ID
     * @returns 已下载大小
     */
    static getGameProgress(gameId: string): number | undefined {
        return GameCache.getDownloadStatusById(gameId).progress;
    }

}
