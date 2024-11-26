import { CmdToPbName, game_base_proto, room_alloc_proto } from "../../../framework/ge";

/**子游戏公用协议 */
export const GameReq = {
    GAME_CONFIG: "roomalloc.GameLevelConfigReq",
    REQUEST_ROOM: "roomalloc.AllocTableReq",
    LEAVE_ROOM: "gamebase.LeaveRoomReq",
    SIT_DOWN: "gamebase.UserSitDownReq",
    JOIN_ROOM: "gamebase.UserJoinTableReq",
    GAME_RULES: "gamebase.GetGameRuleReq",
    SHARE_POSTER: "gamebase.SharePosterReq",
}

export const GameResp = {
    GAME_CONFIG: "roomalloc.GameLevelConfigResp",
    REQUEST_ROOM: "roomalloc.AllocTableResp",
    LEAVE_ROOM: "gamebase.LeaveRoomResp",
    GAMENOTIFICATION_PUSH: "gamebase.GameNotificationPush",
    SIT_DOWN: "gamebase.UserSitDownResp",
    STAND_UP_BROADCAST: "gamebase.UserStandUpPush",
    SIT_DOWN_BROADCAST: "gamebase.UserSitDownPush",
    JOIN_ROOM: "gamebase.UserJoinTableResp",
    // JOIN_ROOM_BROADCAST: "gamebase.UserJoinTablePush",
    ROOM_INFO_BROADCAST: "gamebase.AllocTablePush",
    GAME_RULES: "gamebase.GetGameRuleResp",
    SHARE_POSTER: "gamebase.SharePosterResp",

}

export const GameProto = {
    GetPropPush: 'client_proto.GetPropPush',
}

/** 自定义事件 */
export const GameEvent = {
    /** 游戏-资产变更 */
    GAME_PUSH_GETMONEY: 'GameEvent_game_getMoneyPush',
    /** 游戏-游戏banner */
    GAME_BANNER_ROOM: 'GameEvent_game_banner',

    /** 游戏-游戏重连 */
    GAME_RECONNECT: 'GameEvent_game_reconnect',

    /** 游戏-选场配置 */
    GAME_CONFIG: "roomalloc-GameLevelConfigResp",
    /** 游戏-请求配桌 */
    REQUEST_ROOM: "roomalloc-AllocTableResp",
    /** 匹配超时 */
    REQUEST_ROOM_TIMEOUT: "GameEvent_match_room_timeout",
    /** 游戏-加入房间 */
    JOIN_ROOM: "gamebase-UserJoinTableResp",

    /** 游戏-离开房间 */
    LEAVE_ROOM: "gamebase-LeaveRoomResp",

    GAMENOTIFICATION_PUSH: "gamebase-GameNotificationPush",
    /** 游戏-坐下 */
    SIT_DOWN: "gamebase-UserSitDownResp",
    /** 游戏-坐下广播 */
    SIT_DOWN_BROADCAST: "gamebase-UserSitDownPush",
    // JOIN_ROOM_BROADCAST: "gamebase-UserJoinTablePush",
    /** 游戏-房间消息 */
    ROOM_INFO_BROADCAST: "gamebase-AllocTablePush",
    /** 游戏-游戏规则 */
    GAME_RULE: "gamebase-GetGameRuleResp",
    STAND_UP_BROADCAST: "gamebase-UserStandUpPush",

    /** 分享数据 */
    SHARE_POSTER: "gamebase-SharePosterResp",
    // 更新奖池数据
    UPDATE_DATA_JACKPOT: "update_data_jackpot",
    // 更新奖池数量
    UPDATE_DATA_JACKPOT_NUM: "update_data_jackpot_num",
    // 更新玩家金币
    UPDATE_DATA_PLAYER_GOLD: "update_data_player_gold",
    // 领取jp奖励
    UPDATE_DATA_GET_JP_REWARD: "update_data_get_jp_reward",

}

// 请求游戏配置
CmdToPbName[room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_CONFIG_RESP] = "roomalloc.GameLevelConfigResp";
// 请求配桌
CmdToPbName[room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_ALLOC_TABLE_RESP] = "roomalloc.AllocTableResp";
// 离开房间返回
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_LEAVE_RESP] = "gamebase.LeaveRoomResp";

// 玩家坐下返回
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_SITDOWN_RESP] = "gamebase.UserSitDownResp";
// 玩家坐下推送
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_SITDOWN_PUSH] = "gamebase.UserSitDownPush";
// 玩家起立推送
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_STAND_UP_PUSH] = "gamebase.UserStandUpPush";
// 玩家加入房间返回
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_JOIN_TABLE_RESP] = "gamebase.UserJoinTableResp";
// 玩家加入房间推送
// CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_JOIN_TABLE_PUSH] = "gamebase.UserJoinTablePush";
// 房间信息推送
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_ALLOC_TABLE_PUSH] = "gamebase.AllocTablePush";
// 游戏规则返回
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_GET_RULE_RESP] = "gamebase.GetGameRuleResp";
// 分享海报返回
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_SHARE_POSTER_RESP] = "gamebase.SharePosterResp";


/** 自定义事件 */
export const GameActionType = {
    /** 操作提示 */
    TIMEOUT_TIPS: 0,
    /** 踢人 */
    TIMEOUT_KICK: 1,
    /** 房间退休换桌 */
    RETIRE_ALLOC: 2,
    /** 房间退休踢人 */
    RETIRE_KICK: 3,
}
