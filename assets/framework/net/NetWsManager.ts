
/*
 * @Description: 网络管理类(基于websocket)
 * @Author: zy
 * @Date: 2024-03-11
 * @Reference: 
 */

import { game, isValid, log, warn } from "cc";
import _ from "lodash";
import { Utils } from "../../game/common/Utils";
import { config } from "../../plug-in/config";
import protoRoot from '../../shared/proto.js';
import { glog, valueset } from "../common/general";
import out from '../extension/buffer/buffer.js';
import { StorageData } from "../storage/StorageData";
import { SchedulerManager } from "../timer/SchedulerManager";
import { CmdToPbName, GameCmdMap, INetContract, NetEvent, NetMsg, NetState } from "./INet";

const HEARTBEAT_INTERVAL = 10; // 10秒发送一次心跳  
const MISSED_HEARTBEATS_BEFORE_DISCONNECT = 3; // 错过3次心跳后断开连接  
/** 心跳协议 */
const HeartBeat = {
    req: "agent.HeartBeat",
    resp: "agent.HeartBeat",
}


export default class NetWsManager {
    private static _instance: NetWsManager;
    private _contract?: INetContract;
    private _socket?: WebSocket;
    private _state = NetState.NONE;
    private _host: string = '';
    private _connected = false;
    private _connectTimer: any;
    private _connectTimeOut = 6000;
    private _nSendHeartId = 0
    private _reconnectNumber: number = -1;
    private _reconnectCount: number = this._reconnectNumber;
    private _isDestroy: boolean = false;
    private _reconnectTimer: any;
    private _reconnectTimeOut: number = 3000;
    private _user: { uid: number } = { uid: 0 };
    public get user(): any {
        return this._user;
    }
    public set user(value: any) {
        this._user = value;
    }

