import { IBundleOption } from "../../framework/asset/AssetsLoader";

/** 本地数据存储key */
export const StoreKey = {
    SYS_APP_AUDIO: 'sys_app_audio',
}


/** 系统常量 */
export namespace AppConst {
    /** 玩家登录状态 */
    export const UserLoginState = {
        None: 0, 			//没登录
        Reging: 1,		    //正在注册中
        Logining: 2,		//正在登录中
        LoginSuccess: 3,	//登录成功
        LoginFailed: 4,	    //登录失败
        Switching: 5,		//切换账户中
        Offline: 6,		    //网络断线
        Kicked: 7,			//被踢出房间
        MultiDeviceLogin: 8,	//异地登录
    };

    /** 登录类型（pb定义） */
    export const LoginType = {
        /** 默认:无 */
        LTD_NULL: 0,
        /** token登录 */
        LTD_TOKEN: 1,
        /** 账号密码登录 */
        LTD_PASSWORD: 2,
        /** 手机验证码登录 */
        LTD_CODE: 3,
        /** 游客登录 */
        LTD_GUEST: 4,
        /** 登出 */
        LTD_LOGOUT: 5,
    }

    /** 资产类型（pb定义） */
    export const PropertyType = {
        PROP_NULL: 0,
        /** 充值金 */
        PROP_AMOUNT: 1,
        /** 提现金 */
        PROP_COIN: 2,
        /** 总下注 */
        PROP_TOTALBET: 3,
        /** 总充值 */
        PROP_TOTALRECHARGE: 4,
        /** 充值金+提现金 */
        PROP_BALANCE: 5,
        /** 提现限额 */
        PROP_WITHDRAW_LIMIT: 6,
        /** 钻石 */
        PROP_DIAMOND: 7,
        /** 体验币 */
        PROP_EXP: 8,
        /** 练习币 */
        PROP_PRT: 9,
    }

    export const BUNDLEPATH = "/remote/";

    /** 平台分包包名配置 */
    export const PackageConf: { [key: string]: IBundleOption } = {
        /** 活动 */
        abActivity: { name: "abActivity", url: "", md5: "" },
    };
    /** 子游戏包名配置 */
    export const GameBundleConf: { [key: string | number]: IBundleOption } = {
        /** 游戏:Crash */
        101: { name: "abCrash", layer: "lyLoadingView", url: "", md5: "" },
        /** 游戏: AndarBahar */
        102: { name: "abAndarBahar", layer: "lyAndarLoading", url: "", md5: "", depends: ["abJackPot"] },
        /** 游戏:Jet */
        103: { name: "abJet", layer: "lyJetLoadingView", url: "", md5: "" },
        /** 游戏:UpDown */
        104: { name: "abUpDown", layer: "lyUpDownLoading", url: "", md5: "" },
        /** 游戏: teenpatti */
        201: { name: "teenpatti", scene: "teenpattiLoading", url: "", md5: "", depends: ['kbp_common'] },
        /**  游戏: 3patti */
        202: { name: "3patti", scene: "3pattiLoading", url: "", md5: "", depends: ['kbp_common'] },
    }
    /** 附属包配置 */
    export const SubBundleConf: { [key: string | number]: IBundleOption } = {
        /** 游戏: teenpatti */
        kbp_common: { name: "kbp_common", url: "", md5: "" },
        /** abJackPot */
        abJackPot: { name: "abJackPot", url: "", md5: "" },
    }

    /** 根据分包包名获取配置 */
    export const GetPackageConfByName = function (name): IBundleOption {
        for (let key in AppConst.PackageConf) {
            if (Object.prototype.hasOwnProperty.call(AppConst.PackageConf, key)) {
                let element = AppConst.PackageConf[key];
                if (element.name == name) {
                    return element;
                }
            }
        }
        return null;
    }
    /** 根据子游戏id获取子游戏 */
    export const GetGamePackageConfById = function (id): IBundleOption {
        id = Number(id);
        if (isNaN(id)) { return null; }
        return AppConst.GameBundleConf[id];
    }
    /** 根据附属包名获取配置 */
    export const GetSubPackageConfById = function (id): IBundleOption {
        return AppConst.SubBundleConf[id];
    }
}


