import { Component, UITransform, _decorator, sys, view } from "cc";

const { ccclass, property, menu } = _decorator;
@ccclass('AdaptHeight')
@menu('UI/AdaptHeight')
export class adaptHeight extends Component {
    onLoad() {
        this.adaptUI()
    }

    // 适配
    private adaptUI() {
        let safeSize = sys.getSafeAreaRect()

        let resolusitonSize = view.getDesignResolutionSize();
        let height = 0;
        if (resolusitonSize.width > resolusitonSize.height) {
            height = Math.min(safeSize.width, safeSize.height)
        } else {
            height = Math.max(safeSize.width, safeSize.height)
        }
        let diffH = height - resolusitonSize.height;
        const sv_tf = this.node.getComponent(UITransform)!;
        sv_tf.setContentSize(sv_tf.width, sv_tf.height + diffH);
        if (this.node.getChildByName("View")) {
            this.node.getChildByName("View").getComponent(UITransform).setContentSize(sv_tf.width, sv_tf.height);
        }
    }
}