/*
 * @Description: IRSListView - item不等size列表工具基类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @Reference: 
 */
import { Director, ISizeLike, Node, ScrollBar, UITransform, Vec2, instantiate, log } from "cc";
import { ui2d } from "../../common/ui2d";
import { LayoutUtil } from "./layout_utils";
import { IListView, INode, ListItem, ListViewDir, ListViewParams } from "./listview-base";
export class IRSListView<T extends INode> extends IListView<T> {
    private dirtyIndex: number;
    private _dirtyLayout: boolean;
    private _dirtyList: number[];
    private _autoCenterOnDir: boolean = false;
    constructor(params: ListViewParams<T> & { auto_center_on_dir?: boolean }) {
        super(params);
        this.dirtyIndex = 0;
        this._dirtyList = [];
        this._dirtyLayout = false;
        this._autoCenterOnDir = params.auto_center_on_dir ?? false;
        this.scrollview.node.on(Node.EventType.ACTIVE_IN_HIERARCHY_CHANGED, () => {
            if (this.scrollview.node.active) {
                this.dirtyIndex = 0;
                this._dirtyLayout = true;
            }
        });
        Director.instance.on(Director.EVENT_AFTER_UPDATE, this.layout, this);
    }
    public layout() {
        let transform = this.content.getComponent(UITransform);
        let position = this.content.getPosition();
        let isEnd = false;
        if (this.dir == ListViewDir.Vertical) {
            isEnd = Math.floor(position.y) == Math.floor(transform?.height! - this.height / 2);
        } else {
            isEnd = Math.floor(position.x) == Math.floor(this.width / 2 - transform?.width!);
        }

        let defaultIndex = this.items && this.items.length || 0;
        this._dirtyList = [];
        if (this._dirtyLayout) {
            this._dirtyLayout = false;
            this.dirtyIndex = Math.min(defaultIndex, this.dirtyIndex);
            this.dirtyIndex = Math.max(0, this.dirtyIndex);
            this.layout_items(this.dirtyIndex);
            // this.resize_content();
            // this.on_scrolling();
            if (isEnd) {
                if (this.dir == ListViewDir.Vertical) {
                    // position.y = transform?.height! - this.height / 2;
                    // this.scrollview.scrollToBottom();
                    if (this.items[this.dirtyIndex]) {
                        let { x, y } = this.items[this.dirtyIndex];
                        this.scrollview.scrollToOffset(new Vec2(x, -y));
                    }
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
        }
        this.dirtyIndex = defaultIndex;
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
            let subAnchor = 1 - this.item_anchorY;
            while (this.items[start].y - this.item_anchorY * (this.items[start].height || this.item_height) > viewport_start) {
                start++;
            }
            while (this.items[stop].y + subAnchor * (this.items[stop].height || this.item_height) < viewport_stop) {
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
            let subAnchor = 1 - this.item_anchorX;
            while (this.items[start].x + subAnchor * (this.items[start].width || this.item_width) < viewport_start) {
                start++;
            }
            while (this.items[stop].x - this.item_anchorX * (this.items[start].width || this.item_width) > viewport_stop) {
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

    protected set_item(item: ListItem<T>, idx: number) {
        this.set_item_size(item, { width: item.width || this.item_width, height: item.height || this.item_height });
        this.item_setter.call(this.cb_host, item.node!, item.data, idx);
        if (this.select_setter) {
            this.select_setter.call(this.cb_host, item.node!, item.is_select, idx);
        }
    }

    protected pack_item(data: any): ListItem<T> {
        return { x: 0, y: 0, data: data, height: this.item_height, width: this.item_width, node: null, is_select: false };
    }

    private get_item_height(item: ListItem<T>): number {
        if (item.node) {
            item.height = item.node instanceof Node ? ui2d.size(item.node)?.height : item.node.height;
        }
        return item.height!;
    }

    private set_item_size(item: ListItem<T>, size: Partial<ISizeLike>) {
        if (size.height !== undefined) {
            item.height = size.height;
        }
        if (size.width !== undefined) {
            item.width = size.width;
        }
        if (item.node) {
            if (item.node instanceof Node) {
                ui2d.size(item.node, size);
            } else {
                if (size.height !== undefined) {
                    item.node.height = size.height;
                }
                if (size.width !== undefined) {
                    item.node.width = size.width;
                }
            }
        }
    }

    public getItemPos(index: number, dir?: ListViewDir, parm?: any): [number, number] {
        !dir && (dir = this.dir);
        let x = 0;
        let y = 0;

        let offset = 0;
        for (let i = 0; i < index; i++) {
            let item = this.items[i];
            offset += dir == ListViewDir.Vertical ? item.height : item.width;
            offset += dir == ListViewDir.Vertical ? this.gap_y : this.gap_x;
        }
        x = ListViewDir.Vertical ? x : offset;
        y = ListViewDir.Vertical ? offset : y;
        return [x, y];
    }

    private get_item_width(item: ListItem<T>): number {
        if (item.node) {
            item.width = item.node instanceof Node ? ui2d.size(item.node)?.width : item.node.width;
        }
        return item.width!;
    }

    getcloIdex(x: number): number {
        const value = (x + (this.col - 1) * (this.item_width + this.gap_x) * 0.5) / (this.item_width + this.gap_x);
        return Math.round(value);
    }

    public layout_items(start: number) {
        let basePos = { x: 0, y: 0 };
        let base_item = this.items[start - 1];
        let item_width, item_height, isTitle;
        if (base_item) {
            basePos = { x: base_item.x, y: base_item.y };
            item_width = this.get_item_width(base_item);
            item_height = this.get_item_height(base_item);
            if (this.dir == ListViewDir.Vertical) {
                isTitle = (item_height !== this.item_height);
                if (isTitle) {
                    basePos.y = basePos.y - this.gap_y - this.item_anchorY * item_height;
                    basePos.x = LayoutUtil.vertical_layout(0, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y)[0];
                } else {
                    let baseCloIdx = 0;
                    baseCloIdx = this.getcloIdex(base_item.x) || 0;
                    // basePos.y = basePos.y - this.gap_y - this.item_anchorY * item_height;

                    basePos.y = baseCloIdx >= this.col - 1 ?
                        basePos.y - this.gap_y - this.item_anchorY * item_height
                        // : basePos.y + this.gap_y + this.item_anchorY * item_height;
                        : basePos.y + this.item_anchorY * item_height;

                    const curItem = this.items[start] || { x: 0, height: this.item_height };

                    baseCloIdx = this.getcloIdex(curItem.x);
                    basePos.x = LayoutUtil.vertical_layout(baseCloIdx, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y)[0];
                }
            } else {
                basePos.x = basePos.x + this.gap_x + (1 - this.item_anchorX) * item_width;

                basePos.y = basePos.y - this.gap_y - this.item_anchorY * item_height;
            }
        }

        for (let index: number = start, stop: number = this.items.length; index < stop; index++) {
            let item: ListItem<T> = this.items[index];
            if (this.dir == ListViewDir.Vertical) {
                let item: ListItem<T> = this.items[index];
                if (this.dir == ListViewDir.Vertical) {
                    item_width = this.get_item_width(item);
                    item_height = this.get_item_height(item);

                    isTitle = (this.item_height !== item_height);

                    item.y = basePos.y - (1 - this.item_anchorY) * item_height;
                    // item.y = basePos.y - this.gap_y - (1 - this.item_anchorY) * item_height;
                    item.x = isTitle ? 0 : basePos.x;
                    if (!isTitle && index === 0) {
                        item.x = LayoutUtil.vertical_layout(0, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y)[0];
                        basePos.x = item.x + (item_width + this.gap_x);
                    } else {
                        basePos.x = basePos.x + (item_width + this.gap_x);
                    }

                    const overMaxOffX = this.getcloIdex(item.x) >= this.col - 1;
                    if (isTitle || overMaxOffX) {
                        basePos.y = basePos.y - this.gap_y - item_height;
                        basePos.x = LayoutUtil.vertical_layout(0, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y)[0];
                    }
                    if (item.node) {
                        item.node.setPosition(item.x, item.y);
                    }
                }
            }
            else {
                let y: number = 0;
                item_width = this.get_item_width(item);

                item.x = basePos.x + this.item_anchorX * item_width;
                basePos.x = basePos.x + this.gap_x + item_width;
                item.y = y + this.item_height * (this.item_anchorY - 0.5);
                if (item.node) {
                    item.node.setPosition(item.x, item.y);
                }
            }
        }

        if (this._autoCenterOnDir && this.items.length > 0) {
            let item = this.items[this.items.length - 1];
            let addHeight = 0;
            if (this.dir == ListViewDir.Vertical) {
                let height = -(item.y - this.get_item_height(item) * this.item_anchorY - this.padding_end);
                addHeight = this.height > height ? -(this.height - height) / 2 : 0;
            }
            let addWidth = 0;

            if (this.dir == ListViewDir.Horizontal) {
                let width = item.x + this.get_item_width(item) * this.item_anchorX + this.padding_end;
                addWidth = this.width > width ? (this.width - width) / 2 : 0;
            }

            this.items.forEach((v, idx) => {
                v.y += addHeight;
                v.x += addWidth;
                if (item.node) {
                    item.node.setPosition(item.x, item.y);
                }
            });
        }
    }


    public resize_one(index: number, size: Partial<ISizeLike>) {
        let item = this.items[index];
        if (!item) return;
        this.set_item_size(item, size);
        this._dirtyList.push(index);
        this.doLayout(index);
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
            let item_height = this.get_item_height(last_item);
            let height = Math.max(transform.height, this.height, - last_item.y + item_height * this.item_anchorY);
            transform?.setContentSize(transform.width, height);
            if (this.scrollview.verticalScrollBar) {
                this.scrollview.verticalScrollBar.direction = ScrollBar.Direction.VERTICAL;
            }
        }
        else {
            let item_width = this.get_item_width(last_item);
            let width = Math.max(this.width, last_item.x + item_width * (1 - this.item_anchorX));
            transform?.setContentSize(width, transform.height);
            if (this.scrollview.horizontalScrollBar) {
                this.scrollview.horizontalScrollBar.direction = ScrollBar.Direction.HORIZONTAL;
            }
        }
        // cc.log('resize', this.content.width, this.content.height);
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

    public scroll_to(index: number) {
        this.scrollview.stopAutoScroll();
        let transform = this.content.getComponent(UITransform);
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            const max_y = transform!.height - this.height;
            if (max_y <= 0) {
                log("no need to scroll");
                return;
            }
            let [_, y] = this.getItemPos(index);
            if (y > max_y) {
                y = max_y;
                log("content reach bottom");
            }
            position.y = this.height / 2 + y;
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

    protected doLayout(dirtyIndex: number) {
        this.dirtyIndex = Math.min(this.dirtyIndex, dirtyIndex);
        this._dirtyLayout = true;
    }

    protected instantiate_node(): T {
        //@ts-ignore
        return instantiate(this.item_tpl);
    }

    public destroy() {
        super.destroy();
        Director.instance.off(Director.EVENT_AFTER_UPDATE, this.layout, this);
    }
}