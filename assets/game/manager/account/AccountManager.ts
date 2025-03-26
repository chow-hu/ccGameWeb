
/*
 * @Description: 账号管理器(避免循环引用的调用方式:gmgr.get<AccountManager>(AccountManager))
 * @Author: zy
 * @Date: 2021-04-26 19:08:46
 * @Reference: 
 */
import { log, randomRangeInt, warn } from "cc";
import { HTML5, NATIVE } from "cc/env";
import { NetMsg, NetState, PRIORITY, client_proto, gnet, gui, gutil_char, account_proto, proto_asset, NetFailure } from "../../../framework/ge";
import { StorageData } from "../../../framework/storage/StorageData";
import { Cache } from "../../cache/Cache";
import { AppConst } from "../../common/AppConst";
import { AppEvent } from "../../common/AppEvent";
import { SdkEvent } from "../../sdk/interface";
import { sdk } from "../../sdk/sdk";
import { IManager } from "../IManager";
import { GameCache } from "../game/GameCache";
import { EMgr } from "../interface";
import { AccountPB, AccountProto, LoginEvent, UserConfig } from "./interface";
import { Utils } from "../../common/Utils";
import { showTip } from "../../common/custom-general";
import { gmgr } from "../gmgr";
import { ReportManager } from "../report/ReportManager";
import { jumpToExit } from "../subGameManager/utils";
import { User } from "../../cache/User";
import _ from "lodash";

