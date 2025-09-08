
/*
 * @Description: 账号管理器(避免循环引用的调用方式:gmgr.get<AccountManager>(AccountManager))
 * @Author: zy
 * @Date: 2021-04-26 19:08:46
 * @Reference: 
 */
import { Utils } from "../../common/Utils";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { NspDaLu } from "./interface";


class DaLuManager extends IManager {
    private static _instance: DaLuManager;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new DaLuManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.DALU);
    };

    /** 将数组转换成大路数组 */
    public convertToDaLuData(inData: NspDaLu.DaLuInitData): NspDaLu.DaLuUseDatas {
        let outData: NspDaLu.DaLuUseDatas = { listArr: [], scrollIndex: 0 };;

        if (!inData || !inData.winInfo || inData.winInfo.length == 0) {
            return outData;
        }
        let maxRow = 0;
        let maxIndex = 0;
        /** 开始转换数据 */
        let dataObj: { [key: number]: NspDaLu.DaLuNodeData } = {};
        let lastData: NspDaLu.DaLuNodeData = null;
        let currentLineStartIndex: number = 0; // 当前行的下标
        let isHorizontal: boolean = false; // 横向走(只有当出现L型，才会是true)
        let winInfo = this.getTrueData(inData);

        for (let i = 0; i < winInfo.length; i++) {
            let nowNodeData: NspDaLu.DaLuNodeData = Utils.clone(winInfo[i]);
            let nowIndex = 0;

            if (i == 0) {
                // 第一个数据
                nowIndex = 0;
                currentLineStartIndex = 0;
                isHorizontal = false;
            }
            else if (lastData.quanType != nowNodeData.quanType) {
                // 不同类型，新起一行
                currentLineStartIndex += NspDaLu.ItemNodeCol;
                nowIndex = currentLineStartIndex;
                isHorizontal = false;
            }
            else {
                // 已经是横向走了,则始终是+6
                if (isHorizontal) {
                    nowIndex = lastData.drawIndex + NspDaLu.ItemNodeCol;
                }
                else {
                    // 竖向走，期望是+1,如果dataObj[thinkIndex]存在，则+6
                    const thinkIndex = lastData.drawIndex + 1;
                    if (dataObj[thinkIndex] || thinkIndex % NspDaLu.ItemNodeCol === 0) {
                        nowIndex = lastData.drawIndex + NspDaLu.ItemNodeCol;
                        isHorizontal = true;
                    } else {
                        nowIndex = thinkIndex;
                        isHorizontal = false;
                    }
                }
            }


            // 设置下标
            nowNodeData.drawIndex = nowIndex;
            nowNodeData.labelColor = inData.labelColor;
            // 设置上一个的数据
            lastData = nowNodeData;
            dataObj[nowIndex] = nowNodeData;
            maxIndex = Math.max(maxIndex, nowIndex);
        }
        console.log(maxIndex);
        maxRow = Math.floor(maxIndex / 6);
        console.log("maxRow = ", maxRow);

        // 需要将index以6 * x区分，不同的分在不同的数组中
        const groupArr: NspDaLu.DaLuOneItemData[] = [];
        for (const key in dataObj) {
            const node = dataObj[key];
            const groupIndex = Math.floor(node.drawIndex / (NspDaLu.ItemNodeCol * NspDaLu.ItemNodeRow));
            if (!groupArr[groupIndex]) {
                groupArr[groupIndex] = { lists: [] };
            }
            groupArr[groupIndex].lists.push(node);
        }


        /** 最少lentgh为2 */
        const nowLength = groupArr.length;
        for (let i = nowLength; i < 2; ++i) {
            groupArr.push({ lists: [] });
        }

        outData = { listArr: groupArr, scrollIndex: nowLength, maxRow };
        return outData;
    }

    /** 根据方向获取大路的数据 */
    private getTrueData(inData: NspDaLu.DaLuInitData): NspDaLu.DaLuNodeData[] {
        let trueDatas = [];
        const isNewToOld = inData.isNewToOld || false;
        const count = inData.index;
        if (!count)
            return trueDatas;
        let winInfo = inData.winInfo;
        if (isNewToOld) {
            // 从新到旧的需要翻转（默认显示旧到新）
            winInfo.reverse();
        }
        let sIndex = winInfo.length - count;
        let eIndex = winInfo.length - 1;
        trueDatas = winInfo.slice(sIndex, eIndex + 1);

        return trueDatas;
    }

}

export const daLuManager: DaLuManager = DaLuManager.instance;