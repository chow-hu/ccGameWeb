/*
 * @Description: ETileButton 平铺节点按钮
 * @Author: zy
 * @Date: 2021-06-23 18:19:54
 * @Reference: 
 */

import { _decorator, Component, Node, Vec3, Color, EventTouch, EventHandler, SpriteFrame, Sprite, ccenum, lerp, UIRenderer, EventMouse } from 'cc';
import { EDITOR } from 'cc/env';
import { TileNode } from '../helper/tilenode';
const { ccclass, property, help, executionOrder, menu } = _decorator;

const _tempColor = new Color();

/**
 * @en Enum for transition type.
 *
 * @zh 过渡类型。
 */
enum Transition {
    /**
     * @en The none type.
     *
     * @zh 不做任何过渡。
     */
    NONE = 0,

    /**
     * @en The color type.
     *
     * @zh 颜色过渡。
     */
    COLOR = 1,

    /**
     * @en The sprite type.
     *
     * @zh 精灵过渡。
     */
    SPRITE = 2,
    /**
     * @en The scale type.
     *
     * @zh 缩放过渡。
     */
    SCALE = 3,
}

ccenum(Transition);

enum State {
    NORMAL = 'normal',
    HOVER = 'hover',
    PRESSED = 'pressed',
    DISABLED = 'disabled',
}

/**
 * @en The event types of [[Button]]. All button events are distributed by the owner Node, not the component
 * @zh [[Button]] 的事件类型，注意：事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
 */
export enum EventType {
    /**
     * @event click
     * @param {Event.EventCustom} event
     * @param {Button} button - The Button component.
     */
    CLICK = 'click',
}

@ccclass('ETileButton')
@help('i18n:cc.Button')
@executionOrder(110)
@menu('UI/ETileButton')
export class ETileButton extends Component {


    /**
    * @en
    * Transition target.<br/>
    * When Button state changed:
    * - Button.Transition.NONE   // Button will do nothing
    * - Button.Transition.COLOR  // Button will change target's color
    * - Button.Transition.SPRITE // Button will change target Sprite's sprite
    * - Button.Transition.SCALE  // Button will change target node's scale
    *
    * @zh
    * 需要过渡的目标。<br/>
    * 按钮可以通过修改 Transition 来设置按钮状态过渡的方式：
    * - Button.Transition.NONE   // 不做任何过渡
    * - Button.Transition.COLOR  // 进行颜色之间过渡
    * - Button.Transition.SPRITE // 进行 Sprite 之间的过渡
    * - Button.Transition.SCALE // 进行缩放过渡
    */
    @property({ type: TileNode, displayOrder: 0, tooltip: 'i18n:button.target' })
    get target() {
        return this._target;
    }

    set target(value) {
        if (this._target === value) {
            return;
        }
        if (this._target) {
            // need to remove the old target event listeners
            //this._unregisterTargetEvent(this._target);
        }
        this._target = value;
        this._applyTarget();
    }

    /**
     * @en
     * Whether the Button is disabled.
     * If true, the Button will trigger event and do transition.
     *
     * @zh
     * 按钮事件是否被响应，如果为 false，则按钮将被禁用。
     */
    @property({ displayOrder: 1, tooltip: 'i18n:button.interactable' })
    get interactable() {
        return this._interactable;
    }

    set interactable(value) {
        // if (EDITOR) {
        //     if (value) {
        //         this._previousNormalSprite = this.normalSprite;
        //     } else {
        //         this.normalSprite = this._previousNormalSprite;
        //     }
        // }
        this._interactable = value;
        this._updateState();

        if (!this._interactable) {
            this._resetState();
        }
    }

    set _resizeToTarget(value: boolean) {
        if (value) {
            this._resizeNodeToTargetNode();
        }
    }

    /**
     * @en
     * Transition type.
     *
     * @zh
     * 按钮状态改变时过渡方式。
     */
    @property({ type: Transition, displayOrder: 2, tooltip: 'i18n:button.transition' })
    get transition() {
        return this._transition;
    }

