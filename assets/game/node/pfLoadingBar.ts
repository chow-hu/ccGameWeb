/*
 * @Description: loadingBar 组件
 * @Author: zy
 * @Date: 2021-04-01 15:08:30
 * @LastEditTime: 2021-09-06 09:34:38
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */

import { Component, Label, ProgressBar, _decorator } from 'cc';
const { ccclass, property, menu } = _decorator;
let BASE_POW = 1;

@ccclass('PfLoadingBar')
@menu('node/pfLoadingBar')
export class PfLoadingBar extends Component {

    @property(ProgressBar)
    loadBar!: ProgressBar;
    @property(Label)
    txt!: Label;

    private _max_progress = 0;
    private _update_dt = 0;
    private _load_per = 0;
    private _load_speed = 0;
    private _extr_per = 0;

    start() {
    }

    get load_per(): number {
        return this._load_per
    }

    walk(dt: number) {
        if (!this.node.active || this._load_per >= 1.0) {
            return false;
        }
        if (this._max_progress != 0) {
            this._update_dt = this._update_dt || 0;
            this._load_speed = this._load_speed || 1;
            this._extr_per = this._extr_per || 0;
            this._update_dt += dt * BASE_POW * this._load_speed;
            this._update_dt = Math.min(this._update_dt, this._max_progress + this._extr_per);
            this._load_per = this._update_dt;
        } else {
            this._load_per = this._load_per + dt * BASE_POW;
        }

        this._load_per = Math.min(1, this._load_per);
        this.loadBar.progress = this._load_per;
        if (this._load_per >= 1.0) {
            return true;
        }
        return false;
    };

    awake(maxnum: number, speed: number = 1) {
        this._load_per = 0;
        this._extr_per = 0;
        this._update_dt = 0;
        this.loadBar.progress = 0;
        this._max_progress = maxnum;
        this._load_speed = speed;
        this.node.active = true;
    };

    extra(value: number, max: number) {
        this._extr_per = value * max;
    };

    free() {
        this._max_progress = 0;
    };

    public get string(): string {
        return this.txt.string;
    };

    public set string(v: string) {
        this.txt.string = v;
    };

}


