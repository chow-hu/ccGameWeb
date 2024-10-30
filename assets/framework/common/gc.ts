import { sys } from "cc";
import { NATIVE } from "cc/env";

/*
 * @Description: 
 * @Author: zy
 * @Date: 2024-03-06 16:06:45
 * @Reference: 
 */
export class _GC_ {
    private static _instance: _GC_;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new _GC_();
        return this._instance;
    };

    private _dirty = false;

    public get dirty(): boolean {
        return this._dirty;
    }

    public set dirty(v: boolean) {
        this._dirty = v;
    }

    constructor() {
        setInterval(this._gc.bind(this), 10000)
    };

    do() {
        this._dirty = true;
    }
    private _gc() {
        if (this._dirty) {
            this._dirty = false;
            NATIVE && sys.garbageCollect();
        }
    }
}

export const gc = _GC_.instance;