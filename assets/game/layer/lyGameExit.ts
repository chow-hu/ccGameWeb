
import { _decorator, Label, Node, Sprite, SpriteFrame } from 'cc';
import { gui, ui2d, UIBase, UIType } from '../../framework/ge';
import { config } from '../../plug-in/config';
import { AppConst } from '../common/AppConst';
import { gameDownloadMgr } from '../manager/gamedownload/GameDownloadManager';
import { SubGameEventGame, SubGameOrientation } from '../manager/subGameManager/interface';
import { gi } from '../manager/subGameManager/subGameGlobal';
import { Cache } from '../cache/Cache';

const { ccclass, property, menu } = _decorator;


@ccclass('lyGameExit')
@menu('layer/lyGameExit')
export class lyGameExit extends UIBase {
    @property(Node)
    logo!: Node;

    @property(Node)
    img_bg!: Node;

    @property(Node)
    img_frame: Node

    @property(Label)
    lb_tip!: Label;

    init(param: { orientation: number, tip: string }) {
        this.initUi(param);
    }

    initUi(param) {
        this.logo.active = String(Cache.User.getUser().game) != '101';
        // this.img_bg.angle = param.orientation == SubGameOrientation.portrail ? 0 : 90;
        ui2d.size(this.img_frame, param.orientation == SubGameOrientation.portrail ? 690 : 800, 475);
        ui2d.pos(this.img_frame, 0, param.orientation == SubGameOrientation.portrail ? 96 : 0)
        this.lb_tip.string = param.tip;
    }
}

