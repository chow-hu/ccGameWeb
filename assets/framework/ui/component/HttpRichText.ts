import { _decorator, CacheMode, ccenum, CCFloat, Color, Component, EventHandler, Font, HorizontalTextAlignment, HtmlTextParser, IHtmlTextParserResultObj, instantiate, isValid, Label, Layout, Node, NodeEventType, RichText, Size, Sprite, SpriteAtlas, SpriteFrame, sys, TTFFont, tween, Tween, UITransform, Vec2, Vec3, VerticalTextAlignment, Widget } from 'cc';
import { EDITOR } from 'cc/env';
import { AssetsLoader } from '../../asset/AssetsLoader';
const { ccclass, property, menu } = _decorator;

/**
 * Name = HttpRichText
 * Author = Aby
 *
 * 支持远端图片的富文本 
 * 基于RichText扩展Http图片功能 
 * 支持自定义图片尺寸(会根据原图缩放) 支持自定义点击
 * 支持自定义加载过渡
 */


/**
 * @zh 布局类型。
 */
enum _HTTP_RICHTXT_DIRECTOR_ {
    /**
     * @en No layout.
     *
     * @zh 禁用布局。
     */
    NONE = 0,
    /**
     * @en Horizontal layout.
     *
     * @zh 水平布局。
     */
    HORIZONTAL = 1,
    /**
     * @en Vertical layout.
     *
     * @zh 垂直布局。
     */
    VERTICAL = 2,
}
ccenum(_HTTP_RICHTXT_DIRECTOR_);

@ccclass('RichTextTouchEvent')
export class RichTextTouchEvent {
    @property({ tooltip: "点击映射函数名" })
    key = "";

    @property({
        tooltip: "回调监听函数", type: EventHandler,
        visible: function () { return this.key.length > 0 }
    })
    call = new EventHandler();
}

const _htmlTextParser = new HtmlTextParser();


@ccclass('HttpRichText')
@menu('UI/HttpRichText')
export class HttpRichText extends Component {
    /**
      * @en
      * Content string of RichText.
      *
      * @zh
      * 富文本显示的文本内容。
      */
    @property({ tooltip: '富文本显示的文本内容', multiline: true, visible: function () { this.reloadLayout(); this.updateRenderData(); return true } })
    get string() {
        return this._string;
    }
    set string(value) {
        if (this._string === value) {
            return;
        }
        this._string = value;
        this.reloadLayout();
        this.updateRenderData();
    }

