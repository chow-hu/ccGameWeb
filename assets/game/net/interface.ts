/*
 * @Description: 消息名映射
 * @Author: zy
 * @Date: 2021-03-02 15:11:34
 * @Reference: 
 */

import { CmdToPbName, agent, bridge_proxy_proto, client_proto, game_manage_proto, gamealloc_proto, proto_asset, tgame_proto, transactions, vipbetredate, account_proto, game_base_proto } from "../../framework/ge";


// 心跳返回
CmdToPbName[agent.AGENT_CMD.AGENT_CMD_HEART_BEAT] = "agent.HeartBeat";


CmdToPbName[account_proto.LOGIN_SUB_MSG_ID.ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_RESP] = 'account_proto.VerifyLoginTokenResp';

// 请求用户数据
CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_USERBASIC_GET_INFO_RESP] = 'client_proto.GetUserBasicInfoResp';
// 设置用户数据
CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_USER_SET_INFO_RESP] = 'client_proto.SetUserInfoResp';
// 设置用户语言
CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_USER_SET_LANG_RESP] = 'client_proto.SetLangCodeResp';

// 物品获得推送
CmdToPbName[client_proto.COMMON_MSG_SUB_ID.COMM_MSG_GET_PROP_PUSH] = 'client_proto.GetPropPush';
// 各模块规则获取
CmdToPbName[client_proto.COMMON_MSG_SUB_ID.COMM_MSG_GET_RULES_RESP] = 'client_proto.GetRulesResp';
// 用户简单属性变更推送
// CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_USER_ATTRI_CHANGE_PUSH] = 'client_proto.UserAttriChangePush';

// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_SECOND_LIST_RESP] = 'client_proto.SecondRoomListResp';
// // 匹配前请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_BEFORE_MATCH_RESP] = "client_proto.BeforeMatchTableResp";
// // 匹配时请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_ENTER_MATCH_RESP] = "client_proto.EnterMatchTableResp";
// // 退出匹配请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_EXIT_MATCH_RESP] = "client_proto.ExitMatchTableResp";
// // 进入房间请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_ENTER_ROOM_RESP] = "client_proto.EnterRoomResp";
// // 机器人陪玩进入房间请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_ROBOT_PLAY_RESP] = "client_proto.RobotEnterPlayResp";
// // 机器人陪玩退出房间请求的响应
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_ROBOT_EXIT_PLAY_RESP] = "client_proto.RobotExitPlayResp";
// // 匹配到桌子的推送消息(只有收到这了这个才能进入房间)
// CmdToPbName[client_proto.ROOM_LIST_SUB_MSG_ID.RLSMI_MATCH_INFO_PUSH] = "client_proto.MatchedTableInfoPush";



// 转盘信息
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_SPIN_INFO_RESP] = "client_proto.SpinInfoResp";
// 转转盘
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_SPIN_RESP] = "client_proto.SpinResp";
// 转盘提现
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_WITHDRAW_RESP] = "client_proto.SpinWithdrawResp";
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_WITHDRAW_LOG_RESP] = "client_proto.SpinOrderLogResp";
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_RECORD_ADD_PUSH] = "client_proto.SpinRecordAddPush";
CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_GET_SPIN_POSTER_RESP] = "client_proto.SpinPosterResp";

CmdToPbName[client_proto.SPIN_SUB_MSG_ID.SSMI_GET_CUR_DATA_RESP] = "client_proto.SpinGetCurDataResp";


// 钱包信息
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_GET_CHARGE_CONFIG_RESP] = "client_proto.ChargeConfigResp";
// 充值
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_CREATE_ORDER_RESP] = "client_proto.CreateChargeOrderResp";
// 提现信息
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_GET_WITHDRAW_CONFIG_RESP] = "client_proto.GetWithdrawConfigResp";
// 设置银行卡
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_SET_BANKCARD_RESP] = "client_proto.SetBankCardResp";
// 提取
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_CREATE_WITHDRAW_ORDER_RESP] = "client_proto.CreateWithdrawOrderResp";
// 充值记录
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_GET_CHARGE_LOG_RESP] = "client_proto.GetChargeLogResp";
// 提取记录
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_GET_WITHDRAW_LOG_RESP] = "client_proto.GetWithdrawLogResp";
// 获取商城banner
CmdToPbName[client_proto.USER_WALLET_MSG_ID.UWSMI_GET_BANNER_LIST_RESP] = 'client_proto.GetBannerListResp';


