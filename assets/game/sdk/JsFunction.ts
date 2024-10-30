/*
 * @Description:
 * @Author: zy
 * @Date: 2021-04-25 15:50:33
 * @Reference:
 */

import { Director, director, game, log } from "cc";
import { eventDispatcher, gnet, gui, valueof, valueset } from "../../framework/ge";
import { AppEvent } from "../common/AppEvent";
import { AdEvent, SdkEvent } from "./interface";

export class JsFunction {
    private static _instance: JsFunction;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new JsFunction();
        return this._instance;
    };

    constructor() {
    };

    public start = false;

    all(link: string, ...parms: any[]) {
        link = link.replace('gjsf.', '');
        if (!link) return false;
        let func = valueof(this, link);
        console.log('[JsFunction]', link);
        if (typeof func === 'function') return func.call(this, ...parms);
        return false;
    };

    onstart() {
        eventDispatcher.dispatchEvent(SdkEvent.START);
    };

    login(isError: boolean, type: number, ...parms: any[]) {
        let data: Record<string, any> = { isError, type };
        for (let index = 0; index < parms.length; index += 2) {
            let key = parms[index];
            let value = parms[index + 1];
            if (typeof key != 'undefined' && typeof value != 'undefined') {
                data[key] = value;
            }
        }
        eventDispatcher.dispatchEvent(SdkEvent.LOGIN, data);
    };


    backToLogin() {
        gui.closeLayer('all');
        gui.closeAlert('all');
        gnet.close();
        director.loadScene('scbegin');
        eventDispatcher.dispatchEvent(AppEvent.GLOBAL_MSG_STATE, false);
    }

    leftTime(isError: boolean, ts: number) {
        let data: Record<string, any> = { isError, ts };
        if (!isError) {
            eventDispatcher.dispatchEvent(SdkEvent.LEFT_ONLINE_TIME, data);
        }
    }

    gameChong(isError: boolean) {
        log("sxsdk close shop.");
        director.once(Director.EVENT_AFTER_UPDATE, () => {
            gui.closeAlert('SHOP');
        });
    }

    watchAd(ad: AdEvent, isEnded: boolean) {
        eventDispatcher.dispatchEvent(ad, isEnded);
    }

    end() {
        game.end();
    }
}

export const gjsf: JsFunction = JsFunction.instance;
valueset(globalThis, 'gjsf', gjsf);