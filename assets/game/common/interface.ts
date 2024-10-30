/*
 * @Description: common interface
 * @Author: zy
 * @Date: 2021-04-13 09:55:35
 * @Reference: 
 */

export enum ESpineUrl {
    MONSTER = 'spine/monster/',
}

export const Atlas = {
    USERICON: 'userIcon',

}
export const BUILDER = {
    ITEM: 'item',
    PFREDPOINT: 'pfRedPoint',
    PFNUMREDPOINT: 'pfNumRedPoint',
    PFDIALOG: 'pfDialog',
    PFPANELREWARD: 'pfPanelReward'
}

export enum EAudio {
    //MAIN = "mainaudio",      // 主界面
    BTNCLICK = "btnClick",     // 按钮按下音效
    BTNCLOSE = "close",        // 切换的音效
    MESSAGE = "message",       // 消息提示音效
    BTNSWITCH = "switch",      // 切换的音效
    SPLAHPAGE = "menuClick",   // 菜单切换音效
    NONE = "none",       // 无音效
}

export enum GDKeys {
    BTN_SHOW = "btn_show",
    ISWHITE = "isWhite",//白名单
}


export type ID_NUM_1 = {
    id: number,
    num: number,
}

export const qualityColorHex = ['#c6c6c6', '#c6c6c6', '#63e172', '#6fafff', '#d37fff', '#f4bc51', '#ff7358', '#c2cbff'];