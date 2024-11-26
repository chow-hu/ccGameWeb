/*
 * @Description: TileNode - node平铺child工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @Reference: 
 */
import { CCObject, Color, Component, Node, UIOpacity, UIRenderer, UITransform, Vec3, Widget, __private, clamp, instantiate, isValid } from 'cc';
import { JSB } from 'cc/env';
import { valueof } from '../../common/general';
type _TileItemMargin = { top?: number, bot?: number, left?: number, right?: number, alignFlags?: number };
type _TileItem = {
    node: Node | TileNode,
    x: number,
    y: number,
    sx: number,
    sy: number
    active: boolean,
    margin?: _TileItemMargin
};
export const NODE_BASE = '_0';
export class TileNode extends CCObject {

    private _list: _TileItem[];
    private _x: number;
    private _y: number;
    private _parent: Node | null;
    private _base!: Node;
    private _width: number;
    private _height: number;
    private _active: boolean;
    public anchorX: number;
    public anchorY: number;
    private _opacity: number = 255;
    static BASE = NODE_BASE;


    get node() {
        return this._base;
    }
    constructor(width: number, height: number, anchorX: number, anchorY: number) {
        super();
        this._list = [];
        this._parent = null;
        this._width = width;
        this._height = height;
        this.anchorX = anchorX;
        this.anchorY = anchorY;
        this._x = this._y = 0;
        this._active = true;
    };

    /**
     * @description: 节点转平铺节点
     * @param {Node} node
     * @param {number} startPriority 起始的优先级序号
     */
    static tile(node: Node, startPriority: number = 0): TileNode {
        let transform = node.getComponent(UITransform);
        let { width, height, anchorX, anchorY } = transform!;
        let tileNode = new TileNode(width, height, anchorX, anchorY);
        let list = [];
        let scaleBase = node.getScale();
        list.push({ node: node, x: 0, y: 0, sx: 1, sy: 1, active: true });
        let childs: Node[] = node.children.slice();
        for (let index = 0; index < childs.length; index++) {
            let child = childs[index];
            let transform = child._uiProps?.uiTransformComp;
            if (transform) transform.priority = startPriority + index + 1;
            let scale = child.getScale();
            let widget = child.getComponent(Widget);
            let margin: _TileItemMargin = {};
            if (widget) {
                widget.enabled = false;
                margin.top = widget.top;
                margin.bot = widget.bottom;
                margin.left = widget.left;
                margin.right = widget.right;
                margin.alignFlags = widget.alignFlags;
            }
            list.push({
                node: child,
                x: child.position.x, y: child.position.y,
                sx: scale.x, sy: scale.y,
                active: child.active
            });
            child.setScale(scale.multiply(scaleBase));
        }
        tileNode._active = node.active;
        tileNode.list = list;
        let pos = node.getPosition();
        tileNode._base = list[0].node as Node;
        tileNode.setPosition(pos.x, pos.y);
        tileNode.parent = node.parent;
        return tileNode;
    };

    static creat(node: Node): TileNode {
        let _node = instantiate(node);
        _node.active = true;
        let transform = _node.getComponent(UITransform);
        let { width, height, anchorX, anchorY } = transform!;
        let tileNode = new TileNode(width, height, anchorX, anchorY);
        let list = [];
        let scaleBase = _node.getScale();
        list.push({ node: _node, x: 0, y: 0, sx: 1, sy: 1, active: true });
        let childs: Node[] = []
        childs = childs.concat(_node.children);
        for (let index = 0; index < childs.length; index++) {
            let child = childs[index];
            let transform = child._uiProps?.uiTransformComp;
            if (transform) transform.priority = index + 1;
            let scale = child.getScale();
            list.push({
                node: child,
                x: child.position.x, y: child.position.y,
                sx: scale.x, sy: scale.y,
                active: child.active
            });
            child.setScale(scale.multiply(scaleBase));
        }
        tileNode._active = _node.active;
        tileNode.list = list;
        tileNode._base = list[0].node as Node;
        return tileNode;
    };

