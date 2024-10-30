/*
 * @Description: ListView - item等size列表工具类
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @LastEditTime: 2021-01-05 14:53:01
 * @LastEditors: zy
 * @Reference: 
 */
import { Node, instantiate } from 'cc';
import { IListView, ListViewParams } from "./listview-base";

export class ListView extends IListView<Node> {

    constructor(params: ListViewParams<Node>) {
        super(params);
    }
    protected instantiate_node(): Node {
        let item = instantiate(this.item_tpl);
        item.active = true;
        return item;
    }

}