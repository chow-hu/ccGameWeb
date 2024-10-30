/**
 * @description
 */

import { Node, NodeEventType, __private, input, isValid } from "cc";
export type EventCallback = (...any: any[]) => void;
export interface EventAgrs {
    /**
     * @description
     */
    bind: /* "Dispatcher" | "Game" | */ "Input" | "Node";
    /**@description */
    type: string | NodeEventType;
    /**
     * @description 
     */
    node?: Node;
    /**@description  */
    cb?: EventCallback;
    /**@description  */
    target?: unknown;
    /**@description  */
    useCapture?: any;
    /**@description */
    once?: boolean;
}

export interface IEventProcessor {
    addEvents(): void;
    /**
     * @description 
     * @param args 
     */
    onEvn(args: EventAgrs): void;
    /**
     * @description 
     * @param args 
     */
    onceEvn(args: EventAgrs): void;
    /**
     * @description 
     * @param args 
     */
    offEvn(args: EventAgrs): void;

    /**
     * @description 
     * @param type 
     * @param cb 
     */
    onInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void;
    /**
     * @description 
     * @param type 
     * @param cb 
     */
    onceInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void;
    /**
     * @description 
     * @param type 
     * @param cb 
     */
    offInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void;

    /**
     * @description 
     * @param node 
     * @param type 
     * @param cb 
     * @param target
     * @param useCapture 
     */
    onNode(node: Node | null | undefined, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void;
    /**
     * @description 
     * @param node 
     * @param type 
     * @param cb 
     * @param target
     * @param useCapture 
     */
    onceNode(node: Node | null | undefined, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void;
    /**
     * @description 
     * @param node 
     * @param type 
     * @param cb 
     * @param target
     * @param useCapture 
     */
    offNode(node: Node | null | undefined, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void;
}

export class EventProcessor implements IEventProcessor {
    private _eventsI: EventAgrs[] = [];

    onInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.onEvn({
            bind: "Input",
            type: eventType,
            cb: cb,
        })
    }
    onceInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.onceEvn({
            bind: "Input",
            type: eventType,
            cb: cb,
        });
    }

    offInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.offEvn({
            bind: "Input",
            type: eventType,
            cb: cb
        });
    }

    onNode(node: Node, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void {
        this.onEvn({
            bind: "Node",
            type: type,
            cb: cb,
            target: target,
            useCapture: useCapture,
            node: node,
        });
    }
    onceNode(node: Node, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void {
        this.onceEvn({
            bind: "Node",
            type: type,
            cb: cb,
            target: target,
            useCapture: useCapture,
            node: node
        })
    }
    offNode(node: Node, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void {
        this.offEvn({
            bind: "Node",
            type: type,
            cb: cb,
            target: target,
            useCapture: useCapture,
            node: node
        });
    }

    addEvents() {

    }

    onLoad(...args: any[]) {
        this.addEvents();
    }

    onDestroy(...args: any[]) {
        this._cleanI();
        this._cleanN();
    }

    onEvn(args: EventAgrs): void {
        switch (args.bind) {
            case "Input": this._onI(args); break;
            case "Node": this._onN(args); break;
        }
    }
    onceEvn(args: EventAgrs): void {
        args.once = true;
        this.onEvn(args);
    }

    offEvn(args: EventAgrs): void {
        switch (args.bind) {
            case "Input": this._offI(args); break;
            case "Node": this._offN(args); break;
        }
    }

    private _onI(args: EventAgrs) {
        if (!args.target) {
            args.target = this;
        }
        if ( this._has(this._eventsI,args) ){
            return;
        }
        if (args.once) {
            input.once(args.type as unknown as any, args.cb!, args.target);
        } else {
            input.on(args.type as unknown as any, args.cb!, args.target);
        }
        this._eventsI.push(args);
    }

    private _offI(args: EventAgrs) {
        if (!args.target) {
            args.target = this;
        }
        input.off(args.type as unknown as any, args.cb, args.target);
        for (let i = 0; i < this._eventsI.length; i++) {
            const ele = this._eventsI[i];
            if (ele.type == args.type && ele.cb == args.cb && ele.target == ele.target) {
                this._eventsI.splice(i, 1);
                break;
            }
        }
    }

    private _cleanI() {
        for (let i = 0; i < this._eventsI.length; i++) {
            const ele = this._eventsI[i];
            input.off(ele.type as unknown as any, ele.cb, ele.target);
        }
        this._eventsI = [];
    }

    private _onN(args: EventAgrs) {
        if (!args.target) {
            args.target = this;
        }
        if (!isValid(args.node)) {
            return;
        }
        if (args.once) {
            args.node?.once(args.type, args.cb!, args.target, args.useCapture);
        } else {
            args.node?.on(args.type, args.cb!, args.target, args.useCapture);
        }
    }

    private _offN(args: EventAgrs) {
        if (!args.target) {
            args.target = this;
        }
        if (!isValid(args.node)) {
            return;
        }
        args.node?.off(args.type, args.cb, args.target, args.useCapture);
    }

    private _cleanN() {
        
    }

    private _has(datas:EventAgrs[],args:EventAgrs){
        for( let i = 0 ; i < datas.length ; i++ ){
            const element = datas[i];
            if (element.type == args.type &&
                element.cb == args.cb &&
                element.target == args.target) {
                return true;
            }
        }
        return false;
    }
}
