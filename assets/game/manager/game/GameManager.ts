
/**
 * Name = GameManager
 * URL = db://assets/manager/selectgame/GameManager.ts
 * Time = Wed 2024 04.07 11:03:18 GMT+0800 (中国标准时间)
 * Author = Aby
 * 游戏相关服务
 */

import { isValid, log, warn } from "cc";
import _ from "lodash";
import { PRIORITY, game_base_proto, game_userinfo_proto, gnet, gui, gutil_char, room_alloc_proto } from "../../../framework/ge";
import { gamebase } from "../../../shared/game_common/game_common_proto.js";
import { Cache } from "../../cache/Cache";
import { AppEvent } from "../../common/AppEvent";
import { Utils } from "../../common/Utils";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { GameCache } from "./GameCache";
import { SubGameCache } from "./SubGameCache";
import { EUserField, GameActionType, GameEvent, GameProto, GameReq, GameResp, IUpdateGameUserInfoData } from "./interface";
import { GiNetGameReconnData } from "../subGameManager/interfaceGIApi";
import { jumpToExit } from "../subGameManager/utils";

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

    /** 支持的keyMap */
    private _keyMap = {
        /** 获取场次配置 */
        GetConfig: "GetConfig",
        /** 匹配桌子 */
        MatchTable: "MatchTable",
        /** 加入房间 */
        JoinRoom: "JoinRoom",
        /** 退出房间（只发1次） */
        ExitRoom: "ExitRoom",
    };
    /** 发送超时的超时检测句柄 */
    private _handlerSendTimeOut: any = {};
    /** 当前发送数据次数的配置 */
    private _sendCurrowNum: any = {}
    /** 发送请求最大的次数 */
    private _sendReqMax = 3;


    /** 当前游戏ID */
    private _curGameID = null;
    /** 当前匹配的数据 */
    private _curMatchData = null;
    /** 当前加入房间的数据 */
    private _curJoinRoomData = {
        tid: null,
        svid: null
    }

    /** 修改玩家信息列表 */
    private _fieldUserInfoList: Array<IUpdateGameUserInfoData> = [];

    constructor() {
        super(EMgr.GAME);
        for (let key in this._keyMap) {
            if (Object.prototype.hasOwnProperty.call(this._keyMap, key)) {
                this._handlerSendTimeOut[key] = null;
                this._sendCurrowNum[key] = 0;
            }
        }
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
            GameResp.REQUEST_USER_BALANCE,
            GameProto.GetPropPush,
            GameResp.LEVEL_TABLE_INFO,
            GameResp.GET_USER_INFO,
            GameResp.GET_USER_INFO_BY_FIELD,
            GameResp.UPDATE_USER_INFO,
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
        this.__initTimeOutNum();
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
        this._inGame = false;
        this.__stopCheckTimeOut();
        this.__initTimeOutNum();
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
    /** 重置超时次数 */
    private __initTimeOutNum(key = null) {
        if (key == null) {
            for (let key in this._sendCurrowNum) {
                if (Object.prototype.hasOwnProperty.call(this._sendCurrowNum, key)) {
                    this._sendCurrowNum[key] = 0;
                }
            }
            return;
        }
        this._sendCurrowNum[key] = 0;
    }
    /** 获取游戏房间配置超时 */
    private __getRoomConfigOutTime() {
        let _key = this._keyMap.GetConfig;

        if (!this._handlerSendTimeOut[_key]) {
            return;
        }
        warn("获取游戏房间配置超时" + this._sendCurrowNum[_key]);
        this.__stopCheckTimeOut(_key);
        if (this._sendCurrowNum[_key] >= this._sendReqMax) {
            warn("Error:超出获取游戏房间配置的最大次数 直接退出游戏场景")
            //关闭网络loading
            gui.loading(false);
            this.detailExitGame(gutil_char('GAME_GET_CONFIG_TIME_OUT'));
            return;
        }
        if (this._inGame && this._curGameID != null) {
            this.requestGameConfig(this._curGameID);
        }
    }
    /** 匹配房间超时 */
    private __matchRoomOutTime() {
        let _key = this._keyMap.MatchTable;
        if (!this._handlerSendTimeOut[_key]) {
            return
        }
        warn("匹配房间超时" + this._sendCurrowNum[_key]);
        this.__stopCheckTimeOut(_key);
        if (this._sendCurrowNum[_key] >= this._sendReqMax) {
            warn("Error:超出匹配的最大次数")
            //关闭网络loading
            gui.loading(false);
            this.detailExitGame(gutil_char('GAME_MATCH_TABLE_TIME_OUT'));
            return;
        }
        if (Cache.User.LoginRoomState != true && this._inGame && this._curMatchData) {
            this.requestEnterRoom(this._curMatchData);
        }
    }

    /** 加入游戏房间超时 */
    private __joinRoomOutTime() {
        let _key = this._keyMap.JoinRoom;
        if (!this._handlerSendTimeOut[_key]) {
            return
        }
        warn("加入游戏房间超时" + this._sendCurrowNum[_key]);
        this.__stopCheckTimeOut(_key);
        if (this._sendCurrowNum[_key] >= this._sendReqMax) {
            warn("Error:超出登录的最大次数 直接退出游戏场景")
            //关闭网络loading
            gui.loading(false);
            this.detailExitGame(gutil_char('GAME_JOIN_TIME_OUT'));
            return;
        }
        if (Cache.User.LoginRoomState != true && this._inGame) {
            this.requestJoinGame();
        }
    }
    /** 退出游戏房间超时 */
    private __exitRoomOutTime() {
        let _key = this._keyMap.ExitRoom;
        if (!this._handlerSendTimeOut[_key]) {
            return
        }
        warn("退出游戏房间超时" + this._sendCurrowNum[_key]);
        this.__stopCheckTimeOut(_key);
        if (this._sendCurrowNum[_key] >= 1) {
            warn("Error:超出退出请求的最大次数")
            //关闭网络loading
            gui.loading(false);
            //通知:退出超时
            this.emit(GameEvent.REQUEST_EXIT_ROOM_TIMEOUT);
            return;
        }
    }

    /** 延迟退出游戏 */
    detailExitGame(tip: string) {
        let content = tip + gutil_char('GAME_ERROR_TIP');
        this.stopAllScheduler();
        this.__initTimeOutNum();
        gui.loading(false, PRIORITY.NET);
        gui.alert({
            content: content,
            enableClose: false,
            ok: {
                text: gutil_char('OK'),
                cb: () => {
                    gui.loading({ ts: 10, block: true, notshow: true }, PRIORITY.NET);
                    this.requestGameConfig(GameCache.game._get(SubGameCache.GAME_ID))
                }
            }
        }, PRIORITY.NET, 'NET');
    }

    checkReconnect() {
        if (!this._isHasLevelConfig) {
            warn("[检查重连]>>>没有场次配置 先请求此次配置")
            this.requestGameConfig(GameCache.game._get(SubGameCache.GAME_ID))
            return null;
        }
        let reconnData: GiNetGameReconnData = GameCache.game.getReconnData();
        if (reconnData) {
            warn("[检查重连]>>>检测到需要重连")
            this.emit(GameEvent.GAME_RECONNECT, reconnData);

            this._curJoinRoomData = {
                tid: reconnData.game_tid,
                svid: reconnData.game_svid,
            }
            this.requestJoinGame();
            return true;
        }
        return false;
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
                this._sendCurrowNum[this._keyMap.GetConfig] = 0;

                let reconnData: GiNetGameReconnData = GameCache.game.getReconnData();
                if (!reconnData) {
                    //关闭网络loading
                    gui.loading(false);
                }
                this.emit(GameEvent.GAME_CONFIG, rspData, reconnData != null);
                //检查是否是重连加入
                if (reconnData) {
                    this.checkReconnect();
                }
                break;
            case GameResp.ROOM_INFO_BROADCAST: // 配桌成功信息推送
                // gui.showTips('加入房间：' + rspData.table_id);
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
                this._sendCurrowNum[this._keyMap.MatchTable] = 0;

                // 配桌成功后发送确认
                if (rspData.table_id && rspData.table_id > 0) {
                    //fix:为了兼容 先这么写 1.1.5去掉
                    Cache.User.LoginRoomState = false;

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
                //重置登录次数
                this._sendCurrowNum[this._keyMap.JoinRoom] = 0;
                //关闭网络loading
                gui.loading(false);
                if (rspData.result === 0) {
                    Cache.User.LoginRoomState = true;
                    //检查是否是重连加入
                    let reconn: GiNetGameReconnData = GameCache.game.getReconnData();
                    if (reconn) {
                        GameCache.game._set(SubGameCache.GAME_TABLEID, reconn.game_tid);
                        GameCache.game._set(SubGameCache.GAME_DEST, reconn.game_svid);
                        GameCache.game._set(SubGameCache.GAME_ID, reconn.game_id);
                    }
                    GameCache.game.setReconnData(null);
                    let table = rspData as gamebase.IUserJoinTableResp;
                    log("bobo---------------------------加入房间成功 ", table);
                    GameCache.game._set(SubGameCache.GAME_LEVEL, table.room_level);
                    Cache.User.setBalance(table.balance);
                    GameCache.game._set(SubGameCache.JACKPOT_USER_DATA, table.jackpotinfo);

                    let info = Utils.JsonDecode(table.userinfo);
                    GameCache.game._set(SubGameCache.USER_INFO, Utils.tableVerify(info));

                    let roomInfo: gamebase.IUserJoinTableResp = _.cloneDeep(table);
                    let msgBuf: Uint8Array = new Uint8Array(table.tableinfo as unknown as ArrayBufferLike, 0, table.tableinfo.length);

                    roomInfo.tableinfo = gnet._protodecode(table.msgname, msgBuf.buffer as ArrayBuffer);
                    console.log("roomInfo", roomInfo);

                    this.emit(GameEvent.JOIN_ROOM, roomInfo);
                    this.emit(GameEvent.UPDATE_DATA_JACKPOT);
                } else {
                    GameCache.game.setReconnData(null);
                    warn(`============加入房间失败 code:${rspData.result}============`)
                    let key = 'GAME_ERROR_' + rspData.result;
                    let txt = gutil_char(key);
                    if (!txt || txt == key) {
                        txt = gutil_char('GAME_ERROR_1');
                    }
                    gui.loading(false);
                    this.emit(GameEvent.JOIN_ROOM_ERROR);
                    this.detailExitGame(txt);
                }
                break;
            case GameResp.REQUEST_ROOM: // 请求配桌
                warn(`============配桌 code:${rspData.result}============`)
                if (rspData.result === 0) {
                    //停止检测超时
                    this.__stopCheckTimeOut();
                    this.emit(GameEvent.REQUEST_ROOM, rspData);
                } else {
                    let key = 'GAME_ERROR_' + rspData.result;
                    let txt = gutil_char(key);
                    if (!txt || txt == key) {
                        txt = gutil_char('GAME_ERROR_1');
                    }
                    gui.loading(false);
                    this.emit(GameEvent.REQUEST_ROOM_ERROR);
                    this.detailExitGame(txt);
                }
                break;
            case GameResp.LEAVE_ROOM: // 离开房间
                //停止检测进房超时
                this.__stopCheckTimeOut();
                //重置退桌次数
                this._sendCurrowNum[this._keyMap.ExitRoom] = 0;
                //关闭网络loading
                gui.loading(false);
                if (rspData.result == 0) {
                    Cache.User.LoginRoomState = false;
                    this.emit(GameEvent.LEAVE_ROOM, rspData);
                    GameCache.game._set(SubGameCache.GAME_TABLEID, 0)
                } else {
                    warn(`============离开房间失败 code:${rspData.result}============`)
                    let key = 'GAME_ERROR_' + rspData.result;
                    let txt = gutil_char(key);
                    if (!txt || txt == key) {
                        txt = gutil_char('GAME_ERROR_1');
                    }
                    gui.showTips(txt);
                    this.emit(GameEvent.LEAVE_ROOM_ERROR);
                }
                // gui.showTips('退出房间：' + GameCache.game._get(SubGameCache.GAME_TABLEID));
                break;
            case GameResp.GAMENOTIFICATION_PUSH: // 踢出房间广播
                warn("============踢人广播============", rspData)
                if (rspData) {
                    if (rspData?.action != GameActionType.TIMEOUT_TIPS) {
                        warn(">>>登录房间状态===>false");
                        this.__stopCheckTimeOut();
                        this.__initTimeOutNum();
                        Cache.User.LoginRoomState = false;
                        GameCache.game._set(SubGameCache.GAME_TABLEID, 0)
                    }
                    if (rspData?.action == GameActionType.RETIRE_ALLOC) {
                        warn(">>>进入房间退休换桌机制，等待连回来===>");
                    } else if (rspData?.action == GameActionType.RETIRE_KICK) {
                        warn(">>>server踢人===>");
                        let key = 'SERVER_LOSE';
                        gui.alert({
                            content: gutil_char(key)[0],
                            enableClose: false,
                            ok: {
                                text: gutil_char('OK'),
                                cb: () => {
                                    jumpToExit(gutil_char(key)[1]);
                                }
                            }
                        }, PRIORITY.ALERT, 'KICK');
                        break;
                    }
                }
                this.emit(GameEvent.GAMENOTIFICATION_PUSH, rspData);
                // gui.showTips('踢出房间：' + GameCache.game._get(SubGameCache.GAME_TABLEID));
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
            case GameResp.REQUEST_USER_BALANCE: {
                gui.loading(false);
                GameCache.game._set(SubGameCache.BALANCE, rspData.balance);
                this.emit(GameEvent.REQUEST_USER_BALANCE, rspData.balance);
            }
                break;
            case GameProto.GetPropPush:
                // this.notifyGetProps(rspData as ccgame.client_proto.GetPropPush);
                break;
            case GameResp.LEVEL_TABLE_INFO:
                this.emit(GameEvent.LEVEL_TABLE_INFO, rspData);
                break;
            case GameResp.GET_USER_INFO:
            case GameResp.GET_USER_INFO_BY_FIELD:
                if (rspData && rspData.result == 0 && rspData.uid == Cache.User.getUID()) {
                    let arr = rspData.field_value_list || [];
                    let user = GameCache.game._get(SubGameCache.USER_INFO);
                    for (let i = 0; i < arr.length; i++) {
                        let field = arr[i].field;
                        if (field == EUserField.AVATAR) {
                            user.avatar = arr[i].str_val != null ? arr[i].str_val : user.avatar;
                        } else if (field == EUserField.NICKNAME) {
                            user.nick = arr[i].str_val != null ? arr[i].str_val : user.nick;
                        } else if (field == EUserField.GENDER) {
                            user.sex = arr[i].int_val != null ? arr[i].str_val : user.sex;
                        }
                    }
                }

                this.emit(GameEvent.UPDATE_USER_INFO);
                break;
            case GameResp.UPDATE_USER_INFO:
                this.emit(GameEvent.FIELD_USER_INFO, rspData);
                if (rspData && rspData.result == 0 && rspData.uid == Cache.User.getUID()) {
                    for (let i = 0; i < this._fieldUserInfoList.length; i++) {
                        let field = this._fieldUserInfoList[i].field;
                        if (field == EUserField.AVATAR) {
                            this.emit(GameEvent.UPDATE_USER_AVATAR);
                        } else if (field == EUserField.NICKNAME) {
                            this.emit(GameEvent.UPDATE_USER_NICKNAME);
                        } else if (field == EUserField.GENDER) {
                            this.emit(GameEvent.UPDATE_USER_GENDER);
                        }
                    }
                }
                this._fieldUserInfoList = [];
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
                this.__stopCheckTimeOut();
                this.__initTimeOutNum()
                Cache.User.LoginRoomState = false;
            default:
                break;
        }
    }

    /**子游戏请求游戏配置 */
    requestGameConfig(id: any) {
        log(`requestGameConfig _isHasLevelConfig = ${this._isHasLevelConfig} LoginRoomState = ${Cache.User.LoginRoomState}`);
        if (!this._isHasLevelConfig || !Cache.User.LoginRoomState) {///非首次不超时
            //显示进入Loading
            gui.loading({ forever: true, block: true }, PRIORITY.NET);
            //次数计次
            this._sendCurrowNum[this._keyMap.GetConfig] = this._sendCurrowNum[this._keyMap.GetConfig] + 1;
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

        let agency_id = Cache.User.getAgencyId();
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMALLOC;
        let ctype = room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_CONFIG_REQ;
        let param = {
            game_id: id,
            agency_id,
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
        this._sendCurrowNum[this._keyMap.MatchTable] = this._sendCurrowNum[this._keyMap.MatchTable] + 1;

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
            reason: data.reason,
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
        } else {
            GameCache.game._set(SubGameCache.GAME_DEST, this._curJoinRoomData.svid);
        }
        //显示进入Loading
        gui.loading({ forever: true, block: true }, PRIORITY.NET);
        //加入次数计次
        this._sendCurrowNum[this._keyMap.JoinRoom] = this._sendCurrowNum[this._keyMap.JoinRoom] + 1;

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
        //显示进入Loading
        gui.loading({ forever: true, block: true }, PRIORITY.NET);
        //加入次数计次
        this._sendCurrowNum[this._keyMap.ExitRoom] = this._sendCurrowNum[this._keyMap.ExitRoom] + 1;
        //开启超时检测
        this.__stopCheckTimeOut();
        let self = this;
        this._handlerSendTimeOut.ExitRoom = this.addScheduler(this._sendTimeOut, () => {
            if (isValid(self) && self._inGame) {
                //开启加入超时检测
                self.__exitRoomOutTime();
            }
        })

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

    /** CC_GAME_RESET_BALANCE_REQ重置用户余额, 仅试玩平台使用 */
    requestResetUserBalance() {
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER;
        let ctype = game_base_proto.CCGAME_MSGID.CC_GAME_RESET_BALANCE_REQ;
        gui.loading({ ts: 10, block: true }, PRIORITY.NET);
        gnet.send(GameReq.REQUEST_USER_BALANCE, stype, ctype, {
            dstid: GameCache.game._get(SubGameCache.GAME_DEST),
        });
    }

    /** 请求场次桌子列表 */
    requestLevelTableInfo(game_id: number, level: number, record_num: number, self_tid?: number) {
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMALLOC;
        let ctype = room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_TABLE_INFO_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game_id,
            level,
            self_tid,
            record_num,
            self_svid: this._curJoinRoomData.svid,
        }

        gnet.send(GameReq.LEVEL_TABLE_INFO, stype, ctype, param);
    }

    /** 获取玩家游戏信息   已弃用 */
    requestUserInfo(game_id: number) {
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_GAME_USERINFO;
        let ctype = game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_GET_USERINFO_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game_id,
        }

        gnet.send(GameReq.GET_USER_INFO, stype, ctype, param);
    }

    /** 获取玩家游戏部分信息   field_list可不传  不传就是请求所有用户信息 */
    requestUserInfoByField(game_id: number, field_list?: EUserField[]) {
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_GAME_USERINFO;
        let ctype = game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_GET_USERINFO_BYFIELD_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game_id,
            field_list,
        }

        gnet.send(GameReq.GET_USER_INFO_BY_FIELD, stype, ctype, param);
    }

    /** 更新玩家游戏信息 */
    requestUpdateUserInfo(game_id: number, field_value_list: Array<IUpdateGameUserInfoData>) {
        this._fieldUserInfoList = field_value_list || [];
        let stype = game_base_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_GAME_USERINFO;
        let ctype = game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_UPDATE_USERINFO_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game_id,
            field_value_list,
            svid: this._curJoinRoomData.svid,
        }

        gnet.send(GameReq.UPDATE_USER_INFO, stype, ctype, param);
    }
}


export const gameMgr: GameManager = GameManager.instance; 