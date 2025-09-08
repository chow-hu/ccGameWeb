import { _decorator, Component, instantiate, Node, Prefab, ScrollView, UITransform, Vec2 } from 'cc';
import { ListViewDir, TileListView, TileNode, UIBase } from '../../framework/ge';
import { PfDaluItem } from './PfDaluItem';
import { daLuManager } from '../manager/daLuMgr/DaLuManager';
import { NspDaLu } from '../manager/daLuMgr/interface';
const { ccclass, property } = _decorator;


/** 大路传入规则示例 */
// let inData: NspDaLu.DaLuInitData = {
//     index: 0, /** 服务器会带过来的 */
//     winInfo: [
//         {
//             /** 需要各自业务去判是赢(红)、输(蓝)、平 */
//             quanType: NspDaLu.DaLuQuanType.HONG_DA, 
//             /** 需要展示数字的话就传值 */
//             showNum: 0,
//         },
//     ]
// }
@ccclass('PfDaLuScrollView')
export class PfDaLuScrollView extends UIBase {

    @property(ScrollView)
    scrollView: ScrollView = null;
    @property(Node)
    content: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    @property(Node)
    block: Node = null;
    private _tileList: TileListView = null!;

    public setData(data: NspDaLu.DaLuInitData, isScroll: boolean = true) {
        if (!this._tileList) {
            this.initUI();
        }
        let changeData = daLuManager.convertToDaLuData(data);
        /** 需要修改一次数据，转换成对应的资源 */
        this._tileList.set_data(changeData?.listArr || [], true);
        if (isScroll) {
            this._tileList.scroll_to((changeData?.scrollIndex || 0) - 1);
            this.block.active = false;
        } else {
            this.block.active = true;
            let offsetX = (changeData.maxRow + 1) * 22.2 - this.scrollView.node.getComponent(UITransform).width;
            if (offsetX < 0) offsetX = 0;
            this._tileList.scroll_to_offset(new Vec2(offsetX, 0), 0.01);
        }
    }

    private initUI() {
        if (this._tileList) return;
        this._tileList = new TileListView({
            scrollview: this.scrollView,
            content: this.content,
            item_tpl: instantiate(this.itemPrefab),
            cb_host: this,
            direction: ListViewDir.Horizontal,
            item_setter: this.onItemSetter,
        });
    }

    private onItemSetter(item: TileNode, data: NspDaLu.DaLuOneItemData, index: number): void {
        let node = item.node;
        node.getComponent(PfDaluItem).updateData(data);
    }

}


