/*
 * @Description: list view 生命周期组件
 * @Author: zy
 * @Date: 2023-11-29 16:48:27
 * @Reference: 
 */
import { Enum, Node, Prefab, ScrollView, Widget, _decorator } from 'cc';
import { valueof } from '../../common/general';
import { ItemFilter, ItemRefresh, ListItem, ListViewDir, ListViewParams } from '../helper/listview-base';
import { PageListView, listViewType } from '../helper/pagelistview';
import { TileNode } from '../helper/tilenode';
import { IFuncNames, ItemSettingInfo } from './ETileListView';
import { UIBase } from './UIBase';
import { UIComponentBase } from './UIComponentBase';
const { ccclass, property, menu } = _decorator;

type ComponentValue = {
    data: any[],
    params: ListViewParams<TileNode>,
    keepPos: boolean,
    effect: boolean,
    loadOnStart: boolean
}

enum EffectType {
    active,
    name,
    funcName
}
Enum(EffectType);
Enum(listViewType);

@ccclass('EPageListView')
@menu('自定义组件/EPageListView')
export class EPageListView extends UIComponentBase {
    private _list?: PageListView
    private _params?: ListViewParams<TileNode> & { type: listViewType }
    private _data?: any[]
    private _hasInited: boolean = false;

    private _sv?: ScrollView;

    @property({ type: listViewType })
    listType: listViewType = listViewType.PAGE_ONE;

    @property({
        type: Node,
        tooltip: '可复制的子节点',
        visible: function (this: EPageListView) {
            return this.item_pref_tpl == null;
        }
    })
    item_tpl!: Node;
    @property({
        type: Prefab,
        tooltip: '可复制的子节点预制体',
        visible: function (this: EPageListView) {
            return this.item_tpl == null;
        }
    })
    item_pref_tpl!: Prefab;

    @property({ type: ItemSettingInfo, tooltip: '滚动窗的参数设置' })
    get itemSettingInfo() {
        return this._itemSettingInfo;
    }
    set itemSettingInfo(value: ItemSettingInfo) {
        this._itemSettingInfo = value;
    }
    @property({ type: ItemSettingInfo, serializable: true })
    private _itemSettingInfo = new ItemSettingInfo()

    @property({ type: IFuncNames, tooltip: 'listView的设置方法与回调方法' })
    get funcNames() {
        return this._funcNames;
    }
    set funcNames(value: IFuncNames) {
        this._funcNames = value;
    }

    @property({ type: IFuncNames, serializable: true })
    private _funcNames = new IFuncNames()

    @property(UIBase)
    host!: UIBase;

    @property({ type: EffectType })
    effect: EffectType = EffectType.active;

    @property({
        visible: function (this: EPageListView) {
            return this.effect == EffectType.active;
        }
    })
    isShowEffect: boolean = true;
    @property({
        visible: function (this: EPageListView) {
            return this.effect == EffectType.name;
        }
    })
    effectName: string = '';
    @property({
        visible: function (this: EPageListView) {
            return this.effect == EffectType.funcName;
        }
    })
    effectFunc: string = '';

    @property({
        tooltip: '在start时加载'
    })
    loadOnStart: boolean = true;
    @property({ tooltip: '是否自动渲染' })
    auto_render: boolean = true;
    @property({ tooltip: '是否在append时自动滚动到尽头' })
    auto_scrolling: boolean = false;
    @property({ tooltip: '是否自动居中' })
    auto_center: boolean = false;
    start() {
        this._hasInited = true;
        this._loadList();
    }



    private _equal(param1: ListViewParams<TileNode> | undefined, param2: ListViewParams<TileNode>) {
        if (param1 == undefined) {
            return false;
        }
        let keys1 = Object.keys(param1) as (keyof ListViewParams<TileNode>)[];
        let keys2 = Object.keys(param2) as (keyof ListViewParams<TileNode>)[];
        if (keys1.length != keys2.length) {
            return false;
        }
        for (let index = 0; index < keys1.length; index++) {
            const key = keys1[index];
            if (param1[key] != param2[key]) {
                return false;
            }
        }
        return true;
    }

    setValue(value: Partial<ComponentValue>) {
        let dirty = false;
        if (value.data) {
            this._data = value.data;
            dirty = true;
        }

        if (value.loadOnStart !== undefined) {
            this.loadOnStart = value.loadOnStart;
        }

        if (value.params) {
            let params = this._fixValue(value);
            if (!this._equal(this._params, params)) {
                this._clearList();
                dirty = true;
            }
        }

        if (dirty) {
            this._loadList(value.keepPos, value.effect);
        }
    }

