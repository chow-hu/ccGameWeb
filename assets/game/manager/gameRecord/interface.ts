/*
 * @Author: jackMa 2442563207@qq.com
 * @Date: 2025-01-16 14:22:41
 * @LastEditors: jackMa 2442563207@qq.com
 * @FilePath: \ccGameWeb\assets\game\manager\gameRecord\interface.ts
 * @Description: 
 */

import { CmdToPbName, gamerecord } from "db://assets/framework/ge";


/** PB事件 */
export const GameRecordPB = {
    REQ: {
        /** 请求历史记录列表 */
        GAMERECORD: 'gamerecord.GameRecordReq',
        /** 请求历史记录详情 */
        GAMERECORDDETAIL: 'gamerecord.GameRecordDetailReq',
    },

    RESP: {
        /** 历史记录列表返回 */
        GAMERECORD: 'gamerecord.GameRecordResp',
        /** 历史记录详情返回 */
        GAMERECORDDETAIL: 'gamerecord.GameRecordDetailResp',
    },

    PUSH: {
        /** 历史记录推送 */
        GAMERECORDPUSH: "gamerecord.GameRecordPush",
        /** 历史记录推送 */
        GAMERECORDCACHEPUSH: "gamerecord.GameRecordDataCache",
    }
}

/** 自定义事件 */
export const GameRecordEvent = {
    /** 历史记录返回 */
    GAMERECORD: "game_record_resp",

    /** 历史记录详情返回 */
    GAMERECORDDETAIL: "game_record_detail_resp",

    /** 历史记录推送 */
    GAMERECORDPUSH: "game_record_push",

    /** 历史记录数据推送 */
    GAMERECORDCACHEPUSH: "game_record_cache_push",
}

// 历史记录列表返回
CmdToPbName[gamerecord.ASSET_CMD.GAMERECORD_CMD_GET_RECORD_RESP] = GameRecordPB.RESP.GAMERECORD;
// 历史记录详情返回
CmdToPbName[gamerecord.ASSET_CMD.GAMERECORD_CMD_GET_DETAIL_RESP] = GameRecordPB.RESP.GAMERECORDDETAIL;
// 历史记录推送
CmdToPbName[gamerecord.ASSET_CMD.GAMERECORD_CMD_RECORD_PUSH] = GameRecordPB.PUSH.GAMERECORDPUSH;
// 历史记录推送
CmdToPbName[gamerecord.ASSET_CMD.GAMERECORD_CMD_RECORD_CACHE_PUSH] = GameRecordPB.PUSH.GAMERECORDCACHEPUSH;