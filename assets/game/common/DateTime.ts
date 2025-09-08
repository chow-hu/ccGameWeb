import { error, warn } from "cc";
import { config } from "../../plug-in/config";

/** 世界时区配置 */
const WorldTimeZoneMap = {
    /** 中国-香港时区 */
    "Asia/Hong_Kong": +8,
    /** 印度-加尔各答 */
    "Asia/Kolkata": +5.5,
    /** 菲律宾-马尼拉 */
    "Asia/Manila": +8,
}

// 创建表示当前时间的Date对象（默认是本地时间）
const currentDate = new Date();
// 获取当前时区与UTC的偏移量（单位为分钟）
const offset = currentDate.getTimezoneOffset();
/** 指定时区的时间计算 */
export namespace DateTime {
    /** 地区时区(与时间相关) */
    export function TimeZoneDefault(): string {
        return config.timezone;
    };
    /**
     * 获取指定时区的与当前时区的偏移量
     * @param timeZone 指定时区
     * @returns number 返回偏移值 单位:毫秒 负数代表往前数  正数代表往后推
     */
    export function getTargetTimeZoneOffset(timeZone: string | number): number {
        let min = 0;
        if (typeof (timeZone) === 'number') {
            min = timeZone;
        } else {
            timeZone = String(timeZone);
            let toH = WorldTimeZoneMap[timeZone];
            if (!toH) {
                error('目标时区未配置：', timeZone)
                return 0;
            }

            min = Number(toH) * 60;
        }

        let targetOffset = 0 - min;
        let diff = offset - targetOffset;
        let value = diff * 60 * 1000;

        return value;
    }

