/*
 * @Description: 热更管理器
 * @Author: zy
 * @Date: 2024-03-06 11:06:35
 * @Reference: 
 */

import { log, native } from 'cc';
import JSZip from 'jszip';
import md5 from 'md5';
import { IFileUtils } from './IFileUtils';

export enum MAState {
    NONE,
    UNINITED,                   // 未初始化
    INITED,                     // 初始化成功
    DOWNLOAD_MANIFEST_ERROR,    // 下载远程差异配置文件失败
    DOWNLOAD_ZIP,               // 下载差异文件包失败
    DOWNLOAD_ZIP_FAILED,        // 下载差异文件包失败
    DOWNLOAD_ZIP_BROKEN,       // 差异文件包缺损
    UNZIP_ERROR,               // 解压差异文件包句柄失败
    UNZIPING,                  // 正在解压差异文件包
    UNZIPING_FAILED,            // 解压差异文件包写文件失败
    USE_ZIP_FILE,              // 应用差异文件包
    USE_ZIP_FAILED,             // 应用差异文件包失败
    SUCCESS                     // 更新成功
}
type MAListener = (msg: { msg: MAState, data: any }) => void
export class ManifestAssetsManager {
    constructor(storagePath: string, updateUrl: string[], localVersion: string, fileUtils: IFileUtils) {
        this._state = MAState.UNINITED; // 默认未初始化
        this._listener = undefined;

        // 热更地址
        if (updateUrl[0].endsWith('.manifest')) {
            this._update_url_manifest = updateUrl[0];
            this._update_url_zip = updateUrl[1];
        } else if (updateUrl[0].endsWith('.zip')) {
            this._update_url_zip = updateUrl[0];
            this._update_url_manifest = updateUrl[1];
        }

        log("update_url_manifest:" + this._update_url_manifest)
        log("update_url_zip:" + this._update_url_zip)

        this._local_version = localVersion;
        if (storagePath) {
            if (storagePath[storagePath.length - 1] != '/') storagePath += '/';
        }
        this._fileUtils = fileUtils;
        this._storage_path = storagePath;
        this._downloading = false;
        this._downloader = new native.Downloader();
        this._downloader.onSuccess = this.onSucceed.bind(this);
        this._downloader.onProgress = this.onProgress.bind(this);
        this._downloader.onError = this.onError.bind(this);
    }

    private _state: MAState = MAState.NONE;
    private _update_url_zip: string;
    private _update_url_manifest: string;

    private _local_version: string;
    private _storage_path: string;
    private _remote_manifest: any;
    private _downloading: boolean;
    private _downloader: native.Downloader;
    private _listener?: MAListener;
    private _zip_data: any;
    private _unzip_idx = 0;

    private _download_task_id?: string;
    private _download_task?: native.DownloaderTask;
    private _fileUtils?: IFileUtils;

    setOnTaskListener(listener: MAListener) {
        this._listener = listener;
        this._state = MAState.INITED;
    }

    post(state: MAState, data?: any) {
        this._state = state;
        let key = MAState[state] as string
        console.log(`ManifestAssetsManager=>` + key);
        this.onlistener({ msg: this._state, data });
    }

    onlistener(msg: { msg: MAState, data: any }) {
        this._listener && this._listener(msg)
    }

    start() {
        if (this._state != MAState.INITED) {
            return;
        }
        this.downloadManifest();
    }

    decompressManifest() {
        let manifestStr;
        if (native.fileUtils.isFileExist(this._storage_path + this._local_version + '.diff.manifest')) {
            manifestStr = native.fileUtils.getStringFromFile(this._storage_path + this._local_version + '.diff.manifest');
            log("decompressManifest manifestStr:" + manifestStr);
        }
        if (typeof manifestStr == 'string' && manifestStr) {
            try {
                this._remote_manifest = JSON.parse(manifestStr);
            } catch (error) {
                this.post(MAState.DOWNLOAD_MANIFEST_ERROR);
                return;
            }
        } else {
            this.post(MAState.DOWNLOAD_MANIFEST_ERROR);
            return;
        }

        this._zip_data = this._checkZip();
        if (!this._zip_data) {
            this.downloadZip();
            return;
        }
        this.unzip();
    }

    private _checkZip() {
        let zipData;
        if (native.fileUtils.isFileExist(this._local_version + '.diff.zip')) {
            // @ts-ignore
            zipData = native.fileUtils.getDataFromFile(this._local_version + '.diff.zip');
            if (zipData instanceof ArrayBuffer) {
                zipData = new Uint8Array(zipData);
            }
            if (!zipData || this._remote_manifest.zip.md5 != md5(zipData)) {
                return;
            }
            return zipData;
        }
        return;
    }

    unzip() {
        this._zip_data = this._zip_data || this._checkZip();
        if (!this._zip_data) {
            this.post(MAState.DOWNLOAD_ZIP_BROKEN);
            return;
        }
        let keys = Object.keys(this._remote_manifest);
        let index = keys.indexOf('zip');
        if (index != -1) {
            keys.splice(index, 1);
        }
        this._unzip_idx = 0;
        this.post(MAState.UNZIPING, { idx: this._unzip_idx, max: keys.length });
        let jsZip: JSZip = globalThis.jsZip;
        jsZip.loadAsync(this._zip_data).then((zip) => {
            this.unziping(zip, keys);
        }).catch(err => {
            console.error('unzipConfigs err...', JSON.stringify(err));
            this.post(MAState.UNZIP_ERROR);
        });
    }

