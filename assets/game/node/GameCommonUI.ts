/*
 * @Description: 唯一节点，UI初始化相关
 * @Author: zy
 * @Date: 2024-03-06
 * @Reference: 
 */
import { _decorator, Game, game, Label, Node, Prefab, Size } from 'cc';
import { HTML5 } from 'cc/env';
import { gaudio, gui, ui2d, UIBase } from '../../framework/ge';
import { config } from '../../plug-in/config';
import { Cache } from '../cache/Cache';
import { AppEvent } from '../common/AppEvent';
import { commonAssetLoader } from '../common/CommonAssetLoader';
import { AlertStackHelper } from './AlertStackHelper';
import { LoginEvent } from '../manager/account/interface';

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
    @property(Label)
    lb_version!: Label;
    // @property([BuilderInfo])
    // builderInfos: BuilderInfo[] = []; // 红点,item

    @property(Node)
    panel_alert!: Node;

    @property(Node)
    panel_tips!: Node

    onLoad(): void {
        let viewsize: Size = globalThis.viewsize();
        let size: Size = globalThis.uisize();
        ui2d.size(this.node, viewsize);
        ui2d.size(this.panelUI, size);
        gui.setUIInfo(this.panelUI, { assets: this.alertPrefab, helper: new AlertStackHelper() }, this.panelUI.children[0]);
        gui.setLoadingInfo(this.panelLoading, this.loadingPrefab)
        gui.setAlert(this.panel_alert, { assets: this.alertPrefab, helper: new AlertStackHelper() });
        gaudio.setInfo(this.panelAudio);
        gui.setTips(this.panel_tips);
        // let list: Record<string, Prefab> = {};
        // for (let index = 0; index < this.builderInfos.length; index++) {
        //     const element = this.builderInfos[index];
        //     if (!element.key || !element.source) {
        //         continue;
        //     }
        //     list[element.key] = element.source;
        // }
        // gui.builderInfo(list);
        commonAssetLoader.start();
        this.schedule(this._commonAssetCheck, 0.1);
        // this._commonAssetCheck();
        this.onGameState();

        this.on([AppEvent.SYS_SHOW_OR_HIDE_VERSION, LoginEvent.LOGIN_READY]);

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
    /** 事件绑定回调 */
    onEvents(event: string, ...args: any[]) {
        let key = args[0];
        let value = args[1];
        switch (event) {
            case AppEvent.SYS_SHOW_OR_HIDE_VERSION:
                this._updateVersionVisible(key);
                break;
            case LoginEvent.LOGIN_READY:
                let gameId = Cache.User?.getGameId() || 100;
                this.lb_version.string = Cache.User.isKB() ? '' : `Version ${config.VERSION}_${config.GameVersion(gameId)} `;
                break
            default:
                break;
        }
    }

    private _updateVersionVisible(visible = null) {
        if (visible == null || typeof (visible) != 'boolean') { return; };
        let gameId = Cache.User?.getGameId() || 100;
        this.lb_version.string = Cache.User.isKB() ? '' : `Version ${config.VERSION}_${config.GameVersion(gameId)} `;

        this.lb_version.node.active = visible;

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


