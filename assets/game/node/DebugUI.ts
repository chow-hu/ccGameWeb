
import { Button, EditBox, EventTouch, Label, Node, Toggle, _decorator, error, instantiate, profiler, warn } from 'cc';
import { DEBUG } from 'cc/env';
import { PRIORITY, UIBase, gnet, gui, http } from '../../framework/ge';
import { config } from '../../plug-in/config';
import { AppEvent } from '../common/AppEvent';
import { SubGameDetail, SubGameEventGame } from '../manager/subGameManager/interface';
import { nodelink } from '../common/custom-general';
import { AppConst } from '../common/AppConst';
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

	/*********************是否试玩************************* */
	@property({ tooltip: "是否试玩显示隐藏", type: Toggle })
	toggleKBShowOrHide: Toggle | null = null;
	/*********************信息显示************************* */

	@property({ tooltip: "信息根节点", type: Node })
	nodeInfo: Node | null = null;

	@property({ tooltip: "信息", type: Label })
	lblInfo: Label | null = null;

	@property({ type: Node, tooltip: "" })
	gameList: Node | null = null;

	private _baseUrl = "https://fdsghuk349dfsbjk.ccapi218orbjksapm03fjkds.com/gamemock/login"
	/** 试玩请求tokenapi */
	private _baseKBUrl = `https://api-dh3y1a938kzmg.kbtest193usgzmfhqoldhnv3719sjapu48amcpmrehal213.com/api/singleWallet/LoginWithoutRedirect?GameId=XXX&Lang=en-US&AgentId=KBGame&Balance=5000000`
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
		this.initGameList();
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

	initGameList() {
		let itemCopy = nodelink("view/content/item", this.gameList);
		const gameConfig = AppConst.GameBundleConf;
		itemCopy.active = false;
		for (const key in gameConfig) {
			const element = gameConfig[key];
			let item = instantiate(itemCopy);
			item.active = true;
			item.parent = itemCopy.parent;
			item.getComponent(Label).string = element.gameName ?? element.name;
			gui.onclick(item, () => {
				this.editGameID.string = key;
				this.gameList.active = false;
			});
		}
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

		if (this.toggleKBShowOrHide.isChecked) {
			this.toGetTokenByKB(gameID);
		} else {
			this.toGetTokenByExternal(gameID, agencyID);
		}
	}

	/** 外放平台获取Token */
	toGetTokenByExternal(gameID, agencyID) {
		const queryParams = {
			agency: agencyID,
			gameid: gameID,
		}

		http.lzsend(this._baseUrl, queryParams, (err, rsp) => {
			const currentUrl = window.location.href;
			const currentObj = new URL(currentUrl);
			const realHerf = "http://" + currentObj.host;

			if (err || rsp == "") {
				console.error("请求失败:", err);
				window.location.href = realHerf;
				return;
			} else {
				const targetUrl = rsp;
				const urlObj = new URL(currentUrl);
				urlObj.search = this.decodeAfterUrl(targetUrl);

				warn(urlObj.toString())
				window.location.href = urlObj.toString();
			}

		}, { method: 'GET', retryTimes: 1, resonsType: 'text' })
	}
	/** 试玩游戏获取token api */
	toGetTokenByKB(gameID) {

		const currUrl = String(this._baseKBUrl).replace('XXX', gameID);

		http.lzsend(currUrl, {}, (err, rsp) => {
			const currentUrl = window.location.href;
			const currentObj = new URL(currentUrl);
			const realHerf = "http://" + currentObj.host;

			if (err || rsp == "") {
				console.error("请求失败:", err);
				window.location.href = realHerf;
				return;
			} else {
				if (rsp['ErrorCode'] != 0) {
					error('试玩api获取Token失败', rsp);
					window.location.href = realHerf;
					return;
				}
				const targetUrl = rsp['Data'];

				const urlObj = new URL(currentUrl);
				urlObj.search = this.decodeAfterUrl(targetUrl);

				warn(urlObj.toString())
				window.location.href = urlObj.toString();
			}
		}, { method: 'GET', retryTimes: 1, resonsType: 'json' })
	}
	/** 解析url ?后面的字符 */
	decodeAfterUrl(url) {
		let realUrl = String(url);
		const i = realUrl.indexOf('?');
		if (i === -1) return '';        // 没有 ? 时返回空字符串
		return realUrl.slice(i + 1);

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

	onClickGameDrop(btn: Button) {
		let node = btn.target;
		this.gameList.active = !this.gameList.active;
		node.getComponentInChildren(Label).string = !this.gameList.active ? "V" : "‌Λ";
	}
}

