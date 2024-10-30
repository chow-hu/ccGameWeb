/*
 * @Description: 
 * @Author: zy
 * @Date: 2023-12-02 14:34:32
 * @Reference: 
 */

import { _decorator, Enum, Widget, Component } from 'cc';
const { ccclass, property, menu } = _decorator;
const EAlignType = Enum({
    ALIGN: 0,
    ADD: 1,
    WIDGET: 2,
    MAX_ALIGN: 3
})
@ccclass('ETopFixedState')
@menu('UI/ETopFixedState')
export class ETopFixedState extends Component {
    @property({ type: EAlignType, tooltip: 'ALIGN:自动贴靠;\nMAX_ALIGN:top比当前大才贴靠\nADD:top增值;\nWIDGET:贴靠到指定widget' })
    public alignType = EAlignType.ALIGN;

    @property({
        visible: function (this: ETopFixedState) {
            return this.alignType === EAlignType.ALIGN;
        }
    }) public alignOffset = 0;

    @property({
        type: Widget,
        visible: function (this: ETopFixedState) {
            return this.alignType === EAlignType.WIDGET;
        }
    })
    public fixed!: Widget;
    private _normal!: Widget;

    onLoad() {
        if (!this._normal) {
            let cmp = this.node.getComponent(Widget);
            if (cmp) {
                this._normal = cmp;
            } else {
                return;
            }
        }
        if (!globalThis.uiTopFixed()) {
            return
        }
        if (this.alignType === EAlignType.WIDGET) {
            this._fixByWidget();
        } else {
            this._fixByNormal();
        }
    }

    private _fixByWidget() {
        if (!this.fixed) return;
        this._normal.alignFlags = this.fixed.alignFlags;
        this._normal.top = this.fixed.top;
        this._normal.bottom = this.fixed.bottom;
        this._normal.left = this.fixed.left;
        this._normal.right = this.fixed.right;
    }

    private _fixByNormal() {
        if (this.alignType == EAlignType.ALIGN) {
            this._normal.top = globalThis.uiTopFixedHeight() + this.alignOffset;
        } else if (this.alignType == EAlignType.MAX_ALIGN) {
            this._normal.top = Math.max(globalThis.uiTopFixedHeight(), this._normal.top);
        } else if (this.alignType == EAlignType.ADD) {
            this._normal.top = globalThis.uiTopFixedHeight() + this._normal.top;
        }
    }
}