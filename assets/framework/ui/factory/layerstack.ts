/*
 * @Description: layer 工厂线
 * @Author: zy
 * @Date: 2024-03-06
 * @Reference:
 */

import { Component, Node, Prefab, UIOpacity, Vec3, Widget, instantiate, isValid, log, tween } from 'cc'
import { AppEvent } from '../../../game/common/AppEvent'
import { AssetsLoader } from '../../asset/AssetsLoader'
import { EMap } from '../../common/EMap'
import { gc } from '../../common/gc'
import { ui2d } from '../../common/ui2d'
import { EventContract } from '../../event/EventContract'
import EventDispatcher from '../../event/EventDispatcher'
import { UIBase, UIType } from '../component/UIBase'
import { IUICallFunc } from '../component/UIComponentBase'
import { loadingStack } from './loadingstack'
import { siblingChildByPriority } from './utils'

export enum LayerStackEvent {
    UI_PRE_OPEN = 'EVENT_UI_PRE_OPEN',
    UI_OPEN = 'EVENT_UI_OPEN',
    UI_CLOSE = 'EVENT_UI_CLOSE',
    UI_ERROR = 'EVENT_UI_ERROR',
    UI_POP = 'EVENT_UI_POP',
}

export class LayerStack extends EventContract {
    private _stack: EMap<Node>;
    private _loadingLayer: EMap<{ ts: number, valid: boolean }>;
    private _panel?: Node;
    private _tag: string;
    private _topLayer: string = '';
    private _hasBtmLayers: string[];
    private static _instance: LayerStack;
    public static EventType = LayerStackEvent;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new LayerStack('GUI');
        return this._instance;
    };

    constructor(tag: string) {
        super();
        this._tag = tag;
        this._stack = new EMap<Node>();
        this._loadingLayer = new EMap<{ ts: number, valid: boolean }>();
    };

    public clear() {
        this.off(['force-mask']);
        this._stack.clear();
        this._loadingLayer.clear();
        this._panel = undefined;
        this._topLayer = '';
    };

    public setInfo(panel: Node): void {
        this._panel = panel;
    };

    public setBtmBtnsLayer(layers: string[]): void {
        this._hasBtmLayers = layers
    };

    public onMaskClick(one: Node, uiJs: UIBase) {
        if (uiJs.onDialogClose()) {
            return;
        }
        if (uiJs.maskClickNeedOpration) {
            uiJs.onMaskClick();
        } else {
            this.close(one);
        }
    }

    public forEach(cb: (v: Node, k: string) => void): void {
        return this._stack.forEach((v, k) => cb(v, k));
    }

    public get(name: string): Node | null {
        let layer = this._stack.get(name);
        if (layer && isValid(layer)) {
            return layer;
        }
        return null;
    };

    public isLoading(name: string): boolean {
        let loading = this._loadingLayer.get(name);
        if (loading && loading.ts > Date.now()) {
            return true;
        }
        return false;
    };

    public add(name: string, one: Node): boolean {
        let layer = this._stack.get(name);
        if (layer) {
            return false;
        }
        this._stack.add(name, one);
        return true;
    };

    public count() {
        return this._stack.count;
    }

    public loadingCount() {
        return this._loadingLayer.count;
    }

    public isTop(name: string): boolean {
        return this._topLayer == name && this._panel.activeInHierarchy;
    }

    public top(name: string): boolean {
        let layer = this._stack.get(name);
        if (!layer) {
            return false;
        }
        let uiJs = layer.getComponent(UIBase);
        if (!uiJs) {
            return false;
        }
        if (!siblingChildByPriority(layer, uiJs, this._panel!)) {
            return false;
        }
        this._updateVisible();
        this.emit('mask', { type: 'layer', tag: this._tag });
        return true;
    };

    private transPath(layerPath: string) {
        if (layerPath.includes('/')) {
            let temp = layerPath.slice();
            let names = temp.split('/');
            return names[names.length - 1];
        }
        return layerPath;
    }

    public bundleOpen(bundlename: string, layerPath: string, parm?: any, uiCallFun?: IUICallFunc, aniFunc?: Function, isStatic?: boolean): void {
        let name = this.transPath(layerPath);
        if (!isValid(this._panel, true)) {
            log('parent node cannot be null,when open layer:' + name);
            return;
        }
        log('openLayer cacheCount:' + AssetsLoader.instance.cacheCount());
        log(name + ' 正在打开!!');
        let layer = this.get(name);
        if (layer) {
            log(name + ' 已经被打开!!');
            let uiJs = layer.getComponent(UIBase)!;
            uiJs.reset && uiJs.reset(parm);
            if (uiCallFun && uiCallFun?.onReloaded) uiCallFun.onReloaded(layer, parm);
            siblingChildByPriority(layer, uiJs, this._panel!);
            let visible = this._updateVisible();
            this._topLayer = name;
            let topLayerName = this.updateTopLayer()
            this.emit('mask', { type: 'layer', tag: this._tag });
            EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_OPEN, { tag: this._tag, name, isFirst: false, visible, topLayerName });
            return;
        }
        let loading = this._loadingLayer.get(name);
        if (loading && loading.ts > Date.now()) {
            log(name + ' 已经在加载中!!');
            return;
        }

        this._loadingLayer.add(name, { ts: Date.now() + 10000, valid: true });
        this.showLoading({ ts: 5, delay: 2 });
        AssetsLoader.instance.bundleLoad(bundlename, 'prefab/layer/' + layerPath, Prefab, null, (err, prefab) => {
            if (err) {
                log(err);
                this.showLoading(false);
                this._loadingLayer.remove(name);
                if (uiCallFun && uiCallFun?.onError) uiCallFun.onError(name, parm);
                return;
            }
            let loadingData = this._loadingLayer.get(name);
            if (!loadingData || !loadingData.valid) {
                this._loadingLayer.remove(name);
                if (uiCallFun && uiCallFun?.onError) uiCallFun.onError(name, parm);
                return;
            }
            this._loadingLayer.remove(name);
            this.showLoading(false);
            if (prefab) {
                let layer = instantiate(prefab);
                prefab.addRef();
                console.log("layerstack bundleOpen refCount:" + prefab.refCount)
                layer.parent = this._panel!;
                let uiJs = layer.getComponent(UIBase);
                if (!uiJs) {
                    throw 'ERROR:cannot find UIBase of ' + name;
                }
                // uiJs.extDependList.push(prefab._uuid);
                uiJs.uiCallFun = uiCallFun;
                // if (uiJs.uiCallFun?.onAdded) uiJs.uiCallFun.onAdded(layer, parm);
                uiJs.init && uiJs.init(parm);
                siblingChildByPriority(layer, uiJs, this._panel!);
                if (uiJs.uiCallFun?.onAdded) uiJs.uiCallFun.onAdded(layer, parm);
                this._stack.add(name, layer);
                log('openLayer cacheCount:' + AssetsLoader.instance.cacheCount());
                let visible = this._updateVisible();
                let topLayerName = this.updateTopLayer()
                if (uiJs.uiType === UIType.DIALOG) {
                    layer.getComponent(Widget)?.destroy();
                    let size = ui2d.size(this._panel!);
                    size && ui2d.size(layer, size);
                    //动画
                    if (typeof (aniFunc) == "function") {
                        aniFunc(layer, () => {
                            if (uiJs && isValid(uiJs) && uiJs.onDialogUiIn) {
                                uiJs.onDialogUiIn();
                            }
                        })
                    } else {
                        this.showBySineinScale(layer, () => {
                            if (uiJs && isValid(uiJs) && uiJs.onDialogUiIn) {
                                uiJs.onDialogUiIn();
                            }
                        })
                    }
                }
                this.emit('mask', { type: 'layer', tag: this._tag });
                EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_OPEN, { tag: this._tag, name, isFirst: true, visible, topLayerName });
            }
        }, !!isStatic, null);
    }

    public open(layerPath: string, parm?: any, uiCallFun?: IUICallFunc, aniFunc?: Function, isStatic?: boolean): void {
        let name = this.transPath(layerPath);
        if (!isValid(this._panel, true)) {
            log('parent node cannot be null,when open layer:' + name);
            return;
        }
        log('openLayer cacheCount:' + AssetsLoader.instance.cacheCount());
        log(name + ' 正在打开!!');
        let layer = this.get(name);
        EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_PRE_OPEN, { tag: this._tag, name });
        if (layer) {

            log(name + ' 已经被打开!!');
            let uiJs = layer.getComponent(UIBase)!;
            uiJs.reset && uiJs.reset(parm);
            if (uiCallFun && uiCallFun?.onReloaded) uiCallFun.onReloaded(layer, parm);
            siblingChildByPriority(layer, uiJs, this._panel!);
            let visible = this._updateVisible();
            this._topLayer = name;
            let topLayerName = this.updateTopLayer()
            this.emit('mask', { type: 'layer', tag: this._tag });
            EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_OPEN, { tag: this._tag, name, isFirst: false, visible, topLayerName });
            return;
        }
        let loading = this._loadingLayer.get(name);
        if (loading && loading.ts > Date.now()) {
            log(name + ' 已经在加载中!!');
            return;
        }

        this._loadingLayer.add(name, { ts: Date.now() + 10000, valid: true });
        this.showLoading({ ts: 5, delay: 2 });

        let self = this;
        AssetsLoader.instance.load('prefab/layer/' + layerPath, Prefab, null, (err, prefab) => {
            if (err) {
                log(err);
                this.showLoading(false);
                this._loadingLayer.remove(name);
                EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_ERROR, { tag: this._tag, name });
                if (uiCallFun && uiCallFun?.onError) uiCallFun.onError(name, parm);
                return;
            }
            let loadingData = this._loadingLayer.get(name);
            if (!loadingData || !loadingData.valid) {
                this._loadingLayer.remove(name);
                EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_ERROR, { tag: this._tag, name });
                if (uiCallFun && uiCallFun?.onError) uiCallFun.onError(name, parm);
                return;
            }
            this._loadingLayer.remove(name);
            this.showLoading(false);
            if (prefab) {
                let layer = instantiate(prefab);
                prefab.addRef();
                console.log("layerstack open refCount:" + prefab.refCount)
                layer.parent = this._panel!;
                let uiJs = layer.getComponent(UIBase);
                if (!uiJs) {
                    throw 'ERROR:cannot find UIBase of ' + name;
                }
                // uiJs.extDependList.push(prefab._uuid);
                uiJs.uiCallFun = uiCallFun;
                //add:hook onRemove
                uiJs.uiCallFun.__onRemoved = uiJs.uiCallFun?.onRemoved;
                uiJs.uiCallFun.onRemoved = (...args: any[]) => {
                    if (uiJs.uiCallFun?.__onRemoved) uiJs.uiCallFun.__onRemoved(...args);
                }
                // if (uiJs.uiCallFun?.onAdded) uiJs.uiCallFun.onAdded(layer, parm);
                uiJs.init && uiJs.init(parm);
                siblingChildByPriority(layer, uiJs, this._panel!);
                if (uiJs.uiCallFun?.onAdded) uiJs.uiCallFun.onAdded(layer, parm);
                this._stack.add(name, layer);
                log('openLayer cacheCount:' + AssetsLoader.instance.cacheCount());
                let visible = this._updateVisible();
                let topLayerName = this.updateTopLayer()
                if (uiJs.uiType === UIType.DIALOG) {
                    layer.getComponent(Widget)?.destroy();
                    let size = ui2d.size(this._panel!);
                    size && ui2d.size(layer, size);

                    //动画
                    if (typeof (aniFunc) == "function") {
                        aniFunc(layer, () => {
                            if (uiJs && isValid(uiJs) && uiJs.onDialogUiIn) {
                                uiJs.onDialogUiIn();
                            }
                        })
                    } else {
                        this.showBySineinScale(layer, () => {
                            if (uiJs && isValid(uiJs) && uiJs.onDialogUiIn) {
                                uiJs.onDialogUiIn();
                            }
                        })
                    }
                }
                this.emit('mask', { type: 'layer', tag: this._tag });
                EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_OPEN, { tag: this._tag, name, isFirst: true, visible, topLayerName });
            }
        }, !!isStatic, null);
    };

    /** 显示-缩放+signin */
    public showBySineinScale(node: Node, callFun?: Function) {
        let oldScale = node.getScale();

        let uiOpacity = node.getComponent(UIOpacity) || node.addComponent(UIOpacity);

        let change = 0.2;
        let time = 0.1;
        node.setScale(oldScale.x - change, oldScale.y - change, oldScale.z - change);
        uiOpacity.opacity = 100;

        let ani_1 = tween().by(time, { scale: new Vec3(change, change, change) }, { easing: "sineIn" });
        let ani_2 = tween().call(() => {
            if (callFun) {
                callFun();
            }
        })
        tween(node).sequence(ani_1, ani_2).start();
        tween(uiOpacity).to(time, { opacity: 255 }).start();
    }

    private updateTopLayer() {
        return this._topLayer;
    }

    private _updateVisible() {
        this._topLayer = '';
        let children = this._panel?.children || [];
        let visible = true;
        for (let index = children.length - 1; index >= 0; index--) {
            const layer = children[index];
            let uiJs = layer.getComponent(UIBase);
            if (uiJs && uiJs.uiType & UIType.INDEPEND) {
                continue;
            }
            layer.active = visible;
            if (!visible) continue;
            if (visible && this._topLayer == '' && layer.name != 'mask') {
                this._topLayer = layer.name;;
            }
            if (uiJs && uiJs.uiType === UIType.FULLSCREEN) {
                visible = false;
            }
        }
        return visible;
    };

    public close(target: string | -1 | Node | Component, filter?: string[]) {
        let layerName: string = "";
        if (target instanceof Node) {
            layerName = target.name;
        } else if (target instanceof Component) {
            layerName = target.node?.name;
        } else if (target === -1) {
            let children = this._panel?.children || [];
            for (let index = children.length - 1; index >= 0; index--) {
                const one = children[index];
                if (!isValid(one, true)) continue;
                let uiJs = one.getComponent(UIBase);
                if (!uiJs || uiJs.uiType & UIType.INDEPEND) continue;
                layerName = one.name;
                break;
            }
        } else {
            layerName = this.transPath(target);
        }
        if (!layerName) {
            return;
        }
        log(layerName + ' 关闭！！！！！');
        let visible = true;
        if (layerName == 'all') {
            filter = filter || [];
            let list: string[] = [];
            this._loadingLayer.forEach((v, k) => {
                if (!filter!.includes(k)) {
                    list.push(k);
                }
            })
            list.forEach(v => this._loadingLayer.remove(v));
            list = [];
            this._stack.forEach(layer => {
                if (!filter!.includes(layer.name)) {
                    list.push(layer.name);
                    if (isValid(layer, true)) {
                        layer.parent = null;
                        layer.destroy();
                    }
                }
            })
            list.forEach(v => this._stack.remove(v));
            visible = this._updateVisible();
            this.emit('mask', { type: 'layer', tag: this._tag });
            let topLayerName = this.updateTopLayer()
            EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_CLOSE, { tag: this._tag, name: layerName, filter, visible, topLayerName });
        } else {
            let layer = this._stack.remove(layerName);
            this._loadingLayer.remove(layerName);
            if (layer) {
                if (isValid(layer, true)) {
                    layer.parent = null;
                    layer.destroy();
                }

                visible = this._updateVisible();
                this.emit('mask', { type: 'layer', tag: this._tag });
                let topLayerName = this.updateTopLayer()
                EventDispatcher.instance.dispatchEvent(LayerStackEvent.UI_CLOSE, { tag: this._tag, name: layerName, visible, topLayerName });
            }
        }
        gc.do();
    };

    public showLoading(parm: any, priority: number = 0) {
        loadingStack.show(parm, priority);
    };
}
export const layerStack: LayerStack = LayerStack.instance;
