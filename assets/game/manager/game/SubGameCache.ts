import { CacheBase } from "../../cache/CacheBase";
import { GiNetGameReconnData } from "../subGameManager/interfaceGIApi";


/**
 * 子游戏公用数据
 */
export class SubGameCache extends CacheBase {
    static readonly GAME_ID = "gameId";                  // 子游戏id
    static readonly GAME_DEST = "gameSvID";              // 子游戏svid,配桌成功之后每条消息都必须带
    static readonly GAME_TABLEID = "gameTableID";        // 游戏tid（桌子Id 用于判断重连）
    static readonly GAME_PLAT = "gamePlatform";          // 游戏平台（厂商）

    static readonly GAME_CONFIG = "gameConfig";          // 子游戏场次配置
    static readonly CUR_ROOM_CONFIG = "curRoomConfig";   // 当前子游戏房间配置
    static readonly GAME_STATUS = "gameStatus";          // 子游戏状态
    static readonly GAME_LEVEL = "gameLevel";            // 子游戏的level
    static readonly BALANCE = "balance";                 // 游戏账户余额
    static readonly USER_INFO = "userInfo";              //基本用户信息 详见 GiUserInfo
    static readonly JACKPOT_USER_DATA = "jackpotUserData"; // JACKPOT用户数据

    static readonly RECONN_DATA = "gameReconn";             //重连数据 详见 IUserGameInfo

    constructor(className: string) {
        super(className);
    }

    protected initProperty(): void {
        this.addProperty(SubGameCache.GAME_ID, 0);
        this.addProperty(SubGameCache.GAME_DEST, 0);
        this.addProperty(SubGameCache.GAME_TABLEID, 0);
        this.addProperty(SubGameCache.GAME_PLAT, "");

        this.addProperty(SubGameCache.GAME_CONFIG, {});
        this.addProperty(SubGameCache.CUR_ROOM_CONFIG, {});
        this.addProperty(SubGameCache.USER_INFO, {});
        this.addProperty(SubGameCache.GAME_STATUS, 0);
        this.addProperty(SubGameCache.BALANCE, 0);
        this.addProperty(SubGameCache.JACKPOT_USER_DATA, {});
        this.addProperty(SubGameCache.RECONN_DATA, null);
    }

    public initData() {
        this._set(SubGameCache.GAME_ID, 0);
        this._set(SubGameCache.GAME_DEST, 0);
        this._set(SubGameCache.GAME_TABLEID, 0);
        this._set(SubGameCache.GAME_PLAT, "");

        this._set(SubGameCache.GAME_CONFIG, {});
        this._set(SubGameCache.CUR_ROOM_CONFIG, {});
        this._set(SubGameCache.GAME_STATUS, 0);
        this._set(SubGameCache.GAME_LEVEL, null);
        this._set(SubGameCache.BALANCE, 0);
        this._set(SubGameCache.USER_INFO, {});
        this.addProperty(SubGameCache.JACKPOT_USER_DATA, {});

        this.addProperty(SubGameCache.RECONN_DATA, null);
    }
    /** 进入游戏初始化 */
    public initByIntoGame() {
        this._set(SubGameCache.GAME_ID, 0);
        this._set(SubGameCache.GAME_DEST, 0);
        this._set(SubGameCache.GAME_PLAT, "");

        this._set(SubGameCache.GAME_CONFIG, {});
        this._set(SubGameCache.CUR_ROOM_CONFIG, {});
        this._set(SubGameCache.GAME_STATUS, 0);
        this._set(SubGameCache.GAME_LEVEL, null);
        this._set(SubGameCache.BALANCE, 0);
        this._set(SubGameCache.USER_INFO, {});
        this.addProperty(SubGameCache.JACKPOT_USER_DATA, {});

    }
    /** 设置重连数据 */
    public setReconnData(data: GiNetGameReconnData = null) {
        if (data && data.game_id > 0) {
            this._set(SubGameCache.RECONN_DATA, data);
        } else {
            this._set(SubGameCache.RECONN_DATA, null);
        }
    }
    /** 获取重连数据 */
    public getReconnData(): GiNetGameReconnData | null {
        return this._get(SubGameCache.RECONN_DATA);
    }

}