    updateSvSize() {
        if (!this._sv) return;
        const widgetComs = this._sv!.node.getComponentsInChildren(Widget);
        for (let i = 0; i < widgetComs.length; i++) {
            const com = widgetComs[i];
            com.updateAlignment();
        }
    }

    private _fixValue(value: Partial<{ data: any[], params: ListViewParams<TileNode>, keepPos: boolean }>) {
        if (!this._sv) {
            this._sv = value?.params?.scrollview ? value.params.scrollview : this.getComponent(ScrollView) as ScrollView;
            this.updateSvSize();
        }

        let keys = Object.keys(this._funcNames);
        let funcObj: { item_setter: (item: TileNode, data: any, index: number) => void, [type: string]: Function } = {
            item_setter: () => { },
        };
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const funcName = valueof(this._funcNames, key) as string
            if (funcName) {
                const func = valueof(this.host, funcName) as any;
                if (func && typeof func === "function") {
                    funcObj[key] = func;
                } else {
                    console.error(`listview-${key}: ${funcName} is not a function`);
                }
            }
        }
        let effect: boolean | string | (() => void) = this.effect == EffectType.name ? this.effectName : this.isShowEffect;
        if (this.effect == EffectType.funcName) {
            const tEffect = valueof(this.host, this.effectFunc);
            if (tEffect && typeof tEffect === "function") {
                effect = tEffect;
            } else {
                effect = true;
            }
        }

        return this._params = {
            scrollview: this._sv,
            item_tpl: this.item_tpl || this.item_pref_tpl,
            content: this._sv?.content as any,
            direction: this._sv?.horizontal ? ListViewDir.Horizontal : ListViewDir.Vertical,
            cb_host: this.host ? this.host : value.params?.cb_host!,
            auto_render: this.auto_render,
            effect: effect,
            type: this.listType,
            ...this.itemSettingInfo,
            ...funcObj,
            ...value.params
        }
    }

    private _loadList(keepPos?: boolean, effect = true) {
        if (!this._data || (!this._hasInited && this.loadOnStart)) {
            return false;
        }

        if (!this._params) {
            this._params = this._fixValue({})
        }

        if (!this._list || !this._list.isAlive) {
            this._list = new PageListView(this._params);
        }
        this._list.set_data(this._data, keepPos, effect);
        return true;
    }

    private _clearList() {
        this._list && this._list.destroySelf();
        this._list = undefined;
    }

    public on_scrolling() {
        this._list?.on_scrolling && this._list.on_scrolling()
    }

    public select_item(index: number) {
        this._list?.select_item && this._list.select_item(index);
    }

    public clear_items() {
        this._list?.clear_items && this._list.clear_items();
    }

    public clear_data() {
        this._list?.clear_data && this._list.clear_data();
    }

    public insert_data(index: number, ...datas: any[]) {
        this._list?.insert_data && this._list.insert_data(index, ...datas);
    }

    public remove_data(index: number, count: number = 1) {
        this._list?.remove_data && this._list.remove_data(index, count);
    }

    public append_data(...datas: any[]) {
        this._list?.append_data && this._list.append_data(...datas);
    }
    public center_to(index: number) {
        this._list?.center_to && this._list.center_to(index);
    }
    public scroll_to(index: number) {
        this._list?.scroll_to && this._list.scroll_to(index);
    }
    public scroll_to_end() {
        this._list?.scroll_to_end && this._list.scroll_to_end();
    }
    public scroll_to_start() {
        this._list?.scroll_to_start && this._list.scroll_to_start();
    }
    public refresh_item(index: number | ItemFilter, data?: ItemRefresh | object | null) {
        this._list?.refresh_item && this._list.refresh_item(index, data);
    }

    public get isAlive(): boolean {
        return this._list?.isAlive || true
    }

    get datas(): any[] {
        return this._list?.datas || [];
    }
    get listItems(): ListItem<TileNode>[] {
        return this._list?.listItems || [];
    }

    get selected_index(): number {
        return this._list?.selected_index || -1;
    }

    get selectd_data(): any {
        let item: ListItem<TileNode> = this._list?.selectd_data;
        if (item) {
            return item.data;
        }
        return null;
    }

    public get count(): number {
        return this.datas.length;
    }

    onRemove() {
        this._clearList();
    }
}


