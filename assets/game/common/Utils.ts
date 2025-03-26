import { Color, ImageAsset, Layers, Node, Sprite, SpriteFrame, Texture2D, UITransform, Vec2, Vec3, v2 } from "cc";
import { StorageData } from "../../framework/storage/StorageData";
import { AppConst } from "./AppConst";
import { DateTime } from "./DateTime";
import { Cache } from "../cache/Cache";

/**
 * Name = Utils
 * URL = db://assets/game/common/Utils.ts
 * Author = Aby
 *
 */

/** 货币 */
const Union = {
    /** 精度 */
    Money: 1000,
    /** 单位 */
    Type: {
        NONE: 0,
        K: 1,
        M: 2,
        B: 3,
        T: 4,
    },
    /** 文字 */
    Txt: {
        K: "K",
        M: "M",
        B: "B",
        T: "T",
    }
}


export namespace Utils {


    /**针对this指向性问题 */
    export function handler(obj: Object, func: Function) {
        return (...args: any[]) => {
            return func.call(obj, ...args)
        }
    }

    /** 获取当前日期的字符串形式，格式为 'YYYY-MM-DD' */
    export function getCurrentDate(): string {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    /**
     * number取模
     * @param a 
     * @param b 
     * @returns number
     */
    export function numMod(a: number, b: number): number {
        let c = Math.abs(a) % Math.abs(b)
        if (a < 0) {
            if (b < 0) {
                c = 0 - c;
            } else {
                if (c != 0) {
                    c = 0 - c;
                    c = c + b;
                }

            }
        } else {
            if (b < 0) {
                if (c != 0) {
                    c = 0 - c;
                    c = c + Math.abs(b);
                    c = 0 - c;
                }
            }
        }
        return c;
    }

    /**
     * 转换成数字，若无法转换成数字，返回默认值，没给定默认值则返回0
     * 若传递的数字为 Decimal  则返回string
     * @param param 
     * @param d 
     * @returns number or Decimal
     */
    export function numValueOf(param, d: any = 0) {
        if (isNaN(Number(param))) {
            return d;
        }
        // if (param instanceof Decimal) {
        //     let str = param.toString();
        //     if (str.length >= 16) {
        //         console.warn(`警告:数字超过16位,传参为:${param},实际为数:${str}`,)
        //     }
        //     return param;
        // }
        return Number(param)
    }
    /**
     * 保留小数
     * @param num 要操作的数据 string | number | Decimal 
     * @param dot 保留小数位数 默认0 不保留 -1则不限制
     * @param isCompletion 是否补全小数位数 例如 1.00 默认false
     * @param isAdjust 是否四舍五入 默认false
     * @returns 
     */
    export function numSubString(num: string | number | Decimal, dot = 0, isCompletion = false, isAdjust = false): string {
        if (num == null || num == undefined) {
            return null
        }
        if (num == 0 || num == "") {
            if (isCompletion && dot > 0) {
                let newStr = "0";
                let xiaoshuStr = "";
                let zeroNum = dot;
                while (zeroNum > 0) {
                    xiaoshuStr = xiaoshuStr + "0";
                    zeroNum = zeroNum - 1;
                }
                newStr = newStr + "." + xiaoshuStr;
                return newStr
            } else {
                return String(num);
            }
        }

        let realNum: Decimal = null;
        let realStr: string = "";
        if (num instanceof Decimal) {
            realNum = num;
            realStr = realNum.toString();
        } else {
            realStr = String(num);
            realNum = new Decimal(realStr);
        }
        let str = realStr;
        if (isAdjust) {
            if (dot == 0) {
                str = realNum.toFixed(0);
            } else if (dot > 0) {
                str = realNum.toFixed(dot);
            }
        }

        let newStr = str.split(".");
        if (newStr.length > 1) {
            let maxLen = newStr[1].length;
            if (dot > -1) {
                if (maxLen > dot) {
                    maxLen = dot;
                }
            }
            let minNum = newStr[1].substring(0, maxLen);
            if (minNum.length > 0) {
                str = newStr[0] + "." + minNum;
                if (!isCompletion && new Decimal("0." + minNum).toNumber() == 0) {
                    str = newStr[0];
                }
            } else {
                str = newStr[0];
            }
        }


        if (isCompletion && dot > 0) {
            let newStr = str.split(".");
            let xiaoshuStr = "";
            let zeroNum = dot;
            if (newStr.length > 1) {
                xiaoshuStr = newStr[1];
                zeroNum = dot - newStr[1].length;
            }
            while (zeroNum > 0) {
                xiaoshuStr = xiaoshuStr + "0";
                zeroNum = zeroNum - 1;
            }
            str = newStr[0] + "." + xiaoshuStr;
        }
        return str;
    }

    /** 判断字符串是否为空 */
    export function stringIsEmpty(param: string): boolean {
        if (isNull(param)) {
            return true
        }
        if (param == "") {
            return true
        }
        if (param == "null" || param == "undefined") {
            return true
        }
        return false
    }
    /** 判断字符串是否为HTTP地址 */
    export function stringIsHttp(param: string): boolean {
        let res = stringIsEmpty(param);
        if (res) {
            return false;
        }
        let str = String(param).toLowerCase();
        if (str.search("http://") > -1) {
            return true;
        } else if (str.search("https://") > -1) {
            return true;
        }
        return false
    }
    /** 判断字符串是否为ws地址 */
    export function stringIsSocket(param: string): boolean {
        let res = stringIsEmpty(param);
        if (res) {
            return false;
        }
        let str = String(param).toLowerCase();
        if (str.search("ws://") > -1) {
            return true;
        } else if (str.search("wss://") > -1) {
            return true;
        }
        return false
    }
    /**
     * 字符串去除空格
     * @param str 待处理的字符串
     * @param type ALL:所有空格(默认) LEFT:左边空格 RIGHT:右边空格,CENTER:中间空格 LEFT-RIGHT:两端空格
     * @returns 
     */
    export function stringTrim(str: string, type: string = "ALL") {
        if (str == null && str == undefined) {
            return str;
        }
        switch (type) {
            case "LEFT":
                return str.replace(/^\s*/g, "");
            case "RIGHT":
                return str.replace(/\s*$/g, "");
            case "CENTER":
                return str.replace(/\s/g, '');
            case "LEFT-RIGHT":
                return str.replace(/(^\s*)|(\s*$)/g, "");
            default:
                return str.replace(/\s+/g, "");
        }
    };

    /** 字符串格式化 */
    export function stringFormat(str, ...args: any[]): string {
        if (!str || args.length == 0) {
            return ""
        }
        let result = String(str);
        if (args.length == 1 && typeof (args[0]) == "object" && args[0] != null) {
            for (let key in args[0]) {
                if (Object.prototype.hasOwnProperty.call(args[0], key)) {
                    let reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[0][key]);
                }
            }
        } else {
            for (let i = 0; i < args.length; i++) {
                let reg = new RegExp("({[" + i + "]})", "g");
                result = result.replace(reg, String(args[i]));
            }
        }
        return result
    }
    /**
     * 指定字符长度缩略（1中文 = 1长度） 如果字符串长度大于x位，第x位后的用"..."显示;
     * @param param 要缩略的字符串
     * @param maxlen 最大字符(节)长度
     * @param isByte 是否字节 默认非字节使用Utf-8长度 true则为ascii字节长度(label使用这种)
     * @param del 用来替换的字符
     * @returns 
     */
    export function stringSubString(param: string, maxlen: number, isByte: boolean = false, del: string = "...") {//传入一个数字，表示多少位后的字符串需要省略
        if (!param) {
            return ""
        }
        param = String(param);
        let str: string;

        //ASCII编码
        if (isByte) {
            let encoding = "ascii";
            let byteLenth = Utils.stringGetByteLength(param, encoding);
            let delByteLen = Utils.stringGetByteLength(del, encoding);
            if (byteLenth > maxlen) {

                maxlen = maxlen - delByteLen;
                // str = param.slice(0, maxlen)
                let curStrTable = param.split("");
                let curLen = 0;
                let curStr = "";

                for (let i = 0; i < curStrTable.length; i++) {
                    let byteLen = Utils.stringGetByteLength(curStrTable[i], encoding);
                    if ((byteLen + curLen) > maxlen) {
                        break;
                    } else {
                        curLen = curLen + byteLen;
                        curStr = curStr + curStrTable[i];
                    }
                }
                str = curStr + del;
            } else {
                str = param;
            }
            return str;
        }
        //UTF-8编码
        if (param.length > maxlen) {
            maxlen = maxlen - del.length;
            if (maxlen < 0) {
                maxlen = 0;
            }

            let curStrTable = param.split("");
            let curLen = 0;
            let curStr = "";

            for (let i = 0; i < curStrTable.length; i++) {
                let byteLen = curStrTable[i].length;
                if ((byteLen + curLen) > maxlen) {
                    break;
                } else {
                    curLen = curLen + byteLen;
                    curStr = curStr + curStrTable[i];
                }
            }
            str = curStr + del;
        } else {
            str = param;
        }
        return str;
    }
    /**
     * 获取指定编码下的字节长度。
     * ASCii字符集：只有英文、数字、符号等，占1个字节。
     * GBK字符集：汉字占2个字节，英文、数字占1个字节。
     * UTF-32字符集：汉字占4个字节，英文、数字占2个字节。
     * UTF-8字符集：汉字占3个字节，英文、数字占1个字节。
     */
    export function stringGetByteLength(str, encoding = 'gbk'): number {
        if (str == null || typeof (str) != 'string' || str.length < 1) {
            return 0;
        }
        if (!encoding) {
            encoding = 'gbk'; //默认为gbk（数据库中最常用的字符集是utf-8、gbk）
        }
        let byteLength = 0;

        switch (encoding.toLowerCase()) {
            case 'ascii':
                for (let i = 0; i < str.length; i++) {
                    if (str.charCodeAt(i) <= 0x7F) {//0-127
                        byteLength += 1;
                    } else {
                        byteLength += 2; // ASCII编码中的非ASCII字符计数为2个字节
                    }
                }
                break;
            case 'gbk':
                for (let i = 0; i < str.length; i++) {
                    const code = str.charCodeAt(i);
                    if (code <= 0x007F) {//0~127
                        byteLength += 1;
                    } else if (code <= 0x07FF) {//128-2047
                        byteLength += 2;
                    } else {
                        byteLength += 3;
                    }
                }
                break;
            case 'utf-32':
                byteLength = str.length * 4; // UTF-32编码中的每个字符占用4个字节
                break;
            case 'utf-8':
                for (let i = 0; i < str.length; i++) {
                    const code = str.charCodeAt(i);
                    if (code <= 0x007F) {//0~127
                        byteLength += 1;
                    } else if (code <= 0x07FF) {//128-2047
                        byteLength += 2;
                    } else if (code <= 0xFFFF) {//2048-65535
                        byteLength += 3;
                    } else {
                        byteLength += 4;
                    }
                }
                break;
            default:
                throw new Error("Unsupported encoding: " + encoding);
        }

        return byteLength;
    }

