/*
 * @Description: config
 * @Author: zy
 * @Date: 2021-04-01 16:05:29
 * @Reference:
 */

import { BUILD, HTML5 } from "cc/env";
import { _config_ as dev } from "./config-dev";
import { _config_ as dis } from "./config-dis";

class GameConfig {

    private _output(key: string) {
        return (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) ? dis[key] : dev[key];
    }
    /** 是否显示帧率 */
    public get FPS(): boolean {
        return this._output('fps')
    }
    /** 是否使用ab包 */
    public get UseAbPackage(): boolean {
        return this._output('use_abpackage')
    }


    public set HOST(string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['host'] = string
        } else {
            dev['host'] = string
        }
    }

    public get HOST(): string {
        return this._output('host_' + this.IO)
    }


    public set REPORT(string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['report'] = string
        } else {
            dev['report'] = string
        }
    }

    public get REPORT(): string {
        return this._output('report')
    }

    public set CHAT(string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['chat'] = string
        } else {
            dev['chat'] = string
        }
    }

    public get CHAT(): string {
        return this._output('chat')
    }


    public get IO(): number {
        return this._output('io')
    }

    public get VERSION(): string {
        return this._output('version')
    }


    public get ASTVER(): string {
        return this._output('aster')
    }


    public get SHARE_REMOTE(): string {
        return this._output('shareRemote')
    }

    public set CLIENT_IP(ip: string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['ip'] = ip;
        } else {
            dev['ip'] = ip;
        }
    }

    public get CLIENT_IP(): string {
        return this._output('ip')
    }

    public get needWss(): boolean {
        return (this.IO == 2 || this.IO == 3 || this.IO == 4) && HTML5;
    }

}

export const config = new GameConfig();