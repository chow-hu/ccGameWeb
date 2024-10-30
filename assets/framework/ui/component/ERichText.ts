/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * @packageDocumentation
 * @module ui
 */

import {
    BASELINE_RATIO,
    CCObject,
    CacheMode,
    Color,
    Component,
    EventTouch,
    Font,
    HorizontalTextAlignment,
    HtmlTextParser, IHtmlTextParserResultObj, IHtmlTextParserStack,
    Label,
    Node,
    Sprite,
    SpriteAtlas,
    SpriteFrame,
    TTFFont,
    UITransform,
    Vec2,
    VerticalTextAlignment, _decorator,
    assert,
    isUnicodeCJK, isUnicodeSpace,
    isValid,
    js,
    warnID
} from 'cc';
import { DEBUG, DEV, EDITOR } from 'cc/env';
import { valueof } from '../../common/general';
import { localFragmentText } from '../../common/text-utils';
import { UIBase } from './UIBase';
const { ccclass, executeInEditMode, executionOrder, help, menu, property } = _decorator;
const _htmlTextParser = new HtmlTextParser();
const RichTextChildName = 'ERICHTEXT_CHILD';
const RichTextChildImageName = 'ERICHTEXT_Image_CHILD';
/**
 * 富文本池。<br/>
 */
const labelPool = new js.Pool<ISegment>(function (seg: ISegment) {
    if (DEV) {
        assert(!seg.node.parent, 'Recycling node\'s parent should be null!');
    }
    if (!isValid(seg.node)) {
        return false;
    } else {
        // const outline = seg.node.getComponent(LabelOutline);
        // if (outline) {
        //     outline.width = 0;
        // }
        const label = seg.node.getComponent(Label);
        label.outlineWidth = 0
    }
    return true;
}, 20);

const imagePool = new js.Pool<ISegment>(function (seg: ISegment) {
    if (DEV) {
        assert(!seg.node.parent, 'Recycling node\'s parent should be null!');
    }
    return isValid(seg.node) as boolean;
}, 10);

//
function createSegment(type: string): ISegment {
    return {
        node: new Node(type),
        comp: null,
        lineCount: 0,
        styleIndex: 0,
        imageOffset: '',
        clickParam: '',
        clickHandler: '',
        type,
    };
}

function getSegmentByPool(type: string, content: string | SpriteFrame) {
    let seg: ISegment | null = null;
    if (type === RichTextChildName) {
        seg = labelPool._get();
    } else if (type === RichTextChildImageName) {
        seg = imagePool._get();
    }
    seg = seg || createSegment(type);
    let node = seg.node as Node;
    if (!node) {
        node = new Node(type);
    }
    node.active = true;
    node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    if (type === RichTextChildImageName) {
        seg.comp = node.getComponent(Sprite) || node.addComponent(Sprite);
        seg.comp.spriteFrame = content as SpriteFrame;
        seg.comp.type = Sprite.Type.SLICED;
        seg.comp.sizeMode = Sprite.SizeMode.CUSTOM;
    } else { // RichTextChildName
        seg.comp = node.getComponent(Label) || node.addComponent(Label);
        seg.comp.string = content as string;
        seg.comp.horizontalAlign = HorizontalTextAlignment.LEFT;
        seg.comp.verticalAlign = VerticalTextAlignment.CENTER;
        seg.comp.underlineHeight = 2;
        seg.comp.outlineWidth = 0;
    }
    node.setPosition(0, 0, 0);
    const trans = node._uiProps.uiTransformComp!;
    trans.setAnchorPoint(0.5, 0.5);

    seg.node = node;
    seg.lineCount = 0;
    seg.styleIndex = 0;
    seg.imageOffset = '';
    seg.clickParam = '';
    seg.clickHandler = '';
    return seg as ISegment | null;
}

interface ISegment {
    node: Node;
    comp: Label | Sprite | null;
    lineCount: number;
    styleIndex: number;
    imageOffset: string;
    clickParam: string;
    clickHandler: string;
    type: string,
}

