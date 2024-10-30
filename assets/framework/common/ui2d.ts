/*
 * @Description: UI工具，减少3.0接口导致的冗余代码重复编写
 * @Author: zy
 * @Date: 2021-07-23 11:14:05
 * @Reference:
 */

import { Color, IVec3Like, Node, RenderableComponent, ScrollView, Size, UIOpacity, UIRenderer, UITransform, Vec2, Vec3, isValid } from "cc";
type LocalVec2Like = {
    x?: number,
    y?: number,
}

type LocalSizeLike = {
    width?: number,
    height?: number
}
class UI2d {
    /**
     * 增值节点坐标
     * @param node 节点
     * @param v2 坐标：{x?:number,y?:number}
     * @example 
     *      ui2d.pos(node,{x:1});
     *      ui2d.pos(node,{y:1});
     *      ui2d.pos(node,{x:1,y:1});
     */
    static addpos(node: Node, v2: LocalVec2Like): void;
    /**
     * 增值节点坐标
     * @param node 
     * @param x number
     * @param y number
     * @example 
     *      ui2d.pos(node,1,1);
     */
    static addpos(node: Node, x: number, y: number): void;
    static addpos(node: Node, p0: number | LocalVec2Like, p1?: number) {
        let position = node.getPosition();
        let _x, _y = p1;
        if (typeof p0 === 'object') {
            _x = p0.x;
            _y = p0.y;
        } else {
            _x = p0;
        }
        if (_x !== undefined) {
            position.x += _x;
        }
        if (_y !== undefined) {
            position.y += _y;
        }
        node.setPosition(position);
    };
    /**
     * 设置节点缩放
     * @param node 节点
     * @param v2 scale：{x?:number,y?:number}
     * @example 
     *      ui2d.scale(node,{x:1});
     *      ui2d.scale(node,{y:1});
     *      ui2d.scale(node,{x:1,y:1});
     */
    static scale(node: Node, v2: LocalVec2Like): void;
    /**
     * 设置节点缩放
     * @param node 节点
     * @param v2 scale：{x?:number,y?:number}
     * @example 
     *      ui2d.scale(node,1.5);
     */
    static scale(node: Node, v: number): void;
    /**
     * 设置节点坐标
     * @param node 
     * @param x number
     * @param y number
     * @example 
     *      ui2d.scale(node,1,1);
     */
    static scale(node: Node, x: number, y: number): void;
    static scale(node: Node, p0: number | LocalVec2Like, p1?: number) {
        let _scale = node.getScale();
        let _x, _y = p1;
        if (typeof p0 === 'object') {
            _x = p0.x;
            _y = p0.y;
        } else {
            _x = p0;
            if (_y === undefined) _y = _x;
        }
        if (_x !== undefined) {
            _scale.x = _x;
        }
        if (_y !== undefined) {
            _scale.y = _y;
        }
        node.setScale(_scale);
    };

    /**
     * 设置节点坐标
     * @param node 节点
     * @param v2 坐标：{x?:number,y?:number}
     * @example 
     *      ui2d.pos(node,{x:1});
     *      ui2d.pos(node,{y:1});
     *      ui2d.pos(node,{x:1,y:1});
     */
    static pos(node: Node, v2: LocalVec2Like): Vec3;
    /**
     * 设置节点坐标
     * @param node 
     * @param x number
     * @param y number
     * @example 
     *      ui2d.pos(node,1,1);
     */
    static pos(node: Node, x: number, y: number): Vec3;
    static pos(node: Node, p0: number | LocalVec2Like, p1?: number): Vec3 {
        let position = node.getPosition();
        let _x, _y = p1;
        if (typeof p0 === 'object') {
            _x = p0.x;
            _y = p0.y;
        } else {
            _x = p0;
        }
        if (_x !== undefined) {
            position.x = _x;
        }
        if (_y !== undefined) {
            position.y = _y;
        }
        node.setPosition(position);
        return position;
    };

