import { AssetManager, assetManager, director, game, isValid, Prefab, warn } from "cc";
import _ from "lodash";
import { AssetsLoader, IBundleOption } from "../../../framework/asset/AssetsLoader";
import { AudioEngine } from "../../../framework/asset/AudioEngine";
import { GameCmdMap, gui, gutil_char, PRIORITY, SchedulerManager } from "../../../framework/ge";
import { Cache } from "../../cache/Cache";
import { AppConst } from "../../common/AppConst";
import { setOrientation } from "../../common/custom-general";
import { Utils } from "../../common/Utils";
import { GameCache } from "../game/GameCache";
import { GameManager } from "../game/GameManager";
import { SubGameCache } from "../game/SubGameCache";
import { gameDownloadMgr } from "../gamedownload/GameDownloadManager";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { SubGameDetail, SubGameEventGame, SubGameProducer } from "./interface";
import { GiGameEvent } from "./interfaceGIApi";
import { BUILD } from "cc/env";
import { gi } from "./subGameGlobal";
import { transGuiPath } from "db://assets/framework/ui/factory/utils";

export class SubGameManager extends IManager {
    private lastGame: SubGameDetail = null;
    private _curGame: SubGameDetail = null;
    public get curGame(): SubGameDetail {
        return this._curGame;
    }
    public set curGame(value: SubGameDetail) {
        this._curGame = value;
    }

    private static _instance: SubGameManager;

