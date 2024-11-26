import { Asset, AssetManager, Component, Node, NodeEventType, Sprite, SpriteFrame, __private, _decorator, isValid } from 'cc';
import { AssetsLoader, IAssetsDependExt } from '../../asset/AssetsLoader';
import EventDispatcher from '../../event/EventDispatcher';
import { EventAgrs, EventCallback, EventProcessor, IEventProcessor } from '../../event/EventProcessor';
import { IEventContract } from '../../event/IEvent';
import { SchedulerManager } from '../../timer/SchedulerManager';
import { GPRoundBoxSprite } from '../roundSprite/GPRoundBoxSprite';

interface IAutoReleaseItem {
    destroy: () => void
    _objFlags?: number
}

/*** 回调参数对象定义 */
export interface IUICallFunc {
    /** 节点添加错误的回调 */
    onError?: (name: String, viewParam?: null) => void,
    /** 节点添加到层级以后的回调 */
    onAdded?: (node: Node, viewParam?: null) => void,
    /** 节点已存在重新reload以后的回调 */
    onReloaded?: (node: Node, viewParam?: null) => void,
    /** destroy之后回调（只会在第一次被addChild 更新 后续刷新都不会更新） */
    onRemoved?: (node: Node) => void,
    /** 
     * 注意：调用`delete`或`$delete`才会触发此回调，如果`this.node.destroy()`，该回调将直接忽略。
     * 
     * 如果指定onBeforeRemoved，则next必须调用，否则节点不会被正常删除。
     * 
     * 比如希望节点做一个FadeOut然后删除，则可以在`onBeforeRemoved`当中播放action动画，动画结束后调用next
     * 
     * */
}

const { ccclass, menu } = _decorator;
@ccclass('UIBase')
@menu('base/UIBase')
export class UIComponentBase extends Component implements IAssetsDependExt, IEventContract, IEventProcessor {
    private _eventProcessor = new EventProcessor;
    private _autoReleasePool: IAutoReleaseItem[] = [];
    events: string[] = [];
    extDependList: string[] = [];
    remoteImgList: string[] = [];
    remoteSkelDataList: string[] = [];

    protected _schedulerHandler = {};
    protected _schedulerHandlerOnce = {};

    protected _uiCallFun: IUICallFunc = {};
    /** set ui回调 */
    public set uiCallFun(param: IUICallFunc | null) {
        if (typeof (param) != 'object' || !param) {
            param = {};
        }
        this._uiCallFun = param;
    }
    /** get ui回调 */
    public get uiCallFun() {
        if (!this._uiCallFun) {
            return {};
        }
        return this._uiCallFun;
    }

