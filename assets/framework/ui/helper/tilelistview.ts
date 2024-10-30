/*
 * @Description: TileListView - item等size且平铺child列表工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @LastEditTime: 2021-01-05 15:17:52
 * @LastEditors: zy
 * @Reference: 
 */
import { IListView, ListViewParams } from "./listview-base";
import { TileNode } from "./tilenode";
export class TileListView extends IListView<TileNode> {

    constructor(params: ListViewParams<TileNode>) {
        super(params);
    }

    protected instantiate_node(): TileNode {
        return TileNode.creat(this.item_tpl);
    }
}