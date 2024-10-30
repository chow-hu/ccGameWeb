

import { Event, EventTouch, Node, ScrollView, _decorator } from 'cc';
import NestableScrollViewInner from './NestableScrollViewInner';
const { ccclass, property, help, executionOrder, menu } = _decorator;



@ccclass('NestableScrollViewOuter')
export default class NestableScrollViewOuter extends ScrollView {

    private m_PlanDir = null;
    private m_ScrollingInnerSv = null;

    // @property(NestableScrollViewInner)
    innerScrollArr: NestableScrollViewInner[] = [];

    onLoad() {
        this.m_PlanDir = null;
        // this.innerScrollArr.forEach(element => {
        //     element.setOuterScrollView(this);
        // });

    }

    _isHisChild(child, undeterminedParent) {
        if (child == undeterminedParent) {
            return true;
        }
        if (child.parent != null) {
            if (child.parent == undeterminedParent) {
                return true;
            } else {
                return this._isHisChild(child.parent, undeterminedParent);
            }
        }
        return false;
    }

    _findScrollingInnerSv(target) {
        for (let i = 0; i < this.innerScrollArr.length; i++) {
            let isHisChild = this._isHisChild(target, this.innerScrollArr[i].node);
            if (isHisChild) {
                return this.innerScrollArr[i];
            }
        }
        return null;
    }

    isDifferentBetweenSettingAndPlan(sv) {
        if (this.m_PlanDir == 0) {
            return false;
        }
        if (this.m_PlanDir == 1 && sv.horizontal) {
            return false;
        }
        if (this.m_PlanDir == -1 && sv.vertical) {
            return false;
        }
        return true;
    }

    protected _hasNestedViewGroup(event: Event, captureListeners?: Node[]): boolean {
        if (event.eventPhase !== Event.CAPTURING_PHASE) return;
        //不阻止out上onTouch事件执行。
        return false;
    }



    protected _onTouchBegan(event: EventTouch, captureListeners?: Node[]): void {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        //重置计划方向
        this.m_PlanDir = null;
        this.m_ScrollingInnerSv = null;

        var touch = event.touch;
        if (this.content) {
            this._handlePressLogic();
        }
        this._touchMoved = false;
        this._stopPropagationIfTargetIsMe(event);
    }

    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;


        var touch = event.touch;
        var deltaMove = touch.getLocation().subtract(touch.getStartLocation());

        if (this.m_PlanDir == null && deltaMove.length() > 7) {
            this.m_ScrollingInnerSv = this._findScrollingInnerSv(event.target);
            if (this.m_ScrollingInnerSv != null) {
                let contentSize = this.m_ScrollingInnerSv.content.getContentSize();
                let scrollViewSize = this.m_ScrollingInnerSv.node.getContentSize();
                if ((this.m_ScrollingInnerSv.vertical && (contentSize.height >= scrollViewSize.height)) || (this.m_ScrollingInnerSv.horizontal && (contentSize.width >= scrollViewSize.width))) {
                    this.m_PlanDir = Math.abs(deltaMove.x) > Math.abs(deltaMove.y) ? 1 : -1;
                } else {
                    this.m_PlanDir = 0;
                }
            } else {
                this.m_PlanDir = 0;
            }
        }

        if (this.content) {
            if (!this.isDifferentBetweenSettingAndPlan(this)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        if (this.m_ScrollingInnerSv == null) {
            if (deltaMove.length() > 7) {
                if (!this._touchMoved && event.target !== this.node) {
                    var cancelEvent = new EventTouch(event.getTouches(), event.bubbles, Node.EventType.TOUCH_CANCEL);
                    // var cancelEvent = new Event.EventTouch(event.getTouches(), event.bubbles);
                    // cancelEvent.type = Node.EventType.TOUCH_CANCEL;
                    cancelEvent.touch = event.touch;
                    cancelEvent.simulate = true;
                    event.target.dispatchEvent(cancelEvent);
                    this._touchMoved = true;
                }
            }
            this._stopPropagationIfTargetIsMe(event);
        }
    }

    setInnerScrollViewArr() {
        if (this.content) {
            this.innerScrollArr = [];
            var children = this.content.children;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var a = child.getComponent(NestableScrollViewInner)
                if (a && this.innerScrollArr.indexOf(a) == -1) {
                    this.innerScrollArr.push(a);
                    a.setOuterScrollView(this);
                }
            }
        }
    }
} 