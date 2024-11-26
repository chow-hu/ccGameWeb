/*
 * @Description: AssetsLoader - 资源加载器
 * @Author: zy
 * @Date: 2024-03-06 15:11:15
 * @Reference: 
 */
import { Asset, AssetManager, ImageAsset, SpriteFrame, Texture2D, __private, assetManager, error, isValid, log, sp } from 'cc';
import _ from 'lodash';
export interface IAssetsDependExt {
    extDependList: string[];
    remoteImgList: string[];
    remoteSkelDataList: string[];
}

/** 包配置 */
export interface IBundleOption {
    /** 包名 */
    name: string;
    /** 包md5 */
    md5: string;
    /** 包地址 */
    url: string;
    /** 是否子包 */
    isChildGame?: boolean;
    /** 是否附属包 */
    isSubPkg?: boolean;
    /** md5是否改变 */
    isChangedMD5?: boolean;
    /** 启动场景 */
    scene?: string;
    /** 启动页面 */
    layer?: string;
    /** 附属包 */
    depends?: string[];
}

// 资源加载的处理回调
export type IProgressCallback = (finished: number, total: number, item: AssetManager.RequestItem) => void;
// 资源加载的完成回调
export type ICompleteCallback = ((err: Error | null | string, data: any) => void);
//远端资源参数
export type IRemoteOptions = { [k: string]: any, ext?: string };
//远端任意资源参数
export type IRemoteReq = string | string[] | __private._cocos_asset_asset_manager_shared__IRequest | Array<__private._cocos_asset_asset_manager_shared__IRequest>;
/** 请求Spine */
export type ISpineReq = { image: string, atlas: string, skel: string };

let static_asset_list: Record<string, number> = {};

