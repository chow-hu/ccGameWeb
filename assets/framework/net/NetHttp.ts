import { TEST } from 'cc/env';
import LZString from 'lz-string';
import md5 from "md5";
import { glog } from "../common/general";

const decodeMsgData = (data: any) => {
    if (typeof data !== 'string') return data;   //预防报错
    return LZString.decompressFromEncodedURIComponent(data);
};

type LOCAL_HTTP_CALLBACK = (err: string, rsp: any) => void;
type LOCAL_HTTP_OPTIONS = { method?: string, resonsType?: XMLHttpRequestResponseType, retryTimes?: number, timeOutTs?: number, data?: Record<string, any> };
class LOCAL_HTTP {

    static lzsend(url: string, opts?: LOCAL_HTTP_OPTIONS): void;
    static lzsend(url: string, cb: LOCAL_HTTP_CALLBACK, opts?: LOCAL_HTTP_OPTIONS): void;
    static lzsend(url: string, data: Record<string, any>, opts?: LOCAL_HTTP_OPTIONS): void;
    static lzsend(url: string, data: Record<string, any>, cb: LOCAL_HTTP_CALLBACK, opts?: LOCAL_HTTP_OPTIONS): void;
    static lzsend(url: string, ...args: any[]) {

        let data: Record<string, any> | undefined, cb: LOCAL_HTTP_CALLBACK | undefined, opts: LOCAL_HTTP_OPTIONS | undefined;

        for (let index = 0; index < args.length; index++) {
            if (!args[index]) continue;
            if (typeof args[index] === 'object') {
                if (args[index].method || args[index].resonsType || args[index].retryTimes || args[index].timeOutTs) {
                    opts = args[index];
                } else {
                    data = args[index];
                }
            } else if (typeof args[index] === 'function') {
                cb = args[index];
            }
        }
        let resonsType: XMLHttpRequestResponseType | undefined;
        if (opts && opts.method && opts.method === 'GET' && data) {
            url = this._unionURLWithLZData(url, data);
            resonsType = 'json';
            data = undefined;
        }
        let param = {
            url,
            postData: data,
            cb
        }
        this._send(this.parseLZRespone, param, resonsType, opts);
    };

    static getLZStringData(data: any) {
        return data ? JSON.stringify({ _s: LZString.compressToEncodedURIComponent(JSON.stringify(data)) }) : null;
    };

    static parseLZRespone(xhr: XMLHttpRequest) {
        if (!xhr) return;
        let rspData: Uint8Array | string | undefined = '';
        if (xhr.responseType == "arraybuffer") {
            console.log('======arryBuf', xhr.response, decodeMsgData(xhr.response), new Uint8Array(decodeMsgData(xhr.response) || [' ']));
            rspData = new Uint8Array(decodeMsgData(xhr.response) || [' ']);
        } else if (xhr.responseType == "json") {
            if (typeof xhr.response === 'object') {
                if (xhr.response?._str) {
                    rspData = decodeMsgData(xhr.response._str);
                    try {
                        rspData = JSON.parse(decodeMsgData(xhr.response._str));
                    } catch (error) {
                    }
                } else {
                    rspData = xhr.response;
                }
            } else {
                let data = xhr.response || xhr.responseText;
                rspData = data || "";
            }
        } else {
            let tempData;
            try {
                tempData = JSON.parse(xhr.responseText);
            } catch (error) {
            }
            rspData = (tempData && decodeMsgData(tempData._str)) || xhr.responseText;
        }
        return rspData;
    };

    static origin(url: string, opts?: LOCAL_HTTP_OPTIONS): void;
    static origin(url: string, cb: LOCAL_HTTP_CALLBACK, opts?: LOCAL_HTTP_OPTIONS): void;
    static origin(url: string, data: Record<string, any>, opts?: LOCAL_HTTP_OPTIONS): void;
    static origin(url: string, data: Record<string, any>, cb: LOCAL_HTTP_CALLBACK, opts?: LOCAL_HTTP_OPTIONS): void;
    static origin(url: string, ...args: any[]) {

        let data: Record<string, any> | undefined, cb: LOCAL_HTTP_CALLBACK | undefined, opts: LOCAL_HTTP_OPTIONS | undefined;

        for (let index = 0; index < args.length; index++) {
            if (!args[index]) continue;
            if (typeof args[index] === 'object') {
                if (args[index].method || args[index].resonsType || args[index].retryTimes || args[index].timeOutTs) {
                    opts = args[index];
                } else {
                    data = args[index];
                }
            } else if (typeof args[index] === 'function') {
                cb = args[index];
            }
        }

        let resonsType: XMLHttpRequestResponseType | undefined;
        if (opts && opts.method && opts.method === 'GET' && data) {
            url = this._unionURLWithData(url, data);
            resonsType = 'json';
            data = undefined;
        }

        let param = {
            url,
            postData: data,
            cb
        }

        this._send(this.parseOriginRespone, param, resonsType, opts);
    };

    static getOriginData(data: any) {
        return data ? typeof data == 'string' ? data : JSON.stringify(data) : null;
    };

