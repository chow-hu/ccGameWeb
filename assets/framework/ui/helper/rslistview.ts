/*
 * @Description: RSListView - item不等size列表工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @LastEditTime: 2021-01-05 14:59:13
 * @LastEditors: zy
 * @Reference: 
 */
import { Node, instantiate } from 'cc';
import { IRSListView } from "./rslistview-base";
export class RSListView extends IRSListView<Node> {
    protected instantiate_node(): Node {
        let item = instantiate(this.item_tpl);
        // let item = this.cb_host.instantiate(this.item_tpl);
        item.active = true;
        return item;
    }
}