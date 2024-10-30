import { Node, isValid } from "cc";
import EventDispatcher from "../../framework/event/EventDispatcher";

export class CacheBase {

    _className: string = "CacheBase";
    //存储的数据
    _data: {};

    /** 用于管理的数据列表
     * 基本结构如下
     * __propertyData__: {
     *     [key1]: {
     *          [value]: value,
     *          [callbacks]: {
     *              [uuid]: callback,
     *              [uuid]: callback,
     *              [uuid]: callback,
     *              ...
     *          }
     *     }
     *     [key2]: {
     *          [value]: value,
     *          [callbacks]: {
     *              [uuid]: callback,
     *              [uuid]: callback,
     *              [uuid]: callback,
     *              ...
     *          }
     *     }
     *     ...
     * }
    */
    private __propertyData__: {};

    // 所属界面的根节点
    private mRoot: Node;
    /**实例化
     * root: 当前脚本所挂载节点的根节点,一般传this.node
    */
    constructor(name: string, root?: Node) {
        this._className = name || "CacheBase"
        console.log(`Cache: ${this._className}初始化...`)
        this._data = {};

        this.__propertyData__ = {};
        this.mRoot = root;
        this.initProperty();
        // this.linkCache();
    };

    /**
     * 在这里使用addProperty初始化所有数据,由子类实现
     */
    protected initProperty() {

    }

    public setRoot(root: Node) {
        this.mRoot = root;
    }

    private getCamelCase(key: string) {
        return key.substring(0, 1).toUpperCase() + key.substring(1, key.length);
    }

    /**
     * 为了增加程序可读性,这里增加一种get/set参数的方法.二者作用相同,具体使用哪个看个人习惯.
     */
    public _set(key: string, value: any) {
        this.__propertyData__[this._className + "_" + key] = this.__propertyData__[this._className + "_" + key] || {};
        // 赋值
        this.__propertyData__[this._className + "_" + key].value = value;
        // 初始化回调列表
        this.__propertyData__[this._className + "_" + key].callbacks = this.__propertyData__[this._className + "_" + key].callbacks || {};
        // 执行回调
        this.onSetValue(key, value);
    }

    public _get(key: string): any {
        return (this.__propertyData__[this._className + "_" + key] && this.__propertyData__[this._className + "_" + key].value != null) ? this.__propertyData__[this._className + "_" + key].value : null;
    }

    /**
     * 增加属性字段,自动生成get,set方法
     * @param key 字段名
     * @param value 初始值,不传时默认值为null
     */
    protected addProperty(key: string, defaultV?: any) {
        this.__propertyData__[this._className + "_" + key] = this.__propertyData__[this._className + "_" + key] || {};
        this.__propertyData__[this._className + "_" + key].value = defaultV;
        this.__propertyData__[this._className + "_" + key].callbacks = this.__propertyData__[this._className + "_" + key].callbacks || {};
        let tmpName = this.getCamelCase(key)
        // 生成set方法
        if (!(("set" + tmpName) in this)) {
            this["set" + tmpName] = function (value: any) {
                this.__propertyData__[this._className + "_" + key] = this.__propertyData__[this._className + "_" + key] || {};
                // 赋值
                this.__propertyData__[this._className + "_" + key].value = value;
                // 初始化回调列表
                this.__propertyData__[this._className + "_" + key].callbacks = this.__propertyData__[this._className + "_" + key].callbacks || {};
                // 执行回调
                this.onSetValue(key, value);
            }
        }

        // 生成get方法
        if (!(("get" + tmpName) in this)) {
            this["get" + tmpName] = function () {
                return (this.__propertyData__[this._className + "_" + key] && this.__propertyData__[this._className + "_" + key].value != null) ? this.__propertyData__[this._className + "_" + key].value : null;
            }

        }
    }

    // 设置参数值的时候会触发回调
    private onSetValue(key: string, value: any) {
        // 遍历绑定列表,执行回调
        if (!isValid(this.mRoot)) {
            return;
        }
        for (const uuid in this.__propertyData__[this._className + "_" + key].callbacks) {
            let tarNode = null;
            this.mRoot.walk((node: Node) => {
                if (uuid === node.uuid) {
                    tarNode = node;
                }
            });
            if (isValid(tarNode)) {
                let callback = this.__propertyData__[this._className + "_" + key].callbacks[uuid];
                if (callback) {
                    callback(tarNode, value);
                }
            }
        }
    }

    public clearData() {

    }

    /**
     * 将数据绑定相关视图,可以在这里传入回调函数,每次修改字段值时自动回调以更新视图
     * @param node 需要绑定同步操作的Node
     * @param key 用于同步的字段名
     * @param callback 字段更新时的回调方法
     */
    public bindView(node: Node, key: string, callback: (node: Node, value: any) => void) {
        let uuid = node.uuid;
        this.__propertyData__[this._className + "_" + key].callbacks = this.__propertyData__[this._className + "_" + key].callbacks || {};
        this.__propertyData__[this._className + "_" + key].callbacks[uuid] = callback;
    }

    //当前类日志输出
    protected print = function (...args: any[]) {
        console.log(`【${this._className}】`, ...args)
    }

    protected emit(event: string, ...args: any[]): any {
        EventDispatcher.instance.dispatchEvent(event, ...args);
    };

    public get(key) {
        return this["_get"][key];
    }

}