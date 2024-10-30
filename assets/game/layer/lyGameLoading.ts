
import { _decorator, Label, Node } from 'cc';
import { gui, UIBase, UIType } from '../../framework/ge';
import { config } from '../../plug-in/config';
import { AppConst } from '../common/AppConst';
import { gameDownloadMgr } from '../manager/gamedownload/GameDownloadManager';
import { SubGameEventGame } from '../manager/subGameManager/interface';
import { gi } from '../manager/subGameManager/subGameGlobal';

const { ccclass, property, menu } = _decorator;


@ccclass('lyGameLoading')
@menu('layer/lyGameLoading')
export class lyGameLoading extends UIBase {

    @property(Node)
    anim!: Node;

    @property(Label)
    lb_version!: Label;

    private prepare: Function = null;
    private _dt: number = 0

    private _gamdId: string;

    protected _uiType: UIType = UIType.FULLSCREEN;

    init(param: { gameId: string }) {
        this._gamdId = param.gameId;
        this.bindUi();
        this.bindEvent();
        this.on([SubGameEventGame.prepare])
    }

    startDownLoad(gameId: string) {
        gameDownloadMgr.downloadAbs(gameId);
    }

    bindUi() {
        this.lb_version.string = `version:${config.VERSION}.${AppConst.GetGamePackageConfById(this._gamdId).md5}`;
    }

    bindEvent() {
        this.node.on(Node.EventType.ACTIVE_IN_HIERARCHY_CHANGED, () => {
            if (this.node.active) {
                // gui.loading({ forever: true, type: 1 }, PRIORITY.UI);
                // if (this.prepare) {
                //     this.prepare();
                //     this.prepare = null;
                // }
            }
        })
    }

    start(): void {
        // gui.loading({ forever: true, type: 1 }, PRIORITY.UI);
    }

    protected onDisable(): void {
        // gui.loading(false, PRIORITY.UI);
    }

    onRemove(): void {
        this.prepare = null;
        this.unscheduleAllCallbacks();
    }

    protected onEnable(): void {
        // gui.loading({ forever: true, type: 1 }, PRIORITY.UI);
    }

    onEvents(event: string, data: any) {
        switch (event) {
            case SubGameEventGame.prepare:
                this.prepare = data as Function;
                // if (gui.isTopLayer('lyGameLoading')) {
                //     this.prepare();
                //     this.prepare = null;
                // }
                this.startDownLoad(this._gamdId);
                this.scheduleOnce(() => {
                    this.anim.active = false;
                }, 2)
                break;
            default:
                break;
        }
    }

    protected update(dt: number): void {
        this._dt += dt;
        if (this._dt >= 0.5 && this.prepare) {
            this.prepare();
            this.prepare = null;
        }
    }
}