export class AssetsLoader {
    private static _instance: AssetsLoader;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AssetsLoader();
        return this._instance;
    }

    constructor() {
        static_asset_list = {};
    };

    private _lock: boolean = false;
    private _lockDirty: boolean = false;
    private _waitrealese: string[] = [];

    public clear() {
        static_asset_list = {};
        this._lock = false;
        this._lockDirty = false;
        this._waitrealese = [];
    };

    /** 包加载 */
    public loadBundle(option: IBundleOption, cb: (err: Error | null | string, bundleName?: string) => void) {
        if (!option || typeof (option) != "object") {
            cb && cb("option is null", null);
            return;
        }
        if (option.isChangedMD5) {
            this.removeBundle(option.name, true);
            option.isChangedMD5 = false
        } else {
            if (assetManager.getBundle(option.name)) {
                cb && cb(null, option.name);
                return;
            }
        }

        const checkEmpty = function (key: string) {
            return !key || _.isEmpty(key);
        }
        log("loadBundle url:" + option.url + " md5:" + option.md5 + ' name:' + option.name);
        let url = option.url;
        if (checkEmpty(url)) {
            url = option.name;
        }
        if (checkEmpty(url)) {
            cb && cb("option is error", null);
            return;
        }
        assetManager.loadBundle(url, { version: option.md5 }, (err, bundle) => {
            if (err) {
                log(`Failed to load bundle ${option.url}: ${option.name}: ${err.name} : ${err.message}`);
                cb && cb(err);
                return;
            }
            cb && cb(null, option.name);
        });
    }

    // getBundleAssets(bundle: AssetManager.Bundle) {
    //     let paths = [];
    //     let temp = bundle['_config']['paths']['_map'];
    //     for (let key in temp) {
    //         if (!_.isEmpty(key) && !key.endsWith('/spriteFrame') && !key.endsWith('/texture')) {
    //             paths.push(key);
    //         }
    //     }
    //     return paths;
    // }

    /** 预加载ab包里面的资源 */
    public bundlePreload<T extends Asset>(option: IBundleOption, paths: string, type?: __private.__types_globals__Constructor<T>, onComp?: Function, onPro?: Function, clear?: boolean) {
        this.loadBundle(option, (err, name) => {
            if (err) {
                onComp && onComp(err);
                return console.log("bundlePreload error");
            };
            let bundle = assetManager.getBundle(option.name);
            if (type) {
                bundle.loadDir(paths, type, (finished, total, item) => {
                    // log('chow 111 ' + finished + ' ' + total);
                    onPro && onPro(finished, total, item)
                }, (err, data) => {
                    log('chow complete');
                    onComp && onComp(err, data);
                    clear && bundle.releaseAll();
                });
            } else {
                bundle.loadDir(paths, (finished, total, item) => {
                    // log('chow 222 ' + finished + ' ' + total);
                    onPro && onPro(finished, total, item)
                }, (err, data) => {
                    log('chow complete');
                    onComp && onComp(err, data);
                    clear && bundle.releaseAll();
                });
            }
        })
    }

    /** 卸载包 */
    public removeBundle(name: string, clear: boolean = true) {
        let bundle = assetManager.getBundle(name);
        if (bundle) {
            if (clear) {
                bundle.releaseAll();
            }
            assetManager.removeBundle(bundle);
        }
    }

    /** 加载包里面的资源 */
    public bundleLoad<T extends Asset>(bundlename: string, paths: string, type: __private.__types_globals__Constructor<T>, onProgress: IProgressCallback | null, onComplete: ICompleteCallback | null, is_static: boolean = false, host?: IAssetsDependExt) {
        this._lock = true;
        let bundle = assetManager.getBundle(bundlename);
        if (bundle) {
            let asset = bundle.get(paths, type);
            if (asset) {
                this._assetLoadComplete(null, asset, onComplete, is_static, host);
                if (this._lockDirty) return;
                this._lock = false;
                this._releaseTemps();
                return;
            }
            this._lockDirty = true;
            bundle.load(paths, type, onProgress, (err: Error | null, asset?: T | null) => {
                this._lockDirty = false;
                this._assetLoadComplete(err, asset || null, onComplete, is_static, host);
                if (this._lockDirty) return;
                this._lock = false;
                this._releaseTemps();
            });
        } else {
            console.log("bundleLoad bundle is null")
        }
    }

    /** 加载resources包里面的资源 */
    public load<T extends Asset>(paths: string, type: __private.__types_globals__Constructor<T>, onProgress: IProgressCallback | null, onComplete: ICompleteCallback | null, is_static: boolean = false, host?: IAssetsDependExt) {
        this._lock = true;
        let asset = assetManager.resources?.get(paths, type);
        if (asset) {
            this._assetLoadComplete(null, asset, onComplete, is_static, host);
            if (this._lockDirty) return;
            this._lock = false;
            this._releaseTemps();
            return;
        }
        this._lockDirty = true;
        assetManager.resources?.load(paths, type, onProgress, (err: Error | null, asset?: T | null) => {
            this._lockDirty = false;
            this._assetLoadComplete(err, asset || null, onComplete, is_static, host);
            if (this._lockDirty) return;
            this._lock = false;
            this._releaseTemps();
        });
    };

    /** 加载远端资源 */
    public loadRemote<T extends Asset>(url: string, options: IRemoteOptions | null, onComplete?: ICompleteCallback | null): void;
    public loadRemote<T extends Asset>(url: string, onComplete?: ICompleteCallback | null): void;
    public loadRemote(url: string, options?: IRemoteOptions | ICompleteCallback | null, onComplete?: ICompleteCallback | null) {
        if (onComplete) {
            assetManager.loadRemote(url, options, onComplete);
        } else {
            assetManager.loadRemote(url, options);
        }

    }

    /** 加载远端任意资源 */
    // public loadAny<T extends Asset>(requests: IRemoteReq, options: { [key: string]: any; preset?: string; } | null, onProgress: IProgressCallback | null, onComplete: ICompleteCallback | null): void;
    public loadAny<T extends Asset>(requests: IRemoteReq, options: { [key: string]: any; preset?: string; } | null, onComplete?: ICompleteCallback | null): void;
    // public loadAny<T extends Asset>(requests: IRemoteReq, onProgress: IProgressCallback | null, onComplete: ICompleteCallback | null): void;
    public loadAny<T extends Asset>(requests: string, onComplete?: ICompleteCallback | null): void;
    // public loadAny<T extends Asset>(requests: string[], onProgress: IProgressCallback | null, onComplete?: ((err: Error | null, data: T[]) => void) | null): void;
    public loadAny(requests: IRemoteReq, options?: { [key: string]: any; preset?: string; } | ICompleteCallback | null, onComplete?: ICompleteCallback | null) {
        if (onComplete) {
            assetManager.loadAny(requests, options, onComplete);
        } else {
            assetManager.loadAny(requests, options);
        }
    };


    public release(uuid: string | Asset) {
        if (uuid instanceof Asset) {
            uuid = uuid._uuid;
        }
        if (!uuid) {
            return;
        }
        if (this._lock) {
            this._waitrealese.push(uuid);
            return;
        }
        this._release(uuid);
        this._releaseTemps();
    };

    private _release(uuid: string) {
        let asset = assetManager.assets.get(uuid);
        asset && asset.decRef(true);
    }
    private _releaseTemps() {
        for (let index = 0; index < this._waitrealese.length; index++) {
            const _uuid = this._waitrealese[index];
            this._release(_uuid);
        }
        this._waitrealese = [];
    }

    private _assetLoadComplete<T extends Asset>(err: Error | null, asset: T | null, onComplete: ICompleteCallback | null, is_static: boolean, host?: IAssetsDependExt) {
        if (asset && is_static) {
            asset.addRef();
            static_asset_list[asset._uuid] = 1;
        }
        if (host) {
            if (!isValid(host, true)) {
                if (asset) {
                    asset.addRef();
                    this._waitrealese.push(asset._uuid);
                }
                return;
            };
            if (asset && host.extDependList.indexOf(asset._uuid) == -1) {
                host.extDependList.push(asset._uuid);
                asset.addRef();
            }
            onComplete && onComplete.call(host, err, asset as T);
        } else {
            onComplete && onComplete(err, asset as T);
        }
    };

    public cacheCount(): number {
        return assetManager.assets.count;
    }

    private _remoteImgRes: Map<String, SpriteFrame> = new Map();
    /** 加载远程图片 */
    loadRemoteImg(url: string, options: IRemoteOptions | null, onComplete?: ICompleteCallback | null, host?: IAssetsDependExt) {
        this.loadRemote(url, options, (err, asset: ImageAsset) => {
            if (err) {
                return onComplete && onComplete(err, null);
            }
            if (host) {
                if (!isValid(host, true)) {
                    return;
                };
                if (asset) {
                    host.remoteImgList.push(asset?._uuid);
                }
            }
            let spriteFrame = this._remoteImgRes.get(asset._uuid);
            if (!spriteFrame) {
                let texture = new Texture2D();
                texture.image = asset;
                spriteFrame = new SpriteFrame();
                spriteFrame.texture = texture;
                asset.addRef();
                this._remoteImgRes.set(asset?._uuid, spriteFrame);
            }
            spriteFrame.addRef();
            onComplete && onComplete(err, spriteFrame);
        })
    }

    private _remoteSpineTexture: Map<String, Texture2D> = new Map();

    private _remoteSpineSkelData: Map<String, sp.SkeletonData> = new Map();
    /**
     * 加载远端skel
     * @param spineConf: { image: string, atlas: string, skel: string };
     * @param onComplete 
     * @param host 
     */
    loadRemoteSkel(spineConf: ISpineReq, onComplete?: ICompleteCallback | null, host?: IAssetsDependExt) {
        if (!spineConf || !spineConf.image || !spineConf.atlas || !spineConf.skel) {
            error("错误的Spine请求参数")
            return;
        }
        let skelType = '.bin';
        let skelName = this.transPath(spineConf.skel);
        let imageName = this.transPath(spineConf.image);
        if (String(skelName).toLocaleLowerCase().includes(".json")) {
            skelType = '.txt';
        }
        let request = [
            { url: spineConf.atlas, ext: '.txt' },
            { url: spineConf.skel, ext: skelType },
        ]
        this.loadAny(request, (err, assets: Array<any>) => {
            if (err) {
                return onComplete && onComplete(err, null);
            }
            if (host) {
                if (!isValid(host, true)) {
                    return;
                };
            }
            let spriteNames = String(assets[0]).match(/\b\w+\.(png|jpg)\b/gi);
            if (!spriteNames || !spriteNames[0]) {
                return onComplete && onComplete("文件格式错误", null);
            }
            this.loadRemote(spineConf.image, { ext: '.jpg' }, (err, asset: ImageAsset) => {
                if (err) {
                    return onComplete && onComplete(err, null);
                }
                if (host) {
                    if (!isValid(host, true)) {
                        return;
                    };
                    if (asset) {
                        host.remoteSkelDataList.push(asset?._uuid);
                    }
                }
                let texture = this._remoteSpineTexture.get(asset._uuid);
                if (!texture) {
                    texture = new Texture2D();
                    texture.image = asset;
                    asset.addRef();
                    this._remoteSpineTexture.set(asset?._uuid, texture);
                }
                texture.addRef();

                let skelData = this._remoteSpineSkelData.get(asset._uuid);
                if (!skelData) {
                    skelData = new sp.SkeletonData();
                    if (skelType == '.txt') {
                        skelData.skeletonJson = assets[1];
                    } else {
                        skelData._nativeAsset = assets[1];
                    }
                    skelData.atlasText = assets[0];
                    skelData.textures = [texture];
                    skelData.textureNames = [spriteNames[0]];
                    skelData._uuid = skelName;
                    skelData._nativeUrl = spineConf.skel;

                    this._remoteSpineSkelData.set(asset?._uuid, skelData);
                }
                skelData.addRef();

                onComplete && onComplete(null, skelData);
            })
        })
    }
    /** 释放Sprite纹理 */
    public releaseSpriteFrame(uuid: string) {
        let spriteFrame = this._remoteImgRes.get(uuid);
        if (!spriteFrame) {
            this._remoteImgRes.delete(uuid);
            return;
        }
        spriteFrame.decRef(false);
        if (spriteFrame.refCount <= 0) {
            let texture = spriteFrame.texture as Texture2D;
            if (spriteFrame.packable) {
                texture = spriteFrame.original?._texture as Texture2D || texture;
            }
            if (texture) {
                texture.image?.decRef();
                texture.destroy();
            }
            spriteFrame.destroy();
            spriteFrame = null;
            this._remoteImgRes.delete(uuid);
        }
    }

    /** 释放Spine的Texture */
    public releaseSpineTexture(uuid: string) {
        let texture: Texture2D;
        //@ts-ignore
        texture = this._remoteSpineTexture.get(uuid);
        if (!texture) {
            this._remoteSpineTexture.delete(uuid);
            return;
        }
        texture.decRef(false);
        if (texture.refCount <= 0) {
            texture.image?.decRef();
            texture.destroy();
            this._remoteSpineTexture.delete(uuid);
        }
    }

    /** 释放Spine的SkelData */
    public releaseSpineSkelData(uuid: string) {
        let skelData: sp.SkeletonData;
        //@ts-ignore
        skelData = this._remoteSpineSkelData.get(uuid);
        if (!skelData) {
            this._remoteSpineSkelData.delete(uuid);
            return;
        }
        skelData.decRef(false);
        if (skelData.refCount <= 0) {
            if (skelData.textures && skelData.textures.length > 0) {
                for (let i = 0; i < skelData.textures.length; i++) {
                    let texture: Texture2D = skelData.textures[i];
                    if (texture) {
                        texture.decRef(false);
                        if (texture.refCount <= 0) {
                            texture.image?.decRef();
                            texture.destroy();
                            this._remoteSpineTexture.delete(uuid);
                        }
                    }
                }
            }
            skelData.destroy();
            this._remoteSpineSkelData.delete(uuid);
        }
    }


    private transPath(path: string) {
        if (path.includes('/')) {
            let temp = path.slice();
            let names = temp.split('/');
            return names[names.length - 1];
        }
        return path;
    }
}