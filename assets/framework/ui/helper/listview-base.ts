/*
 * @Description: IListView - 列表工具基类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @Reference: 
 */
import { Node, Prefab, ScrollView, Tween, TweenEasing, UITransform, Vec3, game, instantiate, isValid, log, math, tween, v3, warn } from 'cc';
import { ETw } from "../../common/ETw";
import { UIComponentBase } from "../component/UIComponentBase";
import { LayoutUtil } from "./layout_utils";
export interface INode {
    parent: Node | null;
    setPosition: Function;
    width?: number;
    height?: number;
    active: boolean;
    scale: Vec3;
    position: Vec3;
    destroy: Function;
}
type EffectType = 'none' | '' | TweenEasing;
type EffectFunction<T extends INode> = (v: T) => void;
export class IListView<T extends INode> {

    protected scrollview: ScrollView;
    protected content: Node;
    protected item_tpl: Node;
    protected _node_pool: T[];

    protected dir: number;
    public width: number;
    public height: number;
    protected gap_x: number;
    protected gap_y: number;
    protected padding_begin: number;
    protected padding_end: number;
    public row: number;
    public col: number;
    protected row_max: number;
    protected col_max: number;
    protected item_width: number;
    protected item_height: number;
    protected item_anchorX: number;
    protected item_anchorY: number;
    protected item_scale: Vec3;
    protected auto_render: boolean;
    protected auto_center: boolean;
    protected cb_host: UIComponentBase;
    protected item_setter: (item: T, data: any, index: number) => void;
    protected item_preSetter: (data: any, index: number) => ListItem<T>;
    protected recycle_cb: (item: T) => void;
    protected select_cb: (data: any, index: number) => void;
    protected select_setter: (item: T, is_select: boolean, index: number) => void;
    protected scroll_to_end_cb: () => void;
    protected scroll_to_left_cb: (sv: ScrollView) => void;
    protected on_scroll_to_top_cb: (sv: ScrollView) => void;

    protected auto_scrolling: boolean;
    protected auto_arrange: boolean;
    protected items: ListItem<T>[];
    protected _start_index!: number;
    protected _stop_index!: number;
    protected _datas: any[];
    protected _selected_index: number;
    protected _cache_node: number;//前后各多缓存几个
    protected _renderIdx: number;//前后各多缓存几个
    // protected _type: listViewType;//listView类型
    private autoRender!: Function;
    private _isEffect!: boolean;
    private _effect_func!: EffectFunction<T>;
    private _effect: EffectType = '';
    private _curEffectCount: number = -1;
    private _newEffectCount: number = -1;
    private _frameTs: number = 0;
    private _itemTemplates: Record<string, Node> = {}
    private _itemPrefabTemplateUuids: Record<string, string> = {}
    private _bAlive = true;

