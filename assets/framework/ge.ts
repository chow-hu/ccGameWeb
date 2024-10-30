/*
 * @Description: 全局类
 * @Author: zy
 * @Date: 2021-01-14 17:24:21
 * @Reference:
 */
import { DynamicAtlasManager, macro } from 'cc';
macro.CLEANUP_IMAGE_CACHE = false
DynamicAtlasManager.instance.enabled = true;

import { BUILD } from 'cc/env';

import EventDispatcher from './event/EventDispatcher';
const eventDispatcher = EventDispatcher.instance;

import { AssetsLoader } from './asset/AssetsLoader';
const loader = AssetsLoader.instance;

import AtlasManager from './asset/AtlasManager';
const gatlas = AtlasManager.instance;

import GUI from './ui/gui';
const gui = GUI.instance;

import { AudioEngine } from './asset/AudioEngine';
const gaudio = AudioEngine.instance;

import { SchedulerManager } from './timer/SchedulerManager';
const schedulerManager = SchedulerManager;

import * as astar from './extension/astar';

import gameprotoRoot from '../shared/game_common/game_common_proto.js';
import protoRoot from '../shared/proto.js';

const client_proto = protoRoot.client_proto;
const bridge_proxy_proto = protoRoot.bridge_proxy_proto;
const game_manage_proto = protoRoot.game_manage_proto;
const proto_asset = protoRoot.asset;
const agent = protoRoot.agent;
const tgame_proto = protoRoot.tgame_proto;
const transactions = protoRoot.transactions;
const gamealloc_proto = protoRoot.gamealloc;
const vipbetredate = protoRoot.vipbetredate;
const room_alloc_proto = gameprotoRoot.roomalloc;
const game_base_proto = gameprotoRoot.gamebase;
const account_proto = protoRoot.account_proto;


import NetWsManager from './net/NetWsManager';

const gnet = NetWsManager.instance;

(globalThis as any).GAME_DEBUG = !BUILD;
(globalThis as any).WEB_DESKTOP_TEST = false;
export class _GE_ {
    private static _instance: _GE_;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new _GE_();
        this._instance.init();
        return this._instance;
    };

    constructor() {

    };
    isDebug() {
        return (globalThis as any).GAME_DEBUG;
    };
    init() {
        eventDispatcher.clear();
        loader.clear();
        gui.clear();
        this._rebind(console, 'log');
        this._rebind(console, 'debug');
    };

    private _rebind(obj: Record<string, any>, key: string) {
        if (this.isDebug()) {
            return;
        }
        let _temp = obj[key].bind(obj);
        obj[key] = (...parms: any) => {
            if (this.isDebug()) {
                _temp(...parms);
            }

        }
    };

    public pause() {
        gnet.pause();
        gaudio.pause();
    };

    public resume() {
        gaudio.resume();
    }
};

export const ge: _GE_ = _GE_.instance;

export {
    agent, astar, bridge_proxy_proto, client_proto, eventDispatcher, game_base_proto, game_manage_proto, gamealloc_proto, gatlas, gaudio, gnet, gui, loader, proto_asset, room_alloc_proto, schedulerManager, tgame_proto, transactions, vipbetredate, account_proto
};


export * from './asset/IFileUtils';
export * from './asset/ManifestAssetsManager';

export * from './common/EMap';
export * from './common/ETw';
export * from './common/general';
export * from './common/text-utils';
export * from './common/ui2d';

export * from './event/EventContract';
export * from './event/EventProtoContract';
export * from './event/IEvent';
export * from './ui/component/EButton';
export * from './ui/component/EPageListView';
export * from './ui/component/ERichText';
export * from './ui/component/ETileButton';
export * from './ui/component/ETileListView';
export * from './ui/component/ETilePanel';
export * from './ui/component/FillMode';
export * from './ui/component/UIBase';
export * from './ui/factory/alertstack';
export * from './ui/factory/builderstack';
export * from './ui/factory/layerstack';
export * from './ui/factory/loadingstack';
export * from './ui/helper/layout_utils';
export * from './ui/helper/listview';
export * from './ui/helper/listview-base';
export * from './ui/helper/pagelistview';
export * from './ui/helper/rslistview';
export * from './ui/helper/rslistview-base';
export * from './ui/helper/tilelistview';
export * from './ui/helper/tilenode';
export * from './ui/helper/tilerslistview';

export * from './ui/scrollview/ScrollViewEnable';
export * from './ui/scrollview/SimpleScrollView';

export * from './math/ERect';
export * from './math/EVec';
export * from './net/INet';
export * from './net/NetHttp';

export * from './timer/SchedulerManager';