    /**
     * 返回node的Size
     * @param node 
     * @example
     *      let size = ui2d.size(node);
     */
    static size(node: Node): Size | undefined;
    /**
     * 设置节点size
     * @param node 
     * @param size size：{width?number,height?:number}
     * @example
     *      ui2d.size(node,{width:1});
     *      ui2d.size(node,{height:1});
     *      ui2d.size(node,{width:1,height:1});
     */
    static size(node: Node, size: LocalSizeLike): void;
    /**
     * 设置节点size
     * @param node 
     * @param width number 宽
     * @param height number 高
     * @example 
     *      ui2d.size(node,1,1);
     */
    static size(node: Node, width: number, height: number): void;
    static size(node: Node, p0?: number | LocalSizeLike, p1?: number): Size | void {
        let transform = node.getComponent(UITransform);
        if (!transform) return;
        let _size: Size = transform.contentSize;
        if (p0 === undefined && p1 === undefined) return _size;
        _size = new Size(_size);
        let _width, _height = p1;
        if (typeof p0 === 'object') {
            _width = p0.width;
            _height = p0.height;
        } else {
            _width = p0;
        }
        if (_width !== undefined) {
            _size.width = _width;
        }
        if (_height !== undefined) {
            _size.height = _height;
        }
        transform.setContentSize(_size);
        return;
    }

    /**
     * 设置scrollview size
     * @param node 
     * @param size size：{width?number,height?:number}
     * @example
     *      ui2d.svSize(node,{width:1});
     *      ui2d.svSize(node,{height:1});
     *      ui2d.svSize(node,{width:1,height:1});
     */
    static svSize(node: Node, size: LocalSizeLike): void;
    /**
     * 设置scrollview size
     * @param node 
     * @param width number 宽
     * @param height number 高
     * @example 
     *      ui2d.svSize(node,1,1);
     */
    static svSize(node: Node, width: number, height: number): void;
    static svSize(node: Node, p0: number | LocalSizeLike, p1?: number): Size | void {
        let transform = node.getComponent(UITransform);
        if (!transform) return;
        let _size: Size = transform.contentSize;
        if (p0 === undefined && p1 === undefined) return _size;
        _size = new Size(_size);
        let _width, _height = p1;
        if (typeof p0 === 'object') {
            _width = p0.width;
            _height = p0.height;
        } else {
            _width = p0;
        }
        if (_width !== undefined) {
            _size.width = _width;
        }
        if (_height !== undefined) {
            _size.height = _height;
        }
        transform.setContentSize(_size);
        let sv = node.getComponent(ScrollView);
        if (sv && sv.view !== transform) {
            sv.view?.setContentSize(_size);
        }
        return;
    }

    /**
     * 返回节点锚点
     * @param node 
     * @example
     *      let anchor = ui2d.anchor(node);
     */
    static anchor(node: Node): Vec2 | undefined;
    /**
     * 设置节点锚点
     * @param node 
     * @param anchor anchor:{x?:number,y?:number}
     * @example
     *      ui2d.anchor(node,{x:0.5});
     *      ui2d.anchor(node,{y:0.5});
     *      ui2d.anchor(node,{x:0.5,y:0.5});
     */
    static anchor(node: Node, v2: LocalVec2Like): void;
    /**
     * 设置节点锚点
     * @param node 
     * @param anchor anchor:{x?:number,y?:number}
     * @example
     *      ui2d.anchor(node,0.5);
     */
    static anchor(node: Node, v: number): void;
    /**
     * 设置节点锚点
     * @param node 
     * @param x number
     * @param y number
     * @example
     *      ui2d.anchor(node,x,y);
     */
    static anchor(node: Node, x: number, y: number): void;
    static anchor(node: Node, p0?: number | LocalVec2Like, p1?: number): Vec2 | void {
        let transform = node._uiProps.uiTransformComp;
        if (!transform) return;
        let _anchor = transform.anchorPoint;
        if (p0 === undefined && p1 === undefined) return _anchor;
        let _x, _y = p1;
        if (typeof p0 === 'object') {
            _x = p0.x;
            _y = p0.y;
        } else {
            _x = p0;
            if (_y === undefined) _y = _x;
        }

        if (_x !== undefined && _y === undefined) {
            transform.anchorX = _x;
        } else if (_y !== undefined && _x === undefined) {
            transform.anchorY = _y;
        } else {
            transform.anchorPoint = new Vec2(_x, _y);
        }
    }

