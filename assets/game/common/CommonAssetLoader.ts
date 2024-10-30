import { Asset, AudioClip, Prefab, SpriteAtlas, __private } from "cc";
import { gatlas, gaudio, gui, loader } from "../../framework/ge";
import { PreloadAtlasList, PreloadAudioList, PreloadPrefabList } from "./CommonAssestConst";

type AssetInfo = { url: string, name: string, type: __private._types_globals__Constructor<Asset>, isPersist?: boolean };

class CommonAssetLoader {
    private static _instance: CommonAssetLoader;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new CommonAssetLoader();
        return this._instance;
    };

    private _inited = false;
    private _finished = false;
    private _loadList: AssetInfo[] = [];
    private _loaded: Record<string, number> = {};
    private _loading: Record<string, number> = {};

    start() {
        if (!this._inited) {
            this._initLoadList();
        }
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

    private _initLoadList() {
        for (let index = 0; index < PreloadAtlasList.length; index++) {
            const name = PreloadAtlasList[index];
            this._loadList.push({ url: "atlas/" + name, name, type: SpriteAtlas });
        }
        for (let index = 0; index < PreloadAudioList.length; index++) {
            const name = PreloadAudioList[index];
            this._loadList.push({ url: "audio/" + name, name, type: AudioClip });
        }

        for (let index = 0; index < PreloadPrefabList.persist.length; index++) {
            const name = PreloadPrefabList.persist[index];
            this._loadList.push({ url: 'prefab/layer/' + name, name, type: Prefab, isPersist: true });
        }
        for (let index = 0; index < PreloadPrefabList.once.length; index++) {
            const name = PreloadPrefabList.once[index];
            this._loadList.push({ url: 'prefab/layer/' + name, name, type: Prefab });
        }
        for (let index = 0; index < PreloadPrefabList.node.length; index++) {
            const name = PreloadPrefabList.node[index];
            this._loadList.push({ url: 'prefab/node/' + name, name, type: Prefab });
        }
        this._inited = true;
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
        loader.load(assetUrl, one.type, null, (err, res) => {
            delete this._loading[assetUrl];
            if (err || !res) {
                return console.log(err);
            }
            this._loaded[assetUrl] = 1;
            this._installAsset(one!, res);
        }, true);
    }

    private _installAsset(one: AssetInfo, res: Asset) {
        if (res instanceof SpriteAtlas) {
            let data: Record<string, SpriteAtlas> = {};
            data[one.name] = res;
            gatlas.setInfo(data);
        } else if (res instanceof AudioClip) {
            let data: Record<string, AudioClip> = {};
            data[one.name] = res;
            gaudio.push(data);
        } else if (res instanceof Prefab) {
            if (one.isPersist) {
                res.addRef();
            }
            if (one.name.startsWith("pf")) {
                let data: Record<string, Prefab> = {};
                data[one.name] = res;
                gui.builderInfo(data);
            }
        }
    }

    check() {
        if (!this._inited) return;
        if (this._finished) return;
        if (Object.keys(this._loading).length > 0) return;
        this._loadAsset();
    }
}
export const commonAssetLoader: CommonAssetLoader = CommonAssetLoader.instance;
