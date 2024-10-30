/*
 * @Description: 账号常量
 * @Author: zy
 * @Date: 2021-04-13 09:02:59
 * @LastEditTime: 2023-09-27 10:26:21
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */

import { CmdToPbName, client_proto } from "../../../framework/ge";
import { GetAppEventID } from "../../common/AppEvent";

/** PB事件 */
export const AccountPB = {
    REQ: {
        /** 登录 */
        Login: "account_proto.VerifyLoginTokenReq",
        ReportTS: "client_proto.ReportKolDataReq",
        /** 资产更新 */
        Asset: "asset.AssetReq",
    },

    RESP: {
        /** 登录 */
        Login: "account_proto.VerifyLoginTokenResp",
        ReportTS: "client_proto.ReportKolDataResp",
        /** 资产更新 */
        Asset: "asset.AssetResp",
    },

    PUSH: {
        KickPush: "agent.KickPush",
        ForbitPush: "client_proto.ForbitUserPush"
    }
}

export const AccountProto = {
    USERBULLETIN: 'client_proto.UserBulletin',
}

CmdToPbName[client_proto.BULLETIN_INFO_SUB_MSG_ID.BULLETIN_MSG_ID_USER_BULLETIN_RESP] = AccountProto.USERBULLETIN

/** 自定义事件 */
export const LoginEvent = {
    /** 踢人关闭webView */
    PUSH_KICKPUSH: "agent_KickPush",
    PUSH_FORBITUSERPUSH: "client_proto_ForbitUserPush",

    /**-----------登录相关----------- */
    /** 开始登陆 */
    LOGIN_START: GetAppEventID(),
    /** 登录状态改变 */
    LOGIN_STATE_CHANGE: GetAppEventID(),
    /** 显示登录界面 */
    LOGIN_GOTO_SHOW: GetAppEventID(),
    /** 登录成功 */
    LOGIN_SUCCESS: GetAppEventID(),
    /** 登陆失败 */
    LOGIN_FAIL: GetAppEventID(),
    /**启动参数 */
    LOGIN_READY: GetAppEventID(),
}

export type UserConfig = {
    uuid: string,
    uid: number,
    agency: string,
    agency_id: number,
    username: string,
    token: string,
    balance: number,
    game: string | number,
    hall_url: string,
    platform: string,
    gameinfo: { fullscreen: number } & {},
    session: string,
    currency: string,
    temp_uin: number,
}

export type GameConfig = {
    user: UserConfig,
    token: string,
    agent: string,
}
