import { EventHandler, Node, Prefab, ScrollView, Widget, _decorator, instantiate } from 'cc';
const { ccclass, property, menu } = _decorator;

/**
 * 简易版scrollview 只支持在变更数据时复用node
 */
@ccclass('SimpleScrollView')
//方便编辑器识别的菜单项目
@menu('UI/scrollview/SimpleScrollView')
export class SimpleScrollView extends ScrollView {

    @property({
        type: Node, tooltip: '可复制的子节点',
        visible: function (this: SimpleScrollView) {
            return this.clonePrefab == null;
        }
    })
    cloneNode!: Node;
    @property({
        type: Prefab, tooltip: '可复制的子节点预制体',
        visible: function (this: SimpleScrollView) {
            return this.cloneNode == null;
        }
    })
    clonePrefab!: Prefab;

    @property({
        type: EventHandler, tooltip: "滚动到顶部的回调",
        visible: function (this: SimpleScrollView) {
            return this.vertical == true;
        }
    })
    scrollToTopEvents: EventHandler[] = [];

    @property({
        type: EventHandler, tooltip: "滚动到底部的回调",
        visible: function (this: SimpleScrollView) {
            return this.vertical == true;
        }
    })
    scrollToBottomEvents: EventHandler[] = [];

    @property({
        type: EventHandler, tooltip: "滚动到顶部的回调",
        visible: function (this: SimpleScrollView) {
            return this.horizontal == true;
        }
    })
    scrollToLeftEvents: EventHandler[] = [];

    @property({
        type: EventHandler, tooltip: "滚动到底部的回调",
        visible: function (this: SimpleScrollView) {
            return this.horizontal == true;
        }
    })
    scrollToRightEvents: EventHandler[] = [];

    @property({ type: EventHandler, tooltip: '节点数量有变更时的刷新事件' }
    )
    itemRefreshEvents: EventHandler[] = [];

    private nodeView: Node = null;
    /** 可否点击移动 */
    private _canTouchMove: boolean = true;
    /** 当前数据的长度 */
    private _itemTotal: number = 0;
    /** 节点缓存池 */
    private _node_pool: Array<Node> = [];

    /** 数据长度 */
    get itemTotal(): number { return this._itemTotal }
    /** 边缘数据 */
    public sideArr: { viewLeftSide?: number, viewRightSide?: number, viewBottomSide?: number, viewTopSide?: number } = {};

    private isOnload = false;
    onLoad() {
        this.nodeView = this.content.parent;
        this.regEventListener();
        this.refreshSize();
        this.isOnload = true;
        if (this._itemTotal > 0) {
            this.setTotal(this.itemTotal);
        }
    }

    /** 注册事件 */
    private regEventListener() {
        if (this.scrollEvents.length > 0) {
            return;
        }
        this.node.on(ScrollView.EventType.SCROLL_TO_TOP, this.onScrollToTop, this);
        this.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.onScrollToBottom, this);
        this.node.on(ScrollView.EventType.SCROLL_TO_LEFT, this.onScrollToLeft, this);
        this.node.on(ScrollView.EventType.SCROLL_TO_RIGHT, this.onScrollToRight, this);
    }

    /** 取消注册事件 */
    private cancleEventListener() {
        this.node.off(ScrollView.EventType.SCROLL_TO_TOP, this.onScrollToTop, this);
        this.node.off(ScrollView.EventType.SCROLL_TO_BOTTOM, this.onScrollToBottom, this);
        this.node.off(ScrollView.EventType.SCROLL_TO_LEFT, this.onScrollToLeft, this);
        this.node.off(ScrollView.EventType.SCROLL_TO_RIGHT, this.onScrollToRight, this);
    }
    /**
     * 更新item数量
     * @param count 数量
     */
    public setTotal(count: number) {
        if (!this.isOnload) {
            this._itemTotal = count;
            return;
        }
        this._canTouchMove = false;

        let oldCount = this.content.children.length;
        let offset = count - oldCount;
        this._itemTotal = count;
        this.refreshItems(offset);

        this._canTouchMove = true;
    }

    /** 刷新大小 */
    private refreshSize() {
        if (this.node.getComponent(Widget)) {
            this.node.getComponent(Widget).updateAlignment();
        }
        if (this.nodeView.getComponent(Widget)) {
            this.nodeView.getComponent(Widget).updateAlignment();
        }

        //显示区域左边缘
        let viewLeftSide = this.nodeView.worldPosition.x - (this.view.width * this.view.anchorX);
        //显示区域右边缘
        let viewRightSide = this.nodeView.worldPosition.x + (this.view.width * (1 - this.view.anchorX));
        //显示区域下边缘
        let viewBottomSide = this.nodeView.worldPosition.y - (this.view.height * (1 - this.view.anchorY));
        //显示区域上边缘
        let viewTopSide = this.nodeView.worldPosition.y + (this.view.height * this.view.anchorY);
        this.sideArr = {
            viewLeftSide, viewRightSide, viewBottomSide, viewTopSide
        };
    }


    /** 当数据长度发生变化时 计算item应该怎么排列 */
    protected refreshItems(offset: number) {
        if (offset < 0) {//少了
            for (let i = 0; i < -offset; i++) {
                let child = this.content.children[this.content.children.length - 1];
                if (child) {
                    this.removeItem(child);
                }
            }
        } else {
            for (let i = 0; i < offset; i++) {
                this.addItem();
            }
        }
        //通知节点刷新
        for (let i = 0; i < this.content.children.length; i++) {
            let child = this.content.children[i];
            child["__index"] = i;
            this.notifyRefreshItem(child);
            child.active = true;
        }
    }
    /** 移除节点 */
    protected addItem() {
        let node: Node = this._node_pool.shift();
        if (!node) {
            node = this.getNewNode();
        }
        node["__index"] = this.content.children.length;
        this.content.addChild(node);
        node.active = false;
        return node;
    }
    /** 获取新节点 */
    protected getNewNode(): Node {
        if (this.cloneNode) {
            return instantiate(this.cloneNode);
        }
        return instantiate(this.clonePrefab);
    }
    /** 移除节点 */
    private removeItem(child: Node) {
        if (!child || child.isValid == false) {
            return;
        }
        child.removeFromParent();
        child["__index"] = -1;
        this._node_pool.push(child);
    }

    /** 通知给定的node刷新数据 */
    protected notifyRefreshItem(target: Node) {
        EventHandler.emitEvents(this.itemRefreshEvents, target, (target as any)['__index'])
    }

    /** 滚动到底部的监听 */
    protected onScrollToBottom(...args: any[]) {
        if (this.scrollToBottomEvents && this.scrollToBottomEvents.length > 0) {
            EventHandler.emitEvents(this.scrollToBottomEvents, ...args);
        }
    }
    /** 滚动到顶部的监听 */
    protected onScrollToTop(...args: any[]) {
        if (this.scrollToTopEvents && this.scrollToTopEvents.length > 0) {
            EventHandler.emitEvents(this.scrollToTopEvents, ...args);
        }
    }
    /** 滚动到左边的监听 */
    protected onScrollToLeft(...args: any[]) {
        if (this.scrollToLeftEvents && this.scrollToLeftEvents.length > 0) {
            EventHandler.emitEvents(this.scrollToLeftEvents, ...args);
        }
    }
    /** 滚动到右边的监听 */
    protected onScrollToRight(...args: any[]) {
        if (this.scrollToRightEvents && this.scrollToRightEvents.length > 0) {
            EventHandler.emitEvents(this.scrollToRightEvents, ...args);
        }
    }


}