    /** 资源释放句柄 */
    private handlerRelease = null;

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new SubGameManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.SUBGAMEMANAGER);
        this.on([SubGameEventGame.open, SubGameEventGame.close, SubGameEventGame.start, SubGameEventGame.loading]);
        this.bindGameEvent();
        this.onproto([]);
    };


    bindGameEvent() {
        for (let key in SubGameEventGame) {
            if (Object.prototype.hasOwnProperty.call(SubGameEventGame, key)) {
                game.on(SubGameEventGame[key], (...args: any[]) => {
                    if (isValid(self)) {
                        this.onEvents.call(this, SubGameEventGame[key], ...args);
                    }
                })
            }
        }
    }

    onRecv(event: string, data: any): void {

    }

    private doError(detail: SubGameDetail, tag = null) {
        detail.errCallback && detail.errCallback(`预加载包${Utils.JsonEncode(detail.bundleConf)}失败 tag:${tag}`);
        // this.showCommonUi(true);
        gui.closeLayer('lyGameLoading');
        this.lastGame = Utils.clone(this.curGame);
        // this.curGame = null;
        this.closeGame();
    }

    private doSuccess(detail: SubGameDetail, showUi: boolean = true) {
        gui.loading(false, PRIORITY.UI);
        gui.closeLayer('lyGameLoading');
        // this.showCommonUi(showUi);
        detail.finishCallback && detail.finishCallback();
    }

    private doOpen(detail: SubGameDetail) {
        let trans = transGuiPath(detail.bundleConf.layer);
        let enterGame = () => {
            this.initByEnterGame(detail);
            gui.openBundleLayer(detail.bundleConf.name, trans.path, null, {
                onAdded: () => {
                    if (this.hasOwnLoading(detail.gameID)) {
                        this.emit(SubGameEventGame.start);
                    }
                    this.doSuccess(detail);
                },
                onError: () => {
                    this.doError(detail, 4);
                    warn(`加载包${detail.bundleConf} 的layer：${trans.path} 失败`, Utils.JsonEncode(detail.bundleConf));
                },
            });
        }

        AssetsLoader.instance.loadBundle(detail.bundleConf, (err, bundleName) => {
            if (err) {
                this.doError(detail, 2);
                return;
            }
            if (this.hasOwnLoading(detail.gameID)) {
                AssetsLoader.instance.bundleLoad(bundleName, trans.path, Prefab, null, (err, prefab) => {
                    if (err) {
                        if (globalThis.confirm(gutil_char('DOWNLOAD_GAME_ERROR'))) {
                            location.reload();
                        }
                        return;
                    }
                    enterGame();
                })
            } else {
                gameDownloadMgr.downloadAbs(`${detail.gameID}`, {
                    progress(finished, total, percent) {
                        this.emit(gi.SubGameEventGame.loading, percent * 100);
                    },
                    target: this,
                    complete(err, data) {
                        enterGame();
                    },
                    error: () => {
                        if (globalThis.confirm(gutil_char('DOWNLOAD_GAME_ERROR'))) {
                            location.reload();
                        }
                    },
                })
            }
        })
    }

    hasOwnLoading(gameID: number): boolean {
        return !AppConst.NotOwnLoadingGames.includes(gameID);
    }

    /** 预加载包列表 */
    private preloadCommBundle(bundleConfList: Array<IBundleOption>, errCallback?: Function, finishCallback?: Function) {
        if (!bundleConfList || bundleConfList.length == 0) {
            finishCallback && finishCallback();
            return;
        }
        let bundleConf = bundleConfList[0];
        warn("开始加载公共包：===>", Utils.JsonEncode(bundleConf))
        AssetsLoader.instance.loadBundle(bundleConf, (err, bundleName) => {
            if (err) {
                errCallback && errCallback(`加载包${bundleConf.name}失败`);
                return;
            }
            this.preloadCommBundle(bundleConfList.slice(1, bundleConfList.length), errCallback, finishCallback)
        })

    }

    /** 打开游戏 */
    openGame(detail: SubGameDetail) {
        // gui.loading({ delay: 2 }, PRIORITY.UI);
        let subBundleConf = [];
        if (detail && (detail.subBundleConf == null || detail.subBundleConf.length == 0)) {
            if (detail.bundleConf && detail.bundleConf.depends && detail.bundleConf.depends.length > 0) {
                detail.bundleConf.depends.forEach((depend) => {
                    let option = AppConst.GetSubPackageConfById(depend) || AppConst.GetGamePackageConfById(depend) || AppConst.GetPackageConfByName(depend);;
                    option && subBundleConf.push(option);
                })
                warn("[SubGame:OpenGame]打开游戏,添加附属包配置:>>>", Utils.JsonEncode(subBundleConf))
            }
            detail.subBundleConf = subBundleConf;
        }

        if (this.curGame) {
            warn(`打开失败,当前已在游戏了，请先退出在操作 newGame：${Utils.JsonEncode(detail)} curGame: ${Utils.JsonEncode(this.curGame)}`);
            return;
        }
        warn("[SubGame:OpenGame]打开游戏,配置为:>>>", Utils.JsonEncode(detail))
        this.curGame = detail;
        this.release();
        setOrientation(!!detail.orientation);
        // gui.openLayer('lyGameLoading', { gameId: detail.gameID }, {
        //     onAdded: () => {
        //         if (detail.producer == SubGameProducer.c1) {
        //             // this.showCommonUi(false, true);
        //         } else {
        //             // this.showCommonUi(false);
        //         }
        //         this.doOpen(detail);
        //     }
        // });
        this.doOpen(detail);
    }

    /** 进入之前的初始化 */
    initByEnterGame(detail: SubGameDetail) {
        AudioEngine.instance.stopMusic(-1);
        AudioEngine.instance.stopEffect(-1);


        this.offGiEvent();
        GameCmdMap.clear();
        //c1需要初始化GameManager
        if (detail.producer == SubGameProducer.c1) {
            GameManager.instance.enterOneGame();
        }
        GameCache.game.initByIntoGame();
        GameCache.game._set(SubGameCache.GAME_ID, detail.gameID);
        GameCache.game._set(SubGameCache.GAME_PLAT, detail.producer);
        GameCache.game._set(SubGameCache.BALANCE, Cache.User.getBalance());
    }

    /** 显示或隐藏顶部UI */
    showCommonUi(active: boolean, force?: boolean) {
        if (globalThis.commonUI) {
            // globalThis.commonUI.active = force ? active : active || this.curGame.producer == SubGameProducer.c1;

            const panel_ui = globalThis.commonUI.getChildByName('panel_ui');
            const panel_bottom = globalThis.commonUI.getChildByName('panel_bottom');
            panel_ui.active = panel_bottom.active = force ? active : active || this.curGame.producer == SubGameProducer.c1;
        }
    }

    /** 退出游戏 */
    closeGame() {
        this.curGame = null;
        director.end();
    }

    offGiEvent() {
        for (let key in GiGameEvent) {
            if (GiGameEvent.hasOwnProperty(key) && GiGameEvent[key] != GiGameEvent.NET_MESSAGE_SEND) {
                game.off(GiGameEvent[key]);
            }
        }
    }

    /**
     * 释放游戏内资源
     * @param detailTime 延迟时间 默认0不延迟
     * @returns 
     */
    release(detailTime = 0) {
        if (!this.lastGame) return;

        if (this.handlerRelease != null) {
            SchedulerManager.unscheduleTimeout(this.handlerRelease);
            this.handlerRelease = null;
        }

        let self = this;

        let callBackFunc = () => {
            if (!isValid(self)) { return; };
            if (self.lastGame?.gameID == self.curGame?.gameID) return;
            warn(`存在游戏资源缓存 开始释放 lastGame: ${Utils.JsonEncode(self.lastGame)}`);
            AssetsLoader.instance.removeBundle(self.lastGame.bundleConf.name);
            gameDownloadMgr.destroyTask(self.lastGame.bundleConf);
            if (self.lastGame.subBundleConf && self.lastGame.subBundleConf.length > 0) {
                for (let i = 0; i < self.lastGame.subBundleConf.length; i++) {
                    let bundle = self.lastGame.subBundleConf[i];
                    if (bundle) {
                        gameDownloadMgr.destroyTask(bundle);
                        AssetsLoader.instance.removeBundle(bundle.name);
                    }
                }
            }
            self.lastGame = null;
        }
        if (detailTime > 0) {
            this.handlerRelease = SchedulerManager.schedulerTimeout(() => {
                callBackFunc();
            }, detailTime)
        } else {
            callBackFunc();
        }

    }

    closeAllGameLayers() {
        if (!this.curGame) { return; }
        let gameId = this.curGame.gameID;
        const options = [AppConst.GetGamePackageConfById(gameId)];
        if (options[0] == null) {
            return
        }
        let depends = options[0].depends || [];
        depends.forEach((depend) => {
            let option = AppConst.GetSubPackageConfById(depend) || AppConst.GetGamePackageConfById(depend) || AppConst.GetPackageConfByName(depend);
            option && options.unshift(option);
        })
        options.forEach((option) => {
            let name = option.name;
            let bundle = assetManager.getBundle(name);
            bundle && this.closeBundleLayer(bundle)
        })
    }

    closeBundleLayer(bundle: AssetManager.Bundle) {
        let temp = bundle['_config']['paths']['_map'];
        for (let key in temp) {
            if (!_.isEmpty(key) && key.startsWith('prefab/layer')) {
                let temps = key.split('/');
                let layer = temps[temps.length - 1];
                !_.isEmpty(layer) && gui.closeLayer(layer);
            }
        }
    }

    onEvents(event: string, data: any) {
        switch (event) {
            case SubGameEventGame.open:
                this.openGame(data as SubGameDetail)
                break;
            case SubGameEventGame.close:
                // this.closeGame();
                break;
            case SubGameEventGame.start:
                this.startGame();
                break;
            case SubGameEventGame.loading:
                this.loadGame(data);
                break;
            default:
                break;
        }
    }

    startGame() {
        let splashbg = document.getElementById('splashbg');
        if (splashbg) {
            splashbg.style.display = 'none';
        }
        let splashcc = document.getElementById('splashcc');
        if (splashcc) {
            splashcc.style.display = 'none';
        }

        let animation = document.getElementById('animation');
        if (animation) {
            animation.style.display = 'none';
        }

        let progressText = document.getElementById('progressText');
        if (progressText) {
            progressText.style.display = 'none';
        }
        globalThis.xmlhttpcheck = false;
    }

    loadGame(progress: number) {
        if (BUILD) {
            clearInterval(globalThis.ccgameloading);
            let progressText = document.getElementById('progressText');
            if (progressText) {
                // progressText.style.display = 'block';
                progressText.innerHTML = `${Math.floor(90 + progress * 0.1)}%`;
            }
        }
    }
}

export const subGameManager: SubGameManager = SubGameManager.instance; 