/*
 * @Description: 贝塞尔 tween
 * @Author: zy
 * @Date: 2024-03-06 15:32:56
 * @Reference: 
 */

import { bezier, Color, ISizeLike, ITweenOption, Node, Size, tween, Tween, UIOpacity, UIRenderer, Vec3 } from "cc";
import { TileNode } from "../ui/helper/tilenode";
export class ETw {
    static bezierTo(one: Tween<Node> | Node, duration: number, c1: Vec3, c2: Vec3, to: Vec3, opts?: ITweenOption) {
        let tw: Tween<Node>;
        if (one instanceof Node) {
            tw = tween(one);
        } else {
            tw = one;
        }
        let nc0 = [c1.x, c1.y, c1.z];
        let nc1 = [c2.x, c2.y, c2.z];

        opts = opts || {};
        let index = 0;
        opts.progress = function (start: any, end: any, current: any, t) {
            current = bezier(start, nc0[index], nc1[index], end, t);
            index = (index + 1) % 3;
            //current.x = bezier(start.x, c0x, c1x, end.x, t);
            //current.y = bezier(start.y, c0y, c1y, end.y, t);
            return current;
        };
        return tw.to(duration, { position: to }, opts);
    }

    private static _fadeByOpacity(obj: { opacity: number, isValid: boolean }, duration: number, from: number, to?: number, delay?: number | ITweenOption, opts?: ITweenOption) {
        if (!obj || !obj.isValid) return;
        if (typeof delay === 'object') {
            opts = delay;
            delay = 0;
        } else {
            delay = delay || 0;
            opts = opts || {} as ITweenOption;
        }
        if (!obj || !obj.isValid) return;
        Tween.stopAllByTarget(obj);
        obj.opacity = from;
        if (duration === 0 || to === undefined || from === to) {
            return;
        }
        let tw = tween(obj);
        if (delay) {
            tw = tw.delay(delay);
        }
        return tw.to(duration, { opacity: to }, opts);
    }

    private static _fadeByColor(cmp: UIRenderer | null, duration: number, from: number, to?: number, delay?: number | ITweenOption, opts?: ITweenOption) {
        if (!cmp || !cmp.isValid) return;
        cmp.color = new Color(cmp.color.r, cmp.color.g, cmp.color.b, from);
        Tween.stopAllByTarget(cmp.color);
        if (duration === 0 || to === undefined || from === to) {
            return;
        }
        if (typeof delay === 'object') {
            opts = delay;
            delay = 0;
        } else {
            delay = delay || 0;
            opts = opts || {} as ITweenOption;
        }
        let tw = tween(cmp.color);
        if (delay) {
            tw = tw.delay(delay);
        }
        opts.onUpdate = function (obj?: any, ratio?: number) {
            //@ts-ignore
            if (cmp!.isValid && obj && cmp._assembler?.updateColor) {
                //@ts-ignore
                cmp!._updateColor();
            }
        }
        return tw.to(duration, { a: to }, opts);
    }

    static fadeTo(obj: UIRenderer | Node | TileNode, duration: number, from: number, to?: number, delay?: number | ITweenOption, opts?: ITweenOption) {
        if (!obj || !obj.isValid) return;
        let cmp: UIRenderer | null = null;
        if (obj instanceof Node) {
            let uiOpacity = obj.getComponent(UIOpacity) || obj.addComponent(UIOpacity);
            return this._fadeByOpacity(uiOpacity, duration, from, to, delay, opts);
        } else if (obj instanceof TileNode) {
            return this._fadeByOpacity(obj, duration, from, to, delay, opts);
        } else {
            cmp = obj;
        }
        return this._fadeByColor(cmp, duration, from, to, delay, opts);
    }


    static fadeByRender(obj: UIRenderer | Node, duration: number, from: number, to?: number, delay?: number | ITweenOption, opts?: ITweenOption) {
        if (!obj || !obj.isValid) return;
        let cmp: UIRenderer | null = null;
        if (obj instanceof Node) {
            let renders = obj.getComponentsInChildren(UIRenderer);
            let tws: Tween<Color>[] = [];
            for (let index = 0; index < renders.length; index++) {
                const render = renders[index];
                let tw = this._fadeByColor(render, duration, from, to, delay, opts);
                tw && tws.push(tw);
            }
            let tw = tws.pop();
            tws.forEach(v => v.start());
            return tw;
        } else {
            cmp = obj;
        }
        return this._fadeByColor(cmp, duration, from, to, delay, opts);
    }

    static sizeTo(node: Node, duration: number, from: Partial<ISizeLike>, to: Partial<ISizeLike>, delay?: number | ITweenOption, opts?: ITweenOption) {
        if (!node || !node.isValid) {
            return;
        }
        let cmp = node._uiProps.uiTransformComp;
        if (!cmp) return;
        if (typeof delay === 'object') {
            opts = delay;
            delay = 0;
        } else {
            delay = delay || 0;
            opts = opts || {} as ITweenOption;
        }
        if (from.width === undefined) {
            from.width = cmp.width;
        }
        if (to.width === undefined) {
            to.width = cmp.width;
        }
        if (from.height === undefined) {
            from.height = cmp.height;
        }
        if (to.height === undefined) {
            to.height = cmp.height;
        }
        Tween.stopAllByTarget(cmp);
        cmp!.setContentSize(from.width, from.height);
        if (from.width === to.width && from.height === to.height) {
            return;
        }
        let tw = tween(cmp);
        if (delay) {
            tw = tw.delay(delay);
        }
        return tw.to(duration, { contentSize: new Size(to.width, to.height) }, opts);
    }
}