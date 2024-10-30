/*
 * @Author: dwm 626961894@qq.com
 * @Date: 2023-12-13 20:29:46
 * @LastEditors: dwm 626961894@qq.com
 * @LastEditTime: 2023-12-21 10:19:07
 * @FilePath: \xxc\assets\framework\ui\component\EBezierListView.ts
 * @Description: 圆弧滚动滚动条组件 贝塞尔曲线 点
 */
import { _decorator, Component, Node, Prefab, ScrollView } from 'cc';
import { UIComponentBase } from './UIComponentBase';
import { ListViewDir } from '../helper/listview-base';
import { ETileListView } from './ETileListView';
const { ccclass, property } = _decorator;

@ccclass('EBezierListView')
export class EBezierListView extends UIComponentBase {
    private _sv?: ScrollView;
    private _direction: ListViewDir = ListViewDir.Horizontal;


    @property({ type: Node, tooltip: '示例模板', visible: function (this: EBezierListView) { return this.templ_pre == null } })
    private templ_item!: Node;
    @property({ type: Prefab, tooltip: '预制体示例模板', visible: function (this: EBezierListView) { return this.templ_item == null } })
    private templ_pre!: Prefab;

    // let _x = this.sv.content!.position.x;
    // this._list.listItems.forEach(item => {
    //     let tNode = item.node;
    //     let x = _x + item.x;
    //     item.y = 30 / 158 / 158 * x * x - 30;
    //     tNode && tNode.setPosition(item.x, item.y);
    //     if (tNode) {
    //         let w = tNode.width / 3;
    //         tNode.x > ((-_x) - w) && tNode.x < ((-_x) + w) ? tNode.scale = new Vec3(1, 1, 1) : tNode.scale = new Vec3(0.74, 0.74, 1);
    //     }
    // });
    onLoad() {
        this._sv = this.getComponent(ScrollView) as ScrollView;
        if (!this._sv) return;
        this._sv.node.off("scrolling");
        this._sv.node.on('scrolling', this._onSVScrollingEvent.bind(this), this);
    }

    private _onSVScrollingEvent() {
        if (!this._sv) return;
        let _x = this._sv.content?.position.x;
        let _y = this._sv.content?.position.y;
        if (this._direction === ListViewDir.Horizontal) {
            // if(isValid())
        } else {

        }
    }

}


