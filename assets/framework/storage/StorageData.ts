/*
 * @Description: 存储数据
 * @Author: zy
 * @Date: 2022-12-14 11:01:14
 * @Reference: 
 */
import { error, log, sys, warn } from 'cc';
import { PREVIEW } from "cc/env";
import md5 from 'md5';
import { valueset } from "../common/general";

/** 本地数据存储 */
class LocalStorage {
    constructor(name?: string) {
        if (name) this._host = name + '$';
    }

    private _host = '';
    private _key: string | null = null;
    private _iv: string | null = null;

    /**
     * 初始化密钥
     * @param key aes加密的key 
     * @param iv  aes加密的iv
     */
    init(key: string, iv: string) {
        this._key = md5(key);
        this._iv = md5(iv);
    }

    /**
     * 设置标识
     * @param id 
     */
    public setXXTeam(v: string) {
        if (v) {
            this._host = v + '$';
        } else {
            this._host = '';
        }
    }

    /**
     * 获取本地数据
     * @param key 
     * @param def 
     * @returns 
     */
    get<T>(key: string, def: T = null) {
        if (null == key) {
            console.error(`[${key}]存储的key不能为空`);
            return;
        }
        let newKey = this.getModifyKey(key);
        if (!PREVIEW) {
            newKey = md5(newKey);
        }
        let value: string | null = sys.localStorage.getItem(newKey);

        /** 注：可能为空字符串 */
        if (value == "null" || value == "undefined") {
            value = null;
        }
        if (null === value) {
            if (def != null) {
                return def;
            }
            return null;
        }

        if (typeof def === 'number') {
            return Number(value) || 0;
        }
        if (typeof def === 'boolean') {
            return "true" == String(value); // 不要使用Boolean("false");
        }
        if (typeof def === 'object') {
            try {
                return JSON.parse(value);
            }
            catch (e) {
                console.error(`[${key}]解析数据失败,str=` + value);
                return def;
            }

        }
        return value;
    }
    /**
     * 设置本地数据
     * @param key 
     * @param value
     * @returns 
     */
    set(key: string, value: any = null) {
        let newKey = this.getModifyKey(key);

        if (null == key) {
            console.error(`[${key}]存储的key不能为空`);
            return;
        }
        if (!PREVIEW) {
            newKey = md5(newKey);
        }
        if (null == value) {
            console.warn(`[${key}]存储的值为空，则直接移除该存储`);
            this.remove(key);
            return;
        }
        if (typeof value === 'function') {
            console.error(`[${key}]储存的值不能为方法`);
            return;
        }
        if (typeof value === 'object') {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
                console.error(`[${key}]解析失败，str = ${value}`);
                return;
            }
        }
        else if (typeof value === 'number') {
            value = value + "";
        }

        sys.localStorage.setItem(newKey, value);
    }

    /**
     * 移除某个值
     * @param key 需要移除的key 
     * @returns 
     */
    remove(key: string) {
        if (null == key) {
            console.error(`[${key}]存储的key不能为空`);
            return;
        }

        key = this.getModifyKey(key);
        if (!PREVIEW) {
            key = md5(key);
        }
        sys.localStorage.removeItem(key);
    }

    subValue(objKey: string, itemKey: string) {
        let obj: any = this.get(objKey, {});
        return obj[itemKey];
    }

    getModifyKey(key): string {
        if (this._host && this._host.length > 0) {
            return `${this._host}_${key}`;
        }
        return `${key}`;
    }
}


class _StorageData_ {
    private static _instance: _StorageData_;
    private _val: Record<string, any> = {};
    private _statics: Record<string, any> = {};
    private _localData: LocalStorage = new LocalStorage();
    private _userData: LocalStorage = new LocalStorage();
    /** 时间句柄 */
    private _handlerTime = null;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new _StorageData_();
        valueset(globalThis, 'StorageData', this._instance);
        return this._instance;
    };

    constructor() {

    };

    //临时数据，玩家切换账号清空
    val(key: string, value?: any): any {
        if (arguments.length >= 2) {
            this._val[key] = value;
            return;
        }
        return this._val[key];
    };

    //静态数据，除非玩家重启，不然不会重置
    statics(key: string, value?: any): any {
        if (arguments.length >= 2) {
            this._statics[key] = value;
            return;
        }
        return this._statics[key];
    };

    reset(): any {
        this._val = {};
    };
    /** 当前server时间 */
    private _sysTs: number = 0;
    /** get 毫秒 */
    public get sysTs(): number {
        if (this._handlerTime == null) {
            let time = Date.now();
            this.sysTs = time;
        }
        return this._sysTs;
    }
    /** set 毫秒 */
    public set sysTs(v: number) {
        if (v == null) {
            log("同步时间戳出错,参数为空", v)
            return;
        }
        let _v = Number(v);
        if (isNaN(_v) || String(_v).length != 13) {
            error("同步时间戳出错,格式或长度有误", v)
            return;
        }
        warn("同步时间戳:", _v)
        this._sysTs = _v;
        if (this._handlerTime != null) {
            clearInterval(this._handlerTime);
            this._handlerTime = null;
        }
        const self = this;
        this._handlerTime = setInterval(() => {
            self._sysTs = self._sysTs + 1000;
        }, 1000)
    }

    //管理本地存储，不关联玩家账号
    public get local(): LocalStorage {
        return this._localData;
    }

    //管理本地存储，关联玩家账号
    public get user(): LocalStorage {
        return this._userData;
    }
};
export const StorageData: _StorageData_ = _StorageData_.instance;