    set transition(value: Transition) {
        if (this._transition === value) {
            return;
        }

        // Reset to normal data when change transition.
        if (this._transition === Transition.COLOR) {
            this._updateColorTransition(State.NORMAL);
        } else if (this._transition === Transition.SPRITE) {
            this._updateSpriteTransition(State.NORMAL);
        }
        this._transition = value;
        this._updateState();
    }

    // color transition

    /**
     * @en
     * Normal state color.
     *
     * @zh
     * 普通状态下按钮所显示的颜色。
     */
    @property({ tooltip: 'i18n:button.normal_color' })
    // @constget
    get normalColor(): Readonly<Color> {
        return this._normalColor;
    }

    set normalColor(value) {
        if (this._normalColor === value) {
            return;
        }

        this._normalColor.set(value);
        this._updateState();
    }

    /**
     * @en
     * Pressed state color.
     *
     * @zh
     * 按下状态时按钮所显示的颜色。
     */
    @property({ tooltip: 'i18n:button.pressed_color' })
    // @constget
    get pressedColor(): Readonly<Color> {
        return this._pressedColor;
    }

    set pressedColor(value) {
        if (this._pressedColor === value) {
            return;
        }

        this._pressedColor.set(value);
    }

    /**
     * @en
     * Hover state color.
     *
     * @zh
     * 悬停状态下按钮所显示的颜色。
     */
    @property({ tooltip: 'i18n:button.hover_color' })
    // @constget
    get hoverColor(): Readonly<Color> {
        return this._hoverColor;
    }

    set hoverColor(value) {
        if (this._hoverColor === value) {
            return;
        }

        this._hoverColor.set(value);
    }
    /**
     * @en
     * Disabled state color.
     *
     * @zh
     * 禁用状态下按钮所显示的颜色。
     */
    @property({ tooltip: 'i18n:button.disabled_color' })
    // @constget
    get disabledColor(): Readonly<Color> {
        return this._disabledColor;
    }

    set disabledColor(value) {
        if (this._disabledColor === value) {
            return;
        }

        this._disabledColor.set(value);
        this._updateState();
    }

    /**
     * @en
     * Color and Scale transition duration.
     *
     * @zh
     * 颜色过渡和缩放过渡时所需时间。
     */
    @property({ max: 10, min: 0, tooltip: 'i18n:button.duration' })
    get duration() {
        return this._duration;
    }

    set duration(value) {
        if (this._duration === value) {
            return;
        }

        this._duration = value;
    }

    /**
     * @en
     * When user press the button, the button will zoom to a scale.
     * The final scale of the button equals (button original scale * zoomScale)
     * NOTE: Setting zoomScale less than 1 is not adviced, which could fire the touchCancel event if the touch point is out of touch area after scaling.
     * if you need to do so, you should set target as another background node instead of the button node.
     *
     * @zh
     * 当用户点击按钮后，按钮会缩放到一个值，这个值等于 Button 原始 scale * zoomScale。
     * 注意：不建议 zoomScale 的值小于 1, 否则缩放后如果触摸点在触摸区域外, 则会触发 touchCancel 事件。
     * 如果你需要这么做，你应该把 target 设置为另一个背景节点，而不是按钮节点。
     */
    @property({ tooltip: 'i18n:button.zoom_scale' })
    get zoomScale() {
        return this._zoomScale;
    }

    set zoomScale(value) {
        if (this._zoomScale === value) {
            return;
        }

        this._zoomScale = value;
    }

    // sprite transition
    /**
     * @en
     * Normal state sprite.
     *
     * @zh
     * 普通状态下按钮所显示的 Sprite。
     */
    @property({ type: SpriteFrame, tooltip: 'i18n:button.normal_sprite' })
    get normalSprite() {
        return this._normalSprite;
    }

    set normalSprite(value: SpriteFrame | null) {
        if (this._normalSprite === value) {
            return;
        }

        this._normalSprite = value;
        const sprite = this.node.getComponent(Sprite);
        if (sprite) {
            sprite.spriteFrame = value;
        }

        this._updateState();
    }

    /**
     * @en
     * Pressed state sprite.
     *
     * @zh
     * 按下状态时按钮所显示的 Sprite。
     */
    @property({ type: SpriteFrame, tooltip: 'i18n:button.pressed_sprite' })
    get pressedSprite() {
        return this._pressedSprite;
    }

