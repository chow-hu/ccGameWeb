/*
 * @Description: 元数据的vec2处理
 * @Author: zy
 * @Date: 2021-06-02 10:47:58
 * @Reference:
 */

export interface EVec2Like {
    x: number;
    y: number;
}

export class EVec2 {
    static equal(vec1: EVec2Like, vec2: EVec2Like) {
        return vec1.x === vec2.x && vec1.y === vec2.y;
    }
    static distance(vec1: EVec2Like, vec2: EVec2Like): number {
        return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
    }
    static len(vec1: EVec2Like): number {
        return Math.sqrt(Math.pow(vec1.x, 2) + Math.pow(vec1.y, 2));
    }
    static sub(vec1: EVec2Like, vec2: EVec2Like): EVec2Like {
        return { x: vec1.x - vec2.x, y: vec1.y - vec2.y };
    }

    static add(vec1: EVec2Like, vec2: EVec2Like): EVec2Like {
        return { x: vec1.x + vec2.x, y: vec1.y + vec2.y };
    }

    static round(vec1: EVec2Like, vec2: EVec2Like, range: number): boolean {
        let distance = this.distance(vec1, vec2);
        return distance <= range;
    }

    public static multiply(vec1: EVec2Like, vec2: EVec2Like) {
        return { x: vec1.x * vec2.x, y: vec1.y * vec2.y };
    }

    public static multiplyScalar(vec1: EVec2Like, v: number) {
        return { x: vec1.x * v, y: vec1.y * v };
    }
}