    /**
     * 返回插入特殊字符后的人民币 数字 88,888,888.88 支持小数
     * 数字按千分位转换 88,888,888 
     * @param num 要转换的数字（number | Decimal | string）
     * @param letter 用来填充的字符
     * @param isShowPN 是否显示正负 默认显示
     * @returns 
     */
    export function stringMatchStr(num: string | number | Decimal = null, letter: string = ",", isShowPN: boolean = true): string | null {
        if (num == null || num == undefined) {
            return null
        }
        if (num === "") {
            return "";
        }
        let realNum: Decimal = null;
        let realStr: string = "";
        if (num instanceof Decimal) {
            realNum = num;
            realStr = realNum.toString();
        } else {
            realStr = String(num);
            realNum = new Decimal(realStr);
        }
        //正或负
        let PorN: boolean = (realNum.isPositive() || realNum.isZero());
        let appendStr = ""
        let tempNum: Decimal = realNum.abs();
        let tempstr = "";
        let xiaoshuStr = "";


        let biaodian_index = realStr.indexOf(".")
        if (biaodian_index > 0) {
            xiaoshuStr = realStr.substring(biaodian_index, realStr.toString().length);
            tempNum = new Decimal(tempNum.toString().substring(0, biaodian_index));
        }

        while (tempNum.comparedTo(0) == 1) {
            if (tempNum.comparedTo(1000) == -1) {//负数
                tempstr = tempNum.mod(1000).toString();

                if (appendStr.length > 0) {
                    appendStr = tempstr + letter + appendStr
                    tempNum = tempNum.idiv(1000);
                } else {
                    appendStr = tempstr + "" + appendStr
                    tempNum = tempNum.idiv(1000);
                }
            } else {
                if (appendStr.length == 0) {
                    //1000 + tempNum % 100

                    tempstr = tempNum.mod(1000).add(1000).toString();
                    appendStr = appendStr + "" + tempstr.slice(1, 4)
                    tempNum = tempNum.idiv(1000);
                } else {
                    tempstr = tempNum.mod(1000).add(1000).toString();
                    appendStr = tempstr.slice(1, 4) + letter + appendStr
                    tempNum = tempNum.idiv(1000);
                }
            }
        }
        if (appendStr.length == 0) {
            appendStr = tempNum.toString();
        }
        if (isShowPN) {
            if (!PorN) {
                appendStr = "-" + appendStr
            }
        }
        appendStr = appendStr + xiaoshuStr;
        return appendStr
    }
    /**
     * 格式化返回的钱
     * @param num 要格式化的钱 number | string | Decimal
     * @param dot 精度 默认为null 不算精度
     * @returns 
     */
    export function formatRespMoney(num: number | string | Decimal, dot: number = null): string | number {
        if (isNaN(Number(num))) {
            //@ts-ignore
            return num;
        }
        let _num: Decimal = null;
        if (num instanceof Decimal) {
            _num = num;
        } else {
            _num = new Decimal(num);
        }

        let data = Cache.User.getCurrency();
        _num = _num.div(data.rate);
        if (dot != null) {
            _num = new Decimal(Utils.numSubString(_num, dot));
        }
        let retStr = _num.toString();
        if (retStr.length <= 16) {
            return Number(retStr);
        }
        return retStr;
    }


