import { assetManager, warn } from "cc";
import { Utils } from "../../game/common/Utils";
import { cbs } from "../../game/common/custom-general";
import EventDispatcher from "../event/EventDispatcher";
import { AssetsLoader, IBundleOption } from "./AssetsLoader";


/** 正在运行的任务 */
export interface IAddTask {
    /** 包队列 */
    bundleList: Array<IBundleOption>,
    /** 回传参数标识 */
    callParam?: any
}
/** 正在运行的任务 */
export interface INotifyData {
    taskID: any,
    /** 任务状态 */
    status: PkgLoadStatus,
    /** 当前加载进度 0~100 */
    progress: number,
    /** 回传参数标识 */
    callParam?: any
}

/** 正在运行的任务 */
export interface IPkgLoaderTask {
    /** 任务ID */
    taskID: any,
    /** 包队列 */
    bundleList: Array<IBundleOption>,
    /** 实际真正加载的包 */
    realBundleList: Array<IBundleOption>,
    /** 所有任务进度 */
    allProgress: Object,
    /** 当前加载进度 0~100 */
    progress: number,
    /** 上次任务状态 */
    lastStatus: PkgLoadStatus,
    /** 任务状态 */
    status: PkgLoadStatus,
    /** 回传参数标识 */
    callParam?: any
}
/** 包加载事件 */
export const PkgLoadEvent = "pkgload-event";

/** 包加载状态 */
export enum PkgLoadStatus {
    /** 待开始 */
    Await = "待开始",
    /** 错误 */
    Error = "错误",
    /** 开始 */
    Start = "开始",
    /** 进行中 */
    Running = "进行中",
    /** 已完成 */
    Finish = "已完成",
}

/** 单个下载包 */
class PkgLoad {
    /** 包配置 */
    bundle: IBundleOption = null;
    /** 当前已完成数量 */
    finishNum: number = 0;
    /** 总数量 */
    totalNum: number = 0;
    /** 状态：-1:待开始 0:开始 1:进行中 2:已完成 */
    status: PkgLoadStatus = PkgLoadStatus.Await;
    /** 任务链 */
    taskIDList: Array<string> = null;
    /** 是否可以回调 */
    canCallback = false;
    /** 回调函数 */
    delegateCallFunc: Function;

    constructor(bundle) {
        this.initLoad(bundle);
    }
    /** 检测包是否一致 */
    checkBundleSame(newBundle: IBundleOption): boolean {
        if (newBundle && this.bundle) {
            if (newBundle.name == this.bundle.name && newBundle.url == this.bundle.url && newBundle.md5 == this.bundle.md5) {
                return true;
            }
        }
        return false;
    }
    addTaskID(taskID) {
        if (taskID && !this.taskIDList.includes(taskID)) {
            this.taskIDList.push(taskID);
        }
    }
    setUpdate(call: Function) {
        this.delegateCallFunc = call;
    }
    initLoad(bundle) {
        this.bundle = bundle;
        this.finishNum = 0;
        this.totalNum = 0;
        this.status = PkgLoadStatus.Await;
        this.taskIDList = [];
        this.canCallback = false;
        this.delegateCallFunc = null;
    }

    start() {
        if (!this.bundle || !this.bundle.name) {
            this.initLoad(null);
            return
        }
        if (this.status == PkgLoadStatus.Start || this.status == PkgLoadStatus.Running) {
            return;
        }
        this.canCallback = true;
        this.status = PkgLoadStatus.Start;

        let self = this;
        let bundleID = this.generateBundleID();
        AssetsLoader.instance.bundlePreload(this.bundle, '', null, cbs((err, assets) => {
            if (!self.canCallback) { return; }
            let __bundleID = self.generateBundleID();
            if (__bundleID != bundleID) { return; }

            self.canCallback = false;
            if (err) {
                self.status = PkgLoadStatus.Error;
                self.__updateProgress();
                self.taskIDList = [];
                return;
            }
            self.finishNum = self.totalNum;
            self.status = PkgLoadStatus.Finish;
            self.__updateProgress();

            self.__doFinish();

        }, this), cbs((finished: number, total: number, item) => {
            if (!self.canCallback) { return; }
            let __bundleID = self.generateBundleID();
            if (__bundleID != bundleID) { return; }


            self.status = PkgLoadStatus.Running;
            self.totalNum = total;
            self.finishNum = finished;
            self.__updateProgress();
        }, this))
    }

