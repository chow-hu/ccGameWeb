/*
 * @Description: 消息名映射
 * @Author: zy
 * @Date: 2021-03-02 15:11:34
 * @Reference: 
 */

import { CmdToPbName, agent, client_proto, proto_asset, account_proto, game_base_proto } from "../../framework/ge";


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



// 个人资产
CmdToPbName[proto_asset.ASSET_CMD.ASSET_CMD_GET_ASSET_RESP] = "asset.AssetResp";

//踢号
CmdToPbName[agent.AGENT_CMD.AGENT_CMD_KICK] = "agent.KickPush";


//封号
CmdToPbName[client_proto.USER_INFO_SUB_MSG_ID.UISMI_FORBIT_USER_PUSH] = "client_proto.ForbitUserPush";


// 踢出房间推送
CmdToPbName[game_base_proto.CCGAME_MSGID.CC_GAME_NOTIFICATION_PUSH] = "gamebase.GameNotificationPush";
