import { _decorator, Color, Graphics, instantiate, Label, Node, Sprite, SpriteFrame, UITransform, v3 } from 'cc';
import { UIBase } from '../../framework/ge';
import { Utils } from '../../game/common/Utils';
import { NspDaLu } from '../manager/daLuMgr/interface';
const { ccclass, property } = _decorator;

@ccclass('PfDaluItem')
export class PfDaluItem extends UIBase {

    @property(Node)
    pointNode: Node = null!;
    @property(Node)
    quanNode: Node = null!;
    @property(Node)
    numNode: Node = null!;
    @property(Node)
    insLabel: Node = null!;
    /**
     * 0: 红 1: 蓝 2: 绿
     */
    @property([SpriteFrame])
    yuan_arr: SpriteFrame[] = []!;

    // private readonly _startX = 10.9;
    private readonly _startX = 11.1;
    private readonly _startY = -11.5;
    private readonly _gapX = 22.2;
    private readonly _gapY = -23.5;

    private readonly _saveKey = '__saveKey__';

    private _data: NspDaLu.DaLuOneItemData = null!;
    /** 画点的标记 */
    private _hasDraw: boolean = false;

    private _showPngList = {};
    private _showNumList = {};

    private _colorList = {
        [NspDaLu.DaluLabelColorType.WHITE]: '#FFFFFF',
        [NspDaLu.DaluLabelColorType.GREEN]: '#35DE89',
    }

    public updateData(data: NspDaLu.DaLuOneItemData) {
        this.insLabel.active = false;
        this._data = data;

        this.drawPoint();
        this.drawQuan();
        this.drawNum();
    }

    public drawPoint() {
        if (this._hasDraw) return;
        this._hasDraw = true;
        this.draw();
    }

    private draw() {
        let graphics_o = this.pointNode.getComponent(Graphics);
        graphics_o.fillColor = new Color("#686667");

        const allCount = NspDaLu.ItemNodeCol * NspDaLu.ItemNodeRow;
        for (let i = 0; i < allCount; i++) {
            let { x, y } = this.getXYByIndex(i);
            graphics_o.circle(x, y, 3);
            graphics_o.fill();
        }

        graphics_o.stroke();
    }

    /** 获取坐标 */
    private getXYByIndex(index: number): { x: number, y: number } {
        let halfHeight = this.node.getComponent(UITransform).height / 2;
        let y = halfHeight + index % NspDaLu.ItemNodeCol * this._gapY + this._startY;
        let x = Math.floor(index / NspDaLu.ItemNodeCol) * this._gapX + this._startX;
        return { x, y };
    }

    /** 圈 */
    private drawQuan() {
        this._showPngList = {};
        let data: NspDaLu.DaLuOneItemData = this._data;
        if (data?.lists) {
            for (let one of data.lists) {
                this.setOneQuanPng(one);
            }
        }
        this.setNodeActive(this.quanNode, this._showPngList);
    }

    /** 数字 */
    private drawNum() {
        this._showNumList = {};
        let data: NspDaLu.DaLuOneItemData = this._data;
        if (data?.lists) {
            for (let one of data.lists) {
                this.setOneNum(one);
            }
        }
        this.setNodeActive(this.numNode, this._showNumList);
    }

    private setOneQuanPng(one: NspDaLu.DaLuNodeData) {
        let quanType = one.quanType || 0;

        const parentNode = this.quanNode;
        let { nodeName, x, y } = this.getNodeMessage(one);
        this._showPngList[nodeName] = true;

        // 存在节点则直接直接对比
        let pngNode = parentNode.getChildByName(nodeName);
        if (!pngNode) {
            pngNode = this.getQuanNode(nodeName);
            pngNode.parent = parentNode;
            /** pngNode需要缩小为70%，设计出图就是这样 */
            pngNode.setScale(0.7, 0.7);
        }
        pngNode.active = true;
        pngNode.setPosition(v3(x, y, 0));

        if (quanType == pngNode[this._saveKey]) {
            // 相同，不需要修改图片了
            return;
        }
        pngNode[this._saveKey] = quanType;
        // 修改图片
        this.setQuanSpriteFrame(pngNode, quanType);
    }

    private getQuanNode(name: string): Node {
        let node = Utils.createNode(name);
        if (node) {
            let sprite: Sprite = node.addComponent(Sprite);
            sprite.sizeMode = 2;
            sprite.type = 0;
            sprite.trim = true;
            sprite.enabled = true;
        }

        return node;
    }

    private setQuanSpriteFrame(pngNode: Node, quanType: number) {
        // 动态加载资源方案
        let spriteFrame = this.yuan_arr[quanType];
        if (!spriteFrame) {
            console.error(`没有匹配到相应的类型，当前是：${quanType}`);
            return;
        }
        pngNode.getComponent(Sprite).spriteFrame = spriteFrame;
    }

    private setOneNum(one: NspDaLu.DaLuNodeData) {
        let showNum = one.showNum;
        if (!showNum) return;

        const parentNode = this.numNode;
        let { nodeName, x, y } = this.getNodeMessage(one);
        this._showNumList[nodeName] = true;

        // 存在节点则直接直接对比
        let targetNode = parentNode.getChildByName(nodeName);
        if (!targetNode) {
            targetNode = instantiate(this.insLabel);
            targetNode.name = nodeName;
            targetNode.parent = parentNode;
        }
        targetNode.active = true;
        targetNode.setPosition(v3(x, y, 0));

        if (showNum == targetNode[this._saveKey]) {
            return;
        }
        targetNode[this._saveKey] = showNum;

        const labelCom = targetNode.getComponent(Label);
        labelCom.string = `${showNum}`;

        let thisColor = this._colorList[one.labelColor || NspDaLu.DaluLabelColorType.WHITE];
        labelCom.color = new Color(thisColor);
    }


    // 得到名称、坐标
    private getNodeMessage(one: NspDaLu.DaLuNodeData): { nodeName: string, x: number, y: number } {

        let drawIndex = one.drawIndex;

        // 转换成实际的索引
        let trueIndex = drawIndex % (NspDaLu.ItemNodeCol * NspDaLu.ItemNodeRow);
        const nodeName = trueIndex.toString();
        let { x, y } = this.getXYByIndex(trueIndex);

        return { nodeName: nodeName, x: x, y: y }
    }

    private setNodeActive(parent: Node, list: {}) {
        parent.children.forEach((child) => {
            let name = child.name;
            if (list[name]) {
                child.active = true;
            } else {
                child.active = false;
            }
        });
    }
}