    static priority(node: Node): number;
    static priority(node: Node, priority: number): void;
    static priority(node: Node, priority?: number) {
        let transform = node.getComponent(UITransform);
        if (!transform) {
            return;
        }
        if (priority === undefined) {
            return transform.priority;
        }
        transform.priority = priority;
        if (node.parent) {
            let func = (UITransform as any).insertChangeMap;
            func.call(UITransform, node.parent);
        }
    }

    static visible(node: Node, v: boolean) {
        const _renderComps = node!.getComponentsInChildren(RenderableComponent);
        for (let i = 0; i < _renderComps.length; ++i) {
            const render = _renderComps[i];
            render.enabled = v;
        }
    }

    /**
     * 设置节点欧拉角
     * @param node 节点
     * @param v2 坐标：{x?:number,y?:number,z?:number}
     * @example 
     *      ui2d.euler(node,{x:1});
     *      ui2d.euler(node,{x:1,y:1});
     *      ui2d.euler(node,{x:1,y:1,z:1});
     */
    static euler(node: Node, v2: Partial<IVec3Like>): Vec3;
    /**
     * 设置节点欧拉角
     * @param node 
     * @param x number
     * @param y number
     * @example 
     *      ui2d.euler(node,1,1);
     */
    static euler(node: Node, x: number, y: number): Vec3;
    static euler(node: Node, p0: number | Partial<IVec3Like>, p1?: number, p2?: number): Vec3 {
        let euler = node.eulerAngles.clone();
        let _x, _y = p1, _z = p2;
        if (typeof p0 === 'object') {
            _x = p0.x;
            _y = p0.y;
            _z = p0.z;
        } else {
            _x = p0;
        }
        if (_x !== undefined) {
            euler.x = _x;
        }
        if (_y !== undefined) {
            euler.y = _y;
        }
        if (_z !== undefined) {
            euler.z = _z;
        }
        node.setRotationFromEuler(euler);
        return euler;
    };

    /**
     * 设置节点透明度
     * @param node 
     * @param alpha 透明度 
     * @example 
     *      ui2d.opacity(node,255);
     */
    static opacity(node: Node, alpha: number): void {
        if (!isValid(node, true)) return;
        let render = node.getComponent(UIRenderer) as UIRenderer;
        if (render) {
            if (!render || !render.isValid) return;
            let color = new Color(render.color);
            color.a = alpha;
            render.color = color;
        } else {
            let cmp = node.getComponent(UIOpacity) || node.addComponent(UIOpacity);
            if (!cmp || !cmp.isValid) return;
            cmp.opacity = alpha;
        }
    };

    static children(parent: Node): Node[];
    static children(parent: Node, idx: number): Node | undefined;
    static children(parent: Node, idx?: number): Node[] | Node | undefined {
        let children_ = parent.children || [];
        if (idx !== undefined) {
            for (let index = 0; index < children_.length; index++) {
                const child = children_[index];
                if (child.name === 'MASK_NODE') {
                    continue;
                }
                if (idx === 0) {
                    return child;
                }
                idx--;
            }
            return undefined;
        } else {
            let childs: Node[] = [];
            for (let index = 0; index < children_.length; index++) {
                const child = children_[index];
                if (child.name === 'MASK_NODE') {
                    continue;
                }
                childs.push(child);
            }
            return childs;
        }
    }
}

export const ui2d = UI2d;