    set pressedSprite(value: SpriteFrame | null) {
        if (this._pressedSprite === value) {
            return;
        }

        this._pressedSprite = value;
        this._updateState();
    }

    /**
     * @en
     * Hover state sprite.
     *
     * @zh
     * 悬停状态下按钮所显示的 Sprite。
     */
    @property({ type: SpriteFrame, tooltip: 'i18n:button.hover_sprite' })
    get hoverSprite() {
        return this._hoverSprite;
    }

    set hoverSprite(value: SpriteFrame | null) {
        if (this._hoverSprite === value) {
            return;
        }

        this._hoverSprite = value;
        this._updateState();
    }

    /**
     * @en
     * Disabled state sprite.
     *
     * @zh
     * 禁用状态下按钮所显示的 Sprite。
     */
    @property({ type: SpriteFrame, tooltip: 'i18n:button.disabled_sprite' })
    get disabledSprite() {
        return this._disabledSprite;
    }

    set disabledSprite(value: SpriteFrame | null) {
        if (this._disabledSprite === value) {
            return;
        }

        this._disabledSprite = value;
        this._updateState();
    }

    public static Transition = Transition;
    public static EventType = EventType;
    /**
     * @en
     * If Button is clicked, it will trigger event's handler.
     *
     * @zh
     * 按钮的点击事件列表。
     */
    @property({ type: [EventHandler], displayOrder: 20, tooltip: 'i18n:button.click_events' })
    public clickEvents: EventHandler[] = [];
    @property
    protected _interactable = true;
    @property
    protected _transition = Transition.NONE;
    @property
    protected _normalColor: Color = Color.WHITE.clone();
    @property
    protected _hoverColor: Color = new Color(211, 211, 211, 255);
    @property
    protected _pressedColor: Color = Color.WHITE.clone();
    @property
    protected _disabledColor: Color = new Color(124, 124, 124, 255);
    @property
    protected _normalSprite: SpriteFrame | null = null;
    @property
    protected _hoverSprite: SpriteFrame | null = null;
    @property
    protected _pressedSprite: SpriteFrame | null = null;
    @property
    protected _disabledSprite: SpriteFrame | null = null;
    @property
    protected _duration = 0.1;
    @property
    protected _zoomScale = 1.2;
    @property
    protected _target: TileNode | null = null;
    private _pressed = false;
    private _hovered = false;
    private _fromColor: Color = new Color();
    private _toColor: Color = new Color();
    private _time = 0;
    private _transitionFinished = true;
    private _fromScale: Vec3 = new Vec3();
    private _toScale: Vec3 = new Vec3();
    private _originalScale: Vec3 | null = null;
    private _sprite: Sprite | null = null;
    private _targetScale: Vec3 = new Vec3();

    public __preload() {
        const sprite = this.node.getComponent(Sprite);
        if (sprite) {
            this._normalSprite = sprite.spriteFrame;
        }

        //this._applyTarget();
        this._resetState();
    }

    public onEnable() {
        // check sprite frames
        //
        if (!EDITOR) {
            this._registerNodeEvent();
        } else {
            this.node.on(Sprite.EventType.SPRITE_FRAME_CHANGED, (comp: Sprite) => {
                if (this._transition === Transition.SPRITE) {
                    this._setCurrentStateSpriteFrame(comp.spriteFrame);
                } else {
                    // avoid serialization data loss when in no-sprite mode
                    this._normalSprite = null;
                    this._hoverSprite = null;
                    this._pressedSprite = null;
                    this._disabledSprite = null;
                }
            }, this);
        }
    }

    public onDisable() {
        this._resetState();

        if (!EDITOR) {
            this._unregisterNodeEvent();
        } else {
            this.node.off(Sprite.EventType.SPRITE_FRAME_CHANGED);
        }
    }

