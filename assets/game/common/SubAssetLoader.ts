import { __private, _decorator, Asset, assetManager, AudioClip, Prefab, SpriteAtlas } from "cc";
import { gatlas, gaudio, loader } from "../../framework/ge";

const { ccclass, property, menu } = _decorator;

export type SubAssestLoaderConfig = {
    bundle?: string,
    name?: string,
    url: string,
    type: __private._types_globals__Constructor<Asset>,
}

export class SubAssetLoader {
    private _finished = false;
    private _loadList: SubAssestLoaderConfig[] = [];
    private _loaded: Record<string, number> = {};
    private _loading: Record<string, number> = {};
    private _assset: Record<string, Asset> = {};

    public commitLoader(list: SubAssestLoaderConfig[]) {
        this._finished = false;
        this._loaded = {};
        this._loading = {};
        this._initLoadList(list);
    }

    get finished() {
        return this._finished;
    }

    get progress() {
        let cur = 0;
        let max = this._loadList.length;
        for (let index = 0; index < this._loadList.length; index++) {
            const element = this._loadList[index];
            if (this._loaded[element.url]) {
                cur++;
            }
        }
        return { cur, max }
    }

    private getName(url: string) {
        let paths = url.slice().split('/');
        return paths[paths.length - 1];
    }

    private _initLoadList(list: SubAssestLoaderConfig[]) {
        this._loadList = list.slice();
        this._loadList.forEach((element) => {
            element.name = element.name || this.getName(element.url);
        })
        // this.schedule(this.check, 0.1);
    }

    private _getLoadAssetInfo() {
        for (let index = 0; index < this._loadList.length; index++) {
            const element = this._loadList[index];
            if (!this._loaded[element.url] && !this._loading[element.url]) {
                return element;
            }
        }
    }

    private _checkState() {
        let bOver = true;
        for (let index = 0; index < this._loadList.length; index++) {
            const element = this._loadList[index];
            if (!this._loaded[element.url]) {
                bOver = false;
                break;
            }
        }
        this._finished = bOver;
    }

    private _loadAsset() {
        let one = this._getLoadAssetInfo();
        if (!one) {
            this._checkState();
            return;
        }
        this._loading[one.url] = 1;
        const assetUrl = one.url;
        const load = one.bundle ? assetManager.getBundle(one.bundle) : loader;
        load.load(assetUrl, one.type, null, (err, res) => {
            delete this._loading[assetUrl];
            if (err || !res) {
                return console.log(err);
            }
            this._loaded[assetUrl] = 1;
            this._installAsset(one!, res);
        }, true);
    }

    private _installAsset(one: SubAssestLoaderConfig, res: Asset) {
        if (this._finished) return;
        this._assset[one.name] = res;
        if (res instanceof SpriteAtlas) {
            let data: Record<string, SpriteAtlas> = {};
            data[one.name] = res;
            gatlas.setInfo(data);
        } else if (res instanceof AudioClip) {
            let data: Record<string, AudioClip> = {};
            data[one.name] = res;
            gaudio.push(data);
        } else if (res instanceof Prefab) {

        }
    }

    public check() {
        // if (this.finished) {
        //     this.unschedule(this.check);
        // }
        if (this._finished) return;
        if (Object.keys(this._loading).length > 0) return;
        this._loadAsset();
    }

    public destroyAssest(list: SubAssestLoaderConfig[]) {
        this._finished = true;
        list.forEach((element) => {
            const name = element.name || this.getName(element.url);
            if (element.type == SpriteAtlas) {
                gatlas.clear(name)
            } else if (element.type == AudioClip) {
                gaudio.clear(name);
            } else if (element.type == Prefab) {

            }
        })
        this._assset = {};
    }
}
