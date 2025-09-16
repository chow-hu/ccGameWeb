import { CmdToPbName, game_base_proto, game_userinfo_proto, room_alloc_proto } from "../../../framework/ge";

/**子游戏公用协议 */
export const GameReq = {
    GAME_CONFIG: "roomalloc.GameLevelConfigReq",
    REQUEST_ROOM: "roomalloc.AllocTableReq",
    LEVEL_TABLE_INFO: "roomalloc.LevelTableInfoReq",
    LEAVE_ROOM: "gamebase.LeaveRoomReq",
    SIT_DOWN: "gamebase.UserSitDownReq",
    JOIN_ROOM: "gamebase.UserJoinTableReq",
    GAME_RULES: "gamebase.GetGameRuleReq",
    SHARE_POSTER: "gamebase.SharePosterReq",
    REQUEST_USER_BALANCE: "gamebase.ResetUserBalanceReq",
    GET_USER_INFO: "game_userinfo.getUserinfoReq",
    GET_USER_INFO_BY_FIELD: "game_userinfo.getUserinfoByfieldReq",
    UPDATE_USER_INFO: "game_userinfo.updateUserinfoReq",
}

export const GameResp = {
    GAME_CONFIG: "roomalloc.GameLevelConfigResp",
    REQUEST_ROOM: "roomalloc.AllocTableResp",
    LEVEL_TABLE_INFO: "roomalloc.LevelTableInfoResp",
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
    REQUEST_USER_BALANCE: "gamebase.ResetUserBalanceResp",
    GET_USER_INFO: "game_userinfo.getUserinfoResp",
    GET_USER_INFO_BY_FIELD: "game_userinfo.getUserinfoByfieldResp",
    UPDATE_USER_INFO: "game_userinfo.updateUserinfoResp",
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
    /** 退出房间超时 */
    REQUEST_EXIT_ROOM_TIMEOUT: "GameEvent_exit_room_timeout",
    /** 游戏-加入房间 */
    JOIN_ROOM: "gamebase-UserJoinTableResp",

    /** 配桌-加入房间 */
    REQUEST_ROOM_ERROR: "roomalloc_AllocTable_error",
    /** 游戏-加入房间 */
    JOIN_ROOM_ERROR: "GameEvent_game_Join_Room_Error",

    /** 游戏-离开房间 */
    LEAVE_ROOM_ERROR: "GameEvent_game_Leave_Room_Error",

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

    /** 重置用户余额 */
    REQUEST_USER_BALANCE: "gamebase-ResetUserBalanceResp",
    /** 游戏-请求场次桌子列表 */
    LEVEL_TABLE_INFO: "roomalloc-LevelTableInfoResp",

     /** 更新用户信息 */
    UPDATE_USER_INFO: "update-user-info",

    /** 修改用户信息返回 */
    FIELD_USER_INFO: "field-user-info",

    /** 修改用户昵称 */
    UPDATE_USER_NICKNAME: "update-user-nickname",

    /** 修改用户头像 */
    UPDATE_USER_AVATAR: "update-user-avatar",

    /** 修改用户性别 */
    UPDATE_USER_GENDER: "update-user-gender",

}
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
    ACTION_OPTIMEOUT_TIPS: 4, //超时不操作提示
    ACTION_OPTIMEOUT_KICK: 5, //超时不操作踢人
}

// 请求游戏配置
CmdToPbName[room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_CONFIG_RESP] = "roomalloc.GameLevelConfigResp";
// 请求配桌
CmdToPbName[room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_ALLOC_TABLE_RESP] = "roomalloc.AllocTableResp";
// 请求桌子信息
CmdToPbName[room_alloc_proto.ROOMALLOC_CMD.ROOMALLOC_CMD_LEVEL_TABLE_INFO_RESP] = "roomalloc.LevelTableInfoResp";
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
// 重置用户余额
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_RESET_BALANCE_RESP] = "gamebase.ResetUserBalanceResp";

// 获取玩家游戏信息
CmdToPbName[game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_GET_USERINFO_RESP] = GameResp.GET_USER_INFO;
// 获取玩家游戏部分信息
CmdToPbName[game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_GET_USERINFO_BYFIELD_RESP] = GameResp.GET_USER_INFO_BY_FIELD;
// 更新玩家游戏信息
CmdToPbName[game_userinfo_proto.GAME_USERINFO_CMD.GAME_USERINFO_CMD_UPDATE_USERINFO_RESP] = GameResp.UPDATE_USER_INFO;

/** 玩家信息 */
export interface IUpdateGameUserInfoData {
    field: number,
    int_val?: number,
    str_val?: string,
}

export enum EUserField {
    NONE = 0,
    /** 头像 */
    AVATAR = 1,
    /** 昵称 */
    NICKNAME = 2,
    /** 性别 */
    GENDER = 3,
}