    public update(dt: number) {
        const target = this.target;
        if (this._transitionFinished || !target) {
            return;
        }

        if (this._transition !== Transition.COLOR && this._transition !== Transition.SCALE) {
            return;
        }

        this._time += dt;
        let ratio = 1.0;
        if (this._duration > 0) {
            ratio = this._time / this._duration;
        }

        if (ratio >= 1) {
            ratio = 1;
        }

        if (this._transition === Transition.COLOR) {
            const renderComp = this.node._uiProps.uiComp as UIRenderer;
            Color.lerp(_tempColor, this._fromColor, this._toColor, ratio);
            if (renderComp) {
                renderComp.color = _tempColor;
            }
        } else if (this.transition === Transition.SCALE) {
            this._targetScale = this._targetScale || new Vec3(1, 1, 1);
            this._targetScale.x = lerp(this._fromScale.x, this._toScale.x, ratio);
            this._targetScale.y = lerp(this._fromScale.y, this._toScale.y, ratio);
            target.scale = this._targetScale;
        }

        if (ratio === 1) {
            this._transitionFinished = true;
        }
    }

    protected _resizeNodeToTargetNode() {
        if (!this.target) {
            return;
        }

    }

    protected _resetState() {
        this._pressed = false;
        this._hovered = false;
        // Restore button status
        const target = this.target;
        if (!target) {
            return;
        }
        const renderComp = this.node.getComponent(UIRenderer);
        if (!renderComp) {
            return;
        }

        const transition = this._transition;
        if (transition === Transition.COLOR && this._interactable) {
            renderComp.color = this._normalColor;
        } else if (transition === Transition.SCALE && this._originalScale) {
            target.scale = this._originalScale;
        }
        this._transitionFinished = true;
    }

    protected _registerTargetEvent(target: any) {
        if (EDITOR) {
            target.on(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onTargetSpriteFrameChanged, this);
            target.on(Node.EventType.COLOR_CHANGED, this._onTargetColorChanged, this);
        }
        target.on(Node.EventType.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
    }

    protected _unregisterNodeEvent() {
        this.node.off(Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);

    }

    protected _unregisterTargetEvent(target: any) {
        if (EDITOR) {
            target.off(Sprite.EventType.SPRITE_FRAME_CHANGED);
            target.off(Node.EventType.COLOR_CHANGED);
        }
        target.off(Node.EventType.TRANSFORM_CHANGED);
    }

    protected _getTargetSprite(target: Node | null) {
        let sprite: Sprite | null = null;
        if (target) {
            sprite = target.getComponent(Sprite);
        }
        return sprite;
    }

    protected _applyTarget() {
        if (this.target) {
            this._sprite = this._getTargetSprite(this.node);
            if (!this._originalScale) {
                this._originalScale = new Vec3();
            }
            Vec3.copy(this._originalScale, this.target.scale);
        }
    }

    private _onTargetSpriteFrameChanged(comp: Sprite) {
        if (this._transition === Transition.SPRITE) {
            this._setCurrentStateSpriteFrame(comp.spriteFrame);
        }
    }

    private _setCurrentStateSpriteFrame(spriteFrame: SpriteFrame | null) {
        if (!spriteFrame) {
            return;
        }
        switch (this._getButtonState()) {
            case State.NORMAL:
                this._normalSprite = spriteFrame;
                break;
            case State.HOVER:
                this._hoverSprite = spriteFrame;
                break;
            case State.PRESSED:
                this._pressedSprite = spriteFrame;
                break;
            case State.DISABLED:
                this._disabledSprite = spriteFrame;
                break;
            default:
                break;
        }
    }

    private _onTargetColorChanged(color: Color) {
        if (this._transition === Transition.COLOR) {
            this._setCurrentStateColor(color);
        }
    }

    private _setCurrentStateColor(color: Color) {
        switch (this._getButtonState()) {
            case State.NORMAL:
                this._normalColor = color;
                break;
            case State.HOVER:
                this._hoverColor = color;
                break;
            case State.PRESSED:
                this._pressedColor = color;
                break;
            case State.DISABLED:
                this._disabledColor = color;
                break;
            default:
                break;
        }
    }

    private _onTargetTransformChanged(transformBit: number) {
        if (!this.target) {
            return;
        }
        // update originalScale
        if (transformBit | Node.TransformBit.SCALE && this._originalScale
            && this._transition === Transition.SCALE && this._transitionFinished) {
            Vec3.copy(this._originalScale, this.target.scale);
        }
    }

    // touch event handler
    protected _onTouchBegan(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) { return; }

        this._pressed = true;
        this._updateState();
        if (event) {
            event.propagationStopped = true;
        }
    }

