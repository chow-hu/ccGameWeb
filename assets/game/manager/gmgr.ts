/*
 * @Description:
 * @Author: zy
 * @Date: 2021-08-13 10:32:07
 * @Reference:
 */

import { valueset } from "../../framework/ge";
import { IManager } from "./IManager";


export class GMGR {
    private static _instance: GMGR;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GMGR();
        valueset(globalThis, 'gmgr', this._instance);
        return this._instance;
    };
    private _list: Record<string, IManager> = {};

    get<T extends IManager>(key: any) {
        let _name: any = key;
        if (typeof key === 'function' && key.toString().indexOf('class') !== -1) {
            _name = key["name"];
        }
        return this._list[_name] as T;
    }

    add(key: any, mgr: IManager) {
        let _name: any = key;
        if (typeof key === 'function' && key.toString().indexOf('class') !== -1) {
            _name = key["name"];
        }
        this._list[_name] = mgr;
    }

    clear(key: any) {
        let _name: any = key;
        if (typeof key === 'function' && key.toString().indexOf('class') !== -1) {
            _name = key["name"];
        }
        this._list[_name] = null;
    }

}
export const gmgr: GMGR = GMGR.instance;
