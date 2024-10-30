

import { EventTouch, Node, ScrollView, _decorator } from 'cc';
import NestableScrollViewOuter from './NestableScrollViewOuter';
const { ccclass, property, help, executionOrder, menu } = _decorator;



@ccclass
export default class NestableScrollViewInner extends ScrollView {

    // @property(NestableScrollViewOuter)
    // innerScrollArr: NestableScrollViewOuter[] = [];
    private m_OuterScrollView: NestableScrollViewOuter = null;

    // 设置外层的scrollview
    setOuterScrollView(outer) {
        this.m_OuterScrollView = outer;
    }

    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        var deltaMove = touch.getLocation().subtract(touch.getStartLocation());

        if (this.content) {
            if (!this.m_OuterScrollView || !this.m_OuterScrollView.isDifferentBetweenSettingAndPlan(this)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        if (deltaMove.length() > 7) {
            if (!this._touchMoved && event.target !== this.node) {
                var cancelEvent = new EventTouch(event.getTouches(), event.bubbles, Node.EventType.TOUCH_CANCEL);
                // cancelEvent.type = Node.EventType.TOUCH_CANCEL;
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                event.target.dispatchEvent(cancelEvent);
                this._touchMoved = true;
            }
        }
    }

}