// Vip
CmdToPbName[client_proto.VIP_INFO_SUB_MSG_ID.VIPMI_VIP_GET_INFO_RESP] = "client_proto.GetVipConfigInfoResp";
CmdToPbName[client_proto.VIP_INFO_SUB_MSG_ID.VIPMI_VIP_SET_PRIVILEGE_INFO_RESP] = "client_proto.SetVipPrivilegeResp";
CmdToPbName[client_proto.VIP_INFO_SUB_MSG_ID.VIPMI_VIP_GET_DETAIL_LOG_RESP] = "client_proto.GetVipDetailLogResp";
CmdToPbName[client_proto.VIP_INFO_SUB_MSG_ID.VIPMI_GET_LEVEL_DESC_RESP] = "client_proto.VipLevelDescResp";
CmdToPbName[client_proto.VIP_INFO_SUB_MSG_ID.VIPMI_GET_USER_VIP_RESP] = "client_proto.GetUserVipResp";



// 大厅游戏列表，三方游戏
CmdToPbName[bridge_proxy_proto.RBRIDGE_PROXY_SUB_MSG_ID.BRIDGE_PROXY_LOGIN_RESP] = "bridge_proxy_proto.LoginResp";
CmdToPbName[tgame_proto.TGAME_SUB_MSG_ID.TGAME_LOGIN_RESP] = "tgame_proto.LoginResp";
CmdToPbName[tgame_proto.TGAME_SUB_MSG_ID.TGAME_LOGOUT_RESP] = "tgame_proto.LogoutResp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_GAME_HALL_DETAIL_RESP] = "game_manage_proto.GameHallDetailResp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_GAME_GROUP_DETAIL_RESP] = "game_manage_proto.GameGroupDetailResp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_MULTI_LANG_GAME_GROUP_V1_RESP] = "game_manage_proto.MultiLanguageGameGroupV1Resp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_GAME_GROUP_DETAIL_V1_RESP] = "game_manage_proto.GameGroupDetailV1Resp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_GAME_GROUP_DETAIL_V2_RESP] = "game_manage_proto.GameGroupDetailV2Resp";
CmdToPbName[game_manage_proto.GAME_MANAGE_SUB_MSG_ID.GAME_MANAGE_GAME_DETAIL_RESP] = "game_manage_proto.GameDetailResp";
CmdToPbName[bridge_proxy_proto.RBRIDGE_PROXY_SUB_MSG_ID.BRIDGE_PROXY_KICKOUT_PUSH] = "bridge_proxy_proto.KickOutPush";
CmdToPbName[tgame_proto.TGAME_SUB_MSG_ID.TGAME_KICKOUT_PUSH] = "tgame_proto.KickOutPush";


// 个人资产
CmdToPbName[proto_asset.ASSET_CMD.ASSET_CMD_GET_ASSET_RESP] = "asset.AssetResp";

//踢号
CmdToPbName[agent.AGENT_CMD.AGENT_CMD_KICK] = "agent.KickPush";

//推荐弹窗
CmdToPbName[client_proto.FACE_INFO_SUB_MSG_ID.FACE_MSG_ID_PULL_RESP] = "client_proto.FacePullResp";

//总流水
CmdToPbName[transactions.TRANSACTIONS_CMD.TRANSACTIONS_CMD_GET_TRANSACTIONS_RESP] = "transactions.TransactionsResp";

//封号
CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_FORBIT_USER_PUSH] = "client_proto.ForbitUserPush";

// 第三方游戏平台
CmdToPbName[gamealloc_proto.GAMEALLOC_CMD.GAMEALLOC_CMD_ALLOC_RESP] = "gamealloc.AllocResp";

// 游戏房间内顶部banner的推送
CmdToPbName[client_proto.GAME_BANNER_INFO_SUB_MSG_ID.GAME_BANNER_MSG_ID_USER_PUSH] = "client_proto.GameBannerUserPush";

// vip_bet_Redate 查询
CmdToPbName[vipbetredate.ROOMALLOC_CMD.ROOMALLOC_CMD_VIP_BET_REDATE_INFO_RESP] = "vipbetredate.QuerylaimRewardResp";

// vip_bet_Redate 领取
CmdToPbName[vipbetredate.ROOMALLOC_CMD.ROOMALLOC_CMD_VIP_BET_REDATE_RESP] = "vipbetredate.ClaimRewardResp"

// 踢出房间推送
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_NOTIFICATION_PUSH] = "gamebase.GameNotificationPush";
