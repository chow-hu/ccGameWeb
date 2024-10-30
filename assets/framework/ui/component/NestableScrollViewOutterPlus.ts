

import { Event, EventTouch, Node, Rect, ScrollView, UITransform, Vec2, _decorator, math } from 'cc';
const { ccclass, property, help, executionOrder, menu } = _decorator;



@ccclass('NestableScrollViewOutterPlus')
export default class NestableScrollViewOutterPlus extends ScrollView {
    private _isFocus: boolean = false;
    public get isFocus(): boolean {
        return this._isFocus;
    }
    public set isFocus(value: boolean) {
        this._isFocus = value;
    }

    private innerScrView: ScrollView = null;
    private innerNode: Node = null;

    @property([ScrollView])
    innerScrollArr: ScrollView[] = [];

    @property([Node])
    innerNodeArr: Node[] = [];

    protected _hasNestedViewGroup(event: Event, captureListeners?: Node[]): boolean {
        if (event.eventPhase !== Event.CAPTURING_PHASE) return;
        //不阻止out上onTouch事件执行。
        return false;
    }

    protected calStart(event: EventTouch) {
        for (let i = 0; i < this.innerScrollArr.length; i++) {
            let inner = this.innerScrollArr[i];
            let size = inner.node.getComponent(UITransform).contentSize;
            let postion = inner.node.worldPosition;
            let rect = new Rect(postion.x - size.width / 2, postion.y - size.height / 2, size.width, size.height);
            if (inner.node.activeInHierarchy && rect.contains(event.getUILocation())) {
                // if (inner.node.active && inner.node.getComponent(UITransform).getBoundingBoxToWorld().contains(event.getLocation())) {
                this.innerScrView = inner;
                return;
            }
        }

        this.innerScrView = null;
    }

    protected calNodeStart(event: EventTouch) {
        for (let i = 0; i < this.innerNodeArr.length; i++) {
            let innerNode = this.innerNodeArr[i];
            let size = innerNode.getComponent(UITransform).contentSize;
            let anchor = innerNode.getComponent(UITransform).anchorPoint;
            let postion = innerNode.worldPosition;
            let rect = new Rect(postion.x - size.width * anchor.x, postion.y - size.height * anchor.y, size.width, size.height);
            if (innerNode.activeInHierarchy && rect.contains(event.getUILocation())) {
                this.innerNode = innerNode;
                return;
            }
        }

        this.innerNode = null;
    }

    protected _onTouchBegan(event: EventTouch, captureListeners?: Node[]): void {
        this.calStart(event);
        this.calNodeStart(event);
        super._onTouchBegan(event, captureListeners);
    }

    focus(deltaMove: math.Vec2) {
        if (this.innerScrView) {
            if (deltaMove.y > 0 && Math.ceil(this.innerScrView.getScrollOffset().y) >= Math.ceil(this.innerScrView.getMaxScrollOffset().y)) {
                this.innerScrView.scrollToOffset(this.innerScrView.getMaxScrollOffset());
                return true;
            } else if (deltaMove.y < 0 && Math.floor(this.innerScrView.getScrollOffset().y) <= 0) {
                this.innerScrView.scrollToOffset(Vec2.ZERO);
                return true;
            }
        }
        if (this.innerNode) {
            return false;
        }
        return false;
    }

    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        var deltaMove = touch.getLocation().subtract(touch.getStartLocation());

        if (this.content) {
            if ((!this.innerNode && !this.innerScrView) || this.focus(deltaMove)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        if (!this.innerScrView && deltaMove.length() > 7) {
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