    //心跳句柄
    private _handlerHeartPack = null;
    private _sendstack: Record<string, number> = {};
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new NetWsManager();
        valueset(globalThis, 'gnet', this._instance);
        return this._instance;
    };

    public set contract(v: INetContract | undefined) {
        this._contract = v;
    };

    public get contract(): INetContract | undefined {
        return this._contract;
    };

    public get state(): NetState {
        return this._state;
    };

    public get connected(): boolean {
        return this._connected
    }

    public reconnect(): void {
        if (this._reconnectCount > 0 || this._reconnectNumber == -1) {
            this._reconnectTimer = setTimeout(() => {
                log('socket reconect');
                this.connect(this._host, true);
                this._reconnectCount--;
            }, this._reconnectTimeOut);
        } else {
            this.destroy();
            this.contract?.onNet(NetEvent.CONNECT_FAILED);
        }
    };

    public pause(): void {
        this.clearTimeout();
    }

    public connect(url: string, force: boolean): void {
        if (this._socket && !force) {
            return;
        }
        this.contract?.onNet(NetEvent.WILLOPEN);
        this.collect();
        this._host = url;
        this._state = NetState.WAITING;
        this._connected = false;
        // const fullWebSocketURL = this._modifySocketUrl(url);
        const fullWebSocketURL = url;

        log("当前Socket地址:", fullWebSocketURL)
        this._socket = new WebSocket(fullWebSocketURL); // H5标准，底层做好了;
        this._socket.binaryType = "arraybuffer";
        this._bindSocket();
    };

    /** 修改为正确的socket  */
    private _modifySocketUrl(url) {
        let union = config.needWss ? "wss" : "ws";

        if (Utils.stringIsHttp(url)) {
            let urlList = String(url).split("://");
            if (urlList.length > 1) {
                url = urlList[1];
            }
        };
        if (Utils.stringIsSocket(url) == false) {
            if (String(url).length > 8) {
                url = union + "://" + url;
            }
        }

        return url
    }

    private _bindSocket() {
        this._socket.onopen = this._on_opened.bind(this);
        this._socket.onmessage = this._on_recv_data.bind(this);
        this._socket.onclose = this._on_socket_close.bind(this);
        this._socket.onerror = this._on_socket_err.bind(this);
        this.timeout()
    }

    _on_opened(event) {
        this.clearReconnectTimer();
        this.clearTimeout();
        this.startHeart()
        this._connected = true;
        this._state = NetState.READY;
        log("connect to server: " + this._host + " sucess!");
        this.contract?.onNet(NetEvent.READY);
        this._isDestroy = false;
        this._reconnectCount = this._reconnectNumber;
    }

    _on_recv_data(event) {
        if (this._state !== NetState.READY) {
            return;
        }
        this._receiveData(event.data);
    }

    _on_socket_close(event) {
        if (this.state == NetState.READY) {
            log("_on_socket_close");
            this.contract?.onNet(NetEvent.CLOSED);
        }
        if (!this._isDestroy) {
            this.close()
            this.reconnect();
            return;
        }
        this.close()
        this.contract?.onNet(NetEvent.CONNECT_FAILED);
    }

    _on_socket_err(event) {
        // log("_on_socket_err");
        // this.close()
        // this.contract?.onNet(NetEvent.CONNECT_FAILED);
    }

    public collect() {
        if (!this._socket) {
            return;
        }

        this._socket.onopen = null;
        this._socket.onmessage = null;
        this._socket.onerror = null;
        this._socket.onclose = null;
        this._socket.close();
        this._socket = null;
    };

    public close() {
        log("socket close");
        this._connected = false;
        this.stopHeart();
        this.clearTimeout();
        this.clearReconnectTimer();
        this.collect();
        this._sendstack = {};
        this._state = NetState.CLOSED;
        this.user.uid = 0;
    };

    public destroy() {
        this._reconnectCount = this._reconnectNumber;
        this._isDestroy = true;
        this.close();
    }

    private clearReconnectTimer() {
        if (this._reconnectTimer) {
            clearTimeout(this._reconnectTimer);
            this._reconnectTimer = null;
        }
    }


    public clearTimeout() {
        if (this._connectTimer) {
            clearTimeout(this._connectTimer);
            this._connectTimer = 0;
        }
    }

    public timeout() {
        if (this._connectTimer) {
            return;
        }
        this.clearTimeout();
        this._connectTimer = setTimeout(() => {
            if (this._reconnectCount > 0 || this._reconnectNumber == -1) {
                this.reconnect();
            } else {
                this.destroy();
                this.contract?.onNet(NetEvent.CONNECT_FAILED);
            }
        }, this._connectTimeOut);
    }

    /** 开启一个心跳 */
    public startHeart(time = HEARTBEAT_INTERVAL) {
        this.stopHeart();
        this._handlerHeartPack = SchedulerManager.schedulerInterval(() => {
            if (this._state === NetState.READY && this._socket) {
                if (this._nSendHeartId >= MISSED_HEARTBEATS_BEFORE_DISCONNECT) {
                    console.warn("网络异常,需要重连...");
                    this.destroy();
                    this.contract?.onNet(NetEvent.CONNECT_FAILED);
                    return
                }
                this.sendHeartBeat();
            }
        }, time)
    }

    /** 停止心跳包 */
    public stopHeart() {
        this._nSendHeartId = 0
        SchedulerManager.unscheduleInterval(this._handlerHeartPack);
        this._handlerHeartPack = null;
    }

    private sendHeartBeat() {
        this._nSendHeartId++;
        let data = { trans: Date.now() };
        this.send(HeartBeat.req, 2, protoRoot.agent.AGENT_CMD.AGENT_CMD_HEART_BEAT, data)
    }
    private receiveHeartBeat(data: Record<string, any>) {
        // warn("心跳返回", data);
        if (data && data.trans != null) {
            let oldTime = Number(data.trans);
            if (oldTime > 0) {
                let curTime = Date.now();
                let delayTime = (curTime - oldTime);
                this._contract?.onNet(NetEvent.DELAY, delayTime);
            }
        }
    }

    public ready(force = false) {
        if (force && this._connected) {
            this._state = NetState.READY;
        } else {
            return this._state === NetState.READY;
        }
    };

    /**
     * 发送消息
     * @param route 包装函数
     * @param dsttype 命令类型
     * @param cmd 命令ID
     * @param data 发送的数据
     * @param force 是否检测重发
     * @param seq 客户端消息标识
     * @returns 
     */
    public send(route: string, dsttype: number, cmd: number, data?: any, force = false, seq = 0) {
        if (!this._sendstack[route] || this._sendstack[route] <= StorageData.sysTs || force) {
            this._sendstack[route] = StorageData.sysTs + 1000;
        } else {
            return false;
        }
        if (this._state == NetState.NONE || this._state == NetState.CLOSED || this._state == NetState.WAITING) {
            log("send route:" + route)
            this._contract?.onNet(NetEvent.NOT_READY);
            return false;
        }
        if (!this._socket || this._socket.readyState != WebSocket.OPEN) {
            return false;
        }

        this._sendencode(route, dsttype, cmd, data, seq);
        return true;
    };

    /**
     * 接收消息
     * @param data 
     * @returns 
     */
    private _receiveData(data: ArrayBuffer) {
        // step1: 读取消息头
        var dataView = new DataView(data);
        let offset = 0;

        // 读取并解析数据包头部信息  
        const magic1 = dataView.getUint8(offset++);
        const magic2 = dataView.getUint8(offset++);
        const ver = dataView.getUint8(offset++);
        const crc = dataView.getUint8(offset++);

        // 以下的get方法默认都是大端字节序  
        const cmd = dataView.getUint32(offset); offset += 4;
        const dsttype = dataView.getUint16(offset); offset += 2;
        const srctype = dataView.getUint16(offset); offset += 2;
        const dstid = dataView.getUint32(offset); offset += 4;
        const srcid = dataView.getUint32(offset); offset += 4;
        const seq = dataView.getUint32(offset); offset += 4;
        const bitflag = dataView.getUint32(offset); offset += 4;
        const datalen = dataView.getUint32(offset); offset += 4;

        let _cmd = Number(cmd);

        // step2: 读取出来msgBuf;
        var msgBuf: Uint8Array = new Uint8Array(data, offset, datalen);

        // step3:若配置表中没有 则考虑是否需要转发到游戏
        if (!CmdToPbName[cmd]) {
            console.log("CmdToPbName Error:cmd = ", cmd)
            return;
        }
        let newMsgBuf: Uint8Array = null;
        if (bitflag == 1) {//加密
            newMsgBuf = this._encryptData(msgBuf);
        } else {
            newMsgBuf = msgBuf;
        }
        let route = CmdToPbName[cmd];
        this._deleteSendStack(route);

        var msg = this._protodecode(route, newMsgBuf.buffer);
        if (route == HeartBeat.resp) {
            this._nSendHeartId = 0;
            this.receiveHeartBeat(msg);
            return;
        }
        // 确定路由类型（取路由中包含的 'Resp'、'Push'、'Ntf' 之一）  
        let routeType = ['Resp', 'Ntf', 'Push'].find(type => route.includes(type));
        let netmsg: NetMsg | undefined = { route, data: msg }
        if (!routeType) {
            routeType = 'Resp';
            route = route + 'Resp'
        }
        netmsg && this._netlog(route, `[${routeType.toUpperCase()}-${route}]: `, _.cloneDeep(netmsg));
        this._contract?.onNet(NetEvent.DATA, netmsg);
    };

    private _deleteSendStack(route: string) {
        if (this._sendstack.hasOwnProperty(route)) {
            return delete this._sendstack[route];
        }
        let key = route.slice();
        if (key.includes('Response')) {
            key = key.replaceAll('Response', 'Request');
        }
        if (key.endsWith('Resp')) {
            key = key.replaceAll('Resp', 'Req');
        }
        if (this._sendstack.hasOwnProperty(key)) {
            delete this._sendstack[key];
        }
    }


    private _protoencode(route: string, body: any): out.Buffer {
        const Req = _.get(protoRoot, route) || _.get(protoRoot, route + 'Req');
        return out.Buffer.from(Req.encode(body).finish());  // Uint8Array
    };

    public _protodecode(route: string, data: ArrayBuffer): any {
        let Resp = _.get(protoRoot, route) || _.get(protoRoot, route + 'Resp');
        if (data instanceof ArrayBuffer) {
            let res = Resp.decode(out.Buffer.from(data));
            // console.log("老数据", res.toJSON());
            this._modifyDefaultBody(res);
            // console.log("新数据", res);
            return res;
        };
        return data;
    };


    private _sendencode(route: string, dsttype: number, cmd: number, data: Record<string, any>, seq = 0) {
        let originRoute = route;
        if (route !== HeartBeat.req) {
            if (!route.endsWith('Req')) originRoute = originRoute + 'Req';
            this._netlog(originRoute, `[REQ-${originRoute}]: `, data);
        }

        // step1: 数据data --->二进制
        let msgBuf = this._protoencode(route, data); // Uint8Array
        // step2: 二进制 --->加密
        let newMsgBuf = this._encryptData(msgBuf)
        // step3: 发送数据
        this._sendData(dsttype, data.dstid, cmd, newMsgBuf, seq, 1);
    };

    /** 发送加密后的数据 */
    private _sendData(dsttype: number, dstid: number = 0, cmd: number, msgBuf: Uint8Array, seq = 0, bitflag = 1) {
        if (msgBuf === null) {
            console.log("msgBuf is Null")
            return;
        }

        // 这里的DataView和Uint8Array可以理解为容器，buf可以理解为我们的内存,DataView可以用int16,int32操作buf,使用Uint8Array，set可以大规模的复制数据
        // step2: 打入消息头长度=32
        var packHeadLength = 32
        var m_datalen = msgBuf.length                         // 消息体原始长度 buf_len(4字节)
        var total_len = packHeadLength + m_datalen            // 消息总长度 total_len(2字节) (消息头+消息体）   
        var buf = new ArrayBuffer(total_len);
        let offset = 0;

        var m_magic = new Uint8Array([0xFE, 0x01]); // 使用Uint8Array存储魔数  
        var m_ver = 0 // 版本号
        var m_crc = 0 // 防止改包校验，默认0 
        var m_cmd = cmd  // 命令字 
        var m_dstid = dstid // 方便转发 *(动态数据)


        var m_srcid = this.user.uid || 0;//Cache.User.getUID() || 0 // 默认用户id
        var m_seq = seq;   // 序列号,默认0
        var m_bitflag = bitflag // 控制用,1表示加密
        var m_dsttype = dsttype     // 目标服务器类型
        var m_srctype = 1     // 源

        var dataview = new DataView(buf);
        dataview.setUint8(offset++, m_magic[0]);
        dataview.setUint8(offset++, m_magic[1]);
        dataview.setUint8(offset++, m_ver);
        dataview.setUint8(offset++, m_crc);
        dataview.setUint32(offset, m_cmd); offset += 4;
        dataview.setUint16(offset, m_dsttype); offset += 2;
        dataview.setUint16(offset, m_srctype); offset += 2;
        dataview.setUint32(offset, m_dstid); offset += 4;
        dataview.setUint32(offset, m_srcid); offset += 4;
        dataview.setUint32(offset, m_seq); offset += 4;
        dataview.setUint32(offset, m_bitflag); offset += 4;
        dataview.setUint32(offset, m_datalen); offset += 4;

        // step3: 打入msgBuf
        var uint8Buf = new Uint8Array(buf, offset);
        uint8Buf.set(msgBuf);
        if (this._state === NetState.READY && this._socket) {
            this._socket.send(buf);
        }
    }

    /** 增加默认数据 */
    private _modifyDefaultBody(obj) {
        if (obj == null) {
            return null;
        }
        if (typeof (obj) != "object") {
            return obj;
        }
        let self = this;
        if (obj instanceof Array) {
            obj.forEach((value, key) => {
                if (typeof (value) != 'function') {
                    if (value != null && typeof (value) == 'object') {
                        if (value && value["offset"] == null && value["buffer"] == null) {
                            self._modifyDefaultBody(value);
                        }
                    }
                }
            })
            return obj;
        }
        let defaultKeys = Object.keys(Object.getPrototypeOf(obj));
        defaultKeys.forEach((key) => {
            let value = obj[key];
            // console.log("输出Key:", key, "输出value:", value, "输出类型:", typeof (value))
            if (typeof (value) != 'function') {
                if (value != null && typeof (value) == 'object') {
                    if (value && value["offset"] != null && value["buffer"] != null) {
                        obj[key] = value;
                    } else {
                        value && self._modifyDefaultBody(value);
                    }
                } else {
                    // console.log(`key:${key} value：`, value)
                    obj[key] = value;
                }
            }

        })
        return obj;
    };
    // 加解密算法  
    private _encryptData(data: Uint8Array) {
        // 加解密 Key  
        const ENCRYPT_KEY: string = 'EFMNJQKW';
        const dataLength = data.length;
        let uindex = 0;
        const encryptedData = new Uint8Array(dataLength);

        for (let i = 0; i < dataLength; ++i) {
            const keyChar = ENCRYPT_KEY.charCodeAt(uindex); // 获取当前字符的ASCII码值  
            encryptedData[i] = data[i] ^ keyChar;           // 执行异或操作  
            uindex = (uindex + 1) % ENCRYPT_KEY.length;     // 更新索引  
        }
        return encryptedData;
    }


    private _netlog(route: string, ...args: any) {
        let LOGIGNORE: any = (globalThis as any).LOGIGNORE || [];
        if (LOGIGNORE.includes(route)) {
            return;
        }
        glog(...args);
    }
}