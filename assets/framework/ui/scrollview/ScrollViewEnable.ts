import { Component, Node, ScrollView, Size, UITransform, _decorator } from "cc";

const { ccclass, property, menu } = _decorator;

@ccclass("ScrollViewEnable")
/**
 * Content固定大小无自适应时  判断是否开启ScrollView  组件 
 * 
*/
//编辑器识别菜单项目
@menu('UI/scrollview/ScrollViewEnable')
export default class ScrollViewEnable extends Component {

    /** 滚动容器初始值 */
    private _initScrollowSize: Size = null;

    private scrollView: ScrollView = null;

    private contentView: Node = null;

    onLoad(): void {

        if (this.initGetScrollView() == false) {
            return;
        };
        this.contentView = this.scrollView.content;
        this.regEvent();

        this.updateScrollViewEnable();
    }

    initGetScrollView() {
        this.scrollView = this.node.getComponent(ScrollView);
        if (!this.scrollView || this.scrollView.enabled == false) {
            return false;
        }
        let uiTransform = this.scrollView.node.getComponent(UITransform);
        if (!uiTransform) {
            return false;
        }
        // this._initScrollowSize = new Size(uiTransform.width, uiTransform.height);

        return true;
    }

    /** 注册事件 */
    regEvent() {
        this.contentView.on(Node.EventType.CHILD_ADDED, this.updateScrollViewEnable, this);
        this.contentView.on(Node.EventType.CHILD_REMOVED, this.updateScrollViewEnable, this);
        this.contentView.on(Node.EventType.NODE_DESTROYED, this.offEvent, this);
    }
    /** 移除事件 */
    offEvent() {
        this.contentView.off(Node.EventType.CHILD_ADDED, this.updateScrollViewEnable, this);
        this.contentView.off(Node.EventType.CHILD_REMOVED, this.updateScrollViewEnable, this);
        this.contentView.off(Node.EventType.NODE_DESTROYED, this.offEvent, this);
    }
    /** 刷新滚动容器UI状态 */
    public updateScrollViewEnable() {
        if (!this.scrollView) {
            if (this.initGetScrollView() == false) {
                return;
            };
            this.contentView = this.scrollView.content;
        }

        let self = this;
        this.scheduleOnce(() => {
            if (self.node.isValid == false) {
                return;
            }
            let uiTransform = this.scrollView.node.getComponent(UITransform);
            if (!uiTransform) {
                return;
            }
            if (!self._initScrollowSize) {
                self._initScrollowSize = new Size(uiTransform.width, uiTransform.height);
            }

            let contentHeight = self.contentView.getComponent(UITransform).height;
            if (contentHeight > self._initScrollowSize.height) {
                self.scrollView.enabled = true;
            } else {
                self.scrollView.enabled = false;
            }
        }, 0.02);
    }

}