    public setPriority(v: number, degree = 0) {
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let priority = v + index * (Math.pow(100, degree));
            if (item.node instanceof Node) {
                let transform = item.node._uiProps?.uiTransformComp;
                if (transform) transform.priority = priority;
            } else {
                item.node.setPriority(priority, degree++);
            }
        }
    };

    public add(node: Node | TileNode, idx: number = -1) {
        if (idx === -1 || idx > this._list.length) {
            idx = this._list.length;
        }
        let scaleBase = this.scale;
        let v3 = node.scale;
        let item = {
            node: node,
            x: node.position.x, y: node.position.y,
            sx: v3.x, sy: v3.y,
            active: node.active
        }
        this._list.splice(idx, 0, item);
        node.scale = v3.multiply(scaleBase);
        let vec3 = new Vec3();
        vec3.x = this._x + item.x * scaleBase.x;
        vec3.y = this._y + item.y * scaleBase.y;
        node.position = vec3;
        for (let index = idx; index < this._list.length; index++) {
            let item = this._list[index];
            if (item.node instanceof Node) {
                let transform = item.node._uiProps?.uiTransformComp;
                if (transform) transform.priority = index + 1;
            } else {
                item.node.setPriority(index + 1, 1);
            }
        }
        node.parent = this._base.parent;
        if (!node.parent) return;
        let func = valueof(UITransform, 'insertChangeMap');
        func.call(UITransform, node.parent);
    }

    public get list(): _TileItem[] {
        return this._list;
    };

    public set list(v: _TileItem[]) {
        this._list = v;
    };

    public get size(): number {
        return this._list.length;
    }

    public set width(v: number) {
        this._width = v;
        let transform = this._base?.getComponent(UITransform);
        transform?.setContentSize(v, transform.height);
    };

    public get width(): number {
        return this._width;
    };

    public set height(v: number) {
        this._height = v;
        let transform = this._base?.getComponent(UITransform);
        transform?.setContentSize(transform.width, v);
    };

    public get height(): number {
        return this._height;
    };

    public get scale(): Vec3 {
        return this._base?.getScale();
    };

    public set scale(v3: Vec3) {
        if (!this._base) return;
        let scaleBase = this.scale;
        if (v3.x === scaleBase.x && v3.y === scaleBase.y) return;
        v3.z = 1;
        let vec3 = new Vec3();
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            vec3.x = this._x + item.x * v3.x;
            vec3.y = this._y + item.y * v3.y;
            node.position = vec3;
            vec3.set(v3.x * item.sx, v3.y * item.sy, 1);
            node.scale = vec3;
        }
    };

    public setChildPosition(name: string, v: { x?: number, y?: number }) {
        let item = this.getItemByKey(name!);
        if (!item) return;
        let scaleBase = this.scale;
        let node = item.node;
        let vec3 = new Vec3();
        if (v.x != undefined) item.x = v.x;
        if (v.y != undefined) item.y = v.y;
        vec3.x = this._x + item.x * scaleBase.x;
        vec3.y = this._y + item.y * scaleBase.y;
        node.position = vec3;
    };

    public setChildScale(name: string, v: { x?: number, y?: number }) {
        let item = this.getItemByKey(name!);
        if (!item) return;
        let scaleBase = this.scale;
        let node = item.node;
        let vec3 = new Vec3();
        if (v.x != undefined) item.sx = v.x;
        if (v.y != undefined) item.sy = v.y;
        vec3.x = item.sx * scaleBase.x;
        vec3.y = item.sy * scaleBase.y;
        node.scale = vec3;
    };

    public setItemPosition(name: string, v: { x?: number, y?: number }) {
        let item = this.getItemByKey(name!);
        if (!item) return;
        if (v.x != undefined) item.x = v.x;
        if (v.y != undefined) item.y = v.y;
    };

    public setPosition(x: number, y: number) {
        // if (this._x === x && this._y === y) { //如果listViewde set_data的时候设置effect为false，且节点需要动态设置子节点位置，会在这里return，导致子节点位置设置失败
        //     return;
        // }
        if (!this._base) return;
        this._x = x;
        this._y = y;
        let scaleBase = this.scale;
        let vec3 = new Vec3();
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            Vec3.copy(vec3, node.position);
            vec3.x = x + item.x * scaleBase.x;
            vec3.y = y + item.y * scaleBase.y;
            if (vec3.x == node.position.x && vec3.y == node.position.y) continue;
            node.position = vec3;
        }
    };

    public get position(): Readonly<Vec3> {
        return new Vec3(this._x, this._y, 0);
    };

    public set position(val: Readonly<Vec3>) {
        this.setPosition(val.x, val.y);
    };

    public set x(v: number) {
        if (this._x === v) {
            return;
        }
        if (!this._base) return;
        this._x = v;
        let scaleBase = this.scale;
        let vec3 = new Vec3();
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            Vec3.copy(vec3, node.position);
            vec3.x = v + item.x * scaleBase.x;
            node.position = vec3;
        }
    };

    public get x(): number {
        return this._x;
    };

    public set y(v: number) {
        if (this._y === v) {
            return;
        }
        if (!this._base) return;
        this._y = v;
        let scaleBase = this.scale;
        let vec3 = new Vec3();
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            Vec3.copy(vec3, node.position);
            vec3.y = v + item.y * scaleBase.y;
            node.position = vec3;
        }
    };

    public get y(): number {
        return this._y;
    };

    public set parent(v: Node | null) {
        this._parent = v;
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            node.parent = v;
        }
        if (!v) return;
        let func = valueof(UITransform, 'insertChangeMap');
        func.call(UITransform, v);
    };

    public get parent(): Node | null {
        return this._parent;
    };

    public set active(v: boolean) {
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            let node = item.node;
            node.active = v && item.active;
        }
        this._active = v;
    };

    public get active(): boolean {
        return this._active;
    };

    public get name(): string {
        return this._base?.name || '';
    };

    public set name(v: string) {
        if (!this._base) return;
        this._base.name = v;
    };

    public setActive(v: boolean, paths?: string) {
        if (!paths) return this.active = v;
        let keys = paths.split('/');
        let key = keys.shift();
        if (!key) return;
        let item = this.getItemByKey(key!);
        if (!item || !item.node) return;
        if (keys.length > 0) {
            let subpath = keys.join('/');
            let child;
            if (item.node instanceof Node) {
                child = item.node.getChildByPath(subpath);
            } else {
                child = item.node.link(subpath);
            }
            if (!child) return;
            child.active = v;
        } else {
            item.active = v;
            item.node.active = v && this._active;
        }
    };

    public apply() {
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            if (item && item.node) {
                item.active = item.node.active;
            }
        }
    }

    public getItemByKey(key: string): _TileItem | undefined {
        if (key == TileNode.BASE) {
            return this._list[0];
        }
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            if (item && item.node && item.node.name == key) {
                return item;
            }
        }
    };

    public _link(key: string): Node | TileNode | null {
        let item = this.getItemByKey(key);
        return item && item.node || null;
    };

    /**
     * link
     * @param paths 斜杠分割 example: 'a/b/c'
     * @example
     *  let node = this.link('top/panel/txt');
     */
    link(paths: string): Node | null;
    /**
     * link
     * @param paths 斜杠分割 example: 'a/b/c'
     * @param classConstructor Component 子类
     * @example
     *  let label = this.link('top/panel/txt',Label);
     */
    link<T extends Component>(paths: string, classConstructor: __private.__types_globals__Constructor<T>): T | null;
    link<T extends Component>(paths: string, classConstructor?: __private.__types_globals__Constructor<T>): T | Node | null {
        let node = this.find(paths);
        if (classConstructor) {
            if (node instanceof Node) {
                return node.getComponent(classConstructor);
            } else {
                return node && node._base?.getComponent(classConstructor);
            }
        }
        return node instanceof Node ? node : node && node._base || null;
    };

    /**
     * 先找，找不到就创建
     * @param paths 斜杠分割 example: 'a/b/c'
     * @param classConstructor Component 子类
     * @returns 
     */
    attach<T extends Component>(paths: string, classConstructor: __private.__types_globals__Constructor<T>): T | null {
        let node = this.find(paths);
        if (!node || !isValid(node) || !(node instanceof Node)) {
            return null;
        }
        let component = node.getComponent(classConstructor);
        return component || node.addComponent(classConstructor);
    }

    /** 
     * find
     * @param paths 斜杠分割 example: 'a/b/c'
     * @example
     *     let node = this.find('bg/icon');
    */
    public find(paths: string): Node | TileNode | null {
        let keys = paths.split('/');
        let key = keys.shift();
        let node = this._link(key!);
        if (!node) return null;
        let subpath = keys.join('/');
        if (!subpath) return node || null;
        if (node instanceof Node) {
            node = node.getChildByPath(subpath);
        } else {
            node = node.link(subpath);
        }
        return node || null;
    };

    public destroy() {
        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];
            isValid(item.node, true) && item.node.destroy();
        }
        this.list = [];
        return super.destroy();
    };

    public forEach(func: (val: Node | TileNode, index: number) => void): void {
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            if (item && item.node) {
                func(item.node, index);
            }
        }
    };


    public get isValid(): boolean {
        return this._base?.isValid && super.isValid;
    }

    public get opacity(): number {
        return this._opacity;
    }


    public set opacity(v: number) {
        if (this._opacity === v) {
            return;
        }
        v = clamp(v, 0, 255);
        this._opacity = v;
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            if (item?.node?.isValid) {
                if (item.node instanceof Node) {
                    if (JSB) {
                        UIOpacity.setEntityLocalOpacityDirtyRecursively(item.node, true, 1, false) // 这里要注意最后一个参数
                    } else {
                        item.node._uiProps.localOpacity = v / 255;
                    }
                } else {
                    item.node.opacity = v;
                }
            }
        }
    }

    // extra
    public getComponentsInChildren<T extends Component>(typeOrClassName: string | __private.__types_globals__Constructor<T>): T[] {
        let components: T[] = [];
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            if (item && item.node) {
                let arr = item.node.getComponentsInChildren(typeOrClassName as string) as T[];
                components = components.concat(arr);
            }
        }
        return components;
    }

    //富文本用不了
    public color(v: Color, filter?: (node: Node) => boolean) {
        let cmps = this.getComponentsInChildren<UIRenderer>(UIRenderer);
        for (let i = 0; i < cmps.length; i++) {
            let cmp = cmps[i];
            if (filter && filter(cmp.node)) {
                continue;
            }
            cmp.color = v;
        }
    }
}