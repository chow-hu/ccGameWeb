import { SpriteAtlas, SpriteFrame } from 'cc';

export default class AtlasManager {
    private static _instance: AtlasManager;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AtlasManager();
        return this._instance;
    }

    private _atlas: Record<string, SpriteAtlas>;

    constructor() {
        this._atlas = {};
    }

    public setInfo(atlas: Record<string, SpriteAtlas>) {
        let keys = Object.keys(atlas);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            this._atlas[key] = atlas[key];
        }
    };

    public clear(key?: string) {
        if (key) {
            delete this._atlas[key];
        } else {
            this._atlas = {};
        }
    }

    private _get(atlasName: string, spfName: string): SpriteFrame | null {
        let atlas: SpriteAtlas = this._atlas[atlasName];
        if (!atlas) {
            return null;
        }
        return atlas.getSpriteFrame(spfName);
    }

    private _gets(atlasName: string[], spfName: string): SpriteFrame | null {
        for (let index = 0; index < atlasName.length; index++) {
            let key = atlasName[index];
            let spriteFrame: SpriteFrame | null = this._get(key, spfName);
            if (!spriteFrame) {
                continue;
            }
            return spriteFrame;
        }
        return null;
    }

    public get(atlasName: string, spfName: string, defSpfName?: string): SpriteFrame | null {
        let sets = atlasName.split('|');
        let spf = this._gets(sets, spfName);
        if (!spf && defSpfName) {
            spf = this._gets(sets, defSpfName);
        }
        return spf;
    }

    public getSpriteAtlas(key: string): SpriteAtlas {
        return this._atlas[key];
    }
}