export class AccountManager extends IManager {
    private static _instance: AccountManager;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AccountManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.ACCOUNT)
        this.onproto([AccountPB.RESP.Login, AccountPB.PUSH.KickPush, AccountProto.USERBULLETIN, AccountPB.PUSH.ForbitPush, AccountPB.RESP.Asset]);
        this.on([AppEvent.SYS_NET_READY, AppEvent.SYS_NET_CONNECT_FAILED, AppEvent.SYS_NET_CLOSED]);
    };

    private _loaded = false;
    private _loginTime: number = -1;
    private _isFirstLogin: boolean = true;

    /** 收到pb消息 */
    onRecv(event: string, data: NetMsg) {
        let rsp: NetMsg = data;
        switch (event) {
            case AccountPB.RESP.Login: {
                this.respNetLogin(rsp);
            } break;
            case AccountPB.PUSH.KickPush:
            case AccountPB.PUSH.ForbitPush: {
                let key = 'TOKEN_LOSE';
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
                // let result = rsp?.data?.result || 0;
                // this.emit(LoginEvent.PUSH_KICKPUSH, result);
            } break;
            /*  case AccountPB.PUSH.ForbitPush: {
                 gnet.close();
                 // this._alertLogout("sameless_14", 1);
                 // 被封号了
                 this.emit(LoginEvent.PUSH_FORBITUSERPUSH);
             }
                 break; */
            case AccountProto.USERBULLETIN: {
                this._alertBulletin(rsp)
            } break;
            case AccountPB.RESP.Asset:
                console.log("收到个人资产信息", rsp.data);
                let assetdata = Utils.tableVerify(rsp.data);
                if (assetdata && assetdata.result == 0) {
                    let amount = Utils.numValueOf(assetdata.amount);
                    let coin = Utils.numValueOf(assetdata.coin);
                    let blance = amount + coin;
                    Cache.User.getUser().balance = blance;
                } else {
                    warn("查询资产失败，result=", assetdata);
                }
                break;
            default:
                break;
        }
    };
    /** 收到事件消息 */
    onEvents(event: string, data: any) {
        switch (event) {
            case AppEvent.SYS_NET_READY:
                this.startLogin();
                break;
            case SdkEvent.LOGIN:
                // this._onJSFLogin(data);
                break;
            case AppEvent.SYS_NET_CLOSED:
            case AppEvent.SYS_NET_CONNECT_FAILED:
                if (this._isFirstLogin) {
                    if (globalThis.confirm(gutil_char('NET_RECONNECT_FAILED'))) {
                        gmgr.get<AccountManager>(EMgr.ACCOUNT).startConnect()
                    }
                    return
                }
                Cache.User.setLoginState(AppConst.UserLoginState.Offline);
                Cache.User.LoginRoomState = false;
                if (event == AppEvent.SYS_NET_CONNECT_FAILED) {
                    gui.loading(false, PRIORITY.NET);
                    gui.alert({
                        content: gutil_char('NET_RECONNECT_FAILED'),
                        enableClose: false,
                        ok: {
                            text: gutil_char('OK'),
                            cb: () => {
                                if (data == NetFailure.NormalSocketClose) {
                                    this.loginLogic()
                                } else {
                                    gmgr.get<AccountManager>(EMgr.ACCOUNT).startConnect()
                                }
                            }
                        }
                    }, PRIORITY.NET, 'NET');
                }
                break;
            default:
                break;
        }
    };

    loginLogic() {
        log("bobo ---------------loginLogic");

        if (Cache.User.getToken()) {
            this.startConnect();
        } else {
            log("token is null");
        }
    }

    /** 开启连接 */
    startConnect() {
        if (gnet.state == NetState.WAITING || gnet.state == NetState.READY) {
            return;
        }
        this._loaded = false;
        let urls = Cache.User.getAgent();
        let aUrl = urls[randomRangeInt(0, urls.length)];
        // gui.loading({ forever: true, type: 0 }, PRIORITY.NET);
        if (aUrl) {
            gnet.connect(aUrl, false);
        } else {
            log("agnet is null");
        }
    }

    alertFail() {
        if (this._isFirstLogin) {
            if (globalThis.confirm(gutil_char('LOGIN_FAILED'))) {
                this.startLogin();
            }
            return
        }
        gui.loading(false, PRIORITY.NET);
        gui.alert({
            content: gutil_char('LOGIN_FAILED'),
            enableClose: false,
            ok: {
                text: gutil_char('OK'),
                cb: () => {
                    this.startLogin();
                }
            }
        }, PRIORITY.NET, 'NET');
    }

    /** 开始登录 */
    startLogin() {
        this._loginTime = this.addSchedulerOnce(15, () => {
            this.alertFail();
        })
        GameCache.game.setReconnData(null);
        log("bobo--------------token ", atob(Cache.User.getToken()));
        let param = {
            token: Cache.User.getToken(),
            trans: null,
        }
        log("startLogin 开始登录 param= ****************************", param);
        gui.loading({ forever: true, type: 0 }, PRIORITY.NET);
        gnet.send(AccountPB.REQ.Login, client_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ACCOUNT, account_proto.LOGIN_SUB_MSG_ID.ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_REQ, param);
    }



    //登录/注册后返回的结果
    respNetLogin(receiveData: NetMsg) {
        gui.loading(false, PRIORITY.NET);
        log("登录/注册后返回的结果", receiveData);
        this.stopSchedulerOnce(this._loginTime);
        //同步时间戳
        StorageData.sysTs = receiveData.data?.timestamp;
        if (receiveData.data.result !== 0) {
            // 说明token过期了
            this._onMessageLoginFail(receiveData);
        } else {
            this._onMessageLoginSuccess(receiveData);
        };
    }


    /** 统一处理登录成功 */
    private _onMessageLoginSuccess(receiveData: NetMsg) {
        gnet.ready(true);
        if (!this._loaded) {
            StorageData.reset();
        }
        if (receiveData.data && receiveData.data.uid) {
            gnet.user.uid = receiveData.data.uid;
            StorageData.user.setXXTeam(receiveData.data.uid);
        } else {
            StorageData.user.setXXTeam(null);
        }
        Cache.User.initLoginData(receiveData?.data);
        Cache.User.setLoginState(AppConst.UserLoginState.LoginSuccess);
        // 保存用户信息
        console.log("bobobobobo 看看数据-------------- ", receiveData?.data);
        let data = _.cloneDeep(receiveData?.data) as UserConfig;
        if (data) {
            data.balance = this._isFirstLogin ? data.balance : Cache.User.getBalance();
        }
        Cache.User.saveUser(data);
        // gmgr.get<ReportManager>(EMgr.REPORT).initTrack(Cache.User.getUser().game, Cache.User.getUser().uid);
        // 广播登录成功的事件
        this.emit(LoginEvent.LOGIN_SUCCESS);
        this._isFirstLogin = false;
        //请求通用队列
        // this._reqCommSuccessQuene();
        if (NATIVE) {
            // 请求af相关参数
            sdk.getDeepLinkIDStr();
        } else if (HTML5) {
            //H5数据上报
            let H5Data = this.H5kUAIFun();
            log("####H5DataH5Data###########HTML5HTML5HTML5 H5Data", H5Data);
            let data = {
                invite_code: StorageData.local.get("INVITE_CODE", ""),
                af_id: H5Data.afId,
                fb_id: H5Data.fbid,
                channel: "default",
                fbc: H5Data.fbc,
                fbp: H5Data.fbp,
                ua: window.navigator.userAgent,
            };
            log("###############HTML5HTML5HTML5 request", data);
        } else {  //  todo 模拟器测试用上报数据,测试用代码,后续删除
            let param = {
                invite_code: StorageData.local.get("INVITE_CODE", ""),
                af_id: "AFID",
                fb_id: "FBID",
                channel: 'channel',
                fbc: "msgObject.af_sub3",
                fbp: "msgObject.af_sub4",
                ua: "msgObject.af_sub5",
            };
            log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>", param);
        }

        //如果在游戏内 则check重连

    }
    //登录成功后 请求的通用队列 必定会请求
    private _reqCommSuccessQuene() {
        this.reqAsset();
    }

    /** 统一处理登录失败 */
    private _onMessageLoginFail(receiveData: NetMsg) {
        log(`LoginFail: 当前登录失败的事件返回:===>失败`, receiveData);
        // showTip(`login fail`);
        // 广播登录失败的事件
        this.emit(LoginEvent.LOGIN_FAIL);
        // gnet.close();
        this.alertFail();
        // if (receiveData.data.result == client_proto.LOGIN_ERR_CODE.LOGIN_ERR_TOKEN_INVALID) {
        //     // token无效,向php请求新的token
        //     gui.showTips(gutil_char('LOGIN_FAILED'));
        //     gnet.close();

        // } else if (receiveData.data.result == client_proto.LOGIN_ERR_CODE.LOGIN_ERR_FORBIDDEN) {
        //     // 封号
        //     gnet.close();
        //     gui.showTips(gutil_char('ACCOUNT_BLACK'));
        // } else if (receiveData.data.result == client_proto.LOGIN_ERR_CODE.LOGIN_ERR_USER_NOTEXIST) {
        //     // 账号不存在
        //     gnet.close();
        //     // sdk.login('', 'login');
        // } else if (receiveData.data.result == client_proto.LOGIN_ERR_CODE.LOGIN_ERR_PARAM_INVALID) {
        //     // 参数错误
        //     // this._alertLoginInvParam()
        //     gnet.close();
        // }

    }



    //H5版快捷方式
    H5kUAIFun() {
        if (HTML5 && window.location && window.location.href) {
            function queryURLparams(url) {
                let obj = {}
                if (url.indexOf('?') < 0) return obj
                let arr = url.split('?')
                url = arr[1]
                let array = url.split('&')
                for (let i = 0; i < array.length; i++) {
                    let arr2 = array[i]
                    let arr3 = arr2.split('=')
                    obj[arr3[0]] = arr3[1]
                }
                return obj
            }
            // let url = window.location.href + "?args=cGtuPWNvbS55YW53YW4uaWlkZTthZklkPTE3MTQzOTQyNDY5MjUtNzM0MTcyODg3NDEzMzczNjQ4"
            // let urlObj = queryURLparams(url);
            let urlObj = queryURLparams(window.location.href);
            if (urlObj['args']) {
                var decodedString = atob(urlObj['args']);
                // 打印解码后的字符串
                //解析字符串的数据
                let strArr = decodedString.split(";");
                let FbObject = [];
                let fbid, fbc, fbp, afId, pkn, gid;
                fbid = fbc = fbp = afId = pkn = gid = "";
                for (let i = 0; i < strArr.length; i++) {
                    let valueArr = strArr[i].split("=");
                    FbObject.push({
                        key: valueArr[0],
                        value: valueArr[1],
                    })
                    if (valueArr[0].trim() == "pixelid") {
                        fbid = valueArr[1]
                    }
                    if (valueArr[0].trim() == "_fbc") {
                        fbc = valueArr[1]
                    }
                    if (valueArr[0].trim() == "_fbp") {
                        fbp = valueArr[1]
                    }
                    if (valueArr[0].trim() == "afId") {
                        afId = valueArr[1]
                    }
                    if (valueArr[0].trim() == "pkn") {
                        pkn = valueArr[1]
                    }
                    if (valueArr[0].trim() == "gid") {
                        gid = valueArr[1]
                    }
                }
                return { "fbid": fbid, "fbc": fbc, "fbp": fbp, "afId": afId, "pkn": pkn, "gid": gid };
            }
        }
        return { "fbid": "", "fbc": "", "fbp": "", "afId": "", "pkn": "", "gid": "" };
    }

    // 登录公告提示
    private _alertBulletin(rsp) {
        gui.alert({
            content: rsp.data.text,
            title: rsp.data.title,
            enableClose: false,
            ok: {
                text: gutil_char('OK'),
                cb: () => {
                }
            }
        }, PRIORITY.ALERT, 'BULLETIN');
    }

    /** 请求同步玩家资产 */
    reqAsset() {
        let dsttype = client_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ASSET;
        let ctype = proto_asset.ASSET_CMD.ASSET_CMD_GET_ASSET;
        var userId = Cache.User.getUID();
        gnet.send(AccountPB.REQ.Asset, dsttype, ctype, {
            uid: userId,
        });
    }
}

export const accountMgr: AccountManager = AccountManager.instance;