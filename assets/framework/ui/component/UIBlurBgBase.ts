import { _decorator, Camera, director } from "cc";
import { UIBase } from "./UIBase";

const { ccclass, menu } = _decorator;
@ccclass('UIBase')
@menu('base/UIBase')
export class UIBlurBgBase extends UIBase {
    onLoad(): void {
        super.onLoad();
        director.getScene().getChildByName("GameCommonUI").getChildByName("Camera").getComponent(Camera).usePostProcess = true;
    }
    onDestroy(): void {
        super.onDestroy();
        director.getScene().getChildByName("GameCommonUI").getChildByName("Camera").getComponent(Camera).usePostProcess = false;
    }
}