/*
 * @Description: 自动分离管理
 * @Author: zy
 * @Date: 2021-08-04 17:15:15
 * @Reference: 
 */

import { _decorator, Component, Vec2, Enum, Node, math, Size, UITransform, size } from 'cc';
import { TileNode } from '../helper/tilenode';
const { ccclass, property, menu } = _decorator;

export const TilePanelDir = Enum({
    Vertical: 1,
    Horizontal: 2,
})

@ccclass('ETilePanel')
@menu('UI/ETilePanel')
export class ETilePanel extends Component {
    @property({
        tooltip: '行列数量'
    })
    grid: number = 1;

    @property({
        type: TilePanelDir, tooltip: '对齐方向'
    })
    align = TilePanelDir.Horizontal;

    @property({
        tooltip: '节点间隔'
    })
    spacing: Vec2 = new Vec2(0, 0);

    @property({
        tooltip: '边距'
    })
    pandingBegin: number = 0;

    @property({
        tooltip: '边距'
    })
    pandingEnd: number = 0;

    @property({
        tooltip: '是否重新设置容器大小'
    })
    autoSize: boolean = false;

    @property({ tooltip: '自动分离' })
    tileOnLoad: boolean = false;

    @property({ tooltip: '自动排列' })
    autoLayout: boolean = false;

    @property({ tooltip: '自动排列' })
    alignCenter: boolean = false;

    @property({ tooltip: 'onLoad时排列' })
    layoutInOnload: boolean = true;

    private _list: TileNode[] = [];
    private _layoutDirty = false;
    onLoad() {
        if (!this.tileOnLoad) {
            return;
        }
        this._autoTile();

        if (this.layoutInOnload) {
            this._layout(false, this.autoSize);
        }
    };

    add(node: Node | TileNode) {
        let tile;
        if (node instanceof Node) {
            tile = TileNode.tile(node);
        } else {
            tile = node;
        }
        this._list.push(tile);
        tile.parent = this.node;
        this._layout(true, this.autoSize);
        return tile;
    };

    size() {
        return this._list.length;
    };

    get(idx: number) {
        if (idx === -1) {
            return this._list[this.size() - 1];
        }
        return this._list[idx];
    };

    tile(align: boolean) {
        this._autoTile();
        align && this._layout(false, this.autoSize);
    };

    remove(idx: number | TileNode) {
        let tile: TileNode;
        if (typeof idx === 'number') {
            if (idx === -1) {
                idx = this.size() - 1;
            }
            tile = this._list[idx];
        } else {
            tile = idx;
            idx = this._list.indexOf(tile);
            if (idx === -1) {
                tile.destroy();
                return;
            }
        }
        if (tile) {
            this._list.splice(idx, 1);
            tile.destroy();
        }
        this._layoutDirty = true;
    };

    protected onDestroy(): void {
        this._list.forEach(v => v.destroy());
    }

    private _autoTile() {
        if (this.size() > 0) {
            return;
        }
        let children: Node[] = [];
        children = children.concat(this.node.children || []);
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            let tile = TileNode.tile(element);
            this._list.push(tile);
        }
        this._layoutDirty = true;
    };

    private _layout(isauto: boolean, autoSize: boolean) {
        if (isauto && !this.autoLayout) {
            return;
        }
        this._layoutDirty = false;
        if (this.grid === 0 || !this._list[0]) return;
        let list = [];
        for (let index = 0; index < this._list.length; index++) {
            const tile = this._list[index];
            tile.active && list.push(tile);
        }
        if (this.grid === 0 || !list[0]) return;
        let grid_ = this.grid;
        if (this.alignCenter && this._list.length < this.grid) {
            grid_ = this._list.length;
        }
        let firstTile = list[0];
        let scale = firstTile.scale;
        let baseHeight = firstTile.height * scale.y;
        let baseWidth = firstTile.width * scale.x;
        let baseAnchorX = firstTile.anchorX;
        let baseAnchorY = firstTile.anchorY;
        let row = 0, column = 0, width = 0, height = 0;
        let pandingBegin = { x: 0, y: 0 };
        if (this.align === TilePanelDir.Horizontal) {
            row = grid_;
            column = Math.ceil(list.length / grid_);
            width += this.pandingBegin + this.pandingEnd;
            pandingBegin.x = this.pandingBegin;
        } else {
            row = Math.ceil(list.length / grid_);
            column = grid_;
            height += this.pandingBegin + this.pandingEnd;
            pandingBegin.y = this.pandingBegin;
        }
        let transform = this.node.getComponent(UITransform)!;
        width += column * baseWidth + (column - 1) * this.spacing.x;
        height += row * baseHeight + (row - 1) * this.spacing.y;
        if (autoSize) {
            transform.setContentSize(size(width, height));
        }
        let offset = { x: -width * transform.anchorX, y: height * (1 - transform.anchorY) };
        let posxs: number[] = [];
        for (let i = 0; i < row; i++) {
            let posy = i * (baseHeight + this.spacing.y) + pandingBegin.y;
            posy = offset.y - posy - baseHeight * (1 - baseAnchorY);
            for (let j = 0; j < column; j++) {
                let idx = i * column + j;
                let tile = list[idx];
                if (!tile) {
                    return;
                }
                if (posxs[j] === undefined) {
                    let vx = j * (baseWidth + this.spacing.x) + pandingBegin.x;
                    vx += baseWidth * baseAnchorX + offset.x;
                    posxs[j] = vx;
                }
                tile.setPosition(posxs[j], posy);
            }
        }
    }

    public layout(autoSize: boolean = false) {
        this._layout(false, autoSize || this.autoSize);
    }

    public forEach(func: (val: TileNode, index: number) => void): void {
        for (let index = 0; index < this._list.length; index++) {
            let item = this._list[index];
            func(item, index);
        }
    };

    /**
     * 提供新的排序，对panel上的子节点重新排列展示
     * 比如list是[1, 2, 3]，提供[2, 3, 1]，会调整list中的顺序
     * @param compareFn 
     */
    public sort(newIdxs: number[]) {
        let tempArr: TileNode[] = [];
        for (let i = 0; i < newIdxs.length; ++i) {
            tempArr[i] = this._list[newIdxs[i]];
        }
        this._list = tempArr;

        this.layout();
    }

    update() {
        if (!this._layoutDirty || !this.autoLayout) {
            return;
        }
        this._layout(false, this.autoSize);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
