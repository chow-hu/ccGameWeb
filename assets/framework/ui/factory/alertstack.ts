/*
 * @Description: alert 工厂线
 * @Author: zy
 * @Date: 2021-01-19 16:43:19
 * @Reference:
*/

import { Button, instantiate, isValid, Node, Prefab, Sprite, SpriteAtlas, tween, UIOpacity } from "cc";
import { EMap } from "../../common/EMap";
import { ETw } from "../../common/ETw";
import { PRIORITY } from "../../common/general";
import { EventContract } from '../../event/EventContract';
import EventDispatcher from "../../event/EventDispatcher";
import { UIBase } from "../component/UIBase";
import { siblingChildByPriority } from "./utils";
type AlertItem = {
    node: Node,
    priority: number,
    tag: string,
    data: AlertParm
}
export enum AlertStackEvent {
    ALERT_OPEN = 'EVENT_ALERT_OPEN',
    ALERT_CLOSE = 'EVENT_ALERT_CLOSE',
}

type OK_CB = Function;
type CANCLE_CB = (isMask?: boolean) => void;
export type AlertBtnParm = {
    ts?: number;
    text?: string;
    cb: OK_CB | CANCLE_CB;
}
export type AlertParm = {
    title?: string,
    content: string;
    enableClose: boolean;
    imageAtlas?: SpriteAtlas;
    noTipKey?: string;
    ok?: AlertBtnParm,
    cancel?: AlertBtnParm | CANCLE_CB,
    close?: boolean,
}

