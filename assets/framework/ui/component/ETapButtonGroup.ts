/*
 * @Description: 页签切换组件————按钮组
 * @Author: zy
 * @Date: 2024-01-29 13:50:12
 * @Reference: 
 */
import { Component, Node, _decorator, instantiate } from 'cc';
import { UIComponentBase } from '../component/UIComponentBase';
import { ETapButton } from './ETapButton';
const { ccclass, property, menu } = _decorator;

@ccclass('ETapButtonGroup')
@menu('自定义组件/ETapButtonGroup')
export class ETapButtonGroup extends UIComponentBase {
    @property(Node)
    btnPre!: Node;

    private _selectIdx: number = -1;
    private _content: Node | null = null;
    private _btns: ETapButton[] = [];

    get content() {
        return this._content || this.node;
    }

    get selectIdx() {
        return this._selectIdx;
    }

    getBtnByIdx(idx: number) {
        return this._btns[idx].node;
    }

    public init(count: number, host: Component, content?: Node, item?: Node) {
        this._content = content || null;
        item && (this.btnPre = item);
        this._setBtns(count, host);
    }

    private _setBtns(count: number, host: Component) {
        for (let i = 0; i < count || i < this.content.children.length; i++) {
            let btn = this.content.children[i];
            if (!btn) {
                btn = instantiate(this.btnPre);
                this.content.addChild(btn);
            }
            if (count <= i) {
                btn.active = false;
                continue;
            }
            btn.active = true;
            let btnTs = btn.getComponent(ETapButton);
            if (!btnTs) {
                btnTs = btn.addComponent(ETapButton);
            }
            this._btns.push(btnTs);
            btnTs.init(i, host);
        }
    }

    public onSelect(idx: number) {
        if (idx == -1) {
            this._selectIdx = -1;
            return
        }
        if (idx === this._selectIdx) return;
        let isCheck = false;
        for (let i = 0; i < this._btns.length; i++) {
            const btn = this._btns[i];
            if (btn.onSelect(i === idx)) {
                isCheck = true;
            }
        }
        if (isCheck) this._selectIdx = idx;
    }
}