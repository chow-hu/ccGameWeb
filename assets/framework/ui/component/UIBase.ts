/*
 * @Description: UIBase - UI基类
 * @Author: zy
 * @Date: 2021-01-05 11:18:43
 * @Reference: 
 */

import { Component, Node, Widget, __private, _decorator } from 'cc';
import { PRIORITY } from '../../common/general';
import { UIComponentBase } from './UIComponentBase';
import { UIDialogBase } from './UIDialogBase';

const { ccclass, menu } = _decorator;
let uiTypeFlag = 0;
export enum UIType {
    //普通UI，点击mask关闭当前窗口
    NORMAL = 1 << uiTypeFlag++,
    //普通UI，mask拦截点击事件
    NORMAL_BLOCK = 1 << uiTypeFlag++,
    // alert，拥有UI打开动画，点击mask关闭当前窗口
    ALERT = 1 << uiTypeFlag++,
    // 窗口UI，拥有UI打开动画，点击mask关闭当前窗口
    DIALOG = 1 << uiTypeFlag++,
    //独立UI，不可被隐藏，mask拦截点击事件,关联UIDialogBase
    INDEPEND = 1 << uiTypeFlag++,
    INDEPEND_DARK = UIType.INDEPEND | (1 << uiTypeFlag++),
    //全屏UI，隐藏下层UI，mask拦截点击事件
    FULLSCREEN = 1 << uiTypeFlag++,
    //点击拦截标识，不可使用
    BLOCK = UIType.FULLSCREEN | UIType.NORMAL_BLOCK | UIType.INDEPEND,


}

@ccclass('UIBase')
@menu('base/UIBase')
export class UIBase extends UIComponentBase implements UIDialogBase {

    protected _uiType = UIType.NORMAL_BLOCK;
    public priority = PRIORITY.UI;
    // 点击mask的时候是否需要操作
    protected _maskClickNeedOpration: boolean = false;

    public get uiType(): UIType {
        return this._uiType;
    }

    public get maskClickNeedOpration(): boolean {
        return this._maskClickNeedOpration;
    }


    // #could not be override -- start
    onLoad() {
        this.onInit();
        if (this.uiType == UIType.FULLSCREEN) {
            let widget = this.node.getComponent(Widget);
            if (!widget) {
                widget = this.node.addComponent(Widget);
                widget.top = widget.bottom = widget.left = widget.right = 0;
                widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
                widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE
                // this.node.getComponent(UITransform).setContentSize(this.node.parent.getComponent(UITransform).contentSize);
                widget.updateAlignment()
            }
        }
    };

    onDestroy() {
        super.onDestroy();
    };
    // #could not be override -- end

    start() {

    };

    onInit() {

    };

    init(...parm: any) {

    };

    reset(parm: any) {

    };

    onRemove() {

    };

    onClose() {

    };

    // #dialog base --start @only trigger by dialog type
    onDialogUiIn() {

    };

    onDialogClose(): any {
        return false;
    };
    // #dialog base --end

    // 点击mask的时候触发
    onMaskClick() {

    };

    /**
     * link
     * @param paths 斜杠分割 example: 'a/b/c'
     * @example
     *  let node = this.link('top/panel/txt');
     */
    link(paths: string): Node | null;
    /**
     * link
     * @param paths 斜杠分割 example: 'a/b/c'
     * @param classConstructor Component 子类
     * @example
     *  let label = this.link('top/panel/txt',Label);
     */
    link<T extends Component>(paths: string, classConstructor: __private.__types_globals__Constructor<T>): T | null;
    link<T extends Component>(paths: string, classConstructor?: __private.__types_globals__Constructor<T>): T | Node | null {
        let node = this.find(paths);
        if (classConstructor) {
            return node && node.getComponent(classConstructor);
        }
        return node;
    };

    /**
     * find
     * @param paths 斜杠分割 example: 'a/b/c'
     * @example
     *  let node = this.find('top/panel/txt');
     */
    find(paths: string): Node | null {
        let node: Node | null = this.node;
        return node.getChildByPath(paths);
    };
}