    constructor(params: ListViewParams<T>) {
        this.cb_host = params.cb_host;
        this.scrollview = params.scrollview;
        this.content = params.content || this.scrollview.content!;
        let item_tpl = this._parseItemTemplate(params.item_tpl);
        this.item_tpl = item_tpl;
        let transform = this.item_tpl.getComponent(UITransform)!;
        this.item_scale = this.item_tpl.scale;
        this.item_width = transform.width! * this.item_scale.x;
        this.item_height = transform.height! * this.item_scale.y;
        this.item_anchorX = transform.anchorX!;
        this.item_anchorY = transform.anchorY!;
        this.dir = params.direction || ListViewDir.Vertical;
        transform = this.scrollview.node.getComponent(UITransform)!;
        this.width = params.width || transform.width!;
        this.height = params.height || transform.height!;
        this.gap_x = params.gap_x || 0;
        this.gap_y = params.gap_y || 0;
        this.padding_begin = params.padding_begin || 0;
        this.padding_end = params.padding_end || 0;
        this._cache_node = params.cacheNum || 3;
        this.auto_arrange = params.auto_arrange === true ? true : false;
        this.row = this.auto_arrange && this.dir === ListViewDir.Horizontal ? LayoutUtil.getAutoRow(this.height, this.item_height, this.gap_y) : params.row ? params.row : 1;
        this.col = this.auto_arrange && this.dir === ListViewDir.Vertical ? LayoutUtil.getAutoCol(this.width, this.item_width, this.gap_x) : params.column ? params.column : 1;
        this._selected_index = -1;
        this.auto_render = params.auto_render === false ? false : true;
        this.auto_center = params.auto_center === true ? true : false;
        this.item_setter = params.item_setter;
        this.recycle_cb = params.recycle_cb!;
        this.select_cb = params.select_cb!;
        this.select_setter = params.select_setter!;
        this.scroll_to_end_cb = params.scroll_to_end_cb!;
        this.on_scroll_to_top_cb = params.on_scroll_to_top_cb!;
        this.scroll_to_left_cb = params.scroll_to_left_cb!;
        this.item_preSetter = params.item_preSetter!;
        this.auto_scrolling = params.auto_scrolling || false;
        this._node_pool = [];
        this.items = [];
        this._datas = [];
        this.autoRender = this._render.bind(this);
        this._renderIdx = 0;
        this._isEffect = params.effect === false ? false : true;
        if (this._isEffect && params.effect) {
            if (typeof params.effect === 'function') {
                this._effect_func = params.effect;
            } else if (typeof params.effect === 'string') {
                this._effect = params.effect as EffectType;
            }
        }
        if (this.dir == ListViewDir.Vertical) {
            let real_width: number = (this.item_width + this.gap_x) * this.col - this.gap_x;
            if (real_width > this.width) {
                log("real width > width, resize scrollview to realwidth,", this.width, "->", real_width);
                this.width = real_width;
            }
            let transform = this.content.getComponent(UITransform);
            transform?.setContentSize(this.width, transform.height);
            let position = this.content.getPosition();
            position.y = this.height / 2;
            this.content.setPosition(position);
        }
        else {
            let real_height: number = (this.item_height + this.gap_y) * this.row - this.gap_y;
            if (real_height > this.height) {
                log("real height > height, resize scrollview to realheight,", this.height, "->", real_height);
                this.height = real_height;
            }
            let transform = this.content.getComponent(UITransform);
            transform?.setContentSize(transform.width, this.height);
        }

        this.resetRowOrCol();

        transform = this.scrollview.node.getComponent(UITransform)!;
        transform.setContentSize(this.width, this.height);
        this.scrollview.vertical = this.dir == ListViewDir.Vertical;
        this.scrollview.horizontal = this.dir == ListViewDir.Horizontal;
        this.scrollview.node.off("scrolling");
        this.scrollview.node.off("scroll-to-bottom");
        this.scrollview.node.off("scroll-to-left");
        this.scrollview.node.off("scroll-to-right");
        this.scrollview.node.off("size-changed");
        this.scrollview.node.off("scroll-ended");

        this.scrollview.node.on('scroll-to-top', this.on_scroll_to_top, this);
        this.scrollview.node.on("scroll-to-left", this.on_scroll_to_left, this);
        this.scrollview.node.on("scrolling", this.on_scrolling, this);
        this.scrollview.node.on("scroll-to-bottom", this.on_scroll_to_end, this);
        this.scrollview.node.on("scroll-to-right", this.on_scroll_to_end, this);
        this.scrollview.node.on("size-changed", this.on_size_changed, this);

        if (this.cb_host) {
            if (this.cb_host.autoDestroy) {
                this.cb_host.autoDestroy(this)
            } else {
                let on_destroy = this.cb_host.onDestroy
                this.cb_host.onDestroy = () => {
                    this.destroy();
                    on_destroy.call(this.cb_host);
                }
            }
        }
    }

    private resetRowOrCol() {
        if (this.dir == ListViewDir.Vertical) {
            this.col_max = this.col;
            this.row_max = Math.ceil((this.height - this.padding_begin) / (this.item_height + this.gap_y));
        } else {
            this.row_max = this.row;
            this.col_max = Math.ceil((this.width - this.padding_begin) / (this.item_width + this.gap_x));
        }
    }

