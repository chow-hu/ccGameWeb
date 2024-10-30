/*
 * @Description:
 * @Author: zy
 * @Date: 2021-04-25 16:59:07
 * @Reference:
 */

export const SdkEvent = {
    START: 'sdk-start',
    LOGIN: 'sdk-login',
    SHOP_SUCCESS: 'sdk-shop-success',
    LEFT_ONLINE_TIME: "sdk-left-online-times",
}

export const SdkMsg = {
    CLIP_BOARD: "sdk-msg-clipboard",
    SUBMIT_ROLE_INFO: "sdk-msg-submit-role-info",
    LEFT_ONLINE_TIME: "sdk-msg-left-online-times",
    KEFU: "sdk-msg-kefu",
    AGE_INFO: "sdk-msg-age-info",
    LOAD_STATE: "sdk-msg-load-state",
    FIRST_START: "sdk-msg-first-start",
    GAME_POINT: "sdk-msg-game-point",
    ERROR_REPORT: "sdk-msg-error-report",
    WX_OFFER_ID: 'sdk-msg-wx-offer-id',
    SENTRY_USER: "sdk-msg-set-sentry-user-info", // sentry用户信息
}

export const LoadState = {
    OPEN: 1,
    BEFOR_UPDATE: 2,
    AFTER_UPDATE: 3,
    LOADED_XLS: 4
}

/** 广告事件：每处播放广告的地方自定义 */
export const enum AdEvent {
    SIGNIN = "SIGNIN",  

}
