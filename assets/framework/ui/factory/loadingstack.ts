/*
 * @Description: loading 工厂线
 * @Author: zy
 * @Date: 2021-01-19 16:09:32
 * @Reference:
 */
import { Node, Prefab, Tween, instantiate, isValid, tween } from "cc";
import { UIBase } from "../component/UIBase";
export class LoadingStack {
    private _custom: () => Node = null;
    public get custom(): () => Node {
        return this._custom;
    }
    public set custom(value: () => Node) {
        this._custom = value;
        let one = this._panel.getChildByName('custom');
        one && Tween.stopAllByTarget(one);
        one && one.destroy();
    }
    private _panel?: Node;
    private _prefab?: Prefab;
    private _priority: number = 0;
    private static _instance: LoadingStack;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new LoadingStack();
        return this._instance;
    };

    constructor() {
    };

    private showCustom(parm: any, priority: number = 0) {
        let custom = this._panel.getChildByName('custom');
        let one = this._panel.getChildByName('default');
        one.active = false;
        if (parm == false) {
            if (custom) {
                Tween.stopAllByTarget(custom)
                custom.active = false;
                custom.destroy();
            }
        } else {
            if (!custom || !isValid(custom, true)) {
                custom = this.custom();
                custom.parent = this._panel;
                custom.name = 'custom';
            } else if (this._priority < priority && custom.active) {
                return;
            }
            Tween.stopAllByTarget(custom)
            let comp = custom.getComponent(UIBase);
            if (comp && comp.init) {
                comp.init(parm);
            }
            let delay = parm.delay || 0  // 延迟
            let ts = parm.ts || 0        // 持续时长
            if (parm?.forever) {
                custom.active = true;
            } else {
                custom.active = false;
                tween(custom).delay(delay).call(() => {
                    custom.active = true;
                }).delay(ts).call(() => {
                    custom.active = false;
                }).removeSelf().start();
            }
            this._priority = priority;
        }
    }

    public show(parm: any, priority: number = 0) {
        if (this.custom && isValid(this.custom)) {
            this.showCustom(parm, priority)
            return;
        }
        if (!this._prefab || !this._panel || !isValid(this._panel, true)) {
            return;
        }
        let one = this._panel.getChildByName('default');
        if (parm === false) {
            if (one && priority <= this._priority) {
                one.active = false;
                Tween.stopAllByTarget(one);
            }
        } else {
            if (!one || !isValid(one, true)) {
                one = instantiate(this._prefab)
                one.parent = this._panel;
                one.name = 'default';
            } else if (this._priority < priority && one.active) {
                // return;
            }
            let comp = one.getComponent(UIBase);
            if (comp && comp.init) {
                comp.init(parm);
            }
            this._priority = priority;
        }
    };

    public setInfo(panel: Node, prefab: Prefab): void {
        this._panel = panel;
        this._prefab = prefab;
    };

    public clear() {
        this._priority = 0;
        this._panel = undefined;
        this._prefab = undefined;
    }
}

export const loadingStack: LoadingStack = LoadingStack.instance;