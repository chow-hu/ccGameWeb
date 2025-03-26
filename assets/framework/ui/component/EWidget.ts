import { _decorator, CCBoolean, Node, Widget } from "cc";

const { ccclass, property } = _decorator;
@ccclass
export class EWidget extends Widget {

    @property(CCBoolean)
    private targetSizeChanged: boolean = true;

    protected onLoad(): void {
        if (this.targetSizeChanged) {
            let t = this.target ?? this.node.parent;
            if (t) {
                t.on(Node.EventType.SIZE_CHANGED, this.onTargetSizeChanged, this);
            }
        }
        super.onLoad && super.onLoad();
    }

    protected onTargetSizeChanged() {
        // this.updateAlignment();
        this.setDirty();
    }
}

