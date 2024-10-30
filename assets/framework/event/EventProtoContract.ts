/*
 * @Description: socket事件连接器
 * @Author: zy
 * @Date: 2021-03-17 10:05:07
 * @LastEditTime: 2021-06-01 16:34:00
 * @LastEditors: zy
 * @Reference: 
 */

import { EventContract } from "./EventContract";
import EventDispatcher from "./EventDispatcher";

export abstract class EventProtoContract extends EventContract {
    public onproto(event: string | string[] | Object, priority: number = 0) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                this._addOne(element, priority);
            }
        } else {
            this._addOne(event, priority);
        }
    };

    private _addObject(event: Record<string, string>, priority: number = 0) {
        for (const key in event) {
            if (Object.prototype.hasOwnProperty.call(event, key)) {
                const element = event[key];
                this._addEvent(element, priority);
            }
        }
    };

    private _addOne(event: string | Object, priority: number = 0) {
        if (typeof event === "string") {
            this._addEvent(event, priority);
        } else if (typeof event === "object") {
            this._addObject(event as Record<string, string>, priority);
        }
    };

    private _addEvent(event: string, priority: number = 0) {
        EventDispatcher.instance.addProtoListener(event, this, priority);
    };

    public offproto(event: string | string[], priority: number = 0) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                EventDispatcher.instance.removeproto(this, element);
            }
        } else {
            EventDispatcher.instance.removeproto(this, event);
        }
    };

    abstract onRecv(event: string, data: any): void;
}