    unziping(zip: JSZip, files: string[]) {
        let url = files[this._unzip_idx++];
        if (!url) {
            log('解压完成');
            this.post(MAState.USE_ZIP_FILE);
            setTimeout(() => {
                this.usezip();
            }, 100);
            return;
        }
        log("unziping url:" + url)
        let zipFile = zip.file(url);
        if (zipFile) {
            zipFile.async("uint8array").then((buffer) => {
                let savePath = this._storage_path + url + '.tmp';
                let result = this._fileUtils?.writeToFile(savePath, buffer, true, true);
                if (!result) {
                    log("UNZIPING_FAILED 1")
                    this.post(MAState.UNZIPING_FAILED);
                    return;
                }
                this.post(MAState.UNZIPING, { idx: this._unzip_idx, max: files.length });
                this.unziping(zip, files);
            }).catch(err => {
                log("UNZIPING_FAILED 2")
                this.post(MAState.UNZIPING_FAILED);
            });
        } else {
            log('压缩文件不存在=>', url);
            this.post(MAState.UNZIP_ERROR);
        }
    }

    usezip(skipEmpt?: boolean) {
        let keys = Object.keys(this._remote_manifest);
        let idx = keys.indexOf('zip');
        if (idx != -1) {
            keys.splice(idx, 1);
        }
        for (let index = 0; index < keys.length; index++) {
            const url = keys[index];
            if (this._renameFile(this._storage_path + url, skipEmpt)) { // 改名字
            } else {
                return this.post(MAState.USE_ZIP_FAILED);
            }
        }
        try {
            let tempPath = this._storage_path + this._local_version + '.diff.zip';
            if (native.fileUtils.isFileExist(tempPath)) native.fileUtils.removeFile(tempPath);
            tempPath = this._storage_path + this._local_version + '.diff.manifest';
            if (native.fileUtils.isFileExist(tempPath)) native.fileUtils.removeFile(tempPath);
        } catch (error) {
        }

        this.post(MAState.SUCCESS);
    }

    _renameFile(fileFullPath: string, skipEmpt?: boolean) { // 重命名文件
        let from = fileFullPath + '.tmp';
        let to = fileFullPath;
        if (native.fileUtils.isFileExist(from)) {
            if (native.fileUtils.isFileExist(to)) native.fileUtils.removeFile(to);
            //@ts-ignore
            return native.fileUtils.renameFile(from, to);
        }
        return !!skipEmpt;
    };

    getSearchPaths() {
        return this._storage_path;
    }

    downloadZip() {
        if (this._downloading) {
            return;
        }

        let bytesReceived = 0;
        let downloadedBytes = 0;
        let totalBytes = this._remote_manifest.zip.size;
        this.post(MAState.DOWNLOAD_ZIP, { bytesReceived, downloadedBytes, totalBytes });
        let taskId = 'dzID' + Date.now();
        let url = this._local_version + '.diff.zip';
        log("downloadZip taskId:" + taskId)
        this.download(taskId, this._update_url_zip, url);
    }

    downloadManifest() {
        if (this._downloading) {
            return;
        }

        let taskId = 'dmID' + Date.now();
        let url = this._local_version + '.diff.manifest';
        log("downloadManifest taskId:" + taskId)
        this.download(taskId, this._update_url_manifest, url);
    }

    download(taskId: string, update_url: string, url: string) {
        this._downloading = true;
        this._download_task_id = taskId;
        this._download_task = this._downloader.createDownloadFileTask(update_url, this._storage_path + url, this._download_task_id);
    }

    onSucceed(task: native.DownloaderTask) {
        if (task.identifier != this._download_task_id) {
            return;
        }
        this._downloading = false;
        if (task.identifier.startsWith("dmID")) {
            log("onSucceed dmID")
            this.decompressManifest();
        } else if (task.identifier.startsWith("dzID")) {
            log("onSucceed dzID")
            setTimeout(() => {
                this.unzip();
            }, 100);
        }
    }

    onProgress(task: native.DownloaderTask, bytesReceived: number, totalBytesReceived: number, totalBytesExpected: number) {
        if (task.identifier != this._download_task_id) {
            return;
        }
        if (task.identifier.startsWith("dmID")) {
            return;
        } else if (task.identifier.startsWith("dzID")) {
            let downloadedBytes = totalBytesReceived;
            let totalBytes = totalBytesExpected;
            this.post(this._state, { bytesReceived, downloadedBytes, totalBytes });
        }
    }

    onError(task: native.DownloaderTask, errorCode: number, errorCodeInternal: number, errorStr: string) {
        if (task.identifier != this._download_task_id) {
            return;
        }
        this._downloading = false;
        if (task.identifier.startsWith("dmID")) {
            this.post(MAState.DOWNLOAD_MANIFEST_ERROR);
        } else if (task.identifier.startsWith("dzID")) {
            this.post(MAState.DOWNLOAD_ZIP_FAILED);
        }
        console.log('Failed to download file (' + task.requestURL + '): ' + errorStr + '(' + errorCode + ')');
    }

    retry() {
        switch (this._state) {
            case MAState.DOWNLOAD_MANIFEST_ERROR: {
                this.post(MAState.INITED);
                this.start();
                break;
            }
            case MAState.DOWNLOAD_ZIP_FAILED: {
                setTimeout(() => {
                    this.downloadZip();
                }, 100);
                break;
            }
            case MAState.DOWNLOAD_ZIP_BROKEN: {
                setTimeout(() => {
                    this.downloadZip();
                }, 100);
                break;
            }
            case MAState.UNZIP_ERROR: {
                this.unzip();
                break;
            }
            case MAState.UNZIPING_FAILED: {
                this.unzip();
                break;
            }
            case MAState.USE_ZIP_FAILED: {
                this.post(MAState.USE_ZIP_FILE);
                setTimeout(() => {
                    this.usezip(true);
                }, 100);
                break;
            }
            default:
                break;
        }
    }
}