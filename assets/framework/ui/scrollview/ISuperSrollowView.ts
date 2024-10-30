import { _decorator, ScrollView, Vec2, Vec3 } from "cc";
const { ccclass, property, menu } = _decorator;

@ccclass('SuperScrollView')
export class ISuperSrollowView extends ScrollView {
    public canTouchMove: boolean = true;
    @property({ override: true })
    pullRefresh: boolean = false;

    prevLocation: Vec2 = new Vec2();

    location: Vec2 = new Vec2();

    public release() {

    }

    savePageIndex(idx: number) {
        return true
    }

    scrollToAny(moveDelta: Vec3, timeInSecond?: number, attenuated: boolean = true) {

    }

    startAutoScroll() {
    }
}