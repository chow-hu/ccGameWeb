/*
 * @Description: TileRSListView - item不等size且平铺child列表工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @LastEditTime: 2021-01-05 15:18:00
 * @LastEditors: zy
 * @Reference: 
 */
import { IRSListView } from "./rslistview-base";
import { TileNode } from "./tilenode";
export class TileRSListView extends IRSListView<TileNode> {
    protected instantiate_node(): TileNode {
        return TileNode.creat(this.item_tpl);
    }
}