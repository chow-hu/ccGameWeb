/*
 * @Description: 元数据的rect处理
 * @Author: zy
 * @Date: 2021-06-02 10:47:58
 * @Reference:
 */

import { EVec2Like } from "./EVec";

export interface ERectLike {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class ERect {
    static contains(rect: ERectLike, point: EVec2Like) {
        return (rect.x <= point.x
            && rect.x + rect.width >= point.x
            && rect.y <= point.y
            && rect.y + rect.height >= point.y);
    }

    static intersects(rect: ERectLike, other: ERectLike) {
        const maxax = rect.x + rect.width;
        const maxay = rect.y + rect.height;
        const maxbx = other.x + other.width;
        const maxby = other.y + other.height;
        return !(maxax < other.x || maxbx < rect.x || maxay < other.y || maxby < rect.y);
    }

    static intersection(one: ERectLike, other: ERectLike) {
        const axMin = one.x;
        const ayMin = one.y;
        const axMax = one.x + one.width;
        const ayMax = one.y + one.height;
        const bxMin = other.x;
        const byMin = other.y;
        const bxMax = other.x + other.width;
        const byMax = other.y + other.height;
        let out = { x: 0, y: 0, width: 0, height: 0 }
        out.x = Math.max(axMin, bxMin);
        out.y = Math.max(ayMin, byMin);
        out.width = Math.min(axMax, bxMax) - out.x;
        out.height = Math.min(ayMax, byMax) - out.y;

        return out;
    }

    static leftof(rect: ERectLike, point: { x: number, y: number }): boolean {
        return rect.x + rect.width < point.x;
    };

    static rightof(rect: ERectLike, point: { x: number, y: number }): boolean {
        return rect.x > point.x;
    };

    static topof(rect: ERectLike, point: { x: number, y: number }): boolean {
        return rect.y > point.y;
    };

    static btmof(rect: ERectLike, point: { x: number, y: number }): boolean {
        return rect.y + rect.height < point.y;
    };
}