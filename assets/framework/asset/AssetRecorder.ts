import { sys } from "cc";
import { BUILD } from "cc/env";

/**
 * 资源记录
 * 用于对动态加载的资源进行分析、分包
 */
export class AssetRecorder {
    
    private static _open: boolean = false;    // 开关，仅在本地使用时打开，勿上传!
    
    private _inited: boolean = false;
    private _loadedData: any = null!;

    private static _instance: AssetRecorder = null!;
    public static get instance() {
        if (!this._instance) {
            this._instance = new AssetRecorder();
        }
        return this._instance;
    }

    private constructor() {     
    }

    public init() {
        if (this._inited) {
            return;
        }

        if (BUILD) {
            AssetRecorder._open = false;
            return;
        }

        let json = sys.localStorage.getItem("AssetRecorder");
        this._loadedData = json ? JSON.parse(json) : {};
        this._inited = true;
    }

    addRecord(path: string) {
        if (!AssetRecorder._open) {
            return;
        }

        let count: number = this._loadedData[path];
        this._loadedData[path] = count ? count + 1 : 1;
        this._saveRecord();
    }

    private _saveRecord() {
        if (!AssetRecorder._open) {
            return;
        }

        sys.localStorage.setItem("AssetRecorder", JSON.stringify(this._loadedData));
    }
}

export const assetRecorder = AssetRecorder.instance;