    protected _onTouchEnded(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) {
            return;
        }

        if (this._pressed) {
            EventHandler.emitEvents(this.clickEvents, event);
            this.node.emit(EventType.CLICK, this);
        }
        this._pressed = false;
        this._updateState();

        if (event) {
            event.propagationStopped = true;
        }
    }

    protected _onTouchMove(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy || !this._pressed) { return; }
        // mobile phone will not emit _onMouseMoveOut,
        // so we have to do hit test when touch moving
        if (!event) {
            return;
        }

        const touch = (event).touch;
        if (!touch) {
            return;
        }

        const hit = this.node._uiProps.uiTransformComp!.isHit(touch.getUILocation());

        if (this._transition === Transition.SCALE && this.target && this._originalScale) {
            if (hit) {
                Vec3.copy(this._fromScale, this._originalScale);
                Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
                this._transitionFinished = false;
            } else {
                this._time = 0;
                this._transitionFinished = true;
                this.target.scale = this._originalScale;
            }
        } else {
            let state;
            if (hit) {
                state = State.PRESSED;
            } else {
                state = State.NORMAL;
            }
            this._applyTransition(state);
        }

        if (event) {
            event.propagationStopped = true;
        }
    }

    protected _onTouchCancel(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) { return; }

        this._pressed = false;
        this._updateState();
    }

    protected _onMouseMoveIn(event?: EventMouse) {
        if (this._pressed || !this.interactable || !this.enabledInHierarchy) { return; }
        if (this._transition === Transition.SPRITE && !this._hoverSprite) { return; }

        if (!this._hovered) {
            this._hovered = true;
            this._updateState();
        }
    }

    protected _onMouseMoveOut(event?: EventMouse) {
        if (this._hovered) {
            this._hovered = false;
            this._updateState();
        }
    }

    // state handler
    protected _updateState() {
        const state = this._getButtonState();
        this._applyTransition(state);
    }

    protected _getButtonState() {
        let state = State.NORMAL;
        if (!this._interactable) {
            state = State.DISABLED;
        } else if (this._pressed) {
            state = State.PRESSED;
        } else if (this._hovered) {
            state = State.HOVER;
        }
        return state.toString();
    }

    protected _updateColorTransition(state: string) {
        const color = (this as any)[`${state}Color`];

        const renderComp = this.node.getComponent(UIRenderer);
        if (!renderComp) {
            return;
        }

        if (EDITOR || state === State.DISABLED) {
            renderComp.color = color;
        } else {
            this._fromColor = renderComp.color.clone();
            this._toColor = color;
            this._time = 0;
            this._transitionFinished = false;
        }
    }

    protected _updateSpriteTransition(state: string) {
        const sprite = (this as any)[`${state}Sprite`];
        if (this._sprite && sprite) {
            this._sprite.spriteFrame = sprite;
        }
    }

    protected _updateScaleTransition(state: string) {
        if (!this._interactable) {
            return;
        }

        if (state === State.PRESSED) {
            this._zoomUp();
        } else {
            this._zoomBack();
        }
    }

    protected _zoomUp() {
        // skip before __preload()
        if (!this._originalScale) {
            return;
        }
        Vec3.copy(this._fromScale, this._originalScale);
        Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
        this._time = 0;
        this._transitionFinished = false;
    }

    protected _zoomBack() {
        if (!this.target || !this._originalScale) {
            return;
        }
        Vec3.copy(this._fromScale, this.target.scale);
        Vec3.copy(this._toScale, this._originalScale);
        if (this._fromScale.equals(this._toScale)) {
            return;
        }
        this._time = 0;
        this._transitionFinished = false;
    }

    protected _applyTransition(state: string) {
        const transition = this._transition;
        if (transition === Transition.COLOR) {
            this._updateColorTransition(state);
        } else if (transition === Transition.SPRITE) {
            this._updateSpriteTransition(state);
        } else if (transition === Transition.SCALE) {
            this._updateScaleTransition(state);
        }
    }


    protected _registerNodeEvent() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);

        //this.node.on(Node.EventType.MOUSE_ENTER, this._onMouseMoveIn, this);
        //this.node.on(Node.EventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
    }

}