/**
 * @en
 * The RichText Component.
 *
 * @zh
 * 富文本组件。
 */
@ccclass('ERichText')
@help('i18n:cc.RichText')
@executionOrder(110)
@menu('UI/RichText')
@executeInEditMode
export class ERichText extends Component {
    /**
     * @en
     * Content string of RichText.
     *
     * @zh
     * 富文本显示的文本内容。
     */
    @property({ tooltip: 'i18n:richtext.string', multiline: true })
    get string() {
        return this._string;
    }
    set string(value) {
        if (this._string === value) {
            return;
        }

        this._string = value;
        this._updateRichTextStatus();
    }

    @property({ tooltip: 'i18n:renderable2D.color', displayOrder: 2, multiline: true })
    get color(): Readonly<Color> {
        return this._color;
    }
    set color(value) {
        if (this._color.equals(value)) {
            return;
        }
        this._color.set(value);
    }
    /**
     * @en
     * Horizontal Alignment of each line in RichText.
     *
     * @zh
     * 文本内容的水平对齐方式。
     */
    @property({ tooltip: 'i18n:richtext.horizontal_align', type: HorizontalTextAlignment })
    get horizontalAlign() {
        return this._horizontalAlign;
    }

    set horizontalAlign(value) {
        if (this.horizontalAlign === value) {
            return;
        }

        this._horizontalAlign = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Font size of RichText.
     *
     * @zh
     * 富文本字体大小。
     */
    @property({ tooltip: 'i18n:richtext.font_size' })
    get fontSize() {
        return this._fontSize;
    }

    set fontSize(value) {
        if (this._fontSize === value) {
            return;
        }

        this._fontSize = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Custom System font of RichText
     *
     * @zh
     * 富文本定制系统字体
     */
    @property({ tooltip: 'i18n:richtext.font_family' })
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value: string) {
        if (this._fontFamily === value) return;
        this._fontFamily = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Custom System font of RichText.
     *
     * @zh
     * 富文本定制字体。
     */
    @property({ tooltip: 'i18n:richtext.font', type: Font })
    get font() {
        return this._font;
    }
    set font(value) {
        if (this._font === value) {
            return;
        }
        this._font = value;
        this._layoutDirty = true;
        if (this._font) {
            if (EDITOR) {
                this._userDefinedFont = this._font;
            }
            this.useSystemFont = false;
            this._onTTFLoaded();
        } else {
            this.useSystemFont = true;
        }
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Whether use system font name or not.
     *
     * @zh
     * 是否使用系统字体。
     */
    @property({ tooltip: 'i18n:richtext.use_system_font' })
    get useSystemFont() {
        return this._isSystemFontUsed;
    }
    set useSystemFont(value: boolean) {
        if (this._isSystemFontUsed === value) {
            return;
        }
        this._isSystemFontUsed = value;

        if (EDITOR) {
            if (value) {
                this._font = null;
            } else if (this._userDefinedFont) {
                this._font = this._userDefinedFont;
                return;
            }
        }

        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * The cache mode of label. This mode only supports system fonts.
     *
     * @zh
     * 文本缓存模式, 该模式只支持系统字体。
     */
    @property({ tooltip: 'i18n:richtext.cache_mode', type: CacheMode })
    get cacheMode() {
        return this._cacheMode;
    }
    set cacheMode(value: CacheMode) {
        if (this._cacheMode === value) {
            return;
        }
        this._cacheMode = value;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * The maximize width of the RichText.
     *
     * @zh
     * 富文本的最大宽度。
     */
    @property({ tooltip: 'i18n:richtext.max_width' })
    get maxWidth() {
        return this._maxWidth;
    }

    set maxWidth(value) {
        if (this._maxWidth === value) {
            return;
        }

        this._maxWidth = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Line Height of RichText.
     *
     * @zh
     * 富文本行高。
     */
    @property({ tooltip: 'i18n:richtext.line_height' })
    get lineHeight() {
        return this._lineHeight;
    }

    set lineHeight(value) {
        if (this._lineHeight === value) {
            return;
        }

        this._lineHeight = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * The image atlas for the img tag. For each src value in the img tag, there should be a valid spriteFrame in the image atlas.
     *
     * @zh
     * 对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。
     */
    @property({ tooltip: 'i18n:richtext.image_atlas', type: SpriteAtlas })
    get imageAtlas() {
        return this._imageAtlas;
    }

    set imageAtlas(value) {
        if (this._imageAtlas === value) {
            return;
        }

        this._imageAtlas = value;
        this._layoutDirty = true;
        this._updateRichTextStatus();
    }

    /**
     * @en
     * Once checked, the RichText will block all input events (mouse and touch) within
     * the bounding box of the node, preventing the input from penetrating into the underlying node.
     *
     * @zh
     * 选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。
     */
    @property({ tooltip: 'i18n:richtext.handleTouchEvent' })
    get handleTouchEvent() {
        return this._handleTouchEvent;
    }

    set handleTouchEvent(value) {
        if (this._handleTouchEvent === value) {
            return;
        }

        this._handleTouchEvent = value;
        if (this.enabledInHierarchy) {
            if (this.handleTouchEvent) {
                this._addEventListeners();
            } else {
                this._removeEventListeners();
            }
        }
    }
    public static HorizontalAlign = HorizontalTextAlignment;
    public static VerticalAlign = VerticalTextAlignment;

    @property({ serializable: true })
    protected _color: Color = Color.WHITE.clone();
    @property({ serializable: true })
    protected _lineHeight = 40;
    @property({ serializable: true })
    protected _string = '<color=#00ff00>Rich</color><color=#0fffff>Text</color>';
    // protected _updateRichTextStatus =
    @property({ serializable: true })
    protected _horizontalAlign = HorizontalTextAlignment.LEFT;
    @property({ serializable: true })
    protected _fontSize = 40;
    @property({ serializable: true })
    protected _maxWidth = 0;
    @property({ serializable: true })
    protected _fontFamily = 'Arial';
    @property({ serializable: true })
    protected _font: TTFFont | null = null;
    @property({ serializable: true })
    protected _isSystemFontUsed = true;
    @property({ serializable: true })
    protected _userDefinedFont: TTFFont | null = null;
    @property({ serializable: true })
    protected _cacheMode: CacheMode = CacheMode.NONE;
    @property({ serializable: true })
    protected _imageAtlas: SpriteAtlas | null = null;
    @property({ serializable: true })
    protected _handleTouchEvent = true;
    @property(UIBase)
    protected clickTarget!: UIBase;

    protected _textArray: IHtmlTextParserResultObj[] = [];
    protected _segments: ISegment[] = [];
    protected _labelSegmentsCache: ISegment[] = [];
    protected _linesWidth: number[] = [];
    protected _lineCount = 1;
    protected _labelWidth = 0;
    protected _labelHeight = 0;
    protected _layoutDirty = true;
    protected _lineOffsetX = 0;
    protected _updateRichTextStatus: () => void;
    protected _labelChildrenNum = 0; // only ISegment
    get lineCount() {
        return this._lineCount;
    }
    get linesWidth() {
        return this._linesWidth;
    }

    constructor() {
        super();
        if (EDITOR) {
            this._userDefinedFont = null;
        }
        this._updateRichTextStatus = this._updateRichText;
    }

    public onLoad() {
        this.node.on(Node.EventType.LAYER_CHANGED, this._applyLayer, this);
        this.node.on(Node.EventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
    }

    public onEnable() {
        if (this.handleTouchEvent) {
            this._addEventListeners();
        }

        this._updateRichText();
        this._activateChildren(true);
    }

    public onDisable() {
        if (this.handleTouchEvent) {
            this._removeEventListeners();
        }

        this._activateChildren(false);
    }

    public onRestore() {
        if (!EDITOR) {
            return;
        }

        // TODO: refine undo/redo system
        // Because undo/redo will not call onEnable/onDisable,
        // we need call onEnable/onDisable manually to active/disactive children nodes.
        if (this.enabledInHierarchy) {
            this.onEnable();
        } else {
            this.onDisable();
        }
    }

    public onDestroy() {
        for (const seg of this._segments) {
            seg.node.removeFromParent();
            if (seg.type === RichTextChildName) {
                labelPool.put(seg);
            } else if (seg.type === RichTextChildImageName) {
                imagePool.put(seg);
            }
        }

        this.node.off(Node.EventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
        this.node.off(Node.EventType.LAYER_CHANGED, this._applyLayer, this);
    }

    protected _addEventListeners() {
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnded, this);
    }

    protected _removeEventListeners() {
        this.node.off(Node.EventType.TOUCH_END, this._onTouchEnded, this);
    }

    protected _updateLabelSegmentTextAttributes() {
        this._segments.forEach((item) => {
            this._applyTextAttribute(item);
        });
    }

    protected _createFontLabel(str: string): ISegment {
        return getSegmentByPool(RichTextChildName, str)!;
    }

    protected _createImage(spriteFrame: SpriteFrame): ISegment {
        return getSegmentByPool(RichTextChildImageName, spriteFrame)!;
    }

    protected _onTTFLoaded() {
        if (this._font instanceof TTFFont) {
            this._layoutDirty = true;
            this._updateRichText();
        } else {
            this._layoutDirty = true;
            this._updateRichText();
        }
    }

    protected _measureText(styleIndex: number, string?: string) {
        const func = (s: string) => {
            const labelSize = this._calculateSize(styleIndex, s);
            return labelSize.width;
        };
        if (string) {
            return func(string);
        } else {
            return func;
        }
    }

    /**
    * @engineInternal
    */
    protected _calculateSize(styleIndex: number, s: string) {
        let label: ISegment;
        if (this._labelSegmentsCache.length === 0) {
            label = this._createFontLabel(s);
            this._labelSegmentsCache.push(label);
        } else {
            label = this._labelSegmentsCache[0];
            label.node.getComponent(Label)!.string = s;
        }
        label.styleIndex = styleIndex;
        this._applyTextAttribute(label);
        const labelSize = label.node._uiProps.uiTransformComp!.contentSize;
        return labelSize;
    }

    protected _onTouchEnded(event: EventTouch) {
        const components = this.node.getComponents(Component);

        for (const seg of this._segments) {
            const clickHandler = seg.clickHandler;
            const clickParam = seg.clickParam;
            if (clickHandler && this._containsTouchLocation(seg, event.touch!.getUILocation())) {
                components.forEach((component: Record<string, any>) => {
                    const func = component[clickHandler];
                    if (component.enabledInHierarchy && func) {
                        func.call(component, event, clickParam);
                    }
                });
                if (this.clickTarget) {
                    let func = valueof(this.clickTarget, clickHandler);
                    if (func) {
                        func.call(this.clickTarget, event, clickParam);
                    }
                }
                event.propagationStopped = true;
            }
        }
    }

    protected _containsTouchLocation(label: ISegment, point: Vec2) {
        const comp = label.node.getComponent(UITransform);
        if (!comp) {
            return false;
        }

        const myRect = comp.getBoundingBoxToWorld();
        return myRect.contains(point);
    }

    protected _resetState() {
        const children = this.node.children;

        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                if (DEBUG) {
                    assert(child.parent === this.node);
                }
                child.parent = null;

                const segment = createSegment(child.name);
                segment.node = child;
                if (child.name === RichTextChildName) {
                    segment.comp = child.getComponent(Label);
                    labelPool.put(segment);
                } else {
                    segment.comp = child.getComponent(Sprite);
                    imagePool.put(segment);
                }
                this._labelChildrenNum--;
            }
        }

        this._segments.length = 0;
        this._labelSegmentsCache.length = 0;
        this._linesWidth.length = 0;
        this._lineOffsetX = 0;
        this._lineCount = 1;
        this._labelWidth = 0;
        this._labelHeight = 0;
        this._layoutDirty = true;
    }

    protected _activateChildren(active: boolean) {
        for (let i = this.node.children.length - 1; i >= 0; i--) {
            const child = this.node.children[i];
            if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                child.active = active;
            }
        }
    }

    protected _addLabelSegment(stringToken: string, styleIndex: number) {
        let labelSegment: ISegment;
        if (this._labelSegmentsCache.length === 0) {
            labelSegment = this._createFontLabel(stringToken);
        } else {
            labelSegment = this._labelSegmentsCache.pop()!;
            const label = labelSegment.node.getComponent(Label);
            if (label) {
                label.string = stringToken;
            }
        }

        labelSegment.styleIndex = styleIndex;
        labelSegment.lineCount = this._lineCount;
        labelSegment.node._uiProps.uiTransformComp!.setAnchorPoint(0, 0.5);
        labelSegment.node.layer = this.node.layer;
        this.node.insertChild(labelSegment.node, this._labelChildrenNum++);
        this._applyTextAttribute(labelSegment);
        this._segments.push(labelSegment);

        return labelSegment;
    }

    protected _updateRichTextWithMaxWidth(labelString: string, labelWidth: number, styleIndex: number) {
        let fragmentWidth = labelWidth;
        let labelSegment: ISegment;

        if (this._lineOffsetX > 0 && fragmentWidth + this._lineOffsetX > this._maxWidth) {
            // concat previous line
            let checkStartIndex = 0;
            while (this._lineOffsetX <= this._maxWidth) {
                const checkEndIndex = this._getFirstWordLen(labelString, checkStartIndex, labelString.length);
                const checkString = labelString.substr(checkStartIndex, checkEndIndex);
                const checkStringWidth = this._measureText(styleIndex, checkString) as number;

                if (this._lineOffsetX + checkStringWidth <= this._maxWidth) {
                    this._lineOffsetX += checkStringWidth;
                    checkStartIndex += checkEndIndex;
                } else {
                    if (checkStartIndex > 0) {
                        const remainingString = labelString.substr(0, checkStartIndex);
                        this._addLabelSegment(remainingString, styleIndex);
                        labelString = labelString.substr(checkStartIndex, labelString.length);
                        fragmentWidth = this._measureText(styleIndex, labelString) as number;
                    }
                    this._updateLineInfo();
                    break;
                }
            }
        }
        if (fragmentWidth > this._maxWidth) {
            const fragments = localFragmentText(labelString, fragmentWidth, this._maxWidth, this._measureText(styleIndex) as (s: string) => number);
            for (let k = 0; k < fragments.length; ++k) {
                const splitString = fragments[k];
                labelSegment = this._addLabelSegment(splitString, styleIndex);
                const labelSize = labelSegment.node._uiProps.uiTransformComp!.contentSize;
                this._lineOffsetX += labelSize.width;
                if (fragments.length > 1 && k < fragments.length - 1) {
                    this._updateLineInfo();
                }
            }
        } else {
            this._lineOffsetX += fragmentWidth;
            this._addLabelSegment(labelString, styleIndex);
        }
    }

    protected _isLastComponentCR(stringToken: string) {
        return stringToken.length - 1 === stringToken.lastIndexOf('\n');
    }

    protected _updateLineInfo() {
        this._linesWidth.push(this._lineOffsetX);
        this._lineOffsetX = 0;
        this._lineCount++;
    }

    protected _needsUpdateTextLayout(newTextArray: IHtmlTextParserResultObj[]) {
        if (this._layoutDirty || !this._textArray || !newTextArray) {
            return true;
        }

        if (this._textArray.length !== newTextArray.length) {
            return true;
        }

        for (let i = 0; i < this._textArray.length; i++) {
            const oldItem = this._textArray[i];
            const newItem = newTextArray[i];
            if (oldItem.text !== newItem.text) {
                return true;
            } else {
                const oldStyle = oldItem.style; const newStyle = newItem.style;
                if (oldStyle) {
                    if (newStyle) {
                        if (!!newStyle.outline !== !!oldStyle.outline) {
                            return true;
                        }
                        if (oldStyle.size !== newStyle.size
                            || oldStyle.italic !== newStyle.italic
                            || oldStyle.isImage !== newStyle.isImage) {
                            return true;
                        }
                        if (oldStyle.src !== newStyle.src
                            || oldStyle.imageAlign !== newStyle.imageAlign
                            || oldStyle.imageHeight !== newStyle.imageHeight
                            || oldStyle.imageWidth !== newStyle.imageWidth
                            || oldStyle.imageOffset !== newStyle.imageOffset) {
                            return true;
                        }
                    } else if (oldStyle.size || oldStyle.italic || oldStyle.isImage || oldStyle.outline) {
                        return true;
                    }
                } else if (newStyle) {
                    if (newStyle.size || newStyle.italic || newStyle.isImage || newStyle.outline) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    protected _addRichTextImageElement(richTextElement: IHtmlTextParserResultObj) {
        if (!richTextElement.style) {
            return;
        }

        const style = richTextElement.style;
        const spriteFrameName = style.src;
        const spriteFrame = this._imageAtlas && spriteFrameName && this._imageAtlas.getSpriteFrame(spriteFrameName);
        if (!spriteFrame) {
            warnID(4400);
        } else {
            const segment = this._createImage(spriteFrame);
            const sprite = segment.comp;
            switch (style.imageAlign) {
                case 'top':
                    segment.node._uiProps.uiTransformComp!.setAnchorPoint(0, 1);
                    break;
                case 'center':
                    segment.node._uiProps.uiTransformComp!.setAnchorPoint(0, 0.5);
                    break;
                default:
                    segment.node._uiProps.uiTransformComp!.setAnchorPoint(0, 0);
                    break;
            }

            if (style.imageOffset) {
                segment.imageOffset = style.imageOffset;
            }
            segment.node.layer = this.node.layer;
            this.node.insertChild(segment.node, this._labelChildrenNum++);
            this._segments.push(segment);

            const spriteRect = spriteFrame.rect.clone();
            let scaleFactor = 1;
            let spriteWidth = spriteRect.width;
            let spriteHeight = spriteRect.height;
            const expectWidth = style.imageWidth || 0;
            const expectHeight = style.imageHeight || 0;

            if (expectHeight > 0) {
                scaleFactor = expectHeight / spriteHeight;
                spriteWidth *= scaleFactor;
                spriteHeight *= scaleFactor;
            } else {
                scaleFactor = this._lineHeight / spriteHeight;
                spriteWidth *= scaleFactor;
                spriteHeight *= scaleFactor;
            }

            if (expectWidth > 0) {
                spriteWidth = expectWidth;
            }

            if (this._maxWidth > 0) {
                if (this._lineOffsetX + spriteWidth > this._maxWidth) {
                    this._updateLineInfo();
                }
                this._lineOffsetX += spriteWidth;
            } else {
                this._lineOffsetX += spriteWidth;
                if (this._lineOffsetX > this._labelWidth) {
                    this._labelWidth = this._lineOffsetX;
                }
            }
            segment.node._uiProps.uiTransformComp!.setContentSize(spriteWidth, spriteHeight);
            segment.lineCount = this._lineCount;

            segment.clickHandler = '';
            segment.clickParam = '';
            const event = style.event;
            if (event) {
                segment.clickHandler = event.click;
                segment.clickParam = event.param;
            }
        }
    }

    public forceUpdateRichText() {
        this._updateRichText(true);
    }

    protected _updateRichText(force: boolean = false) {
        if (!this.enabledInHierarchy && !force) {
            return;
        }

        const newTextArray = _htmlTextParser.parse(this._string);
        if (!this._needsUpdateTextLayout(newTextArray)) {
            this._textArray = newTextArray.slice();
            this._updateLabelSegmentTextAttributes();
            return;
        }

        this._textArray = newTextArray.slice();
        this._resetState();

        let lastEmptyLine = false;
        let label: ISegment;

        for (let i = 0; i < this._textArray.length; ++i) {
            const richTextElement = this._textArray[i];
            const text = richTextElement.text;
            if (text === undefined) {
                continue;
            }

            // handle <br/> <img /> tag
            if (text === '') {
                if (richTextElement.style && richTextElement.style.isNewLine) {
                    this._updateLineInfo();
                    continue;
                }
                if (richTextElement.style && richTextElement.style.isImage && this._imageAtlas) {
                    this._addRichTextImageElement(richTextElement);
                    continue;
                }
            }
            const multilineTexts = text.split('\n');

            for (let j = 0; j < multilineTexts.length; ++j) {
                const labelString = multilineTexts[j];
                if (labelString === '') {
                    // for continues \n
                    if (this._isLastComponentCR(text) && j === multilineTexts.length - 1) {
                        continue;
                    }
                    this._updateLineInfo();
                    lastEmptyLine = true;
                    continue;
                }
                lastEmptyLine = false;

                if (this._maxWidth > 0) {
                    const labelWidth = this._measureText(i, labelString) as number;
                    this._updateRichTextWithMaxWidth(labelString, labelWidth, i);

                    if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                        this._updateLineInfo();
                    }
                } else {
                    label = this._addLabelSegment(labelString, i);

                    this._lineOffsetX += label.node._uiProps.uiTransformComp!.width;
                    if (this._lineOffsetX > this._labelWidth) {
                        this._labelWidth = this._lineOffsetX;
                    }

                    if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                        this._updateLineInfo();
                    }
                }
            }
        }
        if (!lastEmptyLine) {
            this._linesWidth.push(this._lineOffsetX);
        }

        if (this._maxWidth > 0) {
            this._labelWidth = this._maxWidth;
        }
        this._labelHeight = (this._lineCount + BASELINE_RATIO) * this._lineHeight;

        // trigger "size-changed" event
        this.node._uiProps.uiTransformComp!.setContentSize(this._labelWidth, this._labelHeight);

        this._updateRichTextPosition();
        this._layoutDirty = false;
    }

    protected _getFirstWordLen(text: string, startIndex: number, textLen: number) {
        let character = text.charAt(startIndex);
        if (isUnicodeCJK(character) || isUnicodeSpace(character)) {
            return 1;
        }

        let len = 1;
        for (let index = startIndex + 1; index < textLen; ++index) {
            character = text.charAt(index);
            if (isUnicodeSpace(character) || isUnicodeCJK(character)) {
                break;
            }

            len++;
        }

        return len;
    }

    protected _updateRichTextPosition() {
        let nextTokenX = 0;
        let nextLineIndex = 1;
        const totalLineCount = this._lineCount;
        const trans = this.node._uiProps.uiTransformComp!;
        const anchorX = trans.anchorX;
        const anchorY = trans.anchorY;
        const lineHeightReal = this._lineHeight * (1 + BASELINE_RATIO); // single line node height
        let x = 0, y = 0, z = 0;
        for (let i = 0; i < this._segments.length; ++i) {
            const segment = this._segments[i];
            const lineCount = segment.lineCount;
            if (lineCount > nextLineIndex) {
                nextTokenX = 0;
                nextLineIndex = lineCount;
            }

            let lineOffsetX = this._labelWidth * (this._horizontalAlign * 0.5 - anchorX);
            switch (this._horizontalAlign) {
                case HorizontalTextAlignment.LEFT:
                    break;
                case HorizontalTextAlignment.CENTER:
                    lineOffsetX -= this._linesWidth[lineCount - 1] / 2;
                    break;
                case HorizontalTextAlignment.RIGHT:
                    lineOffsetX -= this._linesWidth[lineCount - 1];
                    break;
                default:
                    break;
            }

            const pos = segment.node.position;
            x = nextTokenX + lineOffsetX;
            y = this._lineHeight * (totalLineCount - lineCount) - this._labelHeight * anchorY;
            z = pos.z;


            if (lineCount === nextLineIndex) {
                nextTokenX += segment.node._uiProps.uiTransformComp!.width;
            }

            const sprite = segment.node.getComponent(Sprite);
            if (sprite) {
                // adjust img align (from <img align=top|center|bottom>)
                const lineHeightSet = this._lineHeight;
                switch (segment.node._uiProps.uiTransformComp!.anchorY) {
                    case 1:
                        y += (lineHeightSet + ((lineHeightReal - lineHeightSet) / 2));
                        break;
                    case 0.5:
                        y += (lineHeightReal / 2);
                        break;
                    default:
                        y += ((lineHeightReal - lineHeightSet) / 2);
                        break;
                }
                // adjust img offset (from <img offset=12|12,34>)
                if (segment.imageOffset) {
                    const offsets = segment.imageOffset.split(',');
                    if (offsets.length === 1 && offsets[0]) {
                        const offsetY = parseFloat(offsets[0]);
                        if (Number.isInteger(offsetY)) y += offsetY;
                    } else if (offsets.length === 2) {
                        const offsetX = parseFloat(offsets[0]);
                        const offsetY = parseFloat(offsets[1]);
                        if (Number.isInteger(offsetX)) x += offsetX;
                        if (Number.isInteger(offsetY)) y += offsetY;
                    }
                }
            } else {
                y += lineHeightReal * 0.5;
            }

            // adjust y for label with outline
            //const outline = segment.node.getComponent(LabelOutline);
            const outline = segment.node.getComponent(Label);
            if (outline) {
                y -= outline.outlineWidth;
            }
            segment.node.setPosition(x, y, z);
        }
    }

    protected _convertLiteralColorValue(color: string) {
        const colorValue = color.toUpperCase();
        let tempColor = (Color as any)[colorValue];
        if (tempColor) {
            const colorUse: Color = tempColor;
            return colorUse;
        } else {
            const out = new Color();
            return out.fromHEX(color);
        }
    }

    protected _applyTextAttribute(labelSeg: ISegment) {
        const label = labelSeg.node.getComponent(Label);
        if (!label) {
            return;
        }
        this._resetLabelState(label);

        const index = labelSeg.styleIndex;

        let textStyle: IHtmlTextParserStack | undefined;
        if (this._textArray[index]) {
            textStyle = this._textArray[index].style;
        }

        if (textStyle) {
            label.color = textStyle.color ? this._convertLiteralColorValue(textStyle.color) : this.color;
            label.isBold = !!textStyle.bold;
            label.isItalic = !!textStyle.italic;
            // TODO: temporary implementation, the italic effect should be implemented in the internal of label-assembler.
            // if (textStyle.italic) {
            //     labelNode.skewX = 12;
            // }

            label.isUnderline = !!textStyle.underline;
            if (textStyle.outline) {
                // let labelOutline = labelSeg.node.getComponent(LabelOutline);
                // if (!labelOutline) {
                //     labelOutline = labelSeg.node.addComponent(LabelOutline);
                // }

                // labelOutline.color = this._convertLiteralColorValue(textStyle.outline.color);
                // labelOutline.width = textStyle.outline.width;

                label.outlineColor = this._convertLiteralColorValue(textStyle.outline.color);
                label.outlineWidth = textStyle.outline.width;
            }

            label.fontSize = textStyle.size || this._fontSize;

            labelSeg.clickHandler = '';
            labelSeg.clickParam = '';
            const event = textStyle.event;
            if (event) {
                labelSeg.clickHandler = event.click || '';
                labelSeg.clickParam = event.param || '';
            }
        } else {
            label.fontSize = this._fontSize;
            label.color = this.color;
        }

        label.cacheMode = this._cacheMode;

        const isAsset = this._font instanceof Font;
        if (isAsset && !this._isSystemFontUsed) {
            label.font = this._font;
        } else {
            label.fontFamily = this._fontFamily;
        }
        label.useSystemFont = this._isSystemFontUsed;
        label.lineHeight = this._lineHeight;

        label.updateRenderData(true);
    }

    protected _applyLayer() {
        for (const seg of this._segments) {
            seg.node.layer = this.node.layer;
        }
    }

    protected _resetLabelState(label: Label) {
        label.fontSize = this._fontSize;
        label.color = Color.WHITE;
        label.isBold = false;
        label.isItalic = false;
        label.isUnderline = false;
    }
}