    /** 钱按格式转换 */
    export function formatReqMoney(num: number | string): number {
        let _num = Number(num)
        if (isNaN(_num)) {
            //@ts-ignore
            return num;
        }

        let data = Cache.User.getCurrency();
        return _num * data.rate;
    }

    /**
     * 格式化货币以单位形式显示(K M B T) 支持千分位
     * @param param 
     * @param dot 小数点后最多dot位 例如：(23458, 3, 2)->(2.35万, 2.35, 1) -1则不限制
     * @param isMatchBet 是否显示千分位 默认 false 不展示
     * @param letter 显示千分位时用来填充的字符 默认,
     * @param isCompletion 是否补全小数位数 例如 1.00 默认false
     * @param isAdjust 是否四舍五入 默认false
     * @returns 
     */
    export function formatMoneyUnion(param: number | string, dot: number = 2, isMatchBet = false, letter: string = ",", isCompletion: boolean = false, isAdjust: boolean = false) {
        //被除数
        let div_K = 1000 //K * 100
        let div_M = 1000000 //M * 10
        let div_B = 1000000000 //B
        let div_T = 1000000000000 //T

        param = param || 0;

        let originNum = new Decimal(param);

        let b = originNum.isNegative();

        let __number = originNum.abs();

        let u = Union.Type.NONE;
        if (__number.comparedTo(div_T) >= 0) {
            __number = __number.div(div_T);
            u = Union.Type.T;
        } else if (__number.comparedTo(div_B) >= 0) {
            __number = __number.div(div_B);
            u = Union.Type.B
        } else if (__number.comparedTo(div_M) != -1) {
            __number = __number.div(div_M);
            u = Union.Type.M
        } else if (__number.comparedTo(div_K) != -1) {
            __number = __number.div(div_K);
            u = Union.Type.K
        }

        if (u >= Union.Type.NONE) {
            if (originNum.comparedTo(0) == 1 && originNum.comparedTo(0.01) == -1) {
                __number = new Decimal(0.01);
            }
        }
        /** 修正高精度数字不太精准问题 */
        let s = __number.toString();
        if (isAdjust) {
            if (dot == 0) {
                s = __number.toFixed(0);
            } else if (dot > 0) {
                s = __number.toFixed(dot);
            }
        }

        let biaodian_index = s.indexOf(".")
        if (biaodian_index > 0) {

            if (dot == 0) {
                dot = -1;
            } else if (dot < 0) {
                dot = s.length;
            }
            let a = s.substring(0, biaodian_index);
            let b: string = "";
            if (dot > 0) {
                b = s.substring(biaodian_index + 1, biaodian_index + dot + 1);
            }
            if (b.length > 0) {
                if (isCompletion && b.length < dot) {
                    for (let i = b.length; i < dot; i++) {
                        b = b + "0";
                    }
                }
                s = a + "." + b;
                if (!isCompletion && new Decimal("0." + b).toNumber() == 0) {
                    s = a;
                }
            } else {
                s = a;
            }
        } else {
            if (isCompletion && dot > 0) {
                let b = ""
                for (let i = 0; i < dot; i++) {
                    b = b + "0";
                }
                s = s + "." + b;
            }
        }
        if (isMatchBet && new Decimal(s).toNumber() != 0) {
            s = Utils.stringMatchStr(s, letter, false);
        }

        switch (u) {
            case Union.Type.K:
                s = s + Union.Txt.K;
                break;
            case Union.Type.M:
                s = s + Union.Txt.M
                break;
            case Union.Type.B:
                s = s + Union.Txt.B
                break;
            case Union.Type.T:
                s = s + Union.Txt.T
                break;
            default:
                break;
        }
        if (b) {
            s = "-" + s
        }
        return s
    }

