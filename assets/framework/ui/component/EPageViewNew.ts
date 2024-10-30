

import { Event, EventTouch, Node, PageView, ScrollView, Vec2, _decorator } from 'cc';
import NestableScrollViewInner from './NestableScrollViewInner';
const { ccclass, property, help, executionOrder, menu } = _decorator;



const _tempVec2 = new Vec2();

const getTimeInMilliseconds = (): number => {
    const currentTime = new Date();
    return currentTime.getMilliseconds();
};

@ccclass('EPageViewNew')
export default class EPageViewNew extends PageView {

    private m_PlanDir = null;
    private m_ScrollingInnerSv = null;
    _touchPassNode = ['pfSlideBannerPage', 'ShowVipArea', 'sv', "PageView", "HttpRTSprite", "dividerImg", 'bgImg']

    @property(NestableScrollViewInner)
    innerScrollArr: NestableScrollViewInner[] = [];

    onLoad() {
        super.onLoad();
        this.m_PlanDir = null;
        this.innerScrollArr.forEach(element => {
            element.setOuterScrollView(this);
        });
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
        //重置计划方向
        this.m_PlanDir = null;
        this.m_ScrollingInnerSv = null;
        super._onTouchBegan(event, captureListeners);
    }

    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void {
        //console.log("EPageViewNew _onTouchMoved")
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        console.log("event.target:" + event.target.name)

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

        if (event.target && this._touchPassNode.includes(event.target.name)) {
            return
        }

        if (event.target && event.target.name == 'TouchNode' && deltaMove.y > 10) {
            return;
        }

        if (event.target && event.target.name == 'BlockEvent') {
            return;
        }

        if (this.content) {
            if (!this.isDifferentBetweenSettingAndPlan(this)) {
                this._touchMoved = true;
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

    protected _handleReleaseLogic(): void {
        if (!this._touchMoved) {
            this._scrolling = false;
            this._autoScrollToPage();
            return;
        }
        super._handleReleaseLogic();
    }

    private _isRestore: boolean = false;
    protected _handlePressLogic(): void {
        this._isRestore = this._autoScrolling;
        this._autoScrolling = false;
        this._isBouncing = false;

        this._touchMovePreviousTimestamp = getTimeInMilliseconds();
        this._touchMoveDisplacements.length = 0;
        this._touchMoveTimeDeltas.length = 0;

        this._onScrollBarTouchBegan();
    }

    protected _onTouchEnded(event: EventTouch, captureListeners: any): void {
        if (!this._touchMoved && !this._isRestore) {
            Vec2.set(this._touchEndPosition, this._touchBeganPosition.x, this._touchBeganPosition.y);
        } else {
            event.touch!.getUILocation(_tempVec2);
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
        }
        //@ts-ignore
        ScrollView.prototype._onTouchEnded.call(this, event, captureListeners)
        this._isRestore = false;
    }

    protected _onTouchCancelled(event: EventTouch, captureListeners: any): void {
        if (!this._touchMoved && !this._isRestore) {
            Vec2.set(this._touchEndPosition, this._touchBeganPosition.x, this._touchBeganPosition.y);
        } else {
            event.touch!.getUILocation(_tempVec2);
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
        }
        //@ts-ignore
        ScrollView.prototype._onTouchCancelled.call(this, event, captureListeners)
        this._isRestore = false;
        // if (!this._touchMoved) {
        //     return;
        // }
        // super._onTouchCancelled(event, captureListeners);
    }
} 