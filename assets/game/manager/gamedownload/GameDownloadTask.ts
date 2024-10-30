import { AssetsLoader, IBundleOption } from "../../../framework/asset/AssetsLoader";
import { EventContract } from "../../../framework/ge";
import { cbs } from "../../common/custom-general";
import { GameDownLoadEvent } from "./interface";

export class GameDownloadTask extends EventContract {
    private _option: IBundleOption;
    public get option(): IBundleOption {
        return this._option;
    }
    public set option(value: IBundleOption) {
        this._option = value;
    }

    private _isLoaded: boolean = false;
    public get isLoaded(): boolean {
        return this._isLoaded;
    }
    public set isLoaded(value: boolean) {
        this._isLoaded = value;
    }

    private _percent: number = 0;
    public get percent(): number {
        return this._percent;
    }
    public set percent(value: number) {
        this._percent = value;
    }

    private _finished: number = 0;
    public get finished(): number {
        return this._finished;
    }
    public set finished(value: number) {
        this._finished = value;
    }

    private _total: number = 0;
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }

    constructor(option: IBundleOption) {
        super();
        this.option = option;
    }

    public download() {
        const option: IBundleOption = this.option;
        // log('chow start : ' + JSON.stringify(option));
        AssetsLoader.instance.bundlePreload(option, '', null, cbs((error, assets) => {
            if (error) {
                return this.emit(GameDownLoadEvent.task_error, option);
            }
            this.isLoaded = true;
            // log('chow complete: ' + JSON.stringify(option));
            this.emit(GameDownLoadEvent.task_complete, option)
        }, this), cbs((finished: number, total: number, item) => {
            this.percent = finished / total;
            this.finished = finished;
            this.total = total;
            // log('chow progress: ' + this.percent);
            this.emit(GameDownLoadEvent.task_progress, option)
        }, this))
    }
}