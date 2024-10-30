/*
 * @Description: ui-link(待扩展...)
 * @Author: zy
 * @Date: 2024-03-07 14:31:29
 * @Reference: 
 */

import { gui } from "../../framework/ge";


export const HeadLayers = [1];//前往首页的
class UILink {
    private static _instance: UILink;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new UILink();
        (globalThis as any).uiLink = this._instance;
        return this._instance;
    };

    private _data?: { ids: number[], cb?: Function, parm?: any };
    private _hold?: { layerName: string };

    open(p: string | number, cb?: Function, parm?: any) {

    }

    private _gotolink() {
        let linkId = this._data?.ids.shift();
        if (!linkId) {
            this._data?.cb?.();
            delete this._data;
            return;
        }
        this._link(linkId, this._data?.parm);
    }

    private _link(linkId: number, parm?: any) {

    }


    public next(name: string, force = false) {
        if (!this._data || !this._hold) {
            return;
        }
        if (this._hold.layerName === name) {
            this._gotolink();
            delete this._hold;
        } else {
            if (!force) delete this._hold;
        }
    }

    public checkLink(linkId: number, bTip = false): boolean {
        return true;
    }


    public check(p0: number | string, bTip = false, idx?: number): boolean {
        return false
    }

    clear() {
        delete this._data;
        delete this._hold;
    }
}

export const uiLink = UILink.instance;