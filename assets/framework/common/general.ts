/*
 * @Description: 常量，枚举
 * @Author: zy
 * @Date: 2021-03-09 16:21:16
 * @Reference:
 */

import { Node, log, sys } from "cc";
export const PRIORITY = {
    SHOP: 9000,
    NET: 8000,
    GUIDE: 7000,
    ALERT: 6000,
    UITOP: 5000,
    UI: 0,
};

export function valueof(object: any, key: string): any {
    return object && object[key];
};

export function valueset(object: any, key: string, value: any): any {
    if (!object) {
        return undefined;
    }
    return object[key] = value;
}

export function glog(...args: any) {
    if (sys.os === sys.OS.ANDROID) {
        log(JSON.stringify(args));
    } else {
        console.log(...args);
    }
}

export function cleanTouch(node: Node) {
    node.off(Node.EventType.TOUCH_START);
    node.off(Node.EventType.TOUCH_MOVE);
    node.off(Node.EventType.TOUCH_END);
    node.off(Node.EventType.TOUCH_CANCEL);

    node.off(Node.EventType.MOUSE_ENTER);
    node.off(Node.EventType.MOUSE_LEAVE);
    for (let index = 0; index < node.children.length; index++) {
        const element = node.children[index];
        cleanTouch(element);
    }
}

export function sprintf(str: string, ...arg: any): string {
    var arr = Array.prototype.slice.call(arg);
    arr.unshift(str);
    let _sprintf = (globalThis as any).sprintf;
    return _sprintf.apply(_sprintf, arr);
}

export function sprintf_g(str: string, ...arg: any): string {
    str = gutil_char(str);
    var arr = Array.prototype.slice.call(arg);
    arr.unshift(str);
    let _sprintf = (globalThis as any).sprintf;
    return _sprintf.apply(_sprintf, arr);
}

export function splitnum(num: number, cout: number) {
    let arr = [];
    let span = Math.ceil(num / cout);
    while (cout > 1 && span != 0) {
        arr.push(span);
        num -= span;
        cout--;
    }
    arr.push(num);
    cout--;
    for (let index = 0; index < cout; index++) {
        arr.push(0);
    }
    return arr;
}

export function clone(obj: any): any {
    if (null == obj || "object" !== typeof obj) return obj;

    if (obj instanceof Array || obj instanceof Object) {
        let _copy = (obj instanceof Array) ? [] : {};
        for (let attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, attr))
                valueset(_copy, attr, clone(obj[attr]));
        }
        return _copy;
    }
    throw new Error("Unable to clone obj! Its type isn't supported.");
};

export function mixins(from: object, to: object) {
    for (let i in from) {
        if (!Object.prototype.hasOwnProperty.call(from, i)) continue;
        let valf = valueof(from, i);
        let valt = valueof(to, i);
        if (Array.isArray(valf)) {
            valueset(to, i, valf);
        } else if (typeof valf == 'object' && valf) {
            if (!valt) valueset(to, i, valt = {});
            mixins(valf, valt);
        } else valueset(to, i, valf);
    }
};

export function setValueByKey(from: any, to: any) {
    for (const key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            let info = valueof(from, key);
            info && valueset(to, key, info);
        }
    }
};

export function gutil_char(uid: string): any {
    let lanCode = globalThis.gutil_code || 'en'
    let path = 'char_' + lanCode;
    let obj = (globalThis as any)[path];
    return obj && obj[uid] || globalThis['char_en'][uid] || uid;
};

export function gutil_uuid(uuid: string) {
    let lanCode = globalThis.gutil_code || 'en'
    let path = 'uuid_' + lanCode;
    let obj = (globalThis as any)[path];
    return obj && obj[uuid] || globalThis['uuid_en'][uuid] || uuid;
}

/**
 * @description: 转换为带单位的数字 保留两位小数
 * @param {number} num 数字
 */
export function convertNum(num: number, degree?: number): string {
    let lanCode = globalThis.gutil_code || 'en'
    let arr: string[] = gutil_char('CONVERTNUM');
    let numS: string = '' + num;
    let dividend: number = lanCode == 'en' ? 1000 : 10000;
    let sign = num > 0 ? 1 : -1;
    num = Math.abs(num);
    for (let i = 0; ; i++) {
        if (num < dividend || (i >= arr.length - 1) || degree === 0) {
            let str = num * sign + '';
            let idx = str.indexOf('.');
            if (idx !== -1) {
                if (str[idx + 2] == '0') {
                    idx += 1;
                } else {
                    idx += 2;
                }
                str = str.substring(0, idx + 1);
            }
            numS = '' + str + arr[i];
            break;
        }
        num /= dividend;
        degree && degree--;
    }
    return numS;
}

/**
 * @description: 转换为带单位的数字 保留两位小数
 * @param {number} num 数字
 */
export function convertIntNum(num: number, degree?: number): string {
    let lanCode = globalThis.gutil_code || 'en'
    let arr: string[] = gutil_char('CONVERTNUM');
    let numS: string = '' + num;
    let dividend: number = lanCode == 'en' ? 1000 : 10000;
    let sign = num > 0 ? 1 : -1;
    num = Math.abs(num);
    if (num < 100000) {
        return numS;
    }
    for (let i = 0; ; i++) {
        if (num < dividend || (i >= arr.length - 1) || degree === 0) {
            num = Math.floor(num);
            numS = '' + num * sign + arr[i];
            break;
        }
        num /= dividend;
        degree && degree--;
    }
    return numS;
}

/**
 * @description: 多个回调，设置后，就会在所有回调完再调用最后的一个回调
 * @param  {*}
 * @return {*}
 * @param {*} num 数量控制
 * @param {*} cb
 */
export function afterAllCallback(num: number, cb: Function | null) {
    let count = 0;
    return function () {
        if (++count >= num) {
            if (cb) {
                cb();
                cb = null;
            }
        }
    };
};