    protected on_size_changed() {
        let transform = this.scrollview.node.getComponent(UITransform);
        this.width = transform?.width!;
        this.height = transform?.height!;
        this.resetRowOrCol();
        if (this.items.length > 0) {
            this.resize_content();
        }
        // this.on_scrolling();
    }

    protected on_scroll_to_top() {
        if (this.on_scroll_to_top_cb) {
            this.on_scroll_to_top_cb.call(this.cb_host, this.scrollview);
        }
    }

    protected on_scroll_to_end() {
        if (this.scroll_to_end_cb) {
            this.scroll_to_end_cb.call(this.cb_host);
        }
    }

    protected on_scroll_to_left() {
        if (this.scroll_to_left_cb) {
            this.scroll_to_left_cb.call(this.cb_host, this.scrollview);
        }
    }


    public on_scrolling() {
        if (!this.items || !this.items.length) {
            return;
        }
        let transform = this.content.getComponent(UITransform);
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            let posy: number = position.y - this.height / 2;
            if (posy < 0) {
                posy = 0;
            }
            if (posy > transform?.height! - this.height) {
                posy = transform?.height! - this.height;
            }
            let start: number = 0;
            let stop: number = this.items.length - 1;
            let viewport_start: number = -posy;
            let viewport_stop: number = viewport_start - this.height;
            let anchor_height = this.item_anchorY * this.item_height;
            let subAnchor_height = this.item_height - anchor_height;
            while (this.items[start].y - anchor_height > viewport_start) {
                start++;
            }
            while (this.items[stop].y + subAnchor_height < viewport_stop) {
                stop--;
            }
            if (start != this._start_index || stop != this._stop_index) {
                this._start_index = start;
                this._stop_index = stop;
                this._renderIdx = 0;
                // log("render_from:", start, stop);
            }
        }
        else {
            let posx: number = position.x + this.width / 2;
            // log("onscrolling, content posx=", posx);
            if (posx < this.width - transform?.width!) {
                posx = this.width - transform?.width!;
            }
            if (posx > 0) {
                posx = 0;
            }
            let start: number = 0;
            let stop: number = this.items.length - 1;
            let viewport_start: number = -posx;
            let viewport_stop: number = viewport_start + this.width;
            let anchor_width = this.item_anchorX * this.item_width;
            let subAnchor_width = this.item_width - anchor_width;
            while (this.items[start].x + subAnchor_width < viewport_start) {
                start++;
            }
            while (this.items[stop].x - anchor_width > viewport_stop) {
                stop--;
            }
            if (start != this._start_index || stop != this._stop_index) {
                this._start_index = start;
                this._stop_index = stop;
                this._renderIdx = 0;
                // log("render_from:", start, stop);
            }
        }
        this.render_items();
    }

    select_item(index: number) {
        if (index == this._selected_index) {
            return;
        }
        if (this._selected_index != -1) {
            this.inner_select_item(this._selected_index, false);
        }
        if (index == -1) {
            this._selected_index = index;
            return;
        }
        this.inner_select_item(index, true);
    }

    protected inner_select_item(index: number, is_select: boolean) {
        let item: ListItem<T> = this.items[index];
        if (!item) {
            warn("inner_select_item index is out of range{", 0, this.items.length - 1, "}", index);
            return;
        }
        item.is_select = is_select;
        if (item.node && this.select_setter) {
            this.select_setter.call(this.cb_host, item.node, is_select, index);
        }
        if (is_select) {
            this._selected_index = index;
            if (this.select_cb) {
                this.select_cb.call(this.cb_host, item.data, index);
            }
        }
    }

    /** 生成Node */
    protected spawn_node(item: ListItem<T>, index: number): boolean {
        let node: T | undefined = this._node_pool.shift();
        let isNew = false;
        if (!node) {
            node = this.instantiate_node();
            isNew = true;
        }
        node.parent = this.content;
        item.node = node;
        node.active = true;
        return isNew;
    }
    protected instantiate_node(): T {
        return null!;
    }
    private _tweenNewNode(node: INode, idx: number) {
        if (!this._isEffect) return;
        if (this.row > 1 || this.col > 1) {
            this._tweenGrid(node, idx);
        } else if (this.dir === ListViewDir.Vertical) {
            this._tweenVerticalLine(node, idx);
        } else if (this.dir === ListViewDir.Horizontal) {
            this._tweenHorizontalLine(node, idx);
        }
    }

    private _tweenGrid(node: INode, idx: number) {
        if (idx >= this._start_index + this.row_max * this.col_max) {
            return;
        }
        if (this._effect_func) {
            this._effect_func(node as T);
            return;
        }
        let scale = this.item_scale;
        //node.scale = new Vec3(0, 0, 1);
        if (this._effect === 'none') {
            tween(node).to(0.5, { scale: scale }).start();
        } else {
            node.scale = v3(0.2, 0.2, 1);
            ETw.fadeTo(node as any, 0.2, 0, 255)?.start();
            let basePos: Vec3 = new Vec3(node.position);
            node.setPosition(basePos.x, basePos.y - 10);
            tween(node).to(0.2, { scale: this.item_scale, position: basePos }, { easing: 'circOut' }).start();
        }
        //tween(node).to(0.5, { scale: scale }, { easing: 'elasticOut' }).start();
    }
    private _tweenVerticalLine(node: INode, idx: number) {
        if (idx >= this._start_index + this.row_max) {
            return;
        }
        if (this._effect_func) {
            this._effect_func.call(this.cb_host, node as T);
            return;
        }
        let pos = new Vec3(node.position);
        node.setPosition(-this.width, pos.y);
        if (this._effect === 'none') {
            tween(node).to(0.3, { position: pos }).start();
        } else {
            tween(node).to(0.3, { position: pos }, { easing: this._effect || 'sineOut' }).start();
        }
    }

    private _tweenHorizontalLine(node: INode, idx: number) {
        if (idx >= this._start_index + this.col_max) {
            return;
        }
        if (this._effect_func) {
            this._effect_func(node as T);
            return;
        }
    }
    protected recycle_item(item: ListItem<T>) {
        if (item.node && isValid(item.node)) {
            if (this.recycle_cb) {
                this.recycle_cb.call(this.cb_host, item.node);
            }
            // item.node.parent = null;
            item.node.active = false;
            Tween.stopAllByTarget(item.node);
            ETw.fadeTo(item.node as any, 0, 255);
            item.node.scale = this.item_scale;
            this._node_pool.push(item.node);
            item.node = null;
        }
    }

    private _parseItemTemplate(res: Prefab | Node) {
        let item_tpl;
        if (res instanceof Prefab) {
            let itemUuid = this._itemPrefabTemplateUuids[res._uuid];
            if (itemUuid && this._itemTemplates[itemUuid]) {
                item_tpl = this._itemTemplates[itemUuid];
            } else {
                item_tpl = instantiate(res);
                this._itemPrefabTemplateUuids[res._uuid] = item_tpl.uuid;
                this._itemTemplates[item_tpl.uuid] = item_tpl;
            }
        } else {
            item_tpl = res;
            this._itemTemplates[item_tpl.uuid] = item_tpl;
            item_tpl.removeFromParent();
            if (this.cb_host && this.cb_host.autoDestroy) {
                this.cb_host.autoDestroy(item_tpl);
            }
        }
        return item_tpl;
    }

    public clear_items() {
        if (this.items) {
            this.items.forEach((item) => {
                this.recycle_item(item);
            });
        }
    }

    protected render_items() {
        let item: ListItem<T>;
        let maxIndx = this.items.length - 1;
        let startIdx = Math.max(0, this._start_index);
        let stopIdx = Math.min(maxIndx, this._stop_index);
        for (let i: number = 0; i < startIdx; i++) {
            item = this.items[i];
            if (item.node) {
                // log("recycle_item", i);
                this.recycle_item(item);
            }
        }
        for (let i: number = this.items.length - 1; i > stopIdx; i--) {
            item = this.items[i];
            if (item.node) {
                // log("recycle_item", i);
                this.recycle_item(item);
            }
        }
        this._render();
    }

    protected _render() {
        if (!this.isAlive) {
            console.warn("ListView is not alive");
            return;
        }
        if (!isValid(this.content)) {
            this.cb_host && this.cb_host.unschedule(this.autoRender);
            console.error("非法的listview写法，请通知程序修改.")
            return;
        }
        if (this._start_index === -1 && this._stop_index === -1) {
            this.cb_host && this.cb_host.unschedule(this.autoRender);
            return;
        }
        let item: ListItem<T>;
        let maxIndx = this.items.length - 1;
        let startIdx = Math.max(0, this._start_index);
        let stopIdx = Math.min(maxIndx, this._stop_index);
        for (let i: number = startIdx + this._renderIdx; i <= stopIdx; i++) {
            item = this.items[i];
            this._renderIdx++;
            let isNew = false;
            if (!item.node) {
                isNew = this.spawn_node(item, i);
                this.set_item(item, i);
            }
            let isEffect = (isNew && this._newEffectCount > 0) || this._curEffectCount > 0;
            if (item.node) {
                item.node.setPosition(item.x, item.y);
                isEffect && this._tweenNewNode(item.node, i);
                this._curEffectCount--
                this._newEffectCount--
            }
            if (this.auto_render && this.cb_host && isEffect) {
                let _now = Date.now();
                let ts = game.frameTime * 0.001;
                if (this._frameTs != 0 && this._frameTs + ts + 0.003 > _now) {
                    ts *= 1.5;
                }
                this._frameTs = _now;
                this.cb_host.schedule(this.autoRender, ts);
                return;
            };
        }
        this.cb_host && this.cb_host.unschedule(this.autoRender);
    }

    protected set_item(item: ListItem<T>, idx: number) {
        this.item_setter.call(this.cb_host, item.node!, item.data, idx);
        if (this.select_setter) {
            this.select_setter.call(this.cb_host, item.node!, item.is_select, idx);
        }
    }

    protected pack_item(data: any): ListItem<T> {
        return { x: 0, y: 0, data: data, node: null, is_select: false };
    }

    protected layout_items(start: number) {
        // log("layout_items, start=", start);
        for (let index: number = start, stop: number = this.items.length; index < stop; index++) {
            let item: ListItem<T> = this.items[index];
            if (this.dir == ListViewDir.Vertical) {
                [item.x, item.y] = this.getItemPos(index, this.dir, { auto_center: this.auto_center, total_count: stop });
                item.x = item.x + this.item_width * (this.item_anchorX - 0.5);
                item.y = item.y - this.item_anchorY * this.item_height - this.padding_begin;
            }
            else {
                [item.x, item.y] = this.getItemPos(index, this.dir, { auto_center: this.auto_center, total_count: stop });
                item.x = item.x + this.item_anchorX * this.item_width + this.padding_begin;
                item.y = item.y + this.item_height * (this.item_anchorY - 0.5);
            }
        }
    }

    protected resize_content() {
        let transform = this.content.getComponent(UITransform);
        if (this.items.length <= 0) {
            if (this.dir == ListViewDir.Vertical) {
                transform?.setContentSize(transform.width, 0);
            } else {
                transform?.setContentSize(0, transform.height);
            }
            return;
        }
        let last_item: ListItem<T> = this.items[this.items.length - 1];
        if (this.dir == ListViewDir.Vertical) {
            let height = Math.max(this.height, this.item_height - last_item.y - this.item_height * this.item_anchorY + this.padding_end);
            transform?.setContentSize(this.width, height);
        } else {
            let width = Math.max(this.width, last_item.x + this.item_width - this.item_width * this.item_anchorX + this.padding_end);
            transform?.setContentSize(width, this.height);
        }
    }

    protected getItemPos(index: number, dir?: ListViewDir, parm?: any) {
        let auto_center = parm?.auto_center, total_count = parm?.total_count;
        !dir && (dir = this.dir);
        if (dir == ListViewDir.Vertical) {
            return LayoutUtil.vertical_layout(index, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y, auto_center, total_count)
        } else {
            return LayoutUtil.horizontal_layout(index, this.item_width, this.item_height, this.row, this.gap_x, this.gap_y, auto_center, total_count)
        }
    }

    public clear_data() {
        this.clear_items();
        this.items = [];
    }

    public set_data(datas: any[], keepPos: boolean | number = false, effect = true) {
        let needKeep = keepPos === true || keepPos === -1;
        let toPos = typeof keepPos === 'boolean' ? 0 : keepPos;

        this._newEffectCount = Math.min(this.row_max * this.col_max, datas.length);
        this._curEffectCount = !needKeep && effect ? this._newEffectCount : -1;
        this.clear_items();
        this.items = [];
        this._datas = datas;
        this._renderIdx = this._frameTs = 0;
        datas.forEach((data, index) => {
            let item: ListItem<T> = this.item_preSetter ? this.item_preSetter.call(this.cb_host, data, index) : this.pack_item(data);
            this.items.push(item);
        });
        this.layout_items(0);
        this.resize_content();
        this._start_index = -1;
        this._stop_index = -1;
        !needKeep && this.def_pos();
        if (this.items.length > 0) {
            if (needKeep) {
                let transform = this.content.getComponent(UITransform);
                let position = this.content.getPosition().clone();
                let isEnd = false;
                if (this.dir == ListViewDir.Vertical) {
                    isEnd = Math.floor(position.y) == Math.floor(transform?.height! - this.height / 2);
                } else {
                    isEnd = Math.floor(position.x) == Math.floor(this.width / 2 - transform?.width!);
                }
                if (isEnd) {
                    if (this.dir == ListViewDir.Vertical) {
                        // position.y = transform?.height! - this.height / 2;
                        this.scrollview.scrollToBottom();
                    } else {
                        // position.x = -this.width / 2 - transform?.width!;
                        this.scrollview.scrollToRight();
                    }
                    /**
                     * 这里不使用自己设置content的坐标变动需要，
                     * content变化sv组件重新调用_calculateBoundary计算滚动边界
                     */
                    // this.content.setPosition(position);
                }
            } else if (toPos > 0) {
                this.scroll_to(toPos);
                return;
            }
            this.on_scrolling();
        }
    }

    protected def_pos() {
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            position.y = this.height / 2;
        }
        else {
            position.x = -this.width / 2;
        }
        this.content.setPosition(position);
    }

    public insert_data(index: number, ...datas: any[]) {
        if (datas.length == 0) {
            log("nothing to insert");
            return;
        }
        if (!this.items) {
            this.items = [];
        }
        if (!this._datas) {
            this._datas = [];
        }
        if (index < 0 || index > this.items.length) {
            warn("invalid index", index);
            return;
        }
        let is_append: boolean = index == this.items.length;
        let items: ListItem<T>[] = [];
        datas.forEach((data) => {
            let item: ListItem<T> = this.pack_item(data);
            items.push(item);
        });
        this._datas.splice(index, 0, ...datas);
        this.items.splice(index, 0, ...items);
        this.layout_items(index);
        this.resize_content();
        this._start_index = -1;
        this._stop_index = -1;

        this.on_scrolling();
        if (this.auto_scrolling && is_append) {
            this.scroll_to_end();
        }
    }

    public remove_data(index: number, count: number = 1) {
        if (!this.items) {
            log("call set_data before call this method");
            return;
        }
        if (index < 0 || index >= this.items.length) {
            warn("invalid index", index);
            return;
        }
        if (count < 1) {
            log("nothing to remove");
            return;
        }
        let old_length: number = this.items.length;
        let del_items: ListItem<T>[] = this.items.splice(index, count);
        this._datas.splice(index, count);
        //回收node
        del_items.forEach((item) => {
            this.recycle_item(item);
        });

        //重新排序index后面的
        if (index + count < old_length) {
            this.layout_items(index);
        }
        this.resize_content();
        if (this.items.length > 0) {
            this._start_index = -1;
            this._stop_index = -1;
            this.on_scrolling();
        }
    }

    public append_data(...datas: any[]) {
        if (!this.items) {
            this.items = [];
        }
        this.insert_data(this.items.length, ...datas);
    }

    public center_to(index: number) {
        let transform = this.content.getComponent(UITransform)!;
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            let [_, y] = this.getItemPos(index);
            y = y - 0.5 * this.item_height - this.padding_begin;
            if (transform.height + y < this.height * 0.5) {
                y = this.height * 0.5 - transform.height;
            } else if (-y < this.height * 0.5) {
                y = -this.height * 0.5;
            }
            position.y = -y;
            this.scrollview.setContentPosition(position);
            this.on_scrolling();
        }
        else {
            let [x, _] = this.getItemPos(index);
            x = x + 0.5 * this.item_width + this.padding_begin;
            if (x < this.width * 0.5) {
                x = this.width * 0.5;
            } else if (x > transform.width - this.width * 0.5) {
                x = transform.width - this.width * 0.5;
            }
            position.x = -x;
            this.scrollview.setContentPosition(position);
            this.on_scrolling();
        }
    }

    public scroll_to(index: number) {
        let transform = this.content.getComponent(UITransform);
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            const min_y = this.height - transform!.height;
            if (min_y >= this.item_anchorY * this.item_height) {
                log("no need to scroll");
                return;
            }
            let [_, y] = this.getItemPos(index);
            if (y < min_y) {
                y = min_y;
                log("content reach bottom");
            }
            if (y > this.item_anchorY * this.item_height) {
                y = this.item_anchorY * this.item_height;
                log("content reach top");
            }
            position.y = this.height / 2 - y;
        }
        else {
            const max_x = transform!.width - this.width;
            if (max_x <= 0) {
                log("no need to scroll");
                return;
            }
            let [x, _] = this.getItemPos(index);
            if (x > max_x) {
                x = max_x;
                log("content reach right");
            }
            if (x < 0) {
                x = 0;
                log("content reach left");
            }
            position.x = -this.width / 2 - x;
        }
        this.scrollview.setContentPosition(position);
        this.on_scrolling();
    }

    public scroll_to_end(time?: number) {
        if (this.dir == ListViewDir.Vertical) {
            this.scrollview.scrollToBottom(time);
        }
        else {
            this.scrollview.scrollToRight(time);
        }
        this.on_scrolling();
    }

    public scroll_to_start(time?: number) {
        if (this.dir == ListViewDir.Vertical) {
            this.scrollview.scrollToTop(time);
        }
        else {
            this.scrollview.scrollToLeft(time);
        }
    }


    public scroll_to_offset(offset: math.Vec2, timeInSecond?: number, attenuated = true) {
        this.scrollview.scrollToOffset(offset, timeInSecond, attenuated)
    }

    public refresh_item(index: number | ItemFilter, data?: ItemRefresh | object | null) {
        if (!this.items) {
            log("call set_data before call this method");
            return;
        }
        if (typeof index === "function") {
            this.items.forEach((item: ListItem<T>, idx: number) => {
                if (index(item.data, idx)) {
                    this.refresh_item(idx, data || item.data);
                }
            });
            return;
        }
        if (index < 0 || index >= this.items.length) {
            warn("invalid index", index);
            return;
        }
        let item: ListItem<T> = this.items[index];
        if (data) {
            let _data;
            if (typeof data === "function") {
                _data = data(item.data, index);
            } else {
                _data = data;
            }
            item.data = _data;
            this._datas[index] = _data;
        }
        if (item.node) {
            if (this.recycle_cb) {
                this.recycle_cb.call(this.cb_host, item.node);
            }
            this.item_setter.call(this.cb_host, item.node, item.data, index);
        }
    }

    public destroy() {
        if (!this._bAlive) {
            return;
        }

        this._bAlive = false;
        if (isValid(this.scrollview.node)) {
            this.scrollview.node.off("scrolling", this.on_scrolling, this);
            this.scrollview.node.off("scroll-to-bottom", this.on_scroll_to_end, this);
            this.scrollview.node.off("scroll-to-right", this.on_scroll_to_end, this);
            this.scrollview.node.off('scroll-to-top', this.on_scroll_to_top, this);
            this.scrollview.node.off("size-changed");
            this.scrollview.node.off("scroll-ended");
        }
        this._destroyData();
    }

    /**
     * 手动回收
     */
    public destroySelf() {
        if (this.cb_host) {
            if (this.cb_host.autoDestroy) {
                this.cb_host.autoDestroy(this, true);
            }
        }
        this.destroy();
    }

    /**
     * 仅回收预制体类模板，节点类模板又ui自行回收
     */
    private _destroyItemTemplate() {
        for (const key in this._itemPrefabTemplateUuids) {
            if (Object.prototype.hasOwnProperty.call(this._itemPrefabTemplateUuids, key)) {
                const itemUuid = this._itemPrefabTemplateUuids[key];
                const node = this._itemTemplates[itemUuid];
                if (isValid(node)) {
                    node.destroy();
                }
            }
        }

        this._itemTemplates = {};
        this._itemPrefabTemplateUuids = {};
    }

    private _destroyData() {
        this.cb_host && this.cb_host.unschedule(this.autoRender);
        this._node_pool.forEach((node) => {
            node.destroy();
        });
        this._destroyItemTemplate();
        this.items.forEach((item) => {
            if (item && item.node) {
                if (isValid(item.node, true)) {
                    item.node.destroy();
                }
            };
        });
        this._node_pool = [];
        this.items = [];
        this._datas = [];

        //@ts-ignore
        this.item_tpl = null;
        //@ts-ignore
        this.cb_host = null;
        //@ts-ignore
        this.scrollview = null;
        //@ts-ignore
        this.content = null;
    }

    public get isAlive(): boolean {
        return this._bAlive
    }

    get datas(): any[] {
        return this._datas;
    }
    get listItems(): ListItem<T>[] {
        return this.items;
    }

    get selected_index(): number {
        return this._selected_index;
    }

    set selected_index(value: number) {
        if (!value) return;
        this._selected_index = value;
    }

    get selectd_data(): any {
        let item: ListItem<T> = this.items[this._selected_index];
        if (item) {
            return item.data;
        }
        return null;
    }

    public get count(): number {
        return this._datas.length;
    }

}