export interface IAlertStackHelper {
    check(noTipKey: string): boolean;
}
export class AlertStack extends EventContract {
    private _panel?: Node;
    private _mask?: Node;
    private _prefab?: Prefab;
    private _cIndex = 0;
    private _stack: EMap<AlertItem>;
    private _tag: string;
    private _helper?: IAlertStackHelper;
    private _last_masked = false;
    private static _instance: AlertStack;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AlertStack('GUI');
        return this._instance;
    };

    constructor(tag: string) {
        super()
        this._tag = tag;
        this._stack = new EMap<AlertItem>();
    };

    public clear() {
        this._stack.clear();
        this._panel = undefined;
        this._prefab = undefined;
        this._cIndex = 0;
    };

    public count() {
        return this._stack.count;
    }

    public setInfo(panel: Node, prefab: Prefab, helper?: IAlertStackHelper): void {
        this._panel = panel;
        this._prefab = prefab;
        this._helper = helper;

        let one = this._panel.children[0];
        if (!this._mask) {
            this._mask = one;
            let btn = this._mask.getComponent(Button);
            if (!btn) btn = this._mask.addComponent(Button);
            btn.node.off('click');
            btn.node.on('click', this.onMaskClick.bind(this));
        }
    };

    public open(parm: AlertParm, priority: number = PRIORITY.ALERT, tag?: string) {
        if (!isValid(this._prefab, true) || !isValid(this._panel, true)) {
            return;
        }
        if (parm.noTipKey && this._helper?.check(parm.noTipKey)) {
            parm.ok?.cb();
            return;
        }
        let alertTag = tag || "";
        let alert: Node | undefined;
        if (!alertTag) {
            this._cIndex++;
            alertTag = "UNTAG_" + this._cIndex;
        } else {
            let alertData = this._stack.get(alertTag);
            if (!alertData || !isValid(alertData.node, true)) {
                alert = undefined;
                this._stack.remove(alertTag);
            } else {
                alert = alertData.node;
                alertData.data = parm;
            }
        }
        if (!alert) {
            alert = instantiate(this._prefab!);
            alert.parent = this._panel!;
            let opacityCmp = alert.getComponent(UIOpacity) || alert.addComponent(UIOpacity);
            opacityCmp.opacity = 100;
            tween(opacityCmp).to(0.1, { opacity: 255 }).start();
            // tween(alert).to(0.2, { scale: new Vec3(1.2, 1.2, 1) }, { easing: 'sineIn' }).to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: 'sineIn' }).start();
            this._stack.add(alertTag, { node: alert, tag: alertTag, priority, data: parm });
        }
        let uiJs = alert.getComponent(UIBase);
        if (uiJs && uiJs.init) {
            uiJs.init(parm);
            uiJs.priority = priority;
            siblingChildByPriority(alert, uiJs, this._panel!);
        }
        // this.emit('mask', { type: 'alert', tag: this._tag });
        this._doMask(true);
        EventDispatcher.instance.dispatchEvent(AlertStackEvent.ALERT_OPEN, { tag: alertTag });
    };

    public close(tag: string | Node | number, filters: string[] = []) {
        if (typeof tag === 'undefined') return;
        let alertKey: string[] = [];
        if (tag === 'all') {
            this._stack.forEach((val, key) => {
                alertKey.push(key);
            });
        } else {
            if (typeof tag === 'string') {
                alertKey.push(tag);
            } else if (typeof tag === 'number') {
                this._stack.forEach((val, key) => {
                    if (val.priority <= tag) alertKey.push(key);
                });
            } else if (tag instanceof Node) {
                this._stack.forEach((val, key) => {
                    if (val.node === tag) alertKey.push(key);
                });
            }
        }
        alertKey.forEach(k => {
            if (filters.includes(k)) {
                return;
            }
            let val = this._stack.remove(k);
            if (val && isValid(val.node, true)) {
                val.node.parent = null;
                val.node.destroy();
                EventDispatcher.instance.dispatchEvent(AlertStackEvent.ALERT_CLOSE, { tag: val.tag });
            }
        });
        // this.emit('mask', { type: 'alert', tag: this._tag });
        this._doMask(true);
    };

    public onMaskClick() {
        let children = this._panel?.children || [];
        let one = children[children.length - 1];
        if (!one) {
            this._mask!.active = false;
            return;
        }
        let alert = this._stack.find(v => v.node === one);
        if (!alert) {
            this._mask !== one && one.destroy();
            // this.emit('mask', { type: 'alert', tag: this._tag });
            return;
        }
        if (!alert.data.enableClose) {
            return;
        }
        let close_cb: Function | undefined;
        if (typeof alert.data.cancel === 'function') {
            close_cb = alert.data.cancel;
        } else {
            close_cb = alert.data.cancel && alert.data.cancel.cb;
        }
        close_cb && close_cb(true);
        this.close(alert.tag);
    }

    private _doMask(v: boolean, force = false) {
        if (!this._mask) return;
        let maskable = false;
        if (v && this.count() > 0) {
            let children = [] as Node[];
            children = children.concat(this._panel?.children || []);
            let idx = children.indexOf(this._mask);
            if (idx > -1) {
                children.splice(idx, 1);
            }
            for (let index = children.length - 1; index >= 0; index--) {
                const one = children[index];
                if (!isValid(one, true)) continue;
                let uiJs = one.getComponent(UIBase);
                if (!uiJs) continue;
                this._mask!.active = true;
                this._mask.setSiblingIndex(index);
                maskable = true;
                break;
            }
        }
        let btn = this._mask.getComponent(Button);
        if (btn) {
            btn.enabled = maskable;
        }
        if (force) {
            if (!v) {
                this._mask.parent = null;
            } else {
                ETw.fadeTo(this._mask.getComponent(Sprite)!, 0, maskable ? 255 : 0);
            }
        } else if (maskable != this._last_masked) {
            if (!maskable && this._last_masked) {
                this._mask.parent && ETw.fadeTo(this._mask.getComponent(Sprite)!, 0, 0);
            } else if (maskable && !this._last_masked) {
                this._mask.parent && ETw.fadeTo(this._mask.getComponent(Sprite)!, 0, 255);
            }
        }
        this._last_masked = maskable;
    }
}

export const alertStack: AlertStack = AlertStack.instance;