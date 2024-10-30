/*
 * @Description: TileListView - item等size且平铺child列表工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @LastEditTime: 2024-02-19 18:11:10
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { Tween, UITransform, Vec3, isValid, log, tween } from "cc";
import { UIComponentBase } from "../component/UIComponentBase";
import { LayoutUtil } from "./layout_utils";
import { IListView, INode, ListViewDir, ListViewParams } from "./listview-base";
import { TileNode } from "./tilenode";
export enum listViewType {
    PAGE,       //分页，会滚动过多页
    PAGE_ONE    //分页，每次只会滚动过一页
}
export class PageListView extends IListView<TileNode> {

    constructor(params: ListViewParams<TileNode> & { type: listViewType }) {
        super(params);
        this._pageType = params.type;
        this._pageBreak = this.scrollview.node.getChildByName('pfPageBreak')?.getComponent(UIComponentBase);

        this.scrollview.inertia = this._pageType !== listViewType.PAGE_ONE;
        this.scrollview.elastic = false;
        this.setPageInfo();
        this.scrollview.node.off("scroll-ended");
        this.scrollview.node.on("scroll-ended", this.on_scroll_ended, this);
    }

    protected _pageItemCount: number = 0;//一页有几个item
    private _isPageMove = false;
    private _pageTw: Tween<INode> | null = null;
    private _contentLastPos = { x: 0, y: 0, isInit: false };
    private _pageGap: number = 0;
    private _pageBreak: any;
    private _pageType: listViewType = listViewType.PAGE_ONE;

    get pageTotalNum() {
        return Math.ceil(this.datas.length / this._pageItemCount)
    }

    protected instantiate_node(): TileNode {
        return TileNode.creat(this.item_tpl);
    }

    protected setPageInfo() {
        const col = LayoutUtil.getAutoCol(this.width, this.item_width, this.gap_x)//Math.floor((this.width - this.item_width) / (this.item_width + this.gap_x)) + 1;
        const row = LayoutUtil.getAutoRow(this.height, this.item_height, this.gap_y)// Math.floor((this.height - this.item_height) / (this.item_height + this.gap_y)) + 1;
        if (this.dir === ListViewDir.Horizontal) {
            this.row = this.row == 0 ? row : this.row;
            this._pageItemCount = col * this.row;
            this._pageGap = this.width - ((col - 1) * (this.item_width + this.gap_x) + this.item_width);
            this.row_max = Math.ceil((this.height - this._pageGap) / (this.item_height + this.gap_y));
        } else if (this.dir == ListViewDir.Vertical) {
            this.col = this.col == 0 ? col : this.col;
            this._pageItemCount = row * this.col;
            this._pageGap = this.height - ((row - 1) * (this.item_height + this.gap_y) + this.item_height);
            this.col_max = Math.ceil((this.width - this._pageGap) / (this.item_width + this.gap_x));
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
        if (this.dir == ListViewDir.Vertical) {
            let height = Math.max(this.height, this.pageTotalNum * this.height);
            transform?.setContentSize(this.width, height);
        } else {
            let width = Math.max(this.width, this.pageTotalNum * this.width);
            transform?.setContentSize(width, this.height);
        }
    }

    protected getItemPos(index: number, dir?: ListViewDir, parm?: any) {
        let auto_center = parm?.auto_center, total_count = parm?.total_count;
        !dir && (dir = this.dir);
        if (dir == ListViewDir.Vertical) {
            return LayoutUtil.vertical_layout_page(index, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y, this._pageItemCount, this._pageGap, auto_center, total_count)
        } else {
            return LayoutUtil.horizontal_layout_page(index, this.item_width, this.item_height, this.row, this.gap_x, this.gap_y, this._pageItemCount, this._pageGap)
        }
    }

    public scroll_to(index: number): void {
        let pIdx = Math.floor(index / this._pageItemCount)
        let transform = this.content.getComponent(UITransform)!;
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            let y = pIdx * this.height;
            const max_y = transform.height - this.height;
            if (y < 0) {
                y = 0;
                log("content reach bottom");
            }
            if (y > max_y) {
                y = max_y;
                log("content reach top");
            }
            position.y = y + this.height / 2;
        }
        else {
            let x = - pIdx * this.width;
            const max_x = - transform.width + this.width;
            if (x > 0) {
                x = 0;
                log("content reach top");
            }
            if (x < max_x) {
                x = max_x;
                log("content reach bottom");
            }
            position.x = x - this.width / 2;
        }
        this.scrollview.setContentPosition(position);
        this.on_scrolling();
    }

    public on_scrolling(): void {
        super.on_scrolling();

        if (this.scrollview.isScrolling() && this._isPageMove) this._stopPage();
        this._checkPage();
    }

    private _checkPage() {
        if (!this.scrollview.isScrolling() && !this._isPageMove) {
            if (this._pageType === listViewType.PAGE) {
                if (this._contentLastPos.isInit) {
                    let sub = 10;
                    if (this.dir === ListViewDir.Horizontal) {
                        if (Math.abs(this._contentLastPos.x - this.content.position.x) <= sub) {
                            this._movePage();
                            this._contentLastPos.isInit = false;
                        }
                    } else if (this.dir === ListViewDir.Vertical) {
                        if (Math.abs(this._contentLastPos.y - this.content.position.y) <= sub) {
                            this._movePage();
                            this._contentLastPos.isInit = false;
                        }
                    }
                }
                this._contentLastPos.isInit = true;
                this._contentLastPos.x = this.content.position.x;
                this._contentLastPos.y = this.content.position.y;
            } else if (this._pageType === listViewType.PAGE_ONE) {
                this._movePage();
            }
        }
    }

    on_scroll_ended() {
        this._checkPage();
    }

    private _movePage() {
        this._stopPage()
        this.scrollview.stopAutoScroll();
        let position = this.content.getPosition();
        let curPage = -1;
        if (this.dir === ListViewDir.Horizontal) {
            curPage = Math.round((-position.x - this.width / 2) / this.width); //当前是第几页
        } else if (this.dir === ListViewDir.Vertical) {
            curPage = Math.round((position.y - this.height / 2) / this.height);
        }
        if (curPage === -1) return;
        this._pageBreak && this._pageBreak.setData(curPage, this.pageTotalNum)
        const contentPos = this._getContentPositionByIndex(curPage);

        if (contentPos) {
            this._isPageMove = true;
            tween(this.content.position).to(0.2, {
                x: this.dir === ListViewDir.Horizontal ? contentPos.x : position.x,
                y: this.dir === ListViewDir.Vertical ? contentPos.y : position.y,
            }, {
                onUpdate: (target, ratio) => {
                    this.content.setPosition(target as Vec3);
                    this.on_scrolling()
                }
            }).call(() => {
                this._isPageMove = false;
            }).start();

        }
    }

    private _stopPage() {
        this._isPageMove = false;
        this._pageTw && this._pageTw.stop();
    }

    private _getContentPositionByIndex(index: number) {
        let transform = this.content.getComponent(UITransform);
        let position = this.content.getPosition();
        if (this.dir == ListViewDir.Vertical) {
            const min_y = this.height - transform!.height;
            if (min_y >= this.item_anchorY * this.item_height) {
                log("no need to scroll");
                return;
            }
            position.y = this.height / 2 + index * this.height;
        }
        else {
            const max_x = transform!.width - this.width;
            if (max_x <= 0) {
                log("no need to scroll");
                return;
            }
            position.x = -(this.width / 2 + index * this.width);
        }
        return position;
    }

    public destroy(): void {
        if (isValid(this.scrollview.node)) {
            this.scrollview.node.off("scroll-ended");
        }
        super.destroy();
    }
}