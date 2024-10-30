import EventDispatcher from "../../framework/event/EventDispatcher";

export class ICacheBase {

    _className: string = "ICacheBase";
    //存储的数据
    _data: {};
    //实例化
    constructor(name?: string) {
        this._className = name || "ICacheBase"
        console.log(`Cache: ${this._className}初始化...`)
        this._data = {}
    };

    //当前类日志输出
    protected print = function (...args: any[]) {
        console.log(`【${this._className}】`, ...args)
    }

    protected emit(event: string, data?: any): any {
        EventDispatcher.instance.dispatchEvent(event, data);
    };
}