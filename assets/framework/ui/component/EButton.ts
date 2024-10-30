/*
 * @Description: EButton 拓展圆形及多边形点击
 * @Author: zy
 * @Date: 2021-06-23 18:19:54
 * @Reference: 
 */

import { _decorator, Node, Button, Vec3, Vec2, Graphics, UITransform, Layers, Color, EventTouch, IVec2Like, Enum, EventMouse } from 'cc';
const { ccclass, property, help, executionOrder, menu } = _decorator;
const EButtonType = Enum({
    BOX: 0,
    POLY: 1,
    CIRCLE: 2
})
@ccclass('EButton')
@help('i18n:cc.Button')
@executionOrder(110)
@menu('UI/EButton')
export class EButton extends Button {

    @property
    private _hitType = EButtonType.BOX;

    @property({
        type: EButtonType,
        tooltip: 'BOX:BoundingBox;\nPOLY:多边形;\nCIRCLE:圆形;',
    })
    public get hitType() {
        return this._hitType;
    }
    public set hitType(v: number) {
        this._hitType = v;
        this._drawLines();
    }



    @property([Vec2])
    _vecs: Vec2[] = [];

    @property({
        type: [Vec2],
        tooltip: '检查顶点',
        visible: function (this: EButton) {
            return this.hitType === EButtonType.POLY;
        }
    })
    public set vecs(v: Vec2[]) {
        this._vecs = v;
        this._drawLines();
    }
    public get vecs(): Vec2[] {
        return this._vecs;
    }

    @property
    private _origin: Vec2 = new Vec2;

    @property({
        type: Vec2,
        tooltip: '原点',
        visible: function (this: EButton) {
            return this.hitType === EButtonType.CIRCLE;
        }
    })
    public get origin(): Vec2 {
        return this._origin;
    }
    public set origin(v: Vec2) {
        this._origin = v;
        this._drawLines();
    }

    @property
    private _brush: boolean = false;

    @property({
        tooltip: '原点',
        visible: function (this: EButton) {
            return this.hitType === EButtonType.POLY;
        }
    })
    public get brush(): boolean {
        return this._brush;
    }
    public set brush(v: boolean) {
        if (v) {
            this._autoVecs();
        }
        this._brush = false;
    }

    @property
    _radius = 10;

    @property({
        tooltip: '半径',
        visible: function (this: EButton) {
            return this.hitType === EButtonType.CIRCLE;
        }
    })
    public get radius(): number {
        return this._radius;
    }
    public set radius(v: number) {
        this._radius = v;
        this._drawLines();
    }

    @property
    private _debugDraw: boolean = false;

    @property({ tooltip: "点击范围调试" })
    public set debugDraw(v: boolean) {
        this._debugDraw = v;
        this._drawLines();
    }
    public get debugDraw(): boolean {
        return this._debugDraw;
    }


    start() {
        // [3]
        this._drawLines();
    }

    protected _registerNodeEvent() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);

        this.node.on(Node.EventType.MOUSE_ENTER, this._onMouseMoveIn, this);
        this.node.on(Node.EventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
    }

    _drawLines() {
        let node = this.node.getChildByName('Debug_Graphics');
        if (!this._debugDraw) {
            node && node.destroy();
            return;
        }
        if (!node) {
            node = new Node('Debug_Graphics');
            node.layer = Layers.Enum.UI_2D;
            let transform = node.addComponent(UITransform);
            let grap = node.addComponent(Graphics);
            grap.lineCap = Graphics.LineCap.BUTT
            grap.lineWidth = 5;
            grap.strokeColor = Color.RED;
            let trans0 = this.node.getComponent(UITransform)!;
            transform.setAnchorPoint(trans0.anchorPoint);
            node.parent = this.node;
        }
        let cmp = node.getComponent(Graphics)!;
        cmp.clear();
        if (this.hitType === EButtonType.CIRCLE) {
            cmp.circle(this.origin.x, this.origin.y, this.radius);
        } else {
            let vec: IVec2Like[] = this._vecs;
            if (this.hitType === EButtonType.BOX) {
                vec = [];
                let transform = this.node.getComponent(UITransform)!;
                vec.push({ x: - transform.anchorX * transform.width, y: - transform.anchorY * transform.height });//左下
                vec.push({ x: (1 - transform.anchorX) * transform.width, y: - transform.anchorY * transform.height });//右下
                vec.push({ x: (1 - transform.anchorX) * transform.width, y: (1 - transform.anchorY) * transform.height });//右上
                vec.push({ x: - transform.anchorX * transform.width, y: (1 - transform.anchorY) * transform.height });//左上
            }
            if (vec.length > 0) {
                cmp.moveTo(vec[0].x, vec[0].y);
            }
            for (let index = 1; index < vec.length; index++) {
                const vec0 = vec[index];
                cmp.lineTo(vec0.x, vec0.y);
            }
            if (vec.length > 2) {
                cmp.lineTo(vec[0].x, vec[0].y);
            }
        }
        cmp.stroke();
    }

    private _autoVecs() {
        let children = this.node.children;
        let vecs: Vec2[] = [];
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            if (child.name.startsWith('SpriteSplash')) {
                let pos = child.getPosition();
                vecs.push(new Vec2(Math.round(pos.x), Math.round(pos.y)))
            }
        }
        this._vecs = vecs;
    }

    protected _onTouchBegan(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) { return; }
        if (this.hitType === EButtonType.BOX) {
            super._onTouchBegan(event);
            return;
        }
        if (!event) return;
        if (!this._touchCheck(event)) {
            event.preventSwallow = true;
        }
    }

    protected _onTouchEnded(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) {
            return;
        }
        if (!(this as any)._pressed) {
            if (event) event.preventSwallow = true;
            return;
        }
        super._onTouchEnded(event);
    }

    protected _onTouchCancel(event?: EventTouch) {
        if (event) event.preventSwallow = true;
        super._onTouchCancel(event);
    }

    protected _onMouseMoveIn(event?: EventMouse) {
        if (event) event.preventSwallow = true;
        super._onMouseMoveIn(event);
    }

    protected _onMouseMoveOut(event?: EventMouse) {
        if (event) event.preventSwallow = true;
        super._onMouseMoveOut(event);
    }


    private _touchCheck(event: EventTouch) {
        let touchPos = new Vec3(event.getUILocation().x, event.getUILocation().y);
        let transform = this.node.getComponent(UITransform)!;
        touchPos = transform.convertToNodeSpaceAR(touchPos);
        if (this.hitType === EButtonType.POLY) {
            if (this.vecs.length > 2 && !this._pnpoly(touchPos, this.vecs)) return false;
        } else if (this.hitType === EButtonType.CIRCLE) {
            if (Vec2.len({ x: this.origin.x - touchPos.x, y: this.origin.y - touchPos.y }) > this.radius) return false;
        }
        super._onTouchBegan(event);
        return true;
    }

    private _pnpoly(target: IVec2Like, vecs: IVec2Like[]): boolean {
        let i, j, c = false;
        for (i = 0, j = vecs.length - 1; i < vecs.length; j = i++) {
            if (((vecs[i].y > target.y) != (vecs[j].y > target.y)) &&
                (target.x < (vecs[j].x - vecs[i].x) * (target.y - vecs[i].y) / (vecs[j].y - vecs[i].y) + vecs[i].x))
                c = !c;
        }
        return c;
    }
}
