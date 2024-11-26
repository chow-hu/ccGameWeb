import { _decorator, Sprite } from 'cc';
import { gatlas, UIBase } from '../../framework/ge';
import { Atlas } from '../common/interface';
const { ccclass, property } = _decorator;

@ccclass('pfAvatar')
export class pfAvatar extends UIBase {
    @property(Sprite)
    img_head!: Sprite

    showHead(url: string) {
        if (!url || !url.length) {
            this.img_head.node.active = false
            return;
        }
        this.img_head.node.active = true
        if (url.toLocaleLowerCase().includes("http")) {
            this.loadRemoteSprite(this.img_head, url);
        } else {
            this.img_head.spriteFrame = gatlas.get(Atlas.USERICON, 'touxiang_' + url);
        }
    }
}


