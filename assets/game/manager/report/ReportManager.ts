import { IManager } from "../IManager";
import { EMgr } from "../interface";
import trackerSDK from 'kbdata-sdk';
import { config } from "db://assets/plug-in/config";
import { TrackType } from "./interface";
import { Cache } from "../../cache/Cache";
import { AppConst } from "../../common/AppConst";
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

	initTrack() {
		if (!this.tr) {
			this.tr = new trackerSDK({
				appId: 11000,
				serverUrl: config.REPORT,
				showLog: true, // 是否打印log
				isZip: true, // 是否压缩上报 默认 true 上报
				maxEventSendVal: 10, // 最大上报数
			})
			// 注册公共属性
			this.tr.registerPage({
				userId: Cache.User.getUser()?.username,
				gameUserId: Cache.User.getUser()?.uid,
				platform: Cache.User.getUser()?.agency || 'cc',
				platformID: Cache.User.getUser()?.platform,
				// source: '',
				agencyId: Cache.User.getAgencyId(),
				sessionId: Cache.User.getUser()?.session,
				// package: '',
			})
		}
	}

	private getBaseReportData() {
		const gameID = Cache.User.getUser().game;
		const nickname = Cache.User.getUser().nick;
		const gameName = AppConst.GetGamePackageConfById(Cache.User.getUser().game).gameName;
		const version = config.VERSION;
		return { gameID, nickname, gameName, version };
	}

	trackClick(elementType: string, elementName: string, elementProperties: {} = {}) {
		if (!this.tr) {
			return;
		}
		let clickTime = new Date().getTime();
		const base = this.getBaseReportData();
		this.tr.track(TrackType.click, { ...base, ...{ elementType, elementName, elementID: elementName, elementProperties } })
	}

	trackView(pageID: string, pageAttributes: {} = {}) {
		if (!this.tr) {
			return;
		}
		let pageExitTime = new Date().getTime();
		// if (exitTime - parseInt(time) < 1000) {  // 小于1秒不上报
		// 	return;
		// }
		const base = this.getBaseReportData();
		this.tr.track(TrackType.view, { ...base, ...{ pageID, pageExitTime, pageAttributes } })
	}
}

export const reportMgr: ReportManager = ReportManager.instance;