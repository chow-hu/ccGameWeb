import { SpriteFrame, error, warn } from "cc";
import { AudioEngine } from "../../../framework/asset/AudioEngine";
import EventDispatcher from "../../../framework/event/EventDispatcher";
import { AlertStackEvent, gatlas, LayerStackEvent } from "../../../framework/ge";
import { GameCmdMap } from "../../../framework/net/INet";
import { Cache } from "../../cache/Cache";
import { AppConst } from "../../common/AppConst";
import { AppEvent } from "../../common/AppEvent";
import { Atlas } from "../../common/interface";
import { GameCache } from "../game/GameCache";
import { SubGameCache } from "../game/SubGameCache";
import { GameEvent, GameReq, GameResp } from "../game/interface";
import { SubGameDetail, SubGameEventGame, SubGameOrientation } from "./interface";
import { GiAudioControl, GiGameDownLoadCb, GiUserInfo } from "./interfaceGIApi";
import { LoginEvent } from "../account/interface";
import { gameDownloadMgr } from "../gamedownload/GameDownloadManager";
import { IReportClick, ReportEvent } from "../report/interface";
import { EMgr } from "../interface";

const GameReqTemp = GameReq;
const GameRespTemp = GameResp;
const SubGameEventGameTemp = SubGameEventGame;
const GameEventTemp = GameEvent;
const AppEventTemp = AppEvent;
const LoginEventTemp = LoginEvent;
const EMgrTemp = EMgr;
const LayerStackEventTemp = LayerStackEvent;
const AlertStackEventTemp = AlertStackEvent;

export namespace gi {
    export const GameReq = GameReqTemp;
    export const GameResp = GameRespTemp;
    export const SubGameEventGame = SubGameEventGameTemp;
    export const GameEvent = GameEventTemp;
    export const AppEvent = AppEventTemp;
    export const LoginEvent = LoginEventTemp;
    export const EMgr = EMgrTemp;
    export const LayerStackEvent = LayerStackEventTemp;
    export const AlertStackEvent = AlertStackEventTemp;
    /**
     * 注册游戏Net转发事件(进出游戏都会重置)
     * @param cmdList 需要转发到游戏的命令数组 
     * @returns 
     */
    export function regNetCmd(cmdList: Array<number>) {
        if (!cmdList || !(cmdList instanceof Array)) { return; }
        cmdList.forEach((v, k) => {
            let cmd = Number(v);
            if (!isNaN(cmd)) {
                GameCmdMap.set(cmd, cmd);
            }
        })
    }

    /**
         * 获取用户信息
         * @param isSendCheck 是否发送同步校验请求 默认false 不发送
         * @returns 
         */
    export function getUserInfo(isSendCheck = false): GiUserInfo {
        if (isSendCheck == true) {
            // userMgr.reqAsset();
        }
        return {
            /** 用户ID */
            uid: Cache.User.getUID(),
            /** 用户昵称 */
            nick: Cache.User.getNick(),
            /** 用户头像 */
            avatar: Cache.User.getAvatarId(),
            /** 性别 1男2女 */
            sex: 1,
            /** 资产 */
            money: Number(Cache.User.getUserPropertyByType(AppConst.PropertyType.PROP_BALANCE)),
            /** vip等级 */
            vipLevel: 1,
            /** 用户渠道 */
            channel: "1",
            /** 用户邀请码 */
            inviteCode: "",
            /** IP地址 */
            ip: "127.0.0.1",
            /** 语言 */
            language: globalThis.gutil_code,
        }
    }


    /** 根据ID获取默认的头像SpriteFrame */
    export function getDefaultHeadSpriteFrame(avatar_id: number | string): SpriteFrame | null {
        let _id = Number(avatar_id);
        if (avatar_id == "" || avatar_id == null) {
            _id = 1;
        } else {
            return null;
        }
        let avatar = "touxiang_" + _id;
        return gatlas.get(Atlas.USERICON, avatar);
    }

    /**
     * 获取登录Token
     * @returns 
     */
    export function getLoginToken(): string | null {
        return Cache.User.getToken();
    }
    /**
     * 获取游戏ID
     * @returns 为0则是不存在
     */
    export function getGameID(): number {
        return GameCache.game._get(SubGameCache.GAME_ID);
    }

    /**
     * 清空重连数据
     * @returns 
     */
    export function cleanReconnData() {
        GameCache.game.setReconnData(null);
    }

    /**
     * 设置音乐配置
     * @param control = {
     *              allAllow 总开关 boolean
     *              musicAllow 音乐开关 boolean
     *              effectAllow 音效开关 boolean
     *              musicVolume 音乐大小 number
     *              effectVolume 音效大小 number
     *          }
     */
    export function setMusicConf(control: GiAudioControl) {
        AudioEngine.instance.control = control;
    }

    /**
     * 获取音乐配置(包含开关 音量大小)
     * @returns GiAudioControl = {
     *              allAllow 总开关 boolean
     *              musicAllow 音乐开关 boolean
     *              effectAllow 音效开关 boolean
     *              musicVolume 音乐大小 number
     *              effectVolume 音效大小 number
     *          }      
     */
    export function getMusicConf(): GiAudioControl {
        return AudioEngine.instance.control;
    }

    /** 发送跳转 */
    // export function jumpTo(param: string | IPopJump, jumpCall: IPopJumpCallFunc = {}) {
    //     EventDispatcher.instance.dispatchEvent(PopEvent.JUMP_VIEW, param, jumpCall);
    // }

    /**
     * 打开游戏
     * @param gameID 游戏ID
     * @param producer 厂商 c1 c2
     * @param orientation  0:竖屏 1:横屏 2：自动 
     * @returns 
     */
    export function openGame(gameID, producer, orientation: SubGameOrientation = 0) {
        let gameId = Number(gameID);

        let bundleConf = AppConst.GetGamePackageConfById(gameId);
        if (!bundleConf) {
            error(`进入游戏 ID = ${gameID} 失败,包配置未找到`)
            return;
        }
        let oldGameID = GameCache.game._get(SubGameCache.GAME_ID);
        let param: SubGameDetail = {
            gameID: gameId,
            producer: producer || "c1",
            orientation: orientation,
            bundleConf: bundleConf,
            errCallback: (err) => {
                warn("加载错误回调===>", err)
                GameCache.game._set(SubGameCache.GAME_ID, oldGameID);
            }
        };
        EventDispatcher.instance.dispatchEvent(SubGameEventGame.open, param);
    }

    /** 关闭游戏 */
    export function closeGame() {
        EventDispatcher.instance.dispatchEvent(SubGameEventGame.close);
    }

    /** 点击上报 */
    export function reportClick(param: IReportClick, isForce = false) {
        EventDispatcher.instance.dispatchEvent(ReportEvent.REPORT_CLIENT_CLICK, param, isForce);
    }
    /** 游戏资源包下载 */
    export function gameDownload(gameId: string, listener?: GiGameDownLoadCb) {
        gameDownloadMgr.downloadAbs(gameId, listener)
    }
}
globalThis.gi = gi;
