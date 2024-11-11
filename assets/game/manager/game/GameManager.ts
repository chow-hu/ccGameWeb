
/**
 * Name = GameManager
 * URL = db://assets/manager/selectgame/GameManager.ts
 * Time = Wed 2024 04.07 11:03:18 GMT+0800 (中国标准时间)
 * Author = Aby
 * 游戏相关服务
 */

import { game, isValid, log, warn } from "cc";
import _ from "lodash";
import { PRIORITY, game_base_proto, gnet, gui, gutil_char, room_alloc_proto } from "../../../framework/ge";
import { gamebase } from "../../../shared/game_common/game_common_proto.js";
import { Cache } from "../../cache/Cache";
import { AppEvent } from "../../common/AppEvent";
import { Utils } from "../../common/Utils";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { GameCache } from "./GameCache";
import { SubGameCache } from "./SubGameCache";
import { GameEvent, GameProto, GameReq, GameResp } from "./interface";

export class GameManager extends IManager {

    private static _instance: GameManager;

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GameManager();
        return this._instance;
    };

    private _subGamePresenter: IManager = null;
    public get<T extends IManager>() {
        return this._subGamePresenter as T;
    }
    public set subGamePresenter(value: IManager) {
        this._subGamePresenter && this._subGamePresenter.clear();
        this._subGamePresenter && delete this._subGamePresenter;
        this._subGamePresenter = value;
    }

    private _eventList: Array<any> = [];
    private _pbList: Array<any> = [];
    /** 在游戏的标志 */
    private _inGame = false;
    /** 是否有选场配置 */
    private _isHasLevelConfig = false;

    /** 发送请求超时的时间 */
    private _sendTimeOut = 8;
    /** 发送超时的超时检测句柄 */
    private _handlerSendTimeOut = {
        /** 获取场次配置 */
        GetConfig: null,
        /** 匹配桌子 */
        MatchTable: null,
        /** 加入房间 */
        JoinRoom: null,
    };
    /** 发送请求最大的次数 */
    private _sendReqMax = 3;
    /** 当前发送数据次数的配置 */
    private _sendCurrowNum = {
        /** 发送获取场次配置请求的次数 */
        GetConfig: 0,
        /** 发送匹配桌子请求的次数 */
        MatchTable: 0,
        /** 发送加入请求的次数 */
        JoinRoom: 0,
    }


    /** 当前游戏ID */
    private _curGameID = null;
    /** 当前匹配的数据 */
    private _curMatchData = null;
    /** 当前加入房间的数据 */
    private _curJoinRoomData = {
        tid: null,
        svid: null
    }

    constructor() {
        super(EMgr.GAME);
        this._pbList = [
            GameResp.GAME_CONFIG,
            GameResp.ROOM_INFO_BROADCAST,
            GameResp.JOIN_ROOM,
            GameResp.REQUEST_ROOM,
            GameResp.LEAVE_ROOM,
            GameResp.GAMENOTIFICATION_PUSH,
            GameResp.SIT_DOWN,
            GameResp.SIT_DOWN_BROADCAST,
            GameResp.GAME_RULES,
            GameResp.STAND_UP_BROADCAST,
            GameResp.SHARE_POSTER,
            GameProto.GetPropPush,
        ];
        this._eventList = [
            AppEvent.SYS_NET_CLOSED,
            AppEvent.SYS_NET_CONNECT_FAILED,
        ]
        GameCache.init();

    };
    /** 进入一个游戏 */
    enterOneGame() {
        //显示进入Loading
        gui.loading({ ts: 10, block: true }, PRIORITY.NET);
        this.__stopCheckTimeOut();
        this._sendCurrowNum = {
            GetConfig: 0,
            MatchTable: 0,
            JoinRoom: 0,
        }
        this._inGame = true;
        this._isHasLevelConfig = false;
        this._curGameID = null;
        this._curMatchData = null;
        this._curJoinRoomData = { tid: null, svid: null };
        this.subGamePresenter = null;
        this.off(this._eventList);
        this.offproto(this._pbList);
        this.on(this._eventList);
        this.onproto(this._pbList);

        GameCache.setDesk(null);
    }
    /** 退出一个游戏 */
    exitOneGame() {
        this.__stopCheckTimeOut();
        this._inGame = false;
        this._isHasLevelConfig = false;
        this._curGameID = null;
        this._curMatchData = null;
        this._curJoinRoomData = { tid: null, svid: null };
        this.off(this._eventList);
        this.offproto(this._pbList);
        GameCache.setDesk(null);
        //关闭网络loading
        gui.loading(false);
        Cache.User.LoginRoomState = false;
    }

    /** 停止检测超时 */
    private __stopCheckTimeOut(key = null) {
        if (key == null) {
            for (let key in this._handlerSendTimeOut) {
                if (Object.prototype.hasOwnProperty.call(this._handlerSendTimeOut, key)) {
                    this.stopScheduler(this._handlerSendTimeOut[key]);
                    this._handlerSendTimeOut[key] = null;
                }
            }
            return;
        }
        this.stopScheduler(this._handlerSendTimeOut[key]);
        this._handlerSendTimeOut[key] = null;
    }

    /** 获取游戏房间配置超时 */
    private __getRoomConfigOutTime() {
        if (!this._handlerSendTimeOut.GetConfig) {
            return;
        }
        warn("获取游戏房间配置超时" + this._sendCurrowNum.GetConfig);
        this.__stopCheckTimeOut('GetConfig');
        if (this._sendCurrowNum.GetConfig >= this._sendReqMax) {
            warn("Error:超出获取游戏房间配置的最大次数 直接退出游戏场景")
            //关闭网络loading
            gui.loading(false);
            gui.showTips(gutil_char('GAME_GET_CONFIG_TIME_OUT'));
            this.detailExitGame();
            return;
        }
        if (this._inGame && this._curGameID != null) {
            this.requestGameConfig(this._curGameID);
        }
    }
    /** 匹配房间超时 */
    private __matchRoomOutTime() {
        if (!this._handlerSendTimeOut.MatchTable) {
            return
        }
        warn("匹配房间超时" + this._sendCurrowNum.MatchTable);
        this.__stopCheckTimeOut('MatchTable');
        if (this._sendCurrowNum.MatchTable >= this._sendReqMax) {
            warn("Error:超出匹配的最大次数")
            //关闭网络loading
            gui.loading(false);
            gui.showTips(gutil_char('GAME_MATCH_TABLE_TIME_OUT'));
            this.detailExitGame();
            return;
        }
        if (Cache.User.LoginRoomState != true && this._inGame && this._curMatchData) {
            this.requestEnterRoom(this._curMatchData);
        }
    }

    /** 加入游戏房间超时 */
    private __joinRoomOutTime() {
        if (!this._handlerSendTimeOut.JoinRoom) {
            return
        }
        warn("加入游戏房间超时" + this._sendCurrowNum.JoinRoom);
        this.__stopCheckTimeOut('JoinRoom');
        if (this._sendCurrowNum.JoinRoom >= this._sendReqMax) {
            warn("Error:超出登录的最大次数 直接退出游戏场景")
            //关闭网络loading
            gui.loading(false);
            gui.showTips(gutil_char('GAME_JOIN_TIME_OUT'));
            this.detailExitGame();
            return;
        }
        if (Cache.User.LoginRoomState != true && this._inGame) {
            this.requestJoinGame();
        }
    }

    /** 延迟退出游戏 */
    detailExitGame(isDetail: boolean = true) {
        //显示Loading屏蔽层(不转圈)
        gui.loading({ ts: 10, block: true, notshow: true }, PRIORITY.NET);
        if (isDetail) {
            this.stopAllScheduler();
            this.addSchedulerOnce(2, () => {
                this.stopAllScheduler();
                // gi.closeGame();
                this.requestGameConfig(GameCache.game._get(SubGameCache.GAME_ID))
            })
        } else {
            // gi.closeGame();
            this.requestGameConfig(GameCache.game._get(SubGameCache.GAME_ID))
        }
    }

    /** 收到消息 */
    onRecv(event: string, data: any): void {
        // if (data.rc) return;
        let rspData = data?.data;
        switch (event) {
            case GameResp.GAME_CONFIG: // 游戏配置
                this._isHasLevelConfig = true;
                //停止检测超时
                this.__stopCheckTimeOut();
                //重置获取配置次数
                this._sendCurrowNum.GetConfig = 0;

                gui.loading(false);
                this.emit(GameEvent.GAME_CONFIG, rspData, false);
                break;
            case GameResp.ROOM_INFO_BROADCAST: // 配桌成功信息推送
                console.log("配桌成功信息推送", rspData);
                // 记录游戏dstid,之后子游戏每条消息都需要带进去
                if (rspData.table_id) {
                    GameCache.game._set(SubGameCache.GAME_TABLEID, rspData.table_id);
                }
                if (rspData.svid) {
                    GameCache.game._set(SubGameCache.GAME_DEST, rspData.svid);
                }
                if (rspData.game_id) {
                    GameCache.game._set(SubGameCache.GAME_ID, rspData.game_id);
                }

                //停止检测超时
                this.__stopCheckTimeOut();
                //重置获取配置次数
                this._sendCurrowNum.MatchTable = 0;

                // 配桌成功后发送确认
                if (rspData.table_id && rspData.table_id > 0) {
                    this._curJoinRoomData = {
                        tid: rspData.table_id,
                        svid: null,
                    }
                    this.requestJoinGame();
                } else {
                    //关闭网络loading
                    gui.loading(false);
                }
                break;
            case GameResp.JOIN_ROOM: // 加入房间
                //停止检测进房超时
                this.__stopCheckTimeOut();
                //关闭网络loading
                gui.loading(false);
                //重置登录次数
                this._sendCurrowNum.JoinRoom = 0;
                if (rspData.result === 0) {
                    Cache.User.LoginRoomState = true;
                    let table = rspData as gamebase.IUserJoinTableResp;
                    log("bobo---------------------------加入房间成功 ", table);
                    GameCache.game._set(SubGameCache.GAME_LEVEL, table.room_level);
                    GameCache.game._set(SubGameCache.BALANCE, table.balance);
                    GameCache.game._set(SubGameCache.JACKPOT_USER_DATA, table.jackpotinfo);

                    let info = Utils.JsonDecode(table.userinfo);
                    GameCache.game._set(SubGameCache.USER_INFO, Utils.tableVerify(info));

                    let roomInfo: gamebase.IUserJoinTableResp = _.cloneDeep(table);
                    let msgBuf: Uint8Array = new Uint8Array(table.tableinfo, 0, table.tableinfo.length);

                    roomInfo.tableinfo = gnet._protodecode(table.msgname, msgBuf.buffer);
                    console.log("roomInfo", roomInfo);

                    this.emit(GameEvent.JOIN_ROOM, roomInfo);
                    this.emit(GameEvent.UPDATE_DATA_JACKPOT);
                } else {
                    warn(`============加入房间失败 code:${rspData.result}============`)
                    let key = 'GAME_ERROR_' + rspData.result;
                    let txt = gutil_char(key);
                    if (!txt || txt == key) {
                        txt = gutil_char('GAME_ERROR_1');
                    }
                    gui.loading(false);
                    // gui.showTips(txt);
                    this.detailExitGame();
                }
                break;
            case GameResp.REQUEST_ROOM: // 请求配桌
                //停止检测超时
                this.__stopCheckTimeOut();
                this.emit(GameEvent.REQUEST_ROOM, rspData);
                break;
            case GameResp.LEAVE_ROOM: // 离开房间
                if (rspData.result == 0) {
                    Cache.User.LoginRoomState = false;
                    this.emit(GameEvent.LEAVE_ROOM, rspData);
                } else {
                    warn(`============离开房间失败 code:${rspData.result}============`)
                    let key = 'GAME_ERROR_' + rspData.result;
                    let txt = gutil_char(key);
                    if (!txt || txt == key) {
                        txt = gutil_char('GAME_ERROR_1');
                    }
                    gui.showTips(txt);
                }
                break;
            case GameResp.GAMENOTIFICATION_PUSH: // 踢出房间广播
                console.log("%%%%%%%%%%%%%%%%%%%%%踢人广播")
                this.emit(GameEvent.GAMENOTIFICATION_PUSH, rspData)
                break;
            case GameResp.SIT_DOWN: // 坐下

                break;
            case GameResp.GAME_RULES:
                this.emit(GameEvent.GAME_RULE, rspData);

                break;
            case GameResp.STAND_UP_BROADCAST: // 起立
                this.emit(GameEvent.STAND_UP_BROADCAST, rspData);
                break;
            case GameResp.SIT_DOWN_BROADCAST: // 坐下
                this.emit(GameEvent.SIT_DOWN_BROADCAST, rspData);
                break;
            case GameResp.SHARE_POSTER:
                this.emit(GameEvent.SHARE_POSTER, rspData);
                break;
            case GameProto.GetPropPush:
                // this.notifyGetProps(rspData as ccgame.client_proto.GetPropPush);
                break;
            default:
                break;
        }
    }

    /** 收到事件消息 */
    onEvents(event: string, ...args: any) {
        switch (event) {
            case AppEvent.SYS_NET_CONNECT_FAILED:
            case AppEvent.SYS_NET_CLOSED:
                Cache.User.LoginRoomState = false;
            default:
                break;
        }
    }

    /**子游戏请求游戏配置 */
    requestGameConfig(id: any) {
        if (!this._isHasLevelConfig) {///非首次不超时
            //显示进入Loading
            gui.loading({ forever: true, block: true }, PRIORITY.NET);
            //次数计次
            this._sendCurrowNum.GetConfig = this._sendCurrowNum.GetConfig + 1;
            //开启超时检测
            this.__stopCheckTimeOut('GetConfig');
            let self = this;
            this._handlerSendTimeOut.GetConfig = this.addScheduler(this._sendTimeOut, () => {
                if (isValid(self) && self._inGame) {
                    //开启超时检测
                    self.__getRoomConfigOutTime();
                }
            })
        }
        this._curGameID = id;

        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMALLOC;
        let ctype = room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_CONFIG_REQ;
        let param = {
            game_id: id,
        }
        log(GameReq.GAME_CONFIG, stype + " | " + ctype);
        gnet.send(GameReq.GAME_CONFIG, stype, ctype, param);
    }

    /**子游戏请求配桌 */
    requestEnterRoom(data: any) {
        if (Cache.User.LoginRoomState) {
            warn("[requestEnterRoom]>>>已经在房间中了,不发送配桌请求")
            return false;
        }

        this._curMatchData = data;

        //显示进入Loading
        gui.loading({ forever: true, block: true }, PRIORITY.NET);
        //加入次数计次
        this._sendCurrowNum.MatchTable = this._sendCurrowNum.MatchTable + 1;

        //开启超时检测
        this.__stopCheckTimeOut();
        let self = this;
        this._handlerSendTimeOut.MatchTable = this.addScheduler(this._sendTimeOut, () => {
            if (isValid(self) && self._inGame) {
                //开启加入超时检测
                self.__matchRoomOutTime();
            }
        })

        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMALLOC;
        let ctype = room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_ALLOC_TABLE_REQ;
        let userinfo: any = Utils.clone(Cache.User.getUser());
        userinfo["money"] = Number(userinfo.balance);
        let param = {
            game_id: data.game_id,
            alloc_param: data.alloc_param,
            userinfo: Utils.JsonEncode(userinfo),
            except_tid: data.except_tid,        // 排除的桌子ID （换桌）
            target_tid: data.target_tid,        // 目标桌子ID   （选桌）
        }
        log(GameReq.REQUEST_ROOM, stype + " | " + ctype);
        gnet.send(GameReq.REQUEST_ROOM, stype, ctype, param);
        return true;
    }

    /**子游戏请求加入游戏 */
    requestJoinGame() {
        if (Cache.User.LoginRoomState) {
            warn("[requestJoinGame]>>>已经在房间中了,不发送加入游戏请求")
            return false;
        }

        if (this._curJoinRoomData.tid == null) {
            warn("[reqJoinRoom]：tableID不能为空")
            return;
        }
        if (this._curJoinRoomData.svid == null) {
            this._curJoinRoomData.svid = GameCache.game._get(SubGameCache.GAME_DEST);
        }
        //显示进入Loading
        gui.loading({ forever: true, block: true }, PRIORITY.NET);
        //加入次数计次
        this._sendCurrowNum.JoinRoom = this._sendCurrowNum.JoinRoom + 1;

        //开启超时检测
        this.__stopCheckTimeOut();
        let self = this;
        this._handlerSendTimeOut.JoinRoom = this.addScheduler(this._sendTimeOut, () => {
            if (isValid(self) && self._inGame) {
                //开启加入超时检测
                self.__joinRoomOutTime();
            }
        })

        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_JOIN_TABLE_REQ;
        let param = {
            table_id: this._curJoinRoomData.tid,
            dstid: this._curJoinRoomData.svid,
        }
        log(GameReq.JOIN_ROOM, stype + " | " + ctype);
        gnet.send(GameReq.JOIN_ROOM, stype, ctype, param);
    }

    /**子游戏请求离开游戏 */
    requestLeaveRoom() {
        let tableID = GameCache.game._get(SubGameCache.GAME_DEST);
        if (Utils.numValueOf(tableID) == 0 || Cache.User.LoginRoomState == false) {
            warn(`离开桌子失败，桌子ID:${tableID} 登录房间状态:${Cache.User.LoginRoomState}`)
            return false;
        }
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_LEAVE_REQ;
        let param = {
            dstid: tableID,
        }
        log(GameReq.LEAVE_ROOM, stype + " | " + ctype);
        gnet.send(GameReq.LEAVE_ROOM, stype, ctype, param);
        return true;
    }

    /**子游戏请求坐下(不是每个游戏都需要) */
    requestSitDown(data: any) {
        if (!Cache.User.LoginRoomState) {
            warn("[requestSitDown]>>>不在房间中了,不发送坐下请求")
            return false;
        }
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_SITDOWN_REQ;
        let param = {
            seat_id: data.seat_id,
            dstid: GameCache.game._get(SubGameCache.GAME_DEST),
        }
        log(GameReq.SIT_DOWN, stype + " | " + ctype);
        gnet.send(GameReq.SIT_DOWN, stype, ctype, param);
    }



    /**请求规则配置 */
    requestGameRule(key: string) {
        if (!key) return;
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_GET_RULE_REQ;
        gnet.send(GameReq.GAME_RULES, stype, ctype, {
            key: key,
            lang: globalThis.gutil_code,
            dstid: GameCache.game._get(SubGameCache.GAME_DEST),
        });
    }

    /** 获取CC_GAME_SHARE_POSTER_REQ 分享海报*/
    requestSharePoster(type: gamebase.CC_SHARE_TYPE) {
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_SHARE_POSTER_REQ;
        gnet.send(GameReq.SHARE_POSTER, stype, ctype, {
            share_type: type,
            dstid: GameCache.game._get(SubGameCache.GAME_DEST),
        });
    }

}


export const gameMgr: GameManager = GameManager.instance; 