    /** 判断空 */
    export function isNull(param): boolean {
        let type = typeof (param);
        if (type == "number" && isNaN(param) == false) {
            return false;
        }
        if (param != null && param != undefined) {
            return false
        }
        return true
    }
    /** 为空设置默认值 */
    export function nullToDefault(param, del: any = null) {
        if (isNull(param)) {
            return del
        }
        return param
    }

    /**
     * table校验，返回自身或者{}、[]
     * @param param 
     * @param isArray 默认false 为空时返回{}
     * @returns 
     */
    export function tableVerify(param, isArray = false) {
        if (!param) {
            if (isArray) {
                return [];
            } else {
                return {};
            }
        }
        let propty = Object.prototype.toString.call(param);
        if (propty === '[object Object]' || propty == "[object Array]") {
            return param
        }
        if (isArray) {
            return [];
        } else {
            return {};
        }
    }
    /** 判断是否是一个空数组/对象 table:map、array扩展 */
    export function tableIsEmpty(param): boolean {
        if (param == null || param == undefined) {
            return true;
        }
        if (typeof (param) != "object") {
            return true
        }
        let res = false;
        try {
            res = (JSON.stringify(param) == "[]" || JSON.stringify(param) == "{}");
            if (!res) {
                res = true;
                for (let key in param) {
                    if (Object.prototype.hasOwnProperty.call(param, key) && res == true) {
                        let v = param[key];
                        if (v != null) {
                            res = false;
                        }
                    }
                }
            }
            return res
        } catch (error) {
            return res
        }
    }