export enum ListViewDir {
    Vertical = 1,
    Horizontal = 2,
}

export interface ListViewParams<T extends INode> {
    /** 要操作的滚动容器 */
    scrollview: ScrollView;
    /** 要操作的滚动容器内容节点 */
    content?: Node;
    /** 用于克隆复用的节点或预制体 */
    item_tpl: Node | Prefab;
    /** 滚动方向 */
    direction?: ListViewDir;

    width?: number;
    height?: number;
    gap_x?: number;
    gap_y?: number;
    auto_render?: boolean;
    padding_begin?: number;
    padding_end?: number;
    auto_arrange?: boolean;
    /** 水平方向排版时，垂直方向上的行数 */
    row?: number;
    /** 垂直方向排版时，水平方向上的列数 */
    column?: number;
    /** 回调函数所在的类 */
    cb_host: UIComponentBase;
    /** item更新时的回调 */
    item_setter: (item: T, data: any, index: number) => void;
    /** 单个item的设置(在数据items拼装前调用具体的回调) */
    item_preSetter?: (data: any, index: number) => ListItem<T>;
    /** 回收时的回调 */
    recycle_cb?: (item: T) => void;
    /** item被选中回调 */
    select_cb?: (data: any, index: number) => void;
    /** item被选中效果回调 */
    select_setter?: (item: T, is_select: boolean, index: number) => void;
    /** 滚动到左边的回调 */
    scroll_to_left_cb?: () => void;
    /** 滚动到尽头的回调 */
    scroll_to_end_cb?: () => void;
    /** 滚动到开头的回调 */
    on_scroll_to_top_cb?: () => void;
    /** 是否在append时自动滚动到尽头 */
    auto_scrolling?: boolean;
    /** 入场效果 */
    effect?: boolean | string | EffectFunction<T>;
    /** 前后各缓存多少 */
    cacheNum?: number;
    /** 是否自动居中 */
    auto_center?: boolean;
}

export type ItemFilter = (val: any, i: number) => boolean;
export type ItemRefresh = (val: any, i: number) => any;

export type ListItem<T> = {
    x: number;
    y: number;
    width?: number;
    height?: number;
    data: any;
    node: T | null;
    is_select: boolean;
}