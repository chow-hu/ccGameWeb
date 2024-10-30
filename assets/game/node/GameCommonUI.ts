/*
 * @Description: 唯一节点，UI初始化相关
 * @Author: zy
 * @Date: 2024-03-06
 * @Reference: 
 */
import { _decorator, Game, game, log, Node, Prefab, Size } from 'cc';
import { gaudio, gui, ui2d, UIBase } from '../../framework/ge';
import { commonAssetLoader } from '../common/CommonAssetLoader';
import { AlertStackHelper } from './AlertStackHelper';
import { HTML5, NATIVE } from 'cc/env';

const { ccclass, property, menu } = _decorator;

// @ccclass('BuilderInfo')
// class BuilderInfo extends CCObject {
//     @property
//     key: string = '';
//     @property(Prefab)
//     source!: Prefab;
// }

@ccclass('GameCommonUI')
@menu('node/GameCommonUI')
export class GameCommonUI extends UIBase {
    @property(Node)
    public panelUI!: Node;
    @property(Node)
    public panelFloat!: Node;
    @property(Node)
    public CameraNode!: Node;
    @property(Node)
    public panelLoading!: Node;
    @property(Node)
    public panelAudio!: Node;
    @property(Prefab)
    public alertPrefab!: Prefab;
    @property(Prefab)
    public loadingPrefab!: Prefab;
    // @property([BuilderInfo])
    // builderInfos: BuilderInfo[] = []; // 红点,item

    @property(Node)
    panel_alert!: Node;

    onLoad(): void {
        let viewsize: Size = globalThis.viewsize();
        let size: Size = globalThis.uisize();
        ui2d.size(this.node, viewsize);
        ui2d.size(this.panelUI, size);
        gui.setUIInfo(this.panelUI, { assets: this.alertPrefab, helper: new AlertStackHelper() }, this.panelUI.children[0]);
        gui.setLoadingInfo(this.panelLoading, this.loadingPrefab)
        gui.setAlert(this.panel_alert, { assets: this.alertPrefab, helper: new AlertStackHelper() });
        gaudio.setInfo(this.panelAudio);

        // let list: Record<string, Prefab> = {};
        // for (let index = 0; index < this.builderInfos.length; index++) {
        //     const element = this.builderInfos[index];
        //     if (!element.key || !element.source) {
        //         continue;
        //     }
        //     list[element.key] = element.source;
        // }
        // gui.builderInfo(list);
        // commonAssetLoader.start();
        // this.schedule(this._commonAssetCheck, 0.1);

        this.onGameState();
    }

    onGameState() {
        if (HTML5) {
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState.toString() == "hidden") {
                    // gnet.isBackground = true;
                    gaudio.isBackground = true;
                    this.emit(Game.EVENT_HIDE);
                } else {
                    // gnet.isBackground = false;
                    gaudio.isBackground = false;
                    this.emit(Game.EVENT_SHOW);
                }
            })
        } else {
            game.on(Game.EVENT_HIDE, () => {
                // gnet.isBackground = true;
                this.emit(Game.EVENT_HIDE);
            })

            game.on(Game.EVENT_SHOW, () => {
                // gnet.isBackground = false;
                this.emit(Game.EVENT_SHOW);
            })
        }
    }

    private _commonAssetCheck() {
        commonAssetLoader.check();
        if (commonAssetLoader.finished) {
            this.unschedule(this._commonAssetCheck);
        }
    }

    set Camera(visible) {
        this.CameraNode.active = visible
    }
}