    /**
     * 获取时间戳 精确到毫秒
     * @returns number
     */
    export function timeEx(): number {
        return StorageData.sysTs;
    }
    /**
     * 获取时间戳 精确到秒
     * @returns number
     */
    export function time(): number {
        return Math.round(StorageData.sysTs / 1000);
    }
    /**
     * 时间戳转时间
     * @param num 
     * @returns object {year:?,month:?,day:?,hour:?,minutes:?,seconds:?}
     */
    export function timeToDataArray(num: number, toTimeZone = null): {
        year: number,
        month: number,
        day: number,
        hour: number,
        minutes: number,
        seconds: number
    } {
        return DateTime.timeToDateArray(num, toTimeZone);
    }

    /**
     * 计算出剩余时间
     * @param time 剩余时间 按照毫秒来计算
     * @param isToTxt 是否返回文本格式 默认为false
     */
    export function timeRemaining(time, isToTxt = false): any {
        if (isNull(time)) {
            return null
        }
        time = Number(time);
        /** 返回结构 */
        let res = {
            /** 天数 */
            day: 0,
            /** 小时数 */
            hours: 0,
            /** 分钟数 */
            minutes: 0,
            /** 秒数 */
            seconds: 0,
            /** 毫秒 */
            millisecond: 0,
        }
        //毫秒级别
        let onDayAllTime = (24 * 3600 * 1000);
        let onHoursAllTime = (3600 * 1000);
        let onMinutesAllTime = (60 * 1000);
        let onSecondsAllTime = (1000);

        let endTime = time;
        if (endTime >= onDayAllTime) {
            res.day = Math.floor(endTime / onDayAllTime);
            endTime = endTime % onDayAllTime;    //计算天数后剩余的毫秒数
        };
        if (endTime >= onHoursAllTime) {
            res.hours = Math.floor(endTime / onHoursAllTime);
            endTime = endTime % onHoursAllTime;    //计算小时后剩余的毫秒数
        }
        if (endTime >= onMinutesAllTime) {
            res.minutes = Math.floor(endTime / onMinutesAllTime);
            endTime = endTime % onMinutesAllTime;    //计算分钟数后剩余的毫秒数
        }
        if (endTime >= onSecondsAllTime) {
            res.seconds = Math.round(endTime / onSecondsAllTime);
            endTime = endTime % onSecondsAllTime;    //计算秒数后剩余的毫秒数
        }
        res.millisecond = endTime;

        if (isToTxt) {
            let txt = "";
            if (res.day > 0) {
                txt = txt + res.day + "天";
            }
            if (res.hours > 0 || txt != "") {
                txt = txt + res.hours + "时";
            }
            if (res.minutes > 0 || txt != "") {
                txt = txt + res.minutes + "分";
            }
            if (res.seconds > 0 || txt != "") {
                txt = txt + res.seconds + "秒";
            }
            return txt;
        } else {
            return res;
        }
    }
    /** 本月第几周 */
    export function timeWeekOfMonth(num) {
        if (isNull(num)) {
            return null
        }
        let size = num.toString().length

        if (size != 10 && size != 13) {
            return null
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            num = num * 1000
        }
        let date = new Date(num);
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        let firstDayOfWeek = firstDayOfMonth.getDay() || 7; // 如果是周日，则默认为7
        let daysSinceFirstWeek = date.getDate() + (firstDayOfWeek - 1); // 加上周日之前的天数
        return Math.ceil(daysSinceFirstWeek / 7);
    }