    stop() {
        this.canCallback = false;
        this.finishNum = 0;
        this.totalNum = 0;
        this.status = PkgLoadStatus.Await;
    }
    /** 生成bundleID */
    generateBundleID() {
        let bundle = this.bundle;
        if (!bundle) {
            return null;
        }
        let url = bundle.url || "";
        let name = bundle.name || "";
        let md5 = bundle.md5 || "";
        if (url != "" || name != "" || md5 != "") {
            return (name + md5 + url);
        }
        return null;
    }
    /** 更新进度 */
    private __updateProgress() {
        if (!this.bundle || !this.bundle.name) return;
        if (this.delegateCallFunc) {

            this.delegateCallFunc(this.bundle.name, this.status, this.taskIDList);
        }
    }

    private __doFinish() {
        this.status = PkgLoadStatus.Finish;
        this.delegateCallFunc = null;
        this.canCallback = false;
        this.taskIDList = [];
    }
}
/** 包加载任务链 */
export class PkgLoaderTask {
    private static _instance = null;
    public static get instance(): PkgLoaderTask {
        if (!this._instance || this._instance == null) {
            this._instance = new PkgLoaderTask("PkgLoaderTask");
        }
        return this._instance;
    }
    //实例化
    constructor(name: string) { };

    public static init(): PkgLoaderTask {
        if (this._instance) {
            this._instance.clear();
        }
        this._instance = null
        PkgLoaderTask.instance;
        return
    }
    /** 当前正在加载的任务 */
    private _currowLoadTask: { [taskID: string]: IPkgLoaderTask } = {};
    /** 当前加载的包队列 */
    private _currowLoadBundle: { [bundleKey: string]: PkgLoad } = {};
    /**
     * 添加包加载任务
     * @param param IPkgLoaderTask
     * @returns 返回 taskID
     */
    addTask(param: IAddTask) {
        if (!param) {
            return null;
        }
        let taskID = this.generateTaskID(param.bundleList);
        if (!taskID) {
            return null;
        }

        if (this._currowLoadTask[taskID] != null) {
            if (this._currowLoadTask[taskID].status == PkgLoadStatus.Error) {
                delete this._currowLoadTask[taskID];
            } else {
                this.__dispatchMsg(taskID);
                return taskID;
            }
        }
        let realBundleList = this.filterNotLoadBundle(param.bundleList);

        let task: IPkgLoaderTask = {
            taskID: taskID,
            bundleList: param.bundleList,
            realBundleList: realBundleList,
            allProgress: {},
            progress: 0,
            lastStatus: null,
            status: PkgLoadStatus.Await,
            callParam: param.callParam
        }
        this._currowLoadTask[taskID] = task;
        this.__startLoad(taskID);
        return taskID;

    }
    /**
     * 检查是否需要重新加载包
     * @param bundleList 
     * @returns 如需重新加载会返回taskID
     */
    checkLoadBundleTask(bundleList: Array<IBundleOption>) {
        if (!bundleList || bundleList.length == 0) {
            return null;
        }
        let taskID = this.generateTaskID(bundleList);
        if (!taskID) {
            return null;
        }
        let realBundleList = this.filterNotLoadBundle(bundleList);
        if (realBundleList.length == 0) {
            return null;
        }
        if (this._currowLoadTask[taskID] != null) {
            if (this._currowLoadTask[taskID].status == PkgLoadStatus.Error) {
                return taskID;
            } else {
                return null;
            }
        }
        return taskID;
    }
    /** 获取任务状态 */
    getTaskStatus(taskID) {
        if (this._currowLoadTask[taskID]) {
            return this._currowLoadTask[taskID].status;
        }
        return null;
    }
    /** 生成taskID */
    generateTaskID(bundleList: Array<IBundleOption>) {
        if (!bundleList || bundleList.length == 0) {
            return null;
        }
        let taskID = null;
        let nameAndMd5List = [];

        bundleList.forEach((v, k) => {
            let url = v.url || "";
            let name = v.name || "";
            let md5 = v.md5 || "";
            if (url != "" || name != "" || md5 != "") {
                nameAndMd5List.push(name + md5 + url);
            }
        })
        nameAndMd5List.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

        for (let i = 0; i < nameAndMd5List.length; i++) {
            if (taskID == null) {
                taskID = nameAndMd5List[i];
            } else {
                taskID = taskID + "|" + nameAndMd5List[i];
            }
        }
        this.print("生成taskID:", taskID)
        return taskID;
    }

