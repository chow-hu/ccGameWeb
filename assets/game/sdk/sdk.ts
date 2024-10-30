/*
 * @Description:
 * @Author: zy
 * @Date: 2021-04-01 16:51:46
 * @Reference:
 */

import { sys } from "cc";
import { HTML5, NATIVE } from "cc/env";
import { ISDK } from "./platform/ISdk";
// import { SdkAndroid } from "./platform/SdkAndroid";
import { SdkWeb } from "./platform/web";

const sdkHandler = function () {
    let handler: ISDK = null!;
    if (NATIVE) {
        if (sys.os === sys.OS.ANDROID) {
            // handler = new SdkAndroid();
        }
    } else if (HTML5) {
        handler = new SdkWeb();
    }
    return handler;
}()

export const sdk = sdkHandler;