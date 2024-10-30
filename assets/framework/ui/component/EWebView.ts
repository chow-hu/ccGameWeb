

import { WebView, _decorator } from 'cc';
import { ANDROID, IOS } from 'cc/env';
const { ccclass, property, help, executionOrder, menu } = _decorator;

@ccclass
export default class EWebView extends WebView {


    loadHtmlStr(str: string) {
        //@ts-ignore
        let document = this._impl?.webview?.contentWindow?.document;
        if (document) {
            document.open();
            document.write(str);
            document.close();
        } else {
            if (ANDROID || IOS) {
                let loadHTMLString = this._impl?.webview["loadHTMLString"];
                if (loadHTMLString) {
                    this._impl?.webview["loadHTMLString"](str, "");
                }
            }
        }

    }
}