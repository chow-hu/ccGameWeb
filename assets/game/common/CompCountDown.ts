import { _decorator, Component, Label, macro } from 'cc';
import { sprintf } from '../../framework/ge';
import { StorageData } from '../../framework/storage/StorageData';
const { ccclass, property } = _decorator;

@ccclass('CompCountDown')
export class CompCountDown extends Component {

    private _label: Label = null!;
    private _endTime: number = -1;
    private _restTime: number = -1;
    private _cb: Function = null!;
    private _str: string = null!;

    protected onLoad(): void {
        this._label = this.node.getComponent(Label)!;
    }

    /**
     * 
     * @param endTime 结束时间(ms)
     * @param cb 回调函数
     * @param str 文字模板
     */
    init(endTime: number, cb?: Function, str?: string) {
        if (!this._label) {
            console.error(`CompCountDown Error in ${this.node.name} : This node has not Label component.`);
        }

        this._endTime = endTime;
        this._cb = cb!;
        this._str = str!;

        this.unschedule(this._scheduleTask);
        this._scheduleTask();
        this.schedule(this._scheduleTask, 1.0, macro.REPEAT_FOREVER);
    }

    deInit() {
        this.unschedule(this._scheduleTask);
        this._label.string = "";
    }

    private _scheduleTask() {
        this._restTime = Math.ceil((this._endTime - StorageData.sysTs) / 1000);
        if (this._restTime <= 0) {
            this.unschedule(this._scheduleTask);
            this._cb && this._cb();
            return;
        }

        this._updaetLabel();
    }

    private _updaetLabel() {
        let hours: number = Math.floor(this._restTime / 3600);
        let minutes: number = Math.floor(this._restTime % 3600 / 60);
        let seconds: number = this._restTime % 60;

        let str = this._getStr(hours) + ":" + this._getStr(minutes) + ":" + this._getStr(seconds);
        this._label.string = this._str ? sprintf(this._str, str) : str;
    }

    private _getStr(num: number) {
        return num > 9 ? String(num) : "0" + num;
    }

    protected onDestroy(): void {
        this.unschedule(this._scheduleTask);
    }
}


