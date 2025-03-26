/*
 * @Description: 引擎启动相关
 * @Author: zy
 * @Date: 2021-01-14 17:57:45
 * @LastEditTime: 2023-11-17 11:09:59
 * @LastEditors: Please set LastEditors
 * @Reference:
 */

import { NATIVE } from 'cc/env';
import { StorageData } from "../framework/storage/StorageData";
import { config } from './config';

export function game_start() {
    let lanCode = StorageData.local.get('LAN_CODE', "") || config.lanuage;
    globalThis.gutil_code = lanCode;
    //开启屏幕常亮
    if (NATIVE) {
        //@ts-ignore
        jsb.Device.setKeepScreenOn(true)
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>_game_start_<<<<<<<<<<<<<<<<<<<<<', lanCode);
}