    /**
     * 获取现行时间戳 可指定时区 精确到毫秒
     * @param toTimeZone 指定时区 默认空，为当前时区
     * @returns number 13位时间戳
     */
    export function timeEx(toTimeZone = null): number {
        let dateObj = new Date();
        let timestamp = dateObj.getTime();
        if (toTimeZone) {
            let newTs = getTargetTimeZoneOffset(toTimeZone);
            // 创建Date对象，将时间戳作为参数传入
            let newDateObj = new Date(timestamp + newTs);
            timestamp = newDateObj.getTime();
        }
        warn('[DateTime]timeEx:', timestamp);
        return timestamp;
    }
    /**
     * 获取现行时间戳 可指定时区 精确到秒
     * @param toTimeZone 指定时区 默认空，为当前时区
     * @returns number 10位时间戳
     */
    export function time(toTimeZone = null): number {
        return Math.round(DateTime.timeEx(toTimeZone) / 1000);
    }
    /**
     * 时间戳转时间，结果为地域时区的时间 默认 DateTime.TimeZoneDefault的时区
     * @param ts 待转换的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 时区，默认 DateTime.TimeZoneDefault的时区
     * @returns object |null {year:?,month:?,day:?,hour:?,minutes:?,seconds:?}
     */
    export function timeToDateArray(_ts?: number, toTimeZone = TimeZoneDefault()): {
        year: number,
        month: number,
        day: number,
        hour: number,
        minutes: number,
        seconds: number
    } | null {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeToDateArray:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeToDateArray:参数错误 ts=', ts);
            return null;
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();

        //计算时间偏差
        let offset = getTargetTimeZoneOffset(toTimeZone);
        // 创建对应的Date对象
        let date = new Date(ts + offset);

        let array = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        }
        // warn('[DateTime:timeToDataArray]时间戳转换：', ts, `${array.year}年${array.month}月${array.day}日${array.hour}时${array.minutes}分${array.seconds}秒`)
        return array;
    }
    /**
     * 获取指定时区指定时间戳在当天0点的时间戳
     * @param _ts  指定的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 指定时区,不传则为默认DateTime.TimeZone的时区
     * @returns number 当天0点的时间戳
     */
    export function timeStartOfDayTime(_ts?: number, toTimeZone = TimeZoneDefault()): number {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeWeekOfMonth:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeWeekOfMonth:参数错误 ts=', ts);
            return null;
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();

        //计算时间偏差
        let offset = getTargetTimeZoneOffset(toTimeZone);
        // 创建对应的Date对象
        let date = new Date(ts + offset);
        // 设置时间为当天凌晨0点0分0秒
        date.setHours(0, 0, 0, 0);
        // 获取当天开始时间的时间戳
        let startOfDayTimestamp = date.getTime();
        return startOfDayTimestamp;
    }
    /**
     * 获取指定时区指定时间戳是本月第几周
     * @param _ts  指定的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 指定时区,不传则为默认DateTime.TimeZone的时区
     * @returns number 第几周
     */
    export function timeWeekOfMonth(_ts?: number, toTimeZone = TimeZoneDefault()): number | null {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeWeekOfMonth:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeWeekOfMonth:参数错误 ts=', ts);
            return null;
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();

        //计算时间偏差
        let offset = getTargetTimeZoneOffset(toTimeZone);
        // 创建对应的Date对象
        let date = new Date(ts + offset);
        // 获取该日期所在月份的第一天对应的Date对象
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

        // 计算目标日期与本月第一天相差的天数
        //@ts-ignore
        let diffInDays = (date - firstDayOfMonth) / (1000 * 60 * 60 * 24);
        // 计算所在周数（注意：一周从周日开始算，这里加1确保第一天也算第一周）
        let weekNumber = Math.floor(diffInDays / 7) + 1;
        return weekNumber;
    }

    /**
     * 时间比较，是否为同一天
     * @param onetime 要比较的时间戳（可为10或13位）
     * @param twotime 要比较的时间戳（可为10或13位）
     * @returns boolean 结果值
     */
    export function timeIsSampleDay(_onetime, _twotime): boolean {
        let onetime = Number(_onetime)
        let twotime = Number(_twotime)
        if (isNaN(onetime) || isNaN(twotime)) {
            error('[DateTime]timeIsSampleDay:参数类型错误 ts=', _onetime, _twotime);
            return false
        }
        let oneArray = DateTime.timeToDateArray(onetime)
        let twoArray = DateTime.timeToDateArray(twotime)

        if (!oneArray || !twoArray) {
            error('[DateTime]timeIsSampleDay:参数错误 ts=', _onetime, _twotime);
            return false;
        }
        if (oneArray.year == twoArray.year && oneArray.month == twoArray.month && oneArray.day == twoArray.day) {
            return true;
        }
        return false;
    }

    /**
     * 获取指定时区指定时间戳的中式时间字符串简单显示 结果为 "xxxx-xx-xx" 年-月-日
     * @param ts 待转换的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 时区，默认 DateTime.TimeZoneDefault的时区
     * @returns String | null 例如:2024-05-06
     */
    export function timeFormatZNSimple(_ts?: number, toTimeZone = TimeZoneDefault()): string {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeFormatZNSimple:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeFormatZNSimple:参数错误 ts=', ts);
            return null;
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();

        let resStr = null;
        let arr = DateTime.timeToDateArray(ts, toTimeZone);
        if (arr) {
            //例如:2024-05-06
            resStr = `${arr.year}-${arr.month < 10 ? '0' + arr.month : arr.month}-${arr.day < 10 ? '0' + arr.day : arr.day}`;
        }
        return resStr;
    }

    /**
     * 获取指定时区指定时间戳的字符串详细显示(中式时间) 结果为 "xxxx-xx-xx xx:xx:xx"
     * @param ts 待转换的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 时区，默认 DateTime.TimeZoneDefault的时区
     * @returns String | null 例如:2024-05-06 07:05:03
     */
    export function timeFormatZN(_ts?: number, toTimeZone = TimeZoneDefault()): string {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeFormatZN:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeFormatZN:参数错误 ts=', ts);
            return null;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        let resStr = null;
        let arr = DateTime.timeToDateArray(ts, toTimeZone);
        if (arr) {
            //例如：2024-05-09 06:05:09
            resStr = `${arr.year}-${arr.month < 10 ? '0' + arr.month : arr.month}-${arr.day < 10 ? '0' + arr.day : arr.day}`;
            resStr = resStr + ` ${arr.hour < 10 ? '0' + arr.hour : arr.hour}:${arr.minutes < 10 ? '0' + arr.minutes : arr.minutes}:${arr.seconds < 10 ? '0' + arr.seconds : arr.seconds}`;
        }
        return resStr;
    }

    /**
     * 获取指定时区指定时间戳的字符串详细显示(美式时间) 结果为 "xxxx-xx-xx xx:xx:xx"
     * @param ts 待转换的时间戳(支持13位或者10位) 不传则为当前时间
     * @param toTimeZone 时区，默认 DateTime.TimeZoneDefault的时区
     * @returns String | null 例如:2024-05-06 07:05:03
     */
    export function timeFormatUS(_ts?: number, toTimeZone = TimeZoneDefault()): string {
        let ts: number = null;
        if (_ts != null) {
            ts = Number(_ts);
        } else {
            ts = DateTime.timeEx();
        }
        if (isNaN(ts)) {
            error('[DateTime]timeFormatUS:参数类型错误 ts=', _ts);
            return null;
        }
        let size = String(ts).toString().length;
        if (size != 10 && size != 13) {
            error('[DateTime]timeFormatUS:参数错误 ts=', ts);
            return null;
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            ts = ts * 1000;
        }
        toTimeZone = toTimeZone || TimeZoneDefault();

        let objTime = DateTime.timeToDateArray(ts, toTimeZone);
        if (objTime) {
            let month: number | string = objTime.month;
            let day: number | string = objTime.day;
            let hours: number | string = objTime.hour;
            let minutes: number | string = objTime.minutes;
            let seconds: number | string = objTime.seconds;

            month = objTime.month;
            if (objTime.day < 10) {
                day = "0" + objTime.day;
            }
            if (objTime.hour < 10) {
                hours = "0" + objTime.hour;
            }
            if (objTime.minutes < 10) {
                minutes = "0" + objTime.minutes;
            }
            if (objTime.seconds < 10) {
                seconds = "0" + objTime.seconds;
            }

            let monthAbbr = ["", 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            let resStr = `${monthAbbr[month]},${day},${objTime.year} ${hours}:${minutes}:${seconds}`;
            return resStr;
        }
        return null;
    }
}

