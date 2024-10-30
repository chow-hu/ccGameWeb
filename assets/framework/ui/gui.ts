/*
 * @Description: GUI ui管理器
 * @Author: zy
 * @Date: 2021-01-19 15:06:06
 * @Reference:
 */
import { Button, Color, Component, Node, Prefab, Sprite, SpriteFrame, director, isValid, macro } from 'cc';
import { AppEvent } from "../../game/common/AppEvent";
import { EAudio } from '../../game/common/interface';
import { AssetsLoader, IBundleOption } from '../asset/AssetsLoader';
import { AudioEngine } from '../asset/AudioEngine';
import { PRIORITY, gutil_char, sprintf, valueset } from '../common/general';
import EventDispatcher from '../event/EventDispatcher';
import { ETileButton } from './component/ETileButton';
import { IUICallFunc } from './component/UIComponentBase';
import { AlertParm, IAlertStackHelper, alertStack } from './factory/alertstack';
import { builderStack } from './factory/builderstack';
import { loadingStack } from './factory/loadingstack';
import { uiStack } from './factory/uistack';
import { TileNode } from './helper/tilenode';


export default class GUI {
    private static _instance: GUI;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GUI();
        valueset(globalThis, 'gui', this._instance);

        return this._instance;
    };

    constructor() {

    };

    public clear() {
        uiStack.clear();
        builderStack.clear();
        loadingStack.clear();
    };

    public setUIInfo(panel: Node, alert: { assets: Prefab, helper?: IAlertStackHelper }, mask: Node): void {
        uiStack.setInfo(panel, alert, mask);
    };

    public setAlert(panel: Node, alert: { assets: Prefab, helper?: IAlertStackHelper }) {
        alertStack.setInfo(panel, alert.assets, alert.helper);
    }

    public setBtmBtnsLayerInfo(layers: string[]): void {
        uiStack.setBtmBtnsLayer(layers)
    };


    public setLoadingInfo(panel: Node, prefab: Prefab): void {
        loadingStack.setInfo(panel, prefab);
    };

    public setCustomizationLoading(custom: () => Node) {
        loadingStack.custom = custom;
    }

    public getCustomizationLoading() {
        return loadingStack.custom;
    }

    public builderInfo(info: Record<string, Prefab>): void {
        builderStack.setInfo(info);
    };

    public getBuilderInfo(key: string): void {
        builderStack.getInfo(key);
    };

    public openLayer(name: string, parm?: Record<string, any> | string | number, uiCallFun?: IUICallFunc): void {
        uiStack.openLayer(name, parm, uiCallFun);
    };
    /** 打开Ab包 */
    public openBundleLayer(bundle: string | IBundleOption, name: string, parm?: Record<string, any> | string | number, uiCallFun?: IUICallFunc): void {
        if (!bundle) {
            return;
        }
        if (typeof (bundle) == "string") {
            uiStack.openBundleLayer(bundle as string, name, parm, uiCallFun);
        } else {
            AssetsLoader.instance.loadBundle(bundle as IBundleOption, (err, bundleName) => {
                if (bundleName) {
                    uiStack.openBundleLayer(bundleName, name, parm, uiCallFun);
                }
            })
        }
    };

    public isTopLayer(name: string) {
        return uiStack.isTopLayer(name);
    };

    public topLayer(name: string) {
        uiStack.topLayer(name);
    };

    public getLayer(name: string): Node | null {
        return uiStack.getLayer(name);
    };

    public checkLayer(name: string): boolean {
        return uiStack.checkLayer(name);
    };

    public getLayerCount(): number {
        return uiStack.getLayerCount();
    };

    public getLoadingCount(): number {
        return uiStack.getLayerLoadingCount();
    };

    public getAlertCount(): number {
        return alertStack.count();
        // return uiStack.getAlertCount();
    };

    public closeLayer(target: string | -1 | Node | Component, filter?: string[]): void {
        uiStack.closeLayer(target, filter);
    };

    public alert(parm: AlertParm, priority: number = PRIORITY.ALERT, tag?: string): void {
        // uiStack.openAlert(parm, priority, tag);
        alertStack.open(parm, priority, tag);
    };

    public closeAlert(tag: string | Node | number, filters: string[] = []): void {
        // uiStack.closeAlert(tag);
        alertStack.close(tag, filters);
    };

    public loading(parm: any, priority: number = 0) {
        loadingStack.show(parm, priority);
    };

    public showTips(tips: string | string[]) {
        let data;
        if (!Array.isArray(tips)) {
            data = [tips];
        } else {
            data = tips;
        }
        EventDispatcher.instance.dispatchEvent(AppEvent.FLOAT_TIPS, data);
    };

    public tidTip(tid: string, ...args: any) {
        let str = gutil_char(tid);
        if (args.length > 0) {
            str = sprintf(str, ...args);
        }
        this.showTips(str);
    };

    public build(name: string, parm: any, parent?: Node): Node | null {
        return builderStack.build(name, parm, parent);
    };

    /**
     * 绑定button component
     * @param target 节点
     * @param cb Function 回调
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function): void;
    /**
     * 绑定button component
     * @param target 节点
     * @param cb Function 回调
     * @param value  true 点击缩放效果
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function, value: boolean): void;
    /**
     * 绑定button component
     * @param target 节点
     * @param cb Function 回调
     * @param value  GRAY 点击明暗效果
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function, value: string): void;
    /**
     * 绑定button component
     * @param target 节点
     * @param cb Function 回调
     * @param value  SpriteFrame 点击图片切换效果
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function, value: SpriteFrame): void;
    /**
     * 
     * @param target 节点
     * @param cb Function 回调
     * @param value 延迟时间
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function, value: number): void;
    /**
     * 
     * @param target 节点
     * @param cb Function 回调
     * @param value 音效的类型
     */
    public onclick<T = Node | TileNode>(target: T, cb: Function, value?: boolean | string | SpriteFrame | number, soundType?: EAudio | string): void;
    public onclick<T = Node | TileNode>(target: T, cb: Function, value?: boolean | string | SpriteFrame | number, soundType?: EAudio | string): void {
        let btn: Button | ETileButton | null = null;
        let delayTime = 0;
        let oldTime = -1;
        if (target instanceof Node) {
            btn = target.getComponent(Button);
            if (!btn) {
                btn = target.addComponent(Button);
                btn.target = target;
            }
        } else if (target instanceof TileNode) {
            let btnNode = target.link(TileNode.BASE)!
            btn = btnNode.getComponent(ETileButton);
            if (!btn) btn = btnNode.addComponent(ETileButton);
            btn.target = target;
        }
        if (!btn) return;
        if (value === true) {
            btn.transition = Button.Transition.SCALE;
            btn.duration = 0.1;
            btn.zoomScale = 0.9;//1.05;
        } else if (value === false) {
            btn.transition = Button.Transition.NONE;
        } else if (value === 'GRAY') {
            btn.transition = Button.Transition.COLOR;
            btn.normalColor = Color.WHITE;
            btn.pressedColor = Color.GRAY;
            btn.disabledColor = Color.WHITE;
            btn.hoverColor = Color.WHITE;
        } else if (typeof value == 'object' && value instanceof SpriteFrame) {
            let sprite = btn.node.getComponent(Sprite);
            if (sprite) {
                btn.transition = Button.Transition.SPRITE;
                btn.normalSprite = sprite.spriteFrame;
                btn.pressedSprite = value;
                btn.disabledSprite = arguments[3] || sprite.spriteFrame;
                btn.hoverSprite = sprite.spriteFrame;
            }
        } else if (typeof value == 'number' && value > 0) {
            delayTime = value;
            btn.transition = Button.Transition.SCALE;
            btn.duration = 0.1;
            btn.zoomScale = 0.9;//1.05;
        }
        btn.node.off('click');
        btn.node.on('click', (...params: any[]) => {
            if (!isValid(btn!.node, true)) {
                return;
            }
            if (delayTime > 0) {
                if (oldTime == -1) {
                    oldTime = Date.now();
                } else {
                    let now = Date.now();
                    if (now - oldTime < delayTime) {

                        return;
                    } else {
                        oldTime = now;
                    }
                }

            }
            if (soundType) {
                if (soundType != EAudio.NONE) {
                    AudioEngine.instance.effect(0, soundType);
                }
            } else {
                AudioEngine.instance.effect(0, EAudio.BTNCLICK);
            }
            cb && cb(...params);
        });
    };

    /**
     * 绑定button component 无音效
     * @param target 节点
     * @param cb Function 回调
     */
    public onclick0<T = Node | TileNode>(target: T, cb: Function): void;
    /**
     * 绑定button component 无音效
     * @param target 节点
     * @param cb Function 回调
     * @param value  true 点击缩放效果
     */
    public onclick0<T = Node | TileNode>(target: T, cb: Function, value: boolean): void;
    /**
     * 绑定button component 无音效
     * @param target 节点
     * @param cb Function 回调
     * @param value  GRAY 点击明暗效果
     */
    public onclick0<T = Node | TileNode>(target: T, cb: Function, value: string): void;
    /**
     * 绑定button component 无音效
     * @param target 节点
     * @param cb Function 回调
     * @param value  SpriteFrame 点击图片切换效果
     */
    public onclick0<T = Node | TileNode>(target: T, cb: Function, value: SpriteFrame): void;
    public onclick0<T = Node | TileNode>(target: T, cb: Function, value?: boolean | string | SpriteFrame): void {
        let btn: Button | ETileButton | null = null;
        if (target instanceof Node) {
            btn = target.getComponent(Button);
            if (!btn) btn = target.addComponent(Button);
            btn.target = target;
        } else if (target instanceof TileNode) {
            let btnNode = target.link(TileNode.BASE)!
            btn = btnNode.getComponent(ETileButton);
            if (!btn) btn = btnNode.addComponent(ETileButton);
            btn.target = target;
        }
        if (!btn) return;
        if (value === true) {
            btn.transition = Button.Transition.SCALE;
            btn.duration = 0.1;
            btn.zoomScale = 1.05;
        } else if (value === false) {
            btn.transition = Button.Transition.NONE;
        } else if (value === 'GRAY') {
            btn.transition = Button.Transition.COLOR;
            btn.normalColor = Color.WHITE;
            btn.pressedColor = Color.GRAY;
            btn.disabledColor = Color.WHITE;
            btn.hoverColor = Color.WHITE;
        } else if (typeof value == 'object' && value instanceof SpriteFrame) {
            let sprite = btn.node.getComponent(Sprite);
            if (sprite) {
                btn.transition = Button.Transition.SPRITE;
                btn.normalSprite = sprite.spriteFrame;
                btn.pressedSprite = value;
                btn.disabledSprite = arguments[3] || sprite.spriteFrame;
                btn.hoverSprite = sprite.spriteFrame;
            }
        }
        btn.node.off('click');
        btn.node.on('click', (...params: any[]) => {
            if (!isValid(btn!.node, true)) {
                return;
            }
            cb && cb(...params);
        });
    };

    public offclick(target: Node | TileNode): void {
        if (target instanceof Node) {
            if (!isValid(target, true)) {
                return;
            }
            let btn = target.getComponent(Button);
            btn && btn.destroy();
            target.off('click');
        } else if (target instanceof TileNode) {
            let btnNode = target.link(TileNode.BASE)!

            if (!isValid(target, true)) {
                return;
            }
            let btn = btnNode.getComponent(ETileButton);
            btn && btn.destroy();
            btnNode.off('click');
        }

    };

    public onhover(target: Node, cb: Function, hovercb: any, value?: any, begincb?: Function, cancelcb?: Function, span: number = 0.05, delay = 0.5) {
        if (typeof hovercb != 'function' && typeof value == 'undefined') {
            value = hovercb;
            hovercb = null;
        }
        hovercb = hovercb || cb;
        (target as any).funcstart && target.off(Node.EventType.TOUCH_START, (target as any).funcstart);
        (target as any).funcend && target.off(Node.EventType.TOUCH_END, (target as any).funcend);
        (target as any).funccancel && target.off(Node.EventType.TOUCH_CANCEL, (target as any).funccancel);

        let funchover: (dt?: number | undefined) => void, funcstart: Function, funcend: Function, funccancel: Function;
        funchover = function (dt?: number | undefined) {
            if (!isValid(target, true) || !target) {
                director.getScheduler().unschedule(funchover, target);
                return;
            }
            if (!hovercb || hovercb()) {
                director.getScheduler().unschedule(funchover, target);
            }
        };
        funcstart = function () {
            director.getScheduler().schedule(funchover, target, span, macro.REPEAT_FOREVER, delay, false);
            begincb && begincb();
        };
        funcend = function () {
            director.getScheduler().unschedule(funchover, target);
        };
        funccancel = function () {
            director.getScheduler().unschedule(funchover, target);
            cancelcb && cancelcb();
        };
        (target as any).funcstart = funcstart;
        (target as any).funcend = funcstart;
        (target as any).funccancel = funcstart;

        target.on(Node.EventType.TOUCH_START, funcstart);
        target.on(Node.EventType.TOUCH_END, funcend);
        target.on(Node.EventType.TOUCH_CANCEL, funccancel);
        this.onclick(target, cb, value);
    };
}