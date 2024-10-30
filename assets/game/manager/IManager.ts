/*
 * @Description: 
 * @Author: zy
 * @Date: 2023-04-23 17:12:35
 * @Reference: 
 */

import { EDITOR } from "cc/env";
import { EventProtoContract, SchedulerManager } from "../../framework/ge";
import { gmgr } from "./gmgr";
import { EMgr } from "./interface";

export abstract class IManager extends EventProtoContract {

    protected _schedulerHandler = {};
    protected _schedulerHandlerOnce = {};

    constructor(raw: string) {
        super();
        this._RAW_TYPE = raw;
        if (this._RAW_TYPE) {
            if (!EDITOR && gmgr.get(this._RAW_TYPE)) {
                throw '重复的manager-RAW_TYPE=>' + this._RAW_TYPE;
            }
            gmgr.add(this._RAW_TYPE, this);
        } else {
            console.trace();
            throw 'manager-RAW_TYPE 为空';
        }
    }

    public _RAW_TYPE: string = EMgr.NONE;
    public init() {

    }

    public raw() {
        return this._RAW_TYPE;
    }
    public onEvents(event: string, ...args: any[]) {

    };

    /**
     * 添加一个延时
     * @param time 时间 单位:秒
     * @param callback 更新函数(默认为:onSchedulerUpdate) 
     * @param return 定时器句柄number
     */
    public addSchedulerOnce(time: number = 0, callback: Function = this.onSchedulerUpdate): number {
        const content = this
        let handler = SchedulerManager.schedulerTimeout((dt: number) => {
            callback.call(content, dt, handler);
            content.stopSchedulerOnce(handler);
        }, time)
        this._schedulerHandlerOnce[handler] = true;
        return handler
    }
    /** 停止延时定时器 */
    public stopSchedulerOnce(handler: number) {
        SchedulerManager.unscheduleTimeout(handler);
        if (handler != null && this._schedulerHandlerOnce[handler] == true) {
            this._schedulerHandlerOnce[handler] = null;
        }
    }

    /**
     * 添加一个定时器
     * @param time 时间 单位:秒
     * @param callback 更新函数(默认为:onSchedulerUpdate) 
     * @param return 定时器句柄number
     */
    public addScheduler(time: number = 0, callback: Function = this.onSchedulerUpdate): number {
        const content = this
        let handler = SchedulerManager.schedulerInterval((dt: number, _handler) => {
            callback.call(content, dt, handler);
        }, time)
        this._schedulerHandler[handler] = true;
        return handler
    }
    /** 停止定时器 */
    public stopScheduler(handler: number) {
        SchedulerManager.unscheduleInterval(handler);
        if (handler != null && this._schedulerHandler[handler] == true) {
            this._schedulerHandler[handler] = null;
        }
    }
    /** 停止所有定时器 */
    public stopAllScheduler() {
        for (let handler in this._schedulerHandler) {
            if (Object.prototype.hasOwnProperty.call(this._schedulerHandler, handler)) {
                this.stopScheduler(Number(handler));
            }
        }
        for (let handler in this._schedulerHandlerOnce) {
            if (Object.prototype.hasOwnProperty.call(this._schedulerHandlerOnce, handler)) {
                this.stopSchedulerOnce(Number(handler));
            }
        }
    }

    /** override 定时器的回调更新，子类需重写该方法 */
    protected onSchedulerUpdate(dt?: number) {

    }

    /** 清理所有 */
    public clear() {
        this.stopAllScheduler()
        this._schedulerHandler = {};
        this._schedulerHandlerOnce = {};
        this.off(this.events);
        this.offproto(this.events);
        this.events = [];
        gmgr.clear(this.raw());
    }

    onRecv(event: string, ...args: any[]): void {

    }


}
