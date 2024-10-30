/*
 * @Description: 事件监听器
 * @Author: zy
 * @Date: 2021-03-17 09:46:53
 * @Reference: 
 */

import EventDispatcher from "./EventDispatcher";
import { IEventContract } from "./IEvent";

export class EventContract implements IEventContract {
    public events: string[] = [];
    public emit(event: string, ...args: any[]): any {
        EventDispatcher.instance.dispatchEvent(event, ...args);
    };

    public on(event: string | string[], priority: number = 0) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                EventDispatcher.instance.addListener(element, this, priority);
            }
        } else {
            EventDispatcher.instance.addListener(event, this, priority);
        }
    };

    public off(event: string | string[]) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                EventDispatcher.instance.remove(this, element);
            }
        } else {
            EventDispatcher.instance.remove(this, event);
        }
    };

    public onEvents(event: string, ...args: any[]) {

    };
}