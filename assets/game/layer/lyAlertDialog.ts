/*
 * @Description: 提示弹窗
 */
import { _decorator, Label, Node } from 'cc';
import { gui, UIBase, UIType } from '../../framework/ge';
import { EAudio } from '../common/interface';
import { LocalizedLabelPlus } from '../manager/LocalizedLabelPlus/LocalizedLabelPlus';

const { ccclass, property, menu } = _decorator;

@ccclass('lyAlertDialog')
@menu('layer/lyAlertDialog')
export class lyAlertDialog extends UIBase {
    @property(LocalizedLabelPlus)
    titleTxt!: LocalizedLabelPlus;

    @property(Node)
    titleNode!: Node;

    @property(Node)
    btnOk!: Node;
    @property(Node)
    btnCancel!: Node;
    @property(Node)
    btnClose!: Node;
    @property(Node)
    title!: Node;
    @property(Label)
    tipText!: Label;
    @property(Label)
    okTextNode!: Label;
    @property(Label)
    cancelTextNode!: Label;

    protected _uiType = UIType.ALERT;

    private okCallback: Function = null;
    private cancelCallback: Function = null;


    init(...params: any): void {
        let paramsObj = params[0];
        if (paramsObj.content) {
            this.tipText.string = paramsObj.content;
            this.title.active = false

        } else {
            this.title.active = true
        }

        if (paramsObj.ok) {
            this.okTextNode.string = paramsObj.ok?.text;
            this.okCallback = paramsObj.ok?.cb;
            this.btnOk.active = true;
        }

        if (paramsObj.cancel) {
            this.cancelTextNode.string = paramsObj.cancel?.text;
            this.cancelCallback = paramsObj.cancel?.cb;
            this.btnCancel.active = true;
        }
        this.titleTxt.node.active = !!paramsObj.title;
        this.titleNode.active = !paramsObj.title;
        this.titleTxt.renderCb = () => {
            this.titleTxt.string = paramsObj.title;
        }

        this.addClickEvent();
    }


    private addClickEvent() {

        gui.onclick(this.btnOk, () => {
            if (this.okCallback) {
                this.okCallback();
            }
            gui.closeAlert(this.node);
        }, true);

        gui.onclick(this.btnCancel, () => {
            if (this.cancelCallback) {
                this.cancelCallback();
            }
            gui.closeAlert(this.node);
        }, true);

        gui.onclick(this.btnClose, () => {
            gui.closeAlert(this.node);
        }, true, EAudio.BTNCLOSE);
    }

    onEvents(event: string, data: any): void {
        switch (event) {
            default:
                break;
        }
    }
}


