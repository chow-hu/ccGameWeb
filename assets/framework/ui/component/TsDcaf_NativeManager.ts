import { _decorator, native, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TsDcaf_NativeManager')
export class TsDcaf_NativeManager {
    private static _instance: TsDcaf_NativeManager;

    static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new TsDcaf_NativeManager();
        return this._instance;
    }
    /**
     * 注册TS层的事件监听
     * @param eventName 事件名称 
     * @param callFun 回调函数
     */
    public registerScriptEvent(eventName: string, callFun: any) {
        if (sys.isNative) {
            native.jsbBridgeWrapper.addNativeEventListener(eventName, (msg: string) => {
                callFun(msg);
            })
        }
    }

    /**
     * 发送消息给java层
     * @param eventName 事件名称 
     * @param data 发送的字符串
     */
    public dispatchEventToNative(eventName: string, arg?: string) {
        if (sys.isNative) {
            native.jsbBridgeWrapper.dispatchEventToNative(eventName, arg);
        }
    }

    /**
     * 移除指定的事件
     * Remove all listener for event specified.
     * @param eventName 事件名称
     */
    public removeScriptEventListener(eventName: string) {
        if (sys.isNative) {
            native.jsbBridgeWrapper.removeAllListenersForEvent(eventName);
        }
    }

}


