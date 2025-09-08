
import { EditBox, EventTouch, Label, Node, Toggle, _decorator, profiler } from 'cc';
import { DEBUG } from 'cc/env';
import { PRIORITY, UIBase, gnet, gui, http } from '../../framework/ge';
import { StorageData } from '../../framework/storage/StorageData';
import { config } from '../../plug-in/config';
import { StoreKey } from '../common/AppConst';
import { AppEvent } from '../common/AppEvent';
import { SubGameDetail, SubGameEventGame } from '../manager/subGameManager/interface';
import { gi } from '../manager/subGameManager/subGameGlobal';
const { ccclass, property } = _decorator;

/**
 * Name = DebugUI
 * URL = db://assets/game/node/DebugUI.ts
 * Time = Thu Oct 10 2024 14:31:23 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onInit-->onEnable->start->update->lateUpdate->onDisable->onRemove->onDestroy
 * 开发者模式
 */

@ccclass('DebugUI')
export class DebugUI extends UIBase {

	@property({ tooltip: "debug界面", type: Node })
	nodeDebugView: Node | null = null;

	@property({ tooltip: "debug显示隐藏开关", type: Node })
	nodeDebugSwitch: Node | null = null;


	/*********************跳转游戏************************* */
	@property({ tooltip: "跳转游戏：游戏ID", type: EditBox })
	editGameID: EditBox | null = null;

	@property({ tooltip: "跳转游戏：分盘ID", type: EditBox })
	editAgency: EditBox | null = null;

	@property({ tooltip: "跳转游戏：厂商C1", type: Toggle })
	producerC1: Toggle | null = null;
	@property({ tooltip: "跳转游戏：厂商C2", type: Toggle })
	producerC2: Toggle | null = null;

	@property({ tooltip: "跳转游戏：横屏", type: Toggle })
	orientationC1: Toggle | null = null;
	@property({ tooltip: "跳转游戏：竖屏", type: Toggle })
	orientationC2: Toggle | null = null;


	/*********************断线重连************************* */
	@property({ tooltip: "重连时间(秒)", type: EditBox })
	editReconnTime: EditBox | null = null;

	/*********************FPS帧率显示************************* */
	@property({ tooltip: "FPS帧率显示隐藏", type: Toggle })
	toggleFpsShowOrHide: Toggle | null = null;

	@property({ tooltip: "FPS帧率显示隐藏", type: Toggle })
	ToggleLog: Toggle | null = null;


	/*********************信息显示************************* */
	@property({ tooltip: "信息根节点", type: Node })
	nodeInfo: Node | null = null;

	@property({ tooltip: "信息", type: Label })
	lblInfo: Label | null = null;

	private _baseUrl = "https://fdsghuk349dfsbjk.ccapi218orbjksapm03fjkds.com"

	onLoad() {
		this.on([SubGameEventGame.open, SubGameEventGame.close])
		this.initView();
	};

	initView() {
		this.nodeDebugView.active = false;
		this.nodeDebugSwitch.active = true;
		this.toggleFpsShowOrHide.isChecked = profiler?.isShowingStats();
		this.ToggleLog.isChecked = false;
		this.updateInfo();
	}

	/** 事件绑定回调 */
	onEvents(event: string, data: any) {
		switch (event) {
			case SubGameEventGame.open:
				let _data = data as SubGameDetail;
				if (_data && _data.gameID >= 200) {
					this.node.active = false;
				}
				break;
			case SubGameEventGame.close:
				this.node.active = true;
				break;
			default:
				break;
		}
	};


	/** 点击了debug显/隐开关 */
	onClickShowOrHideSwitch(event: EventTouch = null) {
		let willState = !this.nodeDebugView.active;
		this.nodeDebugView.active = !this.nodeDebugView.active;
		if (willState == true) {
			this.updateAllView();
		} else {

		}
	}

	/** 所有UI刷新 */
	updateAllView() {
		this.editGameID.string = "";
		this.editReconnTime.string = "";
		this.updateInfo();
	}

	updateInfo() {
		this.nodeInfo.active = true;
		let serverList = { 1: "内网", 2: "外网测试", 3: "外网正式", 4: "预发布", }
		this.lblInfo.string = ` Ver:${config.VERSION} 调试模式:${DEBUG}  IO:${serverList[config.IO]} `;
	}
	/** 点击了跳转游戏 */
	onClickJumpGame(e: EventTouch) {
		let gameID = Number(this.editGameID.string);
		let agencyID = this.editAgency.string;
		if (isNaN(gameID)) {
			gui.showTips("游戏ID不正确");
			return;
		}
		this.nodeDebugView.active = false;

		const agency = agencyID;
		const gameid = gameID.toString();
		const queryParams = new URLSearchParams({
			agency,
			gameid,
			_: Date.now().toString()
		});

		const targetUrl = `${this._baseUrl}/gamemock/login?${queryParams}`;
		http._send(http.parseOriginRespone, {
			url: targetUrl, postData: null, cb: (err: string, rsp: any) => {
				if (err || rsp == "") {
					console.error("请求失败:", err);
					return;
				} else {
					const currentUrl = window.location.href;
					const targetUrl = rsp;
					const targetObj = new URL(targetUrl);
					const urlObj = new URL(currentUrl);
					urlObj.search = targetObj.search;
					console.log(urlObj)
					window.location.href = urlObj.toString();
				}

			}
		}, "text")

		// let orientation = (this.orientationC1.isChecked == true ? 1 : 0);
		// console.warn("即将打开游戏：", gameID, producer, orientation);
		// gi.openGame(gameID, producer, orientation);
	}

	/** 点击了帧率显示隐藏 */
	onClickFpsShowOrHide(e: EventTouch) {
		// this.toggleFpsShowOrHide.isChecked = !this.toggleFpsShowOrHide.isChecked;
		if (this.toggleFpsShowOrHide.isChecked) {
			profiler?.hideStats();
		} else {
			profiler?.showStats();
		}

	}

	onClickLog() {
		if (!this.ToggleLog.isChecked) {
			gui.openLayer('lyLog');
		} else {
			gui.closeLayer('lyLog');
		}
	}

	/** 点击了开始重连 */
	onClickReconn(e: EventTouch) {
		let delayTime = Number(this.editReconnTime.string);
		if (isNaN(delayTime)) {
			gui.showTips("请输入断线后到重连的延迟时间");
			return;
		}
		if (delayTime < 0) {
			delayTime = 0;
		}
		this.editReconnTime.string = "" + delayTime;

		console.warn("即将开始断线==>");
		gui.loading({ forever: true, block: true }, PRIORITY.NET);
		//开始断线
		gnet.close();
		this.emit(AppEvent.SYS_NET_CLOSED);

		this.addSchedulerOnce(delayTime, () => {
			console.warn("即将开始重连==>");
			this.nodeDebugView.active = false;
			gnet.reconnect();
		})
	}


}

