import { log, warn } from 'cc';
import { mixins, setValueByKey, valueof, valueset } from '../../framework/ge';
import { AppConst } from "../common/AppConst";
import { Utils } from "../common/Utils";
import { GameConfig, LoginEvent, UserConfig } from "../manager/account/interface";
import { CacheBase } from "./CacheBase";
import _ from 'lodash';

/**
 * Name = User
 * URL = db://assets/game/cache/User.ts
 * Time = 2024.4.2 17:03:04 GMT+0800 (中国标准时间)
 * Author = aby
 * 用户数据缓存
 */
export class User extends CacheBase {
    private _loginState = 0;
    /** 登录游戏房间状态 */
    private _loginRoomState = false;

    private _dataContinar: GameConfig;
    /** 用户基础信息 */
    private _userInfo = {};
    /** 资产信息 类型:PropertyType */
    private _propertyInfo: { [key: number]: number } = {};


    /** 登录成功时间 */
    private _loginSuccessTime: number = null;

    //实例化
    constructor() {
        super("User");
        this.initSubClass()
    };
    /** 初始化附加类 */
    public initSubClass() {
        this.print(">>>>初始化附加类<<<<")
    }

    /** 设置玩家游戏房间登录状态 */
    set LoginRoomState(param: boolean) {
        this._loginRoomState = param || false;
    }
    /** 获取玩家游戏房间登录状态 */
    get LoginRoomState(): boolean {
        return this._loginRoomState
    }

    //设置玩家的登录状态
    setLoginState(param) {
        let lastLoginState = this._loginState;
        this._loginState = param;
        //状态改变通知
        //登录成功
        if (param == AppConst.UserLoginState.LoginSuccess && lastLoginState != AppConst.UserLoginState.LoginSuccess) {
            this.LoginRoomState = false;
            this.emit(LoginEvent.LOGIN_STATE_CHANGE, this._loginState);
        }
        //退出登录状态
        if (lastLoginState == AppConst.UserLoginState.LoginSuccess && param != AppConst.UserLoginState.LoginSuccess) {
            this._loginSuccessTime = null;
            this.LoginRoomState = false;

            this.emit(LoginEvent.LOGIN_STATE_CHANGE, this._loginState);
        }
    }

    //获取玩家的登录状态
    getLoginState() {
        return this._loginState
    }

    /** 获取玩家成功登录的时间 可能为空 */
    getLoginSuccessTime(): number {
        return this._loginSuccessTime
    }

    /** 更新登录信息 */
    initLoginData(body) {
        if (!body) {
            return;
        }
        let aBody = Utils.tableVerify(body);
        const keys = Object.keys(aBody);
        this._userInfo = {};
        this._propertyInfo = {};
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (key && key != null) {
                this._userInfo[key] = aBody[key];
            }
        }
    }

    /**
     * 获取玩家基础信息
     * @param key 键 字符串
     */
    getUserInfoProp(key: string = null) {
        if (key) {
            if (Utils.isNull(this._userInfo[key])) {
                return null;
            }
            return this._userInfo[key];
        } else {
            return this._userInfo;
        }
    }

    /**
     * 获取玩家具体资产信息
     * @param propertype 资产类型string 详见AppConst.PropertyType
     * @returns string 资产数量
     */
    getUserPropertyByType(propertype: number): string {
        if (this._propertyInfo[propertype]) {
            return this._propertyInfo[propertype].toString();
        }
        return "0";
    }

    /**
     * 获取玩家显示的资产信息(已经)
     * @param propertype 资产类型string 详见AppConst.PropertyType
     * @returns string 资产数量
     */
    getShowPropertyByType(propertype: number): string {
        let money = Utils.formatRespMoney(this.getUserPropertyByType(propertype));
        let moneySaveDot = Utils.numSubString(money, 2);
        return Utils.stringMatchStr(moneySaveDot);
    }

    /**
     * @description 保存一些数据
     * @param data 
     */
    saveSomeData(data: GameConfig) {
        if (!data) return;
        this._dataContinar = data;
    }

    /**
     * @description 保存token和agent
     */
    saveTokenAndAgent(data: any) {
        if (!data) return;
        if (this._dataContinar == null) {
            this._dataContinar = {} as GameConfig;
        }
        this._dataContinar.token = data.token;
        this._dataContinar.agent = data.agent;
    }

    /**
     * @description 保存用户信息
     * @param data 用户信息
     * @returns 
     */
    saveUser(data: UserConfig) {
        if (!data) return;
        this._dataContinar.user = this._dataContinar.user || {} as UserConfig;
        setValueByKey(data, this._dataContinar.user)
        // 组装一下session数据
        let asession = {
            token: this._dataContinar.user.token,
            agency: this._dataContinar.user.agency,
            username: this._dataContinar.user.username,
            platform: this._dataContinar.user.platform,
        }
        this._dataContinar.user.session = JSON.stringify(asession);
    }


    /** 获取登录的Token */
    getToken() {
        let info = this._dataContinar.token;
        if (info) {
            return info || null;
        }
        return null;
    }

    /** 获取登录的agent */
    getAgent() {
        let info = this._dataContinar.agent;
        if (info) {
            return info || null;
        }
        return null;
    }

    getUser(): UserConfig {
        let user = this._dataContinar.user;

        if (user) {
            return user || null;
        }
        return null;
    }

    /**
     * 获取session
     */
    getSession() {
        let info = this._dataContinar.user.session;
        if (info) {
            return info || null;
        }
        return null;
    }

    /**
     * 获取用户真实Uid
     * @returns number
     */
    getUID(): number | null {
        let info = this._dataContinar.user.uid;
        log("bobo 获取用户真实Uid ===== ", info);
        if (info) {
            return Number(info) || 0;
        }
        return 0;
    }

    /**
     * @description 获取资产
     * @returns 
     */
    getBalance(): number {
        let info = this._dataContinar.user.balance;
        if (info) {
            return Number(info) || 0;
        }
        return 0;
    }
}