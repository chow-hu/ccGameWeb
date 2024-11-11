import { _decorator, director, instantiate, log, Prefab } from 'cc';
import { gnet, loader, UIBase } from '../framework/ge';
import { accountMgr } from '../game/manager/account/AccountManager';
import { Cache } from '../game/cache/Cache';
import { NetContract } from '../game/net/NetContract';
import { DataHandle } from '../game/manager/account/DataHandle';
import { LoginEvent } from '../game/manager/account/interface';
import { gi } from '../game/manager/subGameManager/subGameGlobal';
import { GameCache } from '../game/manager/game/GameCache';
import { SubGameCache } from '../game/manager/game/SubGameCache';
import { AppConst } from '../game/common/AppConst';
import { showTip } from '../game/common/custom-general';
import { gameMgr } from '../game/manager/game/GameManager';
const { ccclass, property } = _decorator;

@ccclass('scGame')
export class scGame extends UIBase {
    onLoad(): void {
        this.netset();
        Cache.init();
        this.commonUI();
        this.on([LoginEvent.LOGIN_SUCCESS, LoginEvent.LOGIN_READY]);
    }

    commonUI() {
        loader.load('prefab/node/GameCommonUI', Prefab, null, (err, res) => {
            if (!res) {
                return;
            }
            if (!globalThis.commonUI) {
                let node = instantiate(res);
                director.addPersistRootNode(node);
                globalThis.commonUI = node;
                DataHandle.instance.scopeParam();
            }
        }, true);
    };

    start() {

    }

    update(deltaTime: number) {

    }

    /**
     * 网络链接的监听中心
     */
    netset() {
        if (!gnet.contract) {
            gnet.contract = new NetContract();
        }
    }

    onEvents(event: string, data: any): void {
        switch (event) {
            case LoginEvent.LOGIN_READY:
                if (data) {
                    accountMgr.loginLogic();
                }
                break;
            case LoginEvent.LOGIN_SUCCESS:
                let gameId = Cache.User.getUser().game;
                if (!AppConst.GetGamePackageConfById(gameId)) {
                    showTip(`chow out gameId is empty: ${gameId}`)
                    break;
                }
                if (!GameCache.game._get(SubGameCache.GAME_TABLEID)) {
                    // 保存用户数据
                    console.log("bobo --------------------- ", data);
                    gi.openGame(gameId, 'c1', Cache.User.getUser().gameinfo.fullscreen)
                } else {
                    gameMgr.requestJoinGame();
                }
                break;
            default:
                break;
        }
    }
}