    static parseOriginRespone(xhr: XMLHttpRequest) {
        if (!xhr) return undefined;
        if (xhr.responseType == "arraybuffer") return new Uint8Array(xhr.response || [' ']);
        else if (xhr.responseType == "json") {
            let resp = '';
            if (typeof (xhr.response) == 'string') {
                resp = xhr.response && JSON.parse(xhr.response);
            } else if (typeof (xhr.response) == 'object') {
                resp = xhr.response;
            }
            return resp || xhr.responseText && JSON.parse(xhr.responseText) || '';
        }
        return xhr.responseText || ' ';
    };

    
    static _send(onready: Function, param: { url: string, postData: Record<string, any> | null, cb?: Function }, resonsType?: XMLHttpRequestResponseType, opts?: LOCAL_HTTP_OPTIONS) {
        this._netlog(`[php]: `, param);
        let tm: any = 0;
        let _this = this;
        let retryTimes = (opts?.retryTimes != null ? opts.retryTimes : 1);
        let timeOutTs = opts?.timeOutTs || 10000;
        let xhr: XMLHttpRequest | undefined;
        try {
            xhr = new XMLHttpRequest();
            tm = setTimeout(() => {
                if (!xhr) return;
                if (--retryTimes == 0) {
                    param.cb && param.cb('sendHttp timeout', null);
                    delete param.cb;
                } else {
                    if(opts.retryTimes != null){
                        opts.retryTimes = retryTimes
                    }
                    xhr && _this._send(onready, param, resonsType, opts);
                }
                xhr = undefined;
            }, timeOutTs);
            
            if (param.postData) {
                param.postData.sign = this._generateSignature(param.postData)
                xhr.responseType = resonsType || 'json';
                xhr.open('POST', param.url, true);
                xhr.setRequestHeader('content-type', 'application/json');
            } else {
                xhr.responseType = resonsType || "arraybuffer";
                xhr.open('GET', param.url, true);
            }
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
            xhr.send(JSON.stringify(param.postData));
            xhr.onreadystatechange = function () { // 下载结束
                if (!xhr) return;
                if (this.readyState === 4) {
                    tm && clearTimeout(tm);
                    tm = 0;
                    if ((this.status >= 200 && this.status < 400) || (TEST && this.status === 0)) {
                        let data = onready(xhr);
                        param.cb && param.cb('', data);
                        delete param.cb;
                    } else {
                        param.cb && param.cb('Load. ' + param.url + ' failed!', this.status);
                        delete param.cb;
                    }
                    xhr = undefined;
                }
            };
            xhr.onerror = function (err) { // 出现下载错误
                if (!xhr) return;
                console.log('realSend xhr.onerror:', err)
                tm && clearTimeout(tm);
                tm = 0;
                if (retryTimes-- < 0) {
                    param.cb && param.cb("sendHttp fail", null);
                    delete param.cb;
                } else {
                    xhr && _this._send(onready, param, resonsType, opts);
                };
                xhr = undefined;
            };
            return xhr;
        } catch (error) {
            if (!xhr) return;
            if (retryTimes-- < 0) {
                param.cb && param.cb("sendHttp fail", null);
                delete param.cb;
            } else {
                xhr && _this._send(onready, param, resonsType, opts);
            };
            xhr = undefined;
        }
        return null;
    };

    static _generateSignature(data: { [key: string]: any }, signKey?: string): string {  
        // 步骤1: 数据排序  
        const sortedKeys = Object.keys(data).sort();  
      
        // 步骤2: 构建待签名字符串  
        let signString = sortedKeys.map(key => {  
            let value = data[key];  
            // 如果值是对象或数组，需要转换为JSON字符串  
            if (typeof value === 'object' && value !== null) {  
                value = JSON.stringify(value);  
            } else if (typeof value === 'string') {  
                // 对字符串进行URL编码  
                value = encodeURIComponent(value);  
            }  
            return `${key}=${value}`;  
        }).join('&');  
      
        // 步骤3: 如果有signKey，拼接在字符串后面  
        if (signKey) {  
            signString += signKey;  
        }  
      
        // 步骤4: 签名生成，对构建的待签名字符串进行MD5加密  
        const signature = md5(signString);  
      
        return signature;  
    }

    static _unionURLWithData(url: string, data: Record<string, any>) {
        if (typeof data === 'object') {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    let tag = url.indexOf('?') > 0 ? '&' : '?';
                    url += tag;
                    url += key + '=';
                    url += element;
                }
            }
        }
        return url;
    }

    static _unionURLWithLZData(url: string, data: Record<string, any>) {
        // let tag = url.indexOf('?') > 0 ? '&' : '?';
        // url += tag;
        // url += '_s' + '=';
        // url += data ? LZString.compressToEncodedURIComponent(JSON.stringify(data)) : null;;
        // return url;

        let tag = url.indexOf('?') > 0 ? '&' : '?';
        url += tag;
        const object = Object.keys(data);
        const array = [];
        for (const key of object) {
            array.push(`${key}=${data[key]}`);
        }
        if (array.length) {
            url += array.join("&");
        }
        return url;
    }


    static _netlog(...args: any) {
        glog(...args);
    }
}
export const http = LOCAL_HTTP;