    /**
     * 是否是同一天
     * @param onetime 要比较的时间戳（可为10或13位）
     * @param twotime 要比较的时间戳（可为10或13位）
     * @returns boolean
     */
    export function timeIsSampleDay(onetime, twotime) {
        onetime = Number(onetime)
        twotime = Number(twotime)
        if (isNull(onetime) || isNull(twotime)) {
            return false
        }
        let oneArray = timeToDataArray(onetime)
        let twoArray = timeToDataArray(twotime)

        if (isNull(oneArray) || isNull(twoArray)) {
            return false
        }
        if (oneArray["year"] == twoArray["year"] && oneArray["month"] == twoArray["month"] && oneArray["day"] == twoArray["day"]) {
            return true
        }
        return false
    }

    /** 克隆对象 */
    export function clone(data) {
        if (data == null) {
            return null;
        }
        if (typeof data === 'symbol') {           //Symbol 暂未处理
            console.log("暂未处理symbol", data);
            return data;
        } else if (typeof data != 'object') {      //基本类型
            return data;
        } else if (data instanceof Array) {      //Array
            let temp = [];
            data.forEach((item, key) => {
                if (item == null || item == undefined) {
                    temp[key] = null;
                } else {
                    temp[key] = clone(item);
                }
            })
            return temp;
        } else if (data instanceof Object) {   //Object
            let res = {};
            for (let key in data) {
                if (data[key] == null || data[key] == undefined) {
                    res[key] = null;
                } else {
                    res[key] = clone(data[key]);
                }
            }
            return res;
        } else {                                //系统对象、自定义对象
            if (data.constructor) {
                return new data.constructor(data);
            } else {
                console.log("错误", typeof data, data)
                return null
            }
        }
    }
    /** 是否是有效的json */
    export function isValidJSON(value: any): boolean {
        try {
            JSON.parse(value);
            return true;
        } catch (error) {
            return false;
        }
    }

