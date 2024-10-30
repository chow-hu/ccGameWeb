/*
 * @Description: 
 * @Author: zy
 * @Date: 2022-05-19 10:17:15
 * @Reference: 
 */
import { Button, Component, isValid, Node, Prefab, Sprite, TweenSystem } from "cc";
import { ETw } from "../../common/ETw";
import { EventContract } from "../../event/EventContract";
import { UIBase, UIType } from "../component/UIBase";
import { IUICallFunc } from "../component/UIComponentBase";
import { AlertParm, AlertStack, IAlertStackHelper } from "./alertstack";
import { LayerStack } from "./layerstack";

export class UIStack extends EventContract {
    private _layer: LayerStack = new LayerStack('GUI');
    private _alert: AlertStack = new AlertStack('GUI');
    private _panel?: Node;
    private _mask?: Node;
    private _last_masked = false;
    private static _instance: UIStack;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new UIStack('GUI');
        return this._instance;
    };

    constructor(tag: string) {
        super();
    };

    setInfo(panel: Node, alert: { assets: Prefab, helper?: IAlertStackHelper }, mask?: Node) {
        this._panel = panel;
        this._mask = mask;
        let one = this._panel.children[0];
        if (this._mask) {
            this._mask.parent = null;
            this.on(['mask', 'force-mask']);
            this._mask = one;
            let btn = this._mask.getComponent(Button);
            if (!btn) btn = this._mask.addComponent(Button);
            btn.node.off('click');
            btn.node.on('click', this._onMaskClick.bind(this));
        }
        this._layer.setInfo(panel);
        // this._alert.setInfo(panel, alert.assets, alert.helper);
    }

    setBtmBtnsLayer(layers: string[]) {
        this._layer.setBtmBtnsLayer(layers)
    }


    clear() {
        this._alert.clear();
        this._layer.clear();
    }

    private _onMaskClick(event: Button) {
        let children = this._panel?.children || [];
        let one = children[children.length - 1];
        if (!one) {
            this._mask!.active = false;
            return;
        }
        if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(one)) {
            return;
        }
        let uiJs = one.getComponent(UIBase);
        if (!uiJs) {
            this._mask !== one && one.destroy();
            this._doMask(true);
            return;
        }
        if (uiJs.uiType & UIType.BLOCK) {
            return;
        }
        if (uiJs.uiType === UIType.ALERT) {
            // this._alert.onMaskClick(one);
            this._layer.onMaskClick(one, uiJs);
        } else {
            this._layer.onMaskClick(one, uiJs);
        }
    }

    public openLayer(name: string, parm?: Record<string, any> | string | number, uiCallFun?: IUICallFunc, aniFunc?: Function): void {
        this._layer.open(name, parm, uiCallFun, aniFunc);
    };


    public openBundleLayer(bundlename: string, name: string, parm?: Record<string, any> | string | number, uiCallFun?: IUICallFunc, aniFunc?: Function): void {
        this._layer.bundleOpen(bundlename, name, parm, uiCallFun, aniFunc);
    };

    public isTopLayer(name: string) {
        return this._layer.isTop(name);
    };

    public topLayer(name: string) {
        this._layer.top(name);
    };

    public getLayer(name: string): Node | null {
        return this._layer.get(name);
    };

    public checkLayer(name: string): boolean {
        return !!this._layer.get(name) || this._layer.isLoading(name);
    };

    public closeLayer(target: string | -1 | Node | Component, filter?: string[]): void {
        this._layer.close(target, filter);
    };

    public getLayerCount(): number {
        return this._layer.count();
    };

    public getLayerLoadingCount(): number {
        return this._layer.loadingCount();
    };

    public openAlert(parm: AlertParm, priority: number = 0, tag?: string): void {
        this._alert.open(parm, priority, tag);
        this._doMask(true);
    };

    public closeAlert(tag: string | Node | number): void {
        this._alert.close(tag);
    };

    public getAlertCount(): number {
        return this._alert.count();
    };

    private _doMask(v: boolean, force = false) {
        if (!this._mask) return;
        let maskable = false;
        if (v && (this._alert.count() > 0 || this._layer.count() > 0)) {
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
                if (one.active) {
                    if (uiJs.uiType === UIType.INDEPEND) continue;
                    if (uiJs.uiType === UIType.INDEPEND_DARK) break;
                };
                this._mask.parent = this._panel?.isValid && this._panel || null;
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

    public onEvents(event: string, data: any): void {
        switch (event) {
            case 'mask':
                data.tag === 'GUI' && this._doMask(true);
                break;
            case 'force-mask': {
                data.tag === 'GUI' && this._doMask(data.value, true);
            } break;
            default:
                break;
        }
    }
}

export const uiStack: UIStack = UIStack.instance;