/*
 * @Description: 预制体构建线
 * @Author: zy
 * @Date: 2021-01-19 18:19:23
 * @Reference:
 */

import { instantiate, isValid, Node, Prefab } from "cc";
import { UIBase } from "../component/UIBase";
export class BuilderStack {
    private _prefabs: Record<string, Prefab>;
    private static _instance: BuilderStack;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new BuilderStack();
        return this._instance;
    };

    constructor() {
        this._prefabs = {};
    };

    public clear() {
        this._prefabs = {};
    };

    public setInfo(prefabs: Record<string, Prefab>) {
        let keys = Object.keys(prefabs);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            this._prefabs[key] = prefabs[key];
        }
    };

    public getInfo(key: string) {
        return this._prefabs[key];
    }

    public build(name: string, parm: any, parent?: Node): Node | null {
        if (!isValid(this._prefabs[name], true)) {
            return null;
        }
        let item = instantiate(this._prefabs[name]);
        if (parent) item.parent = parent;
        let uiJs = item.getComponent(UIBase);
        if (uiJs && uiJs.init) {
            uiJs.init(parm);
        }
        return item;
    };
}

export const builderStack: BuilderStack = BuilderStack.instance;