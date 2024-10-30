/**
 * Name = ReportServers
 * URL = db://assets/proj/servers/servers/ReportServers.ts
 * Time = Wed Aug 24 2022 11:45:42 GMT+0800 (中国标准时间)
 * Author = aby
 * Client 数据上报控制器
 */

import { log, warn } from "cc";
import { http } from "../../../framework/ge";
import { config } from "../../../plug-in/config";
import { Cache } from "../../cache/Cache";
import { Utils } from "../../common/Utils";
import { sdk } from "../../sdk/sdk";
import { IManager } from "../IManager";
import { GameCache } from "../game/GameCache";
import { SubGameCache } from "../game/SubGameCache";
import { EMgr } from "../interface";
import { IError, IReportClick, IReportError, ReportEvent, ReportType } from "./interface";



export class ReportManager extends IManager {

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
		this.on([ReportEvent.REPORT_CLIENT_CLICK, ReportEvent.REPORT_CLIENT_LOG]);
	};
	/** 一次最多条 */
	private _maxSize = 50;
	/** 客户端点击上报队列 */
	private _tempClientClickList: Array<any> = [];
	/** 上次提交得时间 毫秒*/
	private _lastReportTime = 0;
	/** 上报的时间间隔 毫秒*/
	private _reportTimeSpance: 90000;
	/** 错误延迟上报的句柄 */
	private _handlerErrorDelayTime = null;
	/** 客户端错误上报队列 */
	private _tempClientErrorList = [];
	/** 上上一条报错日志 */
	private _tempLastLastError = null;
	/** 上一条报错日志 */
	private _tempLastError = null;

	/** 收到事件消息 */
	onEvents(event: string, ...args: any[]) {
		switch (event) {
			case ReportEvent.REPORT_CLIENT_CLICK:
				this.reqReportClick(args[0], args[1]);
				break;
			case ReportEvent.REPORT_CLIENT_LOG:
				this.reqReportLog(args[0]);
				break;
			default:
				break;
		}
	};


	/** 请求客户端点击上报 */
	reqReportClick(param: IReportClick, isForce = false) {
		if (Utils.tableIsEmpty(param) == true) {
			return;
		}
		if (param.eventID == null) {
			return;
		}
		param.time = Utils.time();
		this._tempClientClickList.push(param);
		if (this.__checkCanReport(isForce) == false) {
			return;
		}
		//开始上报
		this.__startReport(ReportType.Click);
	}
	/** 请求客户端日志上报 */
	reqReportLog(param: any) {
		if (Utils.isNull(param) == true) {
			return;
		}
		if (this.__checkSimpleErrLog(param, this._tempLastError ? this._tempLastError.body : null)) {
			warn("检测到和上一条重复报错日志，不做记录");
			return;
		}
		if (this.__checkSimpleErrLog(param, this._tempLastLastError ? this._tempLastLastError.body : null)) {
			warn("检测到和上上一条重复报错日志，不做记录");
			return;
		}

		let sendParam: IReportError = {
			body: param,
			time: Utils.time(),
		}
		this._tempClientErrorList.push(sendParam);


		this._tempLastLastError = this._tempLastError;
		this._tempLastError = Utils.clone(sendParam);

		//开始上报(增加延迟 降低后端压力)
		if (this._handlerErrorDelayTime != null) return;
		this.stopSchedulerOnce(this._handlerErrorDelayTime);
		this._handlerErrorDelayTime = this.addSchedulerOnce(1, () => {
			this.__startReport(ReportType.Error);
			this._handlerErrorDelayTime = null;
		})
	}
	/** 检测相似错误 */
	private __checkSimpleErrLog(curLog: IError, recodeLog: IError) {
		if (curLog && recodeLog) {
			if (typeof (recodeLog) == "object" && typeof (curLog) == "object") {
				if (recodeLog["message"] == curLog["message"] && Utils.stringIsEmpty(curLog["message"]) == false) {

					let curStack = this.__errStarckToArray(curLog["stack"]);
					let recodeStack = this.__errStarckToArray(recodeLog["stack"]);
					if (curStack && recodeStack && curStack.length > 0) {
						if (recodeLog["stack"].length == curLog["stack"].length && recodeLog["stack"][0] == curLog["stack"][0]) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}
	/** string的stack转成Array */
	private __errStarckToArray(stack) {
		if (!stack) {
			return null;
		}
		if (stack instanceof Array) {
			return stack;
		}
		if (typeof (stack) == 'string') {
			let lines = stack!.split("\n");
			let result: Array<any> = [];
			lines.forEach((line) => {
				result.push(line);
			});
			return result;
		}
		return null;
	}
	/** 执行上报 */
	private __startReport(reportType) {
		let hostUrl = config.REPORT;
		let realUrl = Utils.stringIsHttp(hostUrl);

		let rootList: Array<any>;
		let tempList = [];
		let max = 0;
		if (reportType == ReportType.Click) {
			max = (this._tempClientClickList.length >= this._maxSize ? this._maxSize : this._tempClientClickList.length);
			if (!realUrl) {
				this._tempClientClickList.splice(0, this._tempClientClickList.length);
				return;
			}
			rootList = this._tempClientClickList;
			tempList = this._tempClientClickList.splice(0, max);

		} else {
			max = this._tempClientErrorList.length;

			if (!realUrl) {
				this._tempClientErrorList.splice(0, this._tempClientErrorList.length);
				return;
			}
			rootList = this._tempClientErrorList;
			tempList = this._tempClientErrorList.splice(0, max);

		}
		if (tempList.length <= 0) {
			return;
		}
		log("开始上报==>", tempList)

		let param = this._getDefaultBody();
		param.type = reportType;
		param.content = Utils.JsonEncode(tempList);

		let self = this;
		http.lzsend(hostUrl, param, (err, rsp) => {
			if (!rsp || err === "sendHttp timeout") {
				warn("日志上报超时：");
				// if (isValid(self)) {
				// 	rootList.push(...tempList);
				// }
				return
			}
			if (rsp["code"] == 0) {
				warn(`日志上报成功：ReportType:${reportType} `);
			} else {
				warn(`日志上报失败：ReportType:${reportType} Res:`, Utils.JsonEncode(rsp));
				// if (isValid(self)) {
				// 	rootList.push(...tempList);
				// }
			}
		}, { method: 'POST', retryTimes: 1 })
	}
	/** 获取默认的结构体 */
	private _getDefaultBody() {
		return {
			type: null,           //上报类型： 1-点击事件上报追踪 2-错误上报；
			channel: sdk.channel, //渠道号
			platform: sdk.platForm,//平台
			deviceID: sdk.device, //设备ID
			uid: Cache && Cache.User ? Cache.User.getUID() : null,
			version: config.VERSION,
			gameID: GameCache.game._get(SubGameCache.GAME_ID),
			content: null,        //正文内容
		}
	}
	/** 检查是否可以上报 */
	private __checkCanReport(isFouce: boolean = false) {
		//空数据、网络异常时不上报
		if (this._tempClientClickList.length == 0) {
			return false;
		}
		// 非强制上报时数据不足
		if (isFouce == false && this._tempClientClickList.length < this._maxSize) {
			return false;
		}
		if (isFouce == false && this._lastReportTime != 0 && (Utils.timeEx() - this._lastReportTime) < this._reportTimeSpance) {
			return false;
		}
		return true;
	}

}

export const reportMgr: ReportManager = ReportManager.instance;