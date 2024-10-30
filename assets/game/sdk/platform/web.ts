/*
 * @Description:
 * @Author: zy
 * @Date: 2024-03-06
 * @Reference:
 */

import { BUILD } from "cc/env";
import { gui, valueof } from "../../../framework/ge";
import { AdEvent, SdkMsg } from "../interface";
import { EAccountPlatform, ELoginType, ESDKType, ISDK } from "./ISdk";
export class SdkWeb extends ISDK {
    constructor() {
        super();
    };
    protected msglist: string[] = [];

    public get platForm(): string {
        return EAccountPlatform.WEB;
    };

    public get channel(): string {
        return 'web'
    };

    public get gameId(): string {
        return '1';
    };

    public get appId(): string {
        return '1';
    };

    public get versionCode(): string {
        return '1';
    };

    public get sdkType(): string {
        return ESDKType.WEB;
    };

    public get loginType(): number {
        return ELoginType.WEB;
    };

    public setUser(user: string): void {

    }

    init() {
        valueof(globalThis, 'gjsf').start = true;
    };

    isStart() {
        return true;
    }

    login(type: string, jsbcb: string, force?: boolean) {
        valueof(globalThis, 'gjsf').all(jsbcb, false, type, 'deviceID', this.device);
    };

    logout(jsbcb: string) {
        valueof(globalThis, 'gjsf').all(jsbcb, false);
    };

    public shop(goodsOrAppleId: string, goodsName: string, money: number, orderId: string, sid: string, sname: string, jsbcb: string, ext?: any): boolean {
        return false;
    }

    public getGoodsId(id: number): string {
        return "web";
    }

    crashReport(msg: string) {

    }

    onMsg(msg: string, data?: any) {
        switch (msg) {
            case SdkMsg.CLIP_BOARD:
                this._clipBoard(data);
                break;
            case SdkMsg.LEFT_ONLINE_TIME: {
                valueof(globalThis, 'gjsf').all('leftTime', false, 60 * 60);
            } break;
            case SdkMsg.AGE_INFO: {
                valueof(globalThis, 'gjsf').all('ageInfo', false, 18);
            } break;
            default:
                break;
        }
    };

    writeToFile(filePath: string, fileData: any, isArrayBuffer: boolean, isRemove: boolean): boolean {
        return false;
    };

    readFromFile(filePath: string, isArrayBuffer: boolean): string | boolean | Uint8Array {
        return false;
    };

    cleanOldAssets() {
        gui.showTips('修复成功！');
    }

    private _clipBoard = !BUILD ? (value: string) => {
        let textarea = document.createElement('textarea');
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        textarea.style.display = 'none';
        document.body.removeChild(textarea);
        gui.showTips('复制成功！');
    } : () => { };

    public showAd(ad: AdEvent) {
        valueof(globalThis, 'gjsf').all('watchAd', ad, true);
    }
}