    @property({ type: Color, tooltip: '富文本显示的文本颜色', displayOrder: 2, multiline: true })
    get fontColor(): Color {
        return this._fontColor;
    }
    set fontColor(value: Color) {
        if (this._fontColor === value) {
            return;
        }

        this._fontColor = value;
        this._updateAllRichText();
    }
    /**
     * @en
     * Horizontal Alignment of each line in RichText.
     *
     * @zh
     * 文本内容的水平对齐方式。
     */
    @property({ tooltip: '文本内容的水平对齐方式。', type: HorizontalTextAlignment })
    get horizontalAlign() {
        return this._horizontalAlign;
    }
    set horizontalAlign(value) {
        if (this.horizontalAlign === value) {
            return;
        }
        this._horizontalAlign = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * Horizontal Alignment of each line in RichText.
     * @zh
     * 图片内容的水平对齐方式。
     */
    @property({ tooltip: '图片内容的水平对齐方式。', type: HorizontalTextAlignment })
    get spriteHorizontalAlign() {
        return this._spriteHorizontalAlign;
    }
    set spriteHorizontalAlign(value) {
        if (this.spriteHorizontalAlign === value) {
            return;
        }
        this._spriteHorizontalAlign = value;
        this._updateAllSprite();
    }

    /**
     * @en
     * Font size of RichText.
     *
     * @zh
     * 富文本字体大小。
     */
    @property({ tooltip: '富文本字体大小' })
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(value) {
        if (this._fontSize === value) {
            return;
        }
        this._fontSize = value;
        this._updateAllRichText();
    }
    /**
     * @en
     * Custom System font of RichText
     *
     * @zh
     * 富文本定制系统字体
     */
    @property({ tooltip: '富文本定制系统字体' })
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value: string) {
        if (this._fontFamily === value) return;
        this._fontFamily = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * Whether use system font name or not.
     *
     * @zh
     * 是否使用系统字体。
     */
    @property({ tooltip: '是否使用系统字体' })
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
                this._updateAllRichText();
                return;
            }
            this._updateAllRichText();
        }
    }

    /**
     * @en
     * Custom System font of RichText.
     *
     * @zh
     * 富文本定制字体。
     */
    @property({ tooltip: '富文本定制字体', type: Font })
    get font() {
        return this._font;
    }
    set font(value) {
        if (this._font === value) {
            return;
        }
        this._font = value;
        if (this._font) {
            if (EDITOR) {
                this._userDefinedFont = this._font;
            }
            this.useSystemFont = false;
        } else {
            this.useSystemFont = true;
        }
        this._updateAllRichText();
    }

    /**
     * @en
     * The cache mode of label. This mode only supports system fonts.
     *
     * @zh
     * 文本缓存模式, 该模式只支持系统字体。
     */
    @property({ tooltip: '文本缓存模式, 该模式只支持系统字体', type: CacheMode })
    get cacheMode() {
        return this._cacheMode;
    }
    set cacheMode(value: CacheMode) {
        if (this._cacheMode === value) {
            return;
        }
        this._cacheMode = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * The maximize width of the RichText.
     *
     * @zh
     * 富文本的最大宽度。
     */
    @property({ tooltip: '富文本的最大宽度' })
    get maxWidth() {
        return this._maxWidth;
    }

    set maxWidth(value) {
        if (this._maxWidth === value) {
            return;
        }

        this._maxWidth = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * Line Height of RichText.
     *
     * @zh
     * 富文本行高。
     */
    @property({ tooltip: '富文本行高' })
    get lineHeight() {
        return this._lineHeight;
    }

    set lineHeight(value) {
        if (this._lineHeight === value) {
            return;
        }

        this._lineHeight = value;
        this._updateAllRichText();
    }

    /**
     * 超链接文本是否展示下划线
     */
    @property({ tooltip: '超链接文本展示下划线' })
    get showLinkLine() {
        return this._showLinkLine;
    }

    set showLinkLine(value) {
        if (this._showLinkLine === value) {
            return;
        }
        this._showLinkLine = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * The image atlas for the img tag. For each src value in the img tag, there should be a valid spriteFrame in the image atlas.
     *
     * @zh
     * 对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。
     */
    @property({ tooltip: '对于img标签里面的src属性名称，都需要在imageAtlas', type: SpriteAtlas })
    get imageAtlas() {
        return this._imageAtlas;
    }

    set imageAtlas(value) {
        if (this._imageAtlas === value) {
            return;
        }

        this._imageAtlas = value;
        this._updateAllRichText();
    }

    /**
     * @en
     * Once checked, the RichText will block all input events (mouse and touch) within
     * the bounding box of the node, preventing the input from penetrating into the underlying node.
     *
     * @zh
     * 选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。
     */
    @property({ tooltip: '选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点' })
    get handleTouchEvent() {
        return this._handleTouchEvent;
    }

    set handleTouchEvent(value) {
        if (this._handleTouchEvent === value) {
            return;
        }
        this._handleTouchEvent = value;
        this._updateAllRichText();
    }


    public static HorizontalAlign = HorizontalTextAlignment;
    public static VerticalAlign = VerticalTextAlignment;

    @property({ serializable: true })
    protected _fontColor: Color = Color.WHITE.clone();
    @property({ serializable: true })
    protected _lineHeight = 40;
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

    @property({ serializable: true })
    protected _showLinkLine = true;

    protected _textArray: IHtmlTextParserResultObj[] = [];
    protected _linesWidth: number[] = [];
    protected _lineCount = 1;
    protected _labelWidth = 0;
    protected _labelHeight = 0;
    protected _layoutDirty = true;
    protected _lineOffsetX = 0;
    protected _labelChildrenNum = 0; // only ISegment

    get lineCount() {
        return this._lineCount;
    }
    get linesWidth() {
        return this._linesWidth;
    }

    /**
     * 排列方向:目前只支持从上到下
     */
    @property({ type: _HTTP_RICHTXT_DIRECTOR_, tooltip: '排列方向:目前只支持 VERTICAL垂直' })
    get align(): _HTTP_RICHTXT_DIRECTOR_ {
        return this._align;
    }
    set align(num: _HTTP_RICHTXT_DIRECTOR_) {
        this._align = num;
        this.reloadLayout();
    }

    @property({ type: Node, tooltip: '用于远端图片加载的过渡节点' })
    get transitionLoad() {
        return this._transitionLoad;
    };
    set transitionLoad(node) {
        this._transitionLoad = node;
    };

    @property({ type: CCFloat, tooltip: '远端图片加载的过渡节点的缩放比例(相对于原节点 默认1倍)', visible: function () { return this._transitionLoad != null; } })
    get transitionLoadScale() {
        return this._transitionLoadScale;
    };
    set transitionLoadScale(num) {
        this._transitionLoadScale = num;

    };


    @property({
        type: RichTextTouchEvent, tooltip: '点击监听的回调函数', visible: function () { return this._handleTouchEvent; }
    })
    protected clickEventList: RichTextTouchEvent[] = [];



    @property({ serializable: true, visible: function () { return false; } })
    protected _string = '<color=#00ff00>Rich</color><color=#0fffff>Text</color>';
    @property({ serializable: true, type: _HTTP_RICHTXT_DIRECTOR_, visible: function () { return false; } })
    protected _align = _HTTP_RICHTXT_DIRECTOR_.VERTICAL;


    @property({ type: Layout, tooltip: 'Layout', visible: function () { return false; } })
    protected layout: Layout = null;

    @property({ type: RichText, tooltip: '富文本组件', visible: function () { return false; } })
    protected richText: RichText = null;

    @property({ serializable: true, tooltip: '图片的对齐方式', visible: function () { return false; } })
    protected _spriteHorizontalAlign = HorizontalTextAlignment.CENTER;

    @property({ serializable: true, tooltip: '用于远端图片加载的过渡节点', visible: function () { return false; } })
    protected _transitionLoad: Node = null;

    @property({ serializable: true, tooltip: '远端图片加载的过渡节点的缩放比例(相对于原节点 默认1倍)', visible: function () { return false; } })
    protected _transitionLoadScale = 1.0;


    /** 富文本缓存队列 */
    protected richTextCache: Array<Node> = [];
    /** 图片缓存队列 */
    protected spriteCache: Array<Node> = [];
    /** 加载用的图片缓存队列 */
    protected nodeLoadCache: Array<Node> = [];

    protected nameRichText = "RichText";
    protected nameSprite = "Sprite";
    protected loadNodeKey = "_remote_load_";

    /** 本地和远端缓存 */
    public extDependList: string[] = [];
    public remoteImgList: string[] = [];
    public remoteSkelDataList: string[] = [];

    protected onLoad(): void {
        this.reloadLayout();
        this.updateRenderData();
        this._updateAllRichText();
        this._updateAllSprite();
    }
    protected reloadLayout() {
        this.layout = this.node.getComponent(Layout);
        if (!this.layout) {
            this.node.addComponent(Layout);
            this.layout = this.node.getComponent(Layout);

            this.layout.resizeMode = 2;
            this.layout.affectedByScale = true;
        }
        //@ts-ignore
        this.layout.type = this.align;

    }
    protected _getNewRichText(): RichText {
        let richNode: Node = this.richTextCache[0];
        let richText: RichText = null;
        this.richTextCache.splice(0, 1);
        if (!richNode) {
            richNode = this._getNode(this.nameRichText);
            richNode.addComponent(RichText);
            richText = richNode.getComponent(RichText);

            this.node.addChild(richNode);
        } else {
            richText = richNode.getComponent(RichText);
            if (!richText) {
                console.warn("Not RichText Comp")
                return null;
            }
        }
        this._updateRichTextSize(richNode);
        richText.horizontalAlign = this._horizontalAlign;
        richText.fontSize = this.fontSize;
        richText.fontFamily = this.fontFamily;
        richText.font = this.font;
        richText.fontColor = this.fontColor;
        richText.useSystemFont = this.useSystemFont;
        richText.cacheMode = this.cacheMode;
        richText.maxWidth = this.maxWidth;
        richText.lineHeight = this.lineHeight;
        richText.imageAtlas = this.imageAtlas;
        richText.handleTouchEvent = this.handleTouchEvent;

        return richText;
    }
    protected _getNewSprite(): Sprite {
        let spriteNode: Node = this.spriteCache[0];
        let sprite: Sprite = null;
        let widget: Widget = null;
        this.spriteCache.splice(0, 1);
        let spriteSize = this._getSpriteDefaultSize();

        if (!spriteNode) {
            spriteNode = this._getNode(this.nameSprite, spriteSize.width, spriteSize.height);
            spriteNode.addComponent(Sprite);
            spriteNode.addComponent(Widget)
            sprite = spriteNode.getComponent(Sprite);
            widget = spriteNode.getComponent(Widget);
            this.node.addChild(spriteNode);
        } else {
            spriteNode.getComponent(UITransform).setContentSize(spriteSize);
            sprite = spriteNode.getComponent(Sprite);
            if (!sprite) {
                console.warn("Not Sprite Comp")
                return null;
            }
        }

        sprite = spriteNode.getComponent(Sprite);
        sprite.sizeMode = 2;
        sprite.type = 0;
        sprite.trim = true;
        sprite.spriteFrame = null;
        sprite.enabled = true;
        this._updateSpritePos(spriteNode);
        return sprite;
    }
    /** 获取新图片默认尺寸 */
    protected _getSpriteDefaultSize(): Size {
        //设置图片默认尺寸
        let width = 0;
        let height = 0;
        if (this.transitionLoad) {
            let realSize = { width: 0, height: 0 };
            if (!this.transitionLoad["realSize"]) {
                let uiTrans = this.transitionLoad.getComponent(UITransform);
                let realWidth = uiTrans.width * this.transitionLoadScale;
                let realHeight = uiTrans.height * this.transitionLoadScale;
                this.transitionLoad["realSize"] = { width: realWidth, height: realHeight };
            }
            realSize = this.transitionLoad["realSize"];

            if (this.align == _HTTP_RICHTXT_DIRECTOR_.HORIZONTAL) {
                height = realSize.height > 0 ? realSize.height : 100;
                width = realSize.width;
            } else if (this.align == _HTTP_RICHTXT_DIRECTOR_.VERTICAL) {
                width = realSize.width > 0 ? realSize.width : 100;
                height = realSize.height;
            }
            width = width + 30;
            height = height + 30;
        }
        return new Size(width, height);
    }


    protected _getNewRemoteLoadNode() {
        let node: Node = this.nodeLoadCache[0];
        this.nodeLoadCache.splice(0, 1);
        if (!node) {

            if (this._transitionLoad) {
                node = instantiate(this._transitionLoad);
            }
        }
        if (node) {
            let uiTrans = this._transitionLoad.getComponent(UITransform)
            node["realSize"] = uiTrans.contentSize.clone();
            node["realScale"] = node.scale.clone();

            let widget = node.getComponent(Widget);
            if (!widget) {
                node.addComponent(Widget);
                widget = node.getComponent(Widget);
            }
            widget.isAlignHorizontalCenter = true;
            widget.horizontalCenter = 0;
        }
        return node;
    }

    protected _updateRichTextSize(node: Node) {
        if (!node) {
            return;
        }
        let uiTrans = node.getComponent(UITransform);
        uiTrans.width = this.maxWidth;
        uiTrans.height = 0
    }
    protected _updateSpriteSize(node: Node) {
        if (!node) {
            return;
        }
        let uiTrans = node.getComponent(UITransform);
        uiTrans.width = 0;
        uiTrans.height = 0
    }
    /** 回收所有节点 */
    protected _recoveryAllChild() {
        for (let i = (this.node.children.length - 1); i >= 0; i--) {
            let node = this.node.children[i];
            this._recoveryChild(node);
        }
    }
    /** 回收节点 */
    protected _recoveryChild(node: Node) {
        if (!node) { return; }
        if (node[this.loadNodeKey]) {
            this._setRemoteLoadCache(node[this.loadNodeKey]);
        }
        if (node.name == this.nameRichText) {
            this._setRichTextCache(node);
        } else if (node.name == this.nameSprite) {
            this._setSpriteCache(node);
        } else {
            node.destroy();
        }
    }
    /** 更新Layout */
    protected _updateLayout() {
        if (!this.layout) {
            this.reloadLayout()
        }
        this.layout.affectedByScale = true;
        this.layout.enabled = true;
        this.layout.alignHorizontal = false;
        this.layout.alignVertical = false;
        this.layout.updateLayout();
    }
    private _setRichTextCache(nodeRichText: Node) {
        if (nodeRichText && nodeRichText.isValid) {
            let richText = nodeRichText.getComponent(RichText);
            if (richText) {
                if (nodeRichText.parent) {
                    Tween.stopAllByTarget(nodeRichText);
                    nodeRichText.removeFromParent();
                }
                this.richTextCache.push(nodeRichText)
            }
        }
    }
    private _setSpriteCache(nodeSprite: Node) {
        if (nodeSprite && nodeSprite.isValid) {
            let sprite = nodeSprite.getComponent(Sprite);
            nodeSprite.targetOff(this);
            if (sprite) {
                if (nodeSprite.parent) {
                    Tween.stopAllByTarget(nodeSprite);
                    nodeSprite["url"] = null
                    nodeSprite.removeFromParent();
                }
                this.spriteCache.push(nodeSprite);
            }
        }
    }
    private _setRemoteLoadCache(node: Node) {
        if (node && node.isValid) {
            if (node.parent) {
                Tween.stopAllByTarget(node);
                node.parent[this.loadNodeKey] = null
                node.removeFromParent();
                this.nodeLoadCache.push(node);
            }
        }
    }

    private _getNode(name?: string, width = 0, height = 0) {
        let node = new Node(name);
        node.layer = this.node.layer;

        let uiTrans: UITransform = node.addComponent(UITransform);
        uiTrans.width = width;
        uiTrans.height = height;
        uiTrans.anchorPoint = new Vec2(0.5, 0.5);
        uiTrans.enabled = true;
        return node;
    }

    /** html Imgae标签转换成对象 */
    private _htmlImageToObj(htmlString) {
        let obj = {};
        // 匹配属性名="属性值"的正则表达式
        let regex = /(\w+)\s*=\s*"([^"]*)"/g;
        let match;
        // 使用正则表达式来提取属性名和属性值，并存储在对象中
        while (match = regex.exec(htmlString)) {
            let key = match[1];
            let value = match[2];
            obj[key] = value;
        }
        return obj;
    }

    private _htmlStrToArray(attribute: string) {
        if (!attribute) {
            return [];
        }
        //左右空格
        attribute = attribute.trim();
        if (!attribute) {
            return [];
        }
        // <右边 >左边空格
        // attribute = attribute.replace(/<\s*(\S)\s*(.*?)\s*(\S)\s*>/g, '<$1$2$3>');

        //=左右空格
        attribute = attribute.replace(/\s*=\s*/g, '=');

        let content = "";
        let realList = []
        let list = attribute.split(/(<\s*img[^>]*>)/);

        list.forEach((str, k) => {
            if (this._isHttpImage(list[k])) {
                if (content.length > 0) {
                    realList.push(this._replaceLabelA(content));
                    content = "";
                }
                realList.push(list[k]);
            } else {
                content = content + list[k];
                if (k == (list.length - 1)) {
                    if (content.length > 0) {
                        realList.push(this._replaceLabelA(content));
                        content = "";
                    }
                }
            }
        })
        if (realList.length == 0) {
            realList.push(attribute);
        }
        return realList;
    }
    private _replaceLabelA(str: String) {
        if (str && str.length > 0) {
            // 使用正则表达式替换
            let result = str.replace(/<\/?a([^>]*)>/g, (match, p1) => {
                // 判断是开始标签还是结束标签，并生成对应的<on>标签
                if (match.startsWith('</')) {
                    return '</on>';
                } else {
                    if (p1 && p1.length > 0) {
                        // 使用正则表达式替换 href 属性为 param 属性
                        let hrefUrl = p1.replace(/href\s*=\s*(".*?"|'.*?')/g, 'param=$1');
                        if (hrefUrl.includes("click=")) {
                            return '<on' + hrefUrl + '>';
                        }
                        let onClick = " click='onClickLabelA' "
                        return '<on' + onClick + hrefUrl + '>';
                    }
                    return '<on' + p1 + '>';
                }
            });
            if (this._showLinkLine) {
                result = result.replace(/(<on[^>]*>)(.*?)(<\/on>)/g, '<u>$1$2$3</u>');
            }
            return result;
        }
        return str;
    }

    private _isHttpImage(str) {
        let regex = /src\s*=\s*(?:"|')[\s]*https?:\/\//;
        return regex.test(str);
    }
    /** 更新所有富文本 */
    protected _updateAllRichText() {
        this.node.children.forEach((richNode: Node, index) => {
            if (richNode.name == this.nameRichText) {
                let richText = richNode.getComponent(RichText);
                richText.horizontalAlign = this.horizontalAlign;
                richText.fontSize = this.fontSize;
                richText.fontFamily = this.fontFamily;
                richText.font = this.font;
                richText.fontColor = this.fontColor;
                richText.useSystemFont = this.useSystemFont;
                richText.cacheMode = this.cacheMode;
                richText.maxWidth = this.maxWidth;
                richText.lineHeight = this.lineHeight;
                richText.imageAtlas = this.imageAtlas;
                richText.handleTouchEvent = this.handleTouchEvent;
            }
        })
    }
    /** 更新所有图片 */
    protected _updateAllSprite() {
        this.node.children.forEach((spriteNode: Node, index) => {
            if (spriteNode.name == this.nameSprite) {
                this._updateSpritePos(spriteNode);
            }
        })
    }

    /** 更新单张图片位置 */
    protected _updateSpritePos(spriteNode: Node) {
        if (!spriteNode) {
            return;
        }
        let widget = spriteNode.getComponent(Widget);
        if (widget) {
            if (this._spriteHorizontalAlign == HorizontalTextAlignment.CENTER) {
                widget.isAlignHorizontalCenter = true;
                widget.horizontalCenter = 0;
            } else if (this._spriteHorizontalAlign == HorizontalTextAlignment.LEFT) {
                widget.isAlignRight = false;
                widget.isAlignLeft = true;
                widget.left = 0;
            } else if (this._spriteHorizontalAlign == HorizontalTextAlignment.RIGHT) {
                widget.isAlignLeft = false;
                widget.isAlignRight = true;
                widget.right = 0;
            }
        }
    }

    /** 更新界面显示 */
    public updateRenderData() {
        let array = this._htmlStrToArray(this._string);
        let self = this;
        for (let i = 0; i < array.length; i++) {
            let text = array[i];

            let newTextArray = _htmlTextParser.parse(text);
            let textArray = newTextArray.slice();

            let node = this.node.children[i];
            let isSprite = false;

            if (this._isHttpImage(text)) {
                let obj = this._htmlImageToObj(text);
                let sprite: Sprite;
                if (!node || !node.getComponent(Sprite)) {
                    sprite = this._getNewSprite();
                    node = sprite.node;
                    node.setSiblingIndex(i);
                } else {
                    sprite = node.getComponent(Sprite)
                }
                node.targetOff(this);
                isSprite = true;

                if (obj["src"]) {
                    if (node["url"] != obj["src"]) {
                        sprite.spriteFrame = null;
                        sprite.sizeMode = 2;
                        //显示图片加载
                        if (this._transitionLoad) {
                            this.showRemoteLoad(node);
                        } else {
                            this.recoverRemoteLoad(node);
                        }
                        this._getRemoteSprite(sprite, obj["src"], () => {
                            self.recoverRemoteLoad(node);
                            node["realSize"] = node.getComponent(UITransform).contentSize.clone();

                            //自定义尺寸
                            if (obj["width"] && obj["height"]) {
                                if (!isNaN(Number(obj["width"])) && !isNaN(Number(obj["height"]))) {
                                    let width = Number(obj["width"]);
                                    let height = Number(obj["height"])
                                    if (width > 0 && height > 0) {
                                        self._adaptiveSpriteSize(node, node["realSize"], new Size(width, height));
                                    }
                                }
                            }
                            self._updateLayout();
                            self._updateSpritePos(node);
                        });
                    } else {
                        //自定义尺寸
                        if (obj["width"] && obj["height"] && node["realSize"]) {
                            let width = Number(obj["width"]);
                            let height = Number(obj["height"])
                            if (width > 0 && height > 0) {
                                self._adaptiveSpriteSize(node, node["realSize"], new Size(width, height));
                            }
                        }
                        self._updateLayout();
                        self._updateSpritePos(node);
                    }
                } else {
                    node.targetOff(this);
                    sprite.spriteFrame = null;
                    sprite.sizeMode = 2;
                }
            } else {
                let richText: RichText;
                if (!node || !node.getComponent(RichText)) {
                    richText = this._getNewRichText();
                    node = richText.node;
                    node.setSiblingIndex(i);
                } else {
                    richText = node.getComponent(RichText)
                }
                richText.string = text;
            }

            //------------------------------监听-------------------------------
            let uiTrans = node.getComponent(UITransform);
            uiTrans["__customEvents"] = uiTrans["__customEvents"] || [];
            if (uiTrans["__customEvents"] && uiTrans["__customEvents"].length > 0) {
                for (let i = 0; i < uiTrans["__customEvents"].length; i++) {
                    uiTrans[uiTrans["__customEvents"][i]] = null;
                }
                uiTrans["__customEvents"] = [];
            }


            for (let i = 0; i < textArray.length; i++) {
                let element = textArray[i];

                let clickFun = null;
                let clickParam = null;
                if (element.style && element.style.event) {
                    clickFun = element.style.event.click;
                    clickParam = element.style.event.param;
                }
                if (clickFun) {
                    if (isSprite) {
                        node.targetOff(this);
                        node.on(NodeEventType.TOUCH_END, (event) => {
                            self.onClickElementEvent(event, clickFun, clickParam);
                        }, this)
                        uiTrans["__customEvents"].push(clickFun);
                    } else {

                        let minIndex = 0;
                        for (let i = 0; i < node.children.length; i++) {
                            let label = node.children[i].getComponent(Label);
                            if (label) {
                                label["__customStyle"] = {};
                                label.node.targetOff(this);

                                for (let m = minIndex; m < textArray.length; m++) {
                                    if (textArray[m].text == label.string) {
                                        label["__customStyle"] = textArray[m].style;
                                        minIndex = m;
                                        break;
                                    }
                                }

                                let labelClick = null;
                                let labelClickParam = null;

                                if (label["__customStyle"].event) {
                                    labelClick = label["__customStyle"].event.click;
                                    labelClickParam = label["__customStyle"].event.param;
                                }
                                if (labelClick) {
                                    label.node.on(NodeEventType.TOUCH_END, (event) => {
                                        self.onClickElementEvent(event, labelClick, labelClickParam);
                                    }, this)
                                }

                            }

                        }
                    }

                }
            }
        }
        let max = this.node.children.length;
        if (max > array.length) {
            for (let i = (max - 1); i >= array.length; i--) {
                this._recoveryChild(this.node.children[i]);
            }
        }
    }
    /** 适配图片尺寸 */
    protected _adaptiveSpriteSize(node: Node, realSize: Size, newSize: Size) {
        let sprite = node.getComponent(Sprite);
        if (!sprite) {
            return;
        }
        let scale = 1;
        let size = realSize.clone();
        if (this.align == _HTTP_RICHTXT_DIRECTOR_.VERTICAL) {//以宽为主进行缩放
            scale = newSize.width / size.width;

            size.width = newSize.width;
            size.height = size.height * scale;
        } else if (this.align == _HTTP_RICHTXT_DIRECTOR_.HORIZONTAL) {//以高为主进行缩放
            scale = newSize.height / size.height;
            size.width = size.width * scale;
            size.height = newSize.height;
        }
        sprite.sizeMode = 0;
        node.getComponent(UITransform).setContentSize(size)
    }

    /** 显示远端加载节点 */
    protected showRemoteLoad(pNode: Node, pSize: Size = null) {
        if (!pNode || !this._transitionLoad) { return; }
        let item: Node = pNode[this.loadNodeKey];
        if (!pSize) {
            let size = pNode.getComponent(UITransform).contentSize.clone();
            let scale = pNode.scale;
            pSize = new Size(size.width * scale.x, size.height * scale.y);
        }
        if (!item) {
            item = this._getNewRemoteLoadNode();
            if (!item) { return; }
            pNode.addChild(item);
            pNode[this.loadNodeKey] = item;
        }

        Tween.stopAllByTarget(item);
        //适配
        let itemSize: Size = item["realSize"];
        let itemScale: Vec3 = item["realScale"];
        if (!itemSize) {
            itemSize = item.getComponent(UITransform).contentSize.clone();
            item["realSize"] = itemSize;
        }
        if (!itemScale) {
            itemScale = item.scale.clone();
            item["realScale"] = itemScale;
        }
        item.scale = new Vec3(itemScale.x * this.transitionLoadScale, itemScale.y * this.transitionLoadScale, itemScale.z);

        //动画:转圈
        item.active = true;
        item.setPosition(0, 0, 0);
        let widget = item.getComponent(Widget);
        if (widget) {
            widget.isAlignHorizontalCenter = true;
            widget.horizontalCenter = 0;
            widget.updateAlignment();
        }
        tween(item).set({ angle: 0 }).to(1, { angle: -360 }).union().repeatForever().start();
    }
    /** 回收远端加载节点 */
    protected recoverRemoteLoad(pNode: Node) {
        if (!pNode) { return; }
        let item: Node = pNode[this.loadNodeKey];
        if (item) {
            this._setRemoteLoadCache(item);
        }
    }

    protected onClickLabelA(event, param, funcName) {
        console.warn("点击了标签 打开网页", param)
        if (!param || param.includes("http") == -1) {
            return;
        }
        sys.openURL(param);
    }
    /** 元素点击回调 */
    protected onClickElementEvent(event, funcName, param = null) {
        if (!this._handleTouchEvent || !funcName) {
            return;
        }
        console.log("元素点击了", funcName, param)
        if (funcName == "onClickLabelA") {
            this.onClickLabelA(event, param, funcName);
            return;
        }
        for (let i = 0; i < this.clickEventList.length; i++) {
            if (this.clickEventList[i].key == funcName && this.clickEventList[i].call) {
                if (this.clickEventList[i].call.handler) {
                    this.clickEventList[i].call.emit([event, param, funcName])
                }
            };
        }
    }

    /**
     * 加载Http图片(支持远端)
     * @param sprite 要设置头像的icon
     * @param url 图片地址（http://... 或 prop/1.png）
     * @param sucCallFunc 成功的回调
     * @returns 
     */
    private _getRemoteSprite(sprite: Sprite, url: string = null, sucCallFunc: Function = null) {
        if (url == null || url.length == 0) {
            return;
        }
        if (sprite && sprite.node) {
            sprite.node["url"] = url;
        }
        let self = this;
        let callFunc = (res: SpriteFrame) => {
            if (isValid(self) && sprite.node.parent) {
                if (sprite && res && sprite.node && sprite.node.isValid == true) {
                    if (sprite instanceof Sprite) {
                        if (sprite.node["url"] != url) {
                            return;
                        }
                        //@ts-ignore
                        sprite.spriteFrame = res
                        if (sucCallFunc) {
                            sucCallFunc();
                        }
                    }
                }
            }

        }
        let doFunc = () => {
            AssetsLoader.instance.loadRemoteImg(url, { ext: '.jpg' }, (err: Error | null, res: SpriteFrame) => {
                if (err) {
                    return;
                }
                //@ts-ignore
                callFunc(res, true);
            }, self)
        }
        if (url.toLocaleLowerCase().indexOf("http") == 0 || url.toLocaleLowerCase().indexOf("https") == 0) {
            doFunc();
        }
    }
    /** 释放所有远端加载图片的内存 */
    protected releaeRemoteRes(uuid?: string) {
        if (uuid) {
            let index = this.remoteImgList.indexOf(uuid);
            if (index != -1) {
                AssetsLoader.instance.releaseSpriteFrame(uuid);
                this.remoteImgList.splice(index, 1);
            }
        } else {
            for (let i = 0; i < this.remoteImgList.length; i++) {
                AssetsLoader.instance.releaseSpriteFrame(this.remoteImgList[i]);
            }
            this.remoteImgList = [];
        }
    }

    onDestroy() {
        this.releaeRemoteRes();
    }
}


