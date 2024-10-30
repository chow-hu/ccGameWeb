/*
 * @Description:
 * @Author: zy
 * @Date: 2024-03-06
 * @Reference:
 */

import md5 from "md5";
import { IFileUtils } from "../../../framework/ge";
import { StorageData } from "../../../framework/storage/StorageData";
import { AdEvent } from "../interface";

export enum ESDKType {
    // ANDROID
    ANDROID = "ANDROID",
    HANDMOBI = "HANDMOBI",
    XIAOMI = "XIAOMI",
    HUAWEI = "HUAWEI",
    OPPO = "OPPO",
    VIVO = "VIVO",
    BAIDU = "BAIDU",
    UC = "UC",
    YYB = "YYB",
    MEIZU = "MEIZU",
    LENOVO = "LENOVO",
    QIHOO = "QIHOO",
    M4399 = "M4399",
    BILIBILI = "BILIBILI",
    SOGOU = "SOGOU",
    SAMSUNG = "SAMSUNG",
    GOOGLE = "GOOGLE",
    // IOS
    IOS = "IOS",
    // H5
    WEB = "web",
    // 微信
    WX_GAME = "WX_GAME",
    WX_GAME_IOS = "WX_GAME_IOS",
}


// 登录类型
export enum ELoginType {
    WEB = 1,
    SDK = 2,
    WX_GAME = 3,
}


// 平台
export enum EAccountPlatform {
    WEB = 'web',
    IOS = 'ios',
    ANDROID = 'android'
}

export abstract class ISDK implements IFileUtils {
    constructor() {

    }
    protected msglist: string[] = [];

    public get platForm(): string {
        return 'web';
    };

    public get device(): string {
        let deviceID = StorageData.local.get("DeviceID", '');
        if (deviceID == null || deviceID == "") {
            deviceID = '_' + md5(new Date().getTime() + Math.random() * 10000);
            StorageData.local.set("DeviceID", deviceID);
        }
        return deviceID;
    };

    public get gameId(): string {
        return '1'
    };

    public get appId(): string {
        return '1'
    };

    public get versionCode(): string {
        return '1'
    };

    public get sdkType(): string {
        return '1'
    };

    public get channel(): string {
        return ''
    };

    public get pkgName(): string {
        return ''
    }

    // 广告id
    public get adid(): number {
        return 1
    };

    public get loginType(): number {
        return ELoginType.WEB
    };

    public get loginExtra(): object {
        return {}
    };

    msgTest(msg: string): boolean {
        return this.msglist.indexOf(msg) > -1;
    };

    public share(callback: (res: boolean) => void) {

    }

    public getAFIDStr() {

    }

    public getDeepLinkIDStr() {

    }

    public setOrientation(type: string) {

    }

    public getMediaVolume() {

    }

    public abstract crashReport(msg: string): void;
    public abstract setUser(user: string): void;
    public abstract init(): void;
    public abstract isStart(): boolean;
    public abstract login(type: string, jsbcb: string, force?: boolean): void;
    public abstract logout(jsbcb: string): void;
    public abstract shop(goodsOrAppleId: string, goodsName: string, money: number, orderId: string, sid: string, sname: string, jsbcb: string, ext?: any): boolean;
    public abstract showAd(ad: AdEvent): void;

    public abstract onMsg(msg: string, data?: any): void;
    public abstract writeToFile(filePath: string, fileData: any, isArrayBuffer: boolean, isRemove: boolean): boolean;
    public abstract readFromFile(filePath: string, isArrayBuffer: boolean): boolean | Uint8Array | string;
    public abstract cleanOldAssets(): void;
    public abstract getGoodsId(id: number): string
}