import { GetAppEventID } from "../../common/AppEvent";

/** 活动常量 */
export namespace NspDaLu {

    export const BundleName = 'daLu';
    /** pfDaluItem内节点数量 */
    export const ItemNodeCount = 66;

    /** pfDaluItem内节点列数 */
    export const ItemNodeRow = 11;

    /** pfDaluItem内节点行数 */
    export const ItemNodeCol = 6;
  
      /** 自定义事件 */
    export const DaLuEvent = {
        /** 大路设置列表数据 */
        DALU_SET_DATA: GetAppEventID(),
    }

    /** ----------------服务器数据转换结构------------------ */
    /** 转换前的数据列表，接受服务器数据后先转换成这种格式 */
    export interface DaLuInitData {
        isNewToOld?: boolean; // true：从新到旧，不填/false：从旧到新
        index: number; // 最近启动的下表（服务器下发）
        labelColor?: DaluLabelColorType; // 字体颜色，不传默认白色
        winInfo: DaLuNodeData[]; // 胜负信息列表
    }


    /** ----------------路单图正式使用数据------------------ */
    /** 整个大路的数据结构，每itemNodeCount个节点形成一个DaLuOneItemData */
    export interface DaLuUseDatas {
        /** 大路列表数据(itemNodeCount个为一组) */
        listArr: DaLuOneItemData[];
        scrollIndex: number;
        maxRow?: number;
    }

    /** 单个itemNodeCount的节点数据结构 */
    export interface DaLuOneItemData {
        lists: DaLuNodeData[]; //itemNodeCount的节点数据
    }

    // 每个节点的数据结构
    export interface DaLuNodeData {
        /** 必填：圈类型 */
        quanType: DaLuQuanType;
        /** 业务不需要设置：节点的下标，由DaLuManager计算得到， */
        drawIndex?: number;
        /** 展示的数字(如果不需要显示则不传) */
        showNum?: number;
        /** @see mgr会配置,不需要外部传 */
        labelColor?: DaluLabelColorType;
    }

    /** 圈圈对应的图片资源 */
    export enum DaLuQuanType {
        HONG_DA = 0, // 红圈(大)
        LAN_DA, // 蓝圈(大)
        PING_DA, // 平圈(大)
    }

    export enum DaluLabelColorType {
        WHITE = 0, // 白
        GREEN,     // 绿
    }

}