    /** json编码 */
    export function JsonEncode(value: any, replacer?: (number | string)[] | null, space?: string | number): string {
        let res = "";
        if (Utils.isValidJSON(value)) {
            return value;
        }
        try {
            return JSON.stringify(value, replacer, space)
        } catch (error) {
            console.error("JsonEncode Error:" + error)
        }
        return res
    }
    /**
     * json解码，将一个json格式的字符串解码成对象的形式,等价于 json.parse
     * @param text json字符串
     * @param reviver 
     */
    export function JsonDecode(text: string, reviver?: (this: any, key: string, value: any) => any): any {
        if (!text || text == "") {
            return text
        }

        let res = null
        try {
            return JSON.parse(text, reviver)
        } catch (error) {
            console.error("解析Json出错,", text)
            console.error("JsonDecode Error:" + error)
        }
        return res
    }

    /**
     * 创建一个节点(默认2D)
     * @param name 节点名称
     * @param layerNum  = 2D
     * @returns 
     */
    export function createNode(name: string = null, layerNum: Layers.Enum = Layers.Enum.UI_2D): Node {
        if (name != null) {
            name = String(name);
        }
        let node = new Node(name);
        node.layer = layerNum;

        let uiTrans: UITransform = node.addComponent(UITransform);
        uiTrans.anchorPoint = new Vec2(0.5, 0.5);
        uiTrans.enabled = true;
        return node;
    }
    /**
     * 创建一个2D图片节点
     * @param name 节点名称
     * @returns 
     */
    /**
     * 创建一个图片节点(默认2D)
     * @param spriteFrame 
     * @param name 
     * @param layerNum  = 2D
     * @returns 
     */
    export function createSprite(spriteFrame: SpriteFrame, name = null, layerNum: Layers.Enum = Layers.Enum.UI_2D): Node {
        let node = Utils.createNode(name, layerNum);
        if (node) {
            let sprite: Sprite = node.addComponent(Sprite);
            sprite.sizeMode = 2;
            sprite.type = 0;
            sprite.trim = true;
            sprite.spriteFrame = spriteFrame;
            sprite.enabled = true;
        }
        return node;
    }

