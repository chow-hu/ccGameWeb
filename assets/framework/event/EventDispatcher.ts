/*
 * @Description: 事件派发器
                1.proto消息事件
                2.普通消息事件
                
 * @Author: zy
 * @Date: 2021-01-15 10:20:04
 * @Reference:
 */
import { isValid } from 'cc';
import { EMap } from '../common/EMap';
import { EventListener, IEventContract } from './IEvent';
function _sort_listener(l1: EventListener, l2: EventListener) {
    return l1.priority - l2.priority;
}
export default class EventDispatcher {
    private _protolistens: EMap<EventListener[]>;
    private _listens: EMap<EventListener[]>;
    private static _instance: EventDispatcher;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new EventDispatcher();
        return this._instance;
    }

    constructor() {
        this._listens = new EMap();
        this._protolistens = new EMap();
    }

    public clear() {
        this._listens.clear();
        this._protolistens.clear();
    }

    public addListener(event: string, target: IEventContract, priority: number = 0) {
        let eventListByType: EventListener[] | undefined = this._listens.get(event);
        if (!eventListByType) {
            eventListByType = this._listens.add(event, []);
        } else {
            for (let index = 0; index < eventListByType.length; index++) {
                const listher = eventListByType[index];
                if (listher.target == target) {
                    console.error("error repeat of event target,event:" + event);
                    return false;
                }
            }
        }
        target.events.push(event);
        eventListByType.push({ target, priority });
        eventListByType.sort(_sort_listener);
        return true;
    }

    public addProtoListener(event: string, target: IEventContract, priority: number = 0) {
        let eventListByType: EventListener[] | undefined = this._protolistens.get(event);
        if (!eventListByType) {
            eventListByType = this._protolistens.add(event, []);
        } else {
            for (let index = 0; index < eventListByType.length; index++) {
                const listher = eventListByType[index];
                if (listher.target == target) {
                    console.error("error repeat of event target,event:" + event);
                    return false;
                }
            }
        }
        target.events.push(event);
        eventListByType.push({ target, priority: priority || 0 });
        eventListByType.sort(_sort_listener);
        return true;
    }

    public dispatchProtoEvent(event: string, ...args: any[]) {
        let listens = this._protolistens.get(event) || [];
        let watch = listens.concat([]);
        let target: IEventContract, eventCallBack: Function | undefined, listener: EventListener;
        for (let index = 0; index < watch.length; index++) {
            listener = watch[index];
            target = listener.target;
            if (!isValid(target, true)) {
                continue;
            }
            eventCallBack = listener.target.onRecv || listener.target.onEvents;
            if (target && eventCallBack) {
                eventCallBack.call(target, event, ...args);
            }
        }
        this._collectListeners(listens);
        listens = this._protolistens.get('any') || [];
        watch = listens.concat([]);
        for (let index = 0; index < watch.length; index++) {
            listener = watch[index];
            target = listener.target;
            if (!isValid(target, true)) {
                continue;
            }
            eventCallBack = listener.target.onAnyEvents;
            if (target && eventCallBack) {
                eventCallBack.call(target, event, ...args);
            }
        }
        this._collectListeners(listens);
    }

    public dispatchEvent(event: string, ...args: any[]) {
        let listens = this._listens.get(event) || [];
        let watch = listens.concat([]);
        let target: IEventContract, eventCallBack: Function | undefined, listener: EventListener;
        for (let index = 0; index < watch.length; index++) {
            listener = watch[index];
            target = listener.target;
            if (!isValid(target, true)) {
                continue;
            }
            eventCallBack = listener.target.onEvents;
            if (target && eventCallBack && eventCallBack.call(target, event, ...args)) {
                break;
            }
        }
        this._collectListeners(listens); // target不存在就从listens[{target,priorty},{target,priorty},...]中清理掉 zy
        listens = this._listens.get('any') || [];
        watch = listens.concat([]);
        for (let index = 0; index < watch.length; index++) {
            listener = watch[index];
            target = listener.target;
            if (!isValid(target, true)) {
                continue;
            }
            eventCallBack = listener.target.onAnyEvents;
            if (target && eventCallBack && eventCallBack.call(target, event, ...args)) {
                break;
            }
        }
        this._collectListeners(listens);
    }

    private _collectListeners(listens: EventListener[]) {
        for (let index = listens.length - 1; index >= 0; index--) {
            const listener = listens[index];
            const target = listener.target;
            if (!isValid(target, true)) {
                listens.splice(index, 1);
            }
        }
    }

    public remove(target: IEventContract, event: string) {
        let eventListByType: EventListener[] | undefined = this._listens.get(event);
        if (!eventListByType) {
            return;
        }
        for (let index = 0; index < eventListByType.length; index++) {
            const listher = eventListByType[index];
            if (listher.target == target) {
                eventListByType.splice(index, 1);
                return;
            }
        }
    }

    public removeproto(target: IEventContract, event: string) {
        let eventListByType: EventListener[] | undefined = this._protolistens.get(event);
        if (!eventListByType) {
            return;
        }
        for (let index = 0; index < eventListByType.length; index++) {
            const listher = eventListByType[index];
            if (listher.target == target) {
                eventListByType.splice(index, 1);
                return;
            }
        }
    }
}