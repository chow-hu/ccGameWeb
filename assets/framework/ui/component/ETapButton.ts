import { _decorator, Component } from 'cc';
import { valueof } from '../../ge';
import { UIComponentBase } from './UIComponentBase';
const { ccclass, property } = _decorator;

export enum TapBtnStatus {
    ready,
    close,
    lock
}

@ccclass('ETapButton')
export class ETapButton extends UIComponentBase {

    @property(Component)
    get host(): Component {
        return this._host!;
    }
    set host(value: Component) {
        this._host = value;
    }

    private _idx: number = -1;
    private _status: TapBtnStatus = TapBtnStatus.close;
    private _host: Component | null = null;
    private _isSelect: boolean = false;
    private _isInit: boolean = false;

    init(idx: number, host: Component, status?: TapBtnStatus) {
        this._idx = idx;
        this.host = host;
        this._isSelect = false;
        this._isInit = true;
        this.changeStatus(status);
    }

    changeStatus(status?: TapBtnStatus) {
        if (this._isInit) {
            status = status || this.checkStatus();
            this._isInit = false;
        } else {
            if (status === undefined) status = this.checkStatus();
            if (status === undefined || status === this._status) return;
        }
        this._status = status;
        let onTapButtonStatusChange = valueof(this._host, 'OnTapButtonStatusChange');
        onTapButtonStatusChange && onTapButtonStatusChange.call(this._host, this.node, this._idx, status);
    }

    checkStatus() {
        let onTapButtonStatusCheck = valueof(this._host, 'OnTapButtonStatusCheck') as (idx: number) => TapBtnStatus;
        let status = onTapButtonStatusCheck && onTapButtonStatusCheck.call(this._host, this._idx);
        return status;
    }

    onSelect(isSelect: boolean) {
        if (this._status === TapBtnStatus.close) return false;
        this._isSelect = isSelect;
        let OnTapButtonSelect = valueof(this._host, 'OnTapButtonSelect');
        OnTapButtonSelect && OnTapButtonSelect.call(this._host, this.node, this._idx, isSelect);
        return true;
    }
}