    /**
     * 将ImageAsset图片 转换成SpriteFrame
     * @param imageAsset 
     * @returns 
     */
    export function imageAssetToSpriteFrame(imageAsset: ImageAsset): SpriteFrame | null {
        if (imageAsset) {
            let spriteFrame = new SpriteFrame();
            let texture = new Texture2D();
            texture.image = imageAsset;
            spriteFrame.texture = texture;
            return spriteFrame
        }
        return null
    }
    /**
     * 生成精灵帧
     * @param width 宽
     * @param height 高
     * @param color 颜色
     * @returns sprite frame
     */
    export function imageCreateDefaultSpriteFrame(width: number, height: number, color: Color = new Color(255, 255, 255, 255)): SpriteFrame {
        let count = width * height * 4;
        let data: any = new Uint8Array(count);
        for (var j = 0; j < count; j += 4) {
            data[j] = color.r // r
            data[j + 1] = color.g // g
            data[j + 2] = color.b // b
            data[j + 3] = color.a // a

        }
        let imageAsset = new ImageAsset();
        imageAsset.reset({
            _data: data,
            _compressed: false,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
        });

        let texture = new Texture2D();
        texture.reset({
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
        })
        texture.image = imageAsset;

        let spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;
        // let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset);
        //需要禁用其纹理的 packable 选项 不参与自动合图
        spriteFrame.packable = false;
        return spriteFrame
    }

    /**
     * 获取两点之间的直线距离 不计算正负
     * @param start 开始点的位置
     * @param end 结束点的位置
     */
    export function getPosDistance(start: Vec2 | Vec3, end: Vec2 | Vec3): number | null {
        if (!start || !end) {
            return null;
        }
        let pos = v2(Math.abs(start.x - end.x), Math.abs(start.y - end.y));
        let dis = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
        return dis;
    }

    /** 检查是否是money */
    export function checkIsMoney(id) {
        id = Utils.numValueOf(id, -1)
        for (let i in AppConst.PropertyType) {
            if (Object.prototype.hasOwnProperty.call(AppConst.PropertyType, i)) {
                let moneyID = AppConst.PropertyType[i];
                if (id == moneyID) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 获取一段贝塞尔曲线
     * @param ctrlPosArr 贝塞尔曲线控制点坐标数组
     * @param precison 精度，需要计算的该条贝塞尔曲线上的点的数目
     * @param resArr 该条贝塞尔曲线上的点（二维坐标）
    */
    export function getBezierPos(ctrlPosArr: Array<Vec2>, precison: number): Array<Vec2> {
        console.log(ctrlPosArr)
        let resArr: Array<Vec2> = new Array<Vec2>();

        /**贝塞尔曲线控制点数目（阶数）*/
        let number: number = ctrlPosArr.length;

        if (number < 2) {
            console.warn("控制点数不能小于 2");
            return resArr;
        }

        /**杨辉三角数据 */
        let yangHuiArr: Array<number> = Utils.getYangHuiTriangle(number);

        //计算坐标
        for (let i = 0; i < precison; i++) {

            let t: number = i / precison;
            let tmpX: number = 0;
            let tmpY: number = 0;

            for (let j = 0; j < number; j++) {

                tmpX += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].x * Math.pow(t, j) * yangHuiArr[j];

                tmpY += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].y * Math.pow(t, j) * yangHuiArr[j];
            }

            // resArr[i].x = tmpX;
            // resArr[i].y = tmpY;
            resArr[i] = new Vec2(tmpX, tmpY);
        }
        return resArr;
    }

    /**
     * 获取杨辉三角对应阶数的值
     * @param num 杨辉三角阶数
     */
    export function getYangHuiTriangle(num: number): Array<number> {
        //计算杨辉三角
        let yangHuiArr = new Array<number>();

        if (num === 1) {
            yangHuiArr[0] = 1;
        } else {
            yangHuiArr[0] = yangHuiArr[1] = 1;

            for (let i = 3; i <= num; i++) {
                let t = new Array<number>();
                for (let j = 0; j < i - 1; j++) {
                    t[j] = yangHuiArr[j];
                }

                yangHuiArr[0] = yangHuiArr[i - 1] = 1;
                for (let j = 0; j < i - 2; j++) {
                    yangHuiArr[j + 1] = t[j] + t[j + 1];
                }
            }
        }
        // console.log(yangHuiArr);
        return yangHuiArr;
    }

}