import { IManager } from "../IManager";
import { EMgr } from "../interface";
import trackerSDK from '../../../libs/sdk-min.js';
import { config } from "db://assets/plug-in/config";
import { TrackType } from "./interface";
import { Cache } from "../../cache/Cache";
export class ReportManager extends IManager {
	private tr: trackerSDK;

	private static _instance: ReportManager;
	public static get instance() {
		if (this._instance) {
			return this._instance;
		}
		this._instance = new ReportManager();
		return this._instance;
	};

	constructor() {
		super(EMgr.REPORT)
	};

	initTrack(appId: string | number, userId: string | number) {
		if (!this.tr) {
			this.tr = new trackerSDK({
				appId: appId,
				serverUrl: config.REPORT,
				showLog: true, // 是否打印log
				isZip: true, // 是否压缩上报 默认 true 上报
				maxEventSendVal: 10, // 最大上报数

			})
			// 注册公共属性
			this.tr.registerPage({
				userId: userId,
				platform: 'cc',
				platformID: '',
				source: '',
				agencyId: Cache.User.getAgencyId(),
				sessionId: '',
				package: '',
			})
		}
	}

	trackClick(elementType: string, elementName: string, elementProperties: {} = {}) {
		if (!this.tr) {
			return;
		}
		let clickTime = new Date().getTime();
		let gameID = Cache.User.getUser().game;
		this.tr.track(TrackType.click, { gameID, elementName, /* clickTime,  */elementType, elementProperties })
	}

	trackView(pageTitle: string, pageAttributes: {} = {}) {
		if (!this.tr) {
			return;
		}
		let pageExitTime = new Date().getTime();
		let gameID = Cache.User.getUser().game;
		// if (exitTime - parseInt(time) < 1000) {  // 小于1秒不上报
		// 	return;
		// }
		this.tr.track(TrackType.view, { gameID, pageTitle, pageExitTime, pageAttributes })
	}
}

export const reportMgr: ReportManager = ReportManager.instance;