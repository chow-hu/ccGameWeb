import { _decorator, CCString, Component, Label, RichText } from 'cc';
import { ERichText, gutil_char } from '../../../framework/ge';
import { gmgr } from '../gmgr';
import { EMgr } from '../interface';
import { LocalizedLabelManager } from './LocalizedLabelManager';
import { LocalizedLabelUtil } from './LocalizedLabelUtil';
const { ccclass, property } = _decorator;


@ccclass('LocalizedLabelPlus')
export class LocalizedLabelPlus extends Component {
    @property(CCString)
    key: string = '';

    private _string: string;
    public get string(): string {
        return this._string;
    }
    public set string(value: string) {
        this._string = value;
        let cmp = LocalizedLabelUtil.getLabel(this.node);
        if (cmp) {
            cmp.string = value;
        }
    }


    public setKey(key: string) {
        this.key = key;
        this.updateRenderer();
    }

    private label: Label | RichText | ERichText;

    private _renderCb: Function = null;
    public get renderCb(): Function {
        return this._renderCb;
    }
    public set renderCb(value: Function) {
        this._renderCb = value;
        this.updateRenderer();
    }

    public updateRenderer() {
        if (this.key) {
            if (!this.label) this.label = LocalizedLabelUtil.getLabel(this.node);
            if (this.label) this.label.string = gutil_char(this.key);
        } else {
            this.renderCb && this.renderCb();
        }

    }

    protected onLoad(): void {
        let cmp = LocalizedLabelUtil.getLabel(this.node);
        if (cmp) {
            this.label = cmp;
            this.updateRenderer();
            ((this.label as any).llp as LocalizedLabelPlus) = this;
            gmgr.get<LocalizedLabelManager>(EMgr.LOCALIZED).add(this);
        }
    }


    protected onDestroy(): void {
        let cmp = LocalizedLabelUtil.getLabel(this.node);
        if (cmp) {
            gmgr.get<LocalizedLabelManager>(EMgr.LOCALIZED).remove(this);
        }
    }

    private getLabel() {
        return this.node.getComponent(Label) || this.node.getComponent(RichText) || this.node.getComponent(ERichText);
        // return this.label instanceof Label || this.label instanceof ERichText || this.label instanceof RichText;
    }
}