    /**override 定时器的回调更新，子类需重写该方法 */
    protected onSchedulerUpdate(dt?: number) {

    }
    /**
     * 添加一个延时
     * @param time 时间 单位:秒
     * @param callback 更新函数(默认为:onSchedulerUpdate) 
     * @param return 定时器句柄number
     */
    public addSchedulerOnce(time: number = 0, callback: Function = this.onSchedulerUpdate): number {
        const content = this
        let handler = SchedulerManager.schedulerTimeout((dt: number) => {
            if (isValid(content)) {
                callback.call(content, dt, handler);
                content.stopSchedulerOnce(handler);
            }
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
            if (isValid(content)) {
                callback.call(content, dt, handler);
            }
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

    /**
     * 加载资源(resources)
     * @param paths 
     * @param type 
     * @param onProgress 
     * @param onComplete 
     * @param is_static 
     */
    load<T extends Asset>(paths: string, type: __private.__types_globals__Constructor<T>, onProgress: (finished: number, total: number, item: AssetManager.RequestItem) => void | null, onComplete: (err: Error | null, data: T) => void | null, is_static: boolean = false) {
        let self = this;
        AssetsLoader.instance.load(paths, type,
            (_finished: number, _total: number, _item: AssetManager.RequestItem) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                if (onProgress) {
                    onProgress(_finished, _total, _item);
                }
            },
            (_err: Error | null, _data: T) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                // if (_data instanceof SpriteFrame) {
                //     (_data as SpriteFrame).packable = false;
                // }
                if (onComplete) {
                    onComplete(_err, _data);
                }

            }, is_static, this);
    };

    /**
     * 加载远端资源
     * @param paths 资源路径
     * @param resType 资源类型 可空 例'jpg'
     * @param onComplete 回调函数
     */
    loadRemote<T extends Asset>(path: string, resType: string | null, onComplete: (err: Error | null, data: T) => void | null) {
        let self = this;
        if (resType) {
            AssetsLoader.instance.loadRemote(path, { ext: resType }, (_err: Error | null, _data: T) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                if (onComplete) {
                    onComplete(_err, _data);
                }
            })
        } else {
            AssetsLoader.instance.loadRemote(path, (_err: Error | null, _data: T) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                if (onComplete) {
                    onComplete(_err, _data);
                }
            })
        }
    };

    /**
     * 加载远端Spine
     * @param spineConf  { image: string, atlas: string, skel: string };
     * @param onComplete 回调函数
     */
    loadRemoteSpine<T extends Asset>(spineConf: { image: string, atlas: string, skel: string }, onComplete: (err: Error | null, data: T) => void | null) {
        let self = this;
        AssetsLoader.instance.loadRemoteSkel(spineConf, (_err: Error | null, _data: T) => {
            if (!self.node || self.node.isValid == false) {
                return;
            }
            if (onComplete) {
                onComplete(_err, _data);
            }
        }, self)
    };


    /**
     * 加载资源(其他bundle)
     * @param paths 
     * @param type 
     * @param onProgress 
     * @param onComplete 
     * @param is_static 
     */
    bundleLoad<T extends Asset>(bundlename: string, paths: string, type: __private.__types_globals__Constructor<T>, onProgress: (finished: number, total: number, item: AssetManager.RequestItem) => void | null, onComplete: (err: Error | null, data: T) => void | null, is_static: boolean = false) {
        let self = this;
        AssetsLoader.instance.bundleLoad(bundlename, paths, type,
            (_finished: number, _total: number, _item: AssetManager.RequestItem) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                if (onProgress) {
                    onProgress(_finished, _total, _item);
                }
            },
            (_err: Error | null, _data: T) => {
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                if (onComplete) {
                    onComplete(_err, _data);
                }

            }, is_static, this);
    };





    /**
     * 发送事件
     * @param event 事件名称
     * @param data 参数
     */
    emit(event: string, ...args: any[]) {
        EventDispatcher.instance.dispatchEvent(event, ...args);
    };
    /**
     * 添加事件
     * @param event 事件名称
     * @param priority 
     */
    on(event: string | string[], priority: number = 0) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                EventDispatcher.instance.addListener(element, this, priority);
            }
        } else {
            EventDispatcher.instance.addListener(event, this, priority);
        }
    };

    /**
     * 关闭事件
     * @param event 
     */
    off(event: string | string[]) {
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                EventDispatcher.instance.remove(this, element);
            }
        } else {
            EventDispatcher.instance.remove(this, event);
        }
    };

    /** 新增键盘输入监听和Node节点事件监听 
     * ===============================================================
     * begin*/
    addEvents() {

    }

    onEvn(args: EventAgrs): void {
        if (!args.target) {
            args.target = this;
        }
        this._eventProcessor.onEvn(args);
    }
    onceEvn(args: EventAgrs): void {
        if (!args.target) {
            args.target = this;
        }
        this._eventProcessor.onceEvn(args);
    }
    offEvn(args: EventAgrs): void {
        if (!args.target) {
            args.target = this;
        }
        this._eventProcessor.offEvn(args);
    }

    onInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.onEvn({
            bind: "Input",
            type: eventType,
            cb: cb
        })
    }
    onceInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.onceEvn({
            bind: "Input",
            type: eventType,
            cb: cb
        })
    }
    offInput<K extends keyof __private._cocos_input_input__InputEventMap>(eventType: K, cb: EventCallback): void {
        this.offEvn({
            bind: "Input",
            type: eventType,
            cb: cb
        })
    }

    onNode(node: Node, type: string | NodeEventType, cb: EventCallback, target?: unknown, useCapture?: any): void {
        this.onEvn({
            bind: "Node",
            type: type,
            cb: cb,
            target: target,
            useCapture: useCapture,
            node: node
        })
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
        })
    }
    /** 新增键盘输入监听和Node节点事件监听 
     * =====================================================================================
     * end*/
    /** 事件绑定回调 */
    onEvents(event: string, data: any) {

    };

    releasePool() {
        for (let index = 0; index < this._autoReleasePool.length; index++) {
            const element = this._autoReleasePool[index];
            if (element._objFlags !== undefined) {
                isValid(element) && element.destroy();
            } else {
                element.destroy();
            }
        }
        this._autoReleasePool.length = 0;
    }

    releaseRes(uuid?: string) {
        if (uuid) {
            let idx = this.extDependList.indexOf(uuid);
            if (idx > -1) {
                this.extDependList.splice(idx, 1);
                AssetsLoader.instance.release(uuid);
            }
        } else {
            this.extDependList.forEach((uuid) => {
                AssetsLoader.instance.release(uuid);
            });
            this.extDependList = [];
        }
    };

    releaseRemoteRes(uuid?: string) {
        if (uuid) {
            let index = this.remoteImgList.indexOf(uuid);
            if (index != -1) {
                AssetsLoader.instance.releaseSpriteFrame(uuid);
                this.remoteImgList.splice(index, 1);
            }
        } else {
            for (let i = 0; i < this.remoteImgList.length; i++) {
                AssetsLoader.instance.releaseSpriteFrame(this.remoteImgList[i]);
            }
            this.remoteImgList = [];
        }
    }

    releaseRemoteSpine(uuid?: string) {
        if (uuid) {
            let index = this.remoteSkelDataList.indexOf(uuid);
            if (index != -1) {
                AssetsLoader.instance.releaseSpineSkelData(uuid);
                this.remoteSkelDataList.splice(index, 1);
            }
        } else {
            for (let i = 0; i < this.remoteSkelDataList.length; i++) {
                AssetsLoader.instance.releaseSpineSkelData(this.remoteSkelDataList[i]);
            }
            this.remoteSkelDataList = [];
        }
    }
    loadRemoteSprite(sprite: Sprite | GPRoundBoxSprite, url: string, resType?: string | null, onComplete?: Function) {
        if (url == null || url.length == 0 || !sprite) {
            return;
        }
        if (sprite.node) {
            sprite.node['url'] = url;
        }
        let self = this;
        AssetsLoader.instance.loadRemoteImg(url, { ext: (resType ? resType : '.jpg') }, (err: Error | null, spriteFrame: SpriteFrame) => {
            if (!self.node || self.node.isValid == false || !sprite.node || !sprite.node.isValid) {
                return;
            }
            if (err) {
                onComplete && onComplete(false);
                return;
            }

            if (!spriteFrame.isValid) {
                return;
            }
            if (sprite.node['url'] != url) {
                return;
            }

            sprite.spriteFrame = spriteFrame;
            spriteFrame.packable = false;
            onComplete && onComplete(true);
        }, this)
    }

    autoDestroy(item: IAutoReleaseItem, remove?: boolean) {
        let idx = this._autoReleasePool.indexOf(item)
        if (idx === -1) {
            this._autoReleasePool.push(item);
        } else if (remove) {
            this._autoReleasePool.splice(idx, 1);
        }
    }
    /**
     * 清理(在调用 onDestroy 前自动清理)
     */
    onDestroy() {
        this.onRemove();
        this.stopAllScheduler()
        this.releaseRes();
        this.releaseRemoteRes();
        this.releaseRemoteSpine();
        this.releasePool();
        this.off(this.events);
        this.events = [];
        if (this._eventProcessor) {
            this._eventProcessor.onDestroy()
            this._eventProcessor = null;
        }
        if (this._uiCallFun.onRemoved) this._uiCallFun.onRemoved(this.node);
        this.unscheduleAllCallbacks();
    }

    /** 即将销毁 */
    onRemove() {

    };

    setValue(params: any) {

    }
}