    /** 过滤不需加载的包 */
    filterNotLoadBundle(bundleList: Array<IBundleOption>): Array<IBundleOption> {
        let realBundleList: Array<IBundleOption> = [];
        bundleList.forEach((bundle, k) => {
            if (bundle.name != null) {
                if (bundle.isChangedMD5) {
                    realBundleList.push(bundle);
                    if (this._currowLoadBundle[bundle.name]) {
                        this._currowLoadBundle[bundle.name].stop();
                    }
                } else {
                    if (!assetManager.getBundle(bundle.name)) {
                        realBundleList.push(bundle);
                    } else {
                        let pkgLoad = this._currowLoadBundle[bundle.name];
                        if (pkgLoad) {
                            if (!pkgLoad.checkBundleSame(bundle)) {//包名一致 内容不一致
                                pkgLoad.stop();
                                realBundleList.push(bundle);
                            } else {
                                if (pkgLoad.status != PkgLoadStatus.Finish) {
                                    realBundleList.push(bundle);
                                }
                            }
                        } else {
                            realBundleList.push(bundle);
                        }
                    }
                }
            }
        })
        return realBundleList;
    }
    /** 取消一个任务 */
    cancleTask(taskID) {
        if (taskID != null) {
            if (this._currowLoadTask[taskID] != null) {
                delete this._currowLoadTask[taskID];
                this.print(`>>>取消加载任务:${taskID}成功！！！`)
            }
        } else {
            for (let taskID in this._currowLoadTask) {
                if (this._currowLoadTask[taskID]) {
                    this.print(`>>>取消加载任务:${taskID}成功！！！`)
                    this._currowLoadTask[taskID] = null;

                }
            }
        }
    }
    /** 开始加载 */
    private __startLoad(taskID) {
        if (!this._currowLoadTask[taskID]) {
            return;
        }
        if (this._currowLoadTask[taskID].realBundleList.length > 0) {
            //加载bundle
            for (let i = 0; i < this._currowLoadTask[taskID].realBundleList.length; i++) {
                let bundle = this._currowLoadTask[taskID].realBundleList[i];
                if (bundle.name) {
                    let pkgLoad = this._currowLoadBundle[bundle.name];
                    if (!pkgLoad) {
                        this._currowLoadBundle[bundle.name] = new PkgLoad(bundle);
                        pkgLoad = this._currowLoadBundle[bundle.name];
                    }
                    pkgLoad.addTaskID(taskID);
                    pkgLoad.setUpdate(Utils.handler(this, this.__onLoadUpdate)); //cbs(this.loadUpdate, this)
                    pkgLoad.start();
                }
            }
        } else {
            this._currowLoadTask[taskID].lastStatus = this._currowLoadTask[taskID].status;
            this._currowLoadTask[taskID].status = PkgLoadStatus.Finish;
            this._currowLoadTask[taskID].progress = 1;
            this.__dispatchMsg(taskID);
        }
    }

    /** 包加载进度更新的回调 */
    private __onLoadUpdate(bundleName: string, status: PkgLoadStatus, taskList: Array<string>) {
        // this.print("包加载进度更新的回调===>", bundleName, status);
        if (!taskList || taskList.length == 0) { return; }
        taskList.forEach((v, k) => {
            if (v && this._currowLoadTask[v]) {
                if (this._currowLoadTask[v].status == PkgLoadStatus.Await) {
                    this._currowLoadTask[v].lastStatus = this._currowLoadTask[v].status;
                    this._currowLoadTask[v].status = PkgLoadStatus.Start;
                    this._currowLoadTask[v].allProgress = {};
                    this._currowLoadTask[v].progress = 0;

                    this.__dispatchMsg(v);
                }
                if (status == PkgLoadStatus.Error) {
                    if (this._currowLoadTask[v].status == PkgLoadStatus.Error) { return; }
                    this._currowLoadTask[v].lastStatus = this._currowLoadTask[v].status;
                    this._currowLoadTask[v].status = PkgLoadStatus.Error;
                    this.__dispatchMsg(v);
                    this.cancleTask(v);
                } else {
                    this._currowLoadTask[v].lastStatus = this._currowLoadTask[v].status;
                    this._currowLoadTask[v].status = PkgLoadStatus.Running;

                    let countFinish = 0;
                    for (let i = 0; i < this._currowLoadTask[v].realBundleList.length; i++) {
                        let bundle = this._currowLoadTask[v].realBundleList[i];
                        let pkgLoad = this._currowLoadBundle[bundle.name];
                        //计算进度
                        this._currowLoadTask[v].allProgress[bundle.name] = pkgLoad.finishNum / pkgLoad.totalNum;

                        if (pkgLoad.status == PkgLoadStatus.Finish) {
                            countFinish = countFinish + 1;
                        }
                    }
                    if (countFinish > 0 && countFinish == this._currowLoadTask[v].realBundleList.length) {
                        this._currowLoadTask[v].lastStatus = this._currowLoadTask[v].status;
                        this._currowLoadTask[v].status = PkgLoadStatus.Finish;
                        this.__dispatchMsg(v);
                        this.cancleTask(v);
                        this.print(">>>有任务完成了，所有任务：", bundleName, v, taskList, this._currowLoadTask)
                        this.print(">>>有任务完成了，所有包：", bundleName, v, taskList, this._currowLoadBundle)

                    } else {
                        this.__dispatchMsg(v);
                    }

                }
            }
        })
    }
    /** 分发消息 */
    private __dispatchMsg(taskID) {
        if (!taskID || !this._currowLoadTask[taskID]) { return; }
        //计算进度
        let bundleList = this._currowLoadTask[taskID].realBundleList;

        let allProgress = 0;
        let progress = 0;
        bundleList.forEach((v, k) => {
            allProgress = allProgress + Utils.numValueOf(this._currowLoadTask[taskID].allProgress[v.name]);
        })
        // log("所有进度：>>>", allProgress, this._currowLoadTask[taskID].allProgress)
        if (allProgress != 0) {
            progress = allProgress / bundleList.length;
        } else {
            progress = 0;
            if (this._currowLoadTask[taskID].status == PkgLoadStatus.Finish) {
                this._currowLoadTask[taskID].progress = 1;
            } else {
                this._currowLoadTask[taskID].progress = 0;
            }
        }
        //不能比小
        if (progress > this._currowLoadTask[taskID].progress) {
            this._currowLoadTask[taskID].progress = progress;
        }

        let sendData: INotifyData = {
            taskID: taskID,
            status: this._currowLoadTask[taskID].status,
            progress: Math.floor(this._currowLoadTask[taskID].progress * 100),
            callParam: this._currowLoadTask[taskID].callParam,
        }

        if (this._currowLoadTask[taskID].lastStatus != this._currowLoadTask[taskID].status) {
            this.print('${taskID}】更新任务进度===>', taskID, sendData.status)
        }
        EventDispatcher.instance.dispatchEvent(PkgLoadEvent, sendData);
    }

    private print(...args: any[]) {
        warn(...args)
    }


}

