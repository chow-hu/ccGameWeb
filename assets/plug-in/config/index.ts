/*
 * @Description: config
 * @Author: zy
 * @Date: 2021-04-01 16:05:29
 * @Reference:
 */

import { BUILD, HTML5 } from "cc/env";
import { _config_ as dev } from "./config-dev";
import { _config_ as dis } from "./config-dis";

const GameVersion: { [key: string | number]: { version: string } } = {
    100: { version: '1.0.0' },
    101: { version: '1.0.0' },
    102: { version: '1.0.0' },
    103: { version: '1.0.0' },
    104: { version: '1.0.0' },
    105: { version: '1.0.0' },
    106: { version: '1.0.0' },
    107: { version: '1.0.0' },
    108: { version: '1.0.0' },
    109: { version: '1.0.0' },
    110: { version: '1.0.0' },
    111: { version: '1.0.0' },
    112: { version: '1.0.0' },
    113: { version: '1.0.0' },
    114: { version: '1.0.0' },
    115: { version: '1.0.0' },
    116: { version: '1.0.0' },
}

class GameConfig {
    constructor() {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            this.lanuage = dis['lanuage'];
        } else {
            this.lanuage = dev['lanuage'];
        }
    }

    public GameVersion(id: number | string): string {
        return GameVersion[id]?.version;
    }

    private _output(key: string) {
        return (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) ? dis[key] : dev[key];
    }
    /** 是否显示FPS */
    public get FPS(): boolean {
        return this._output('fps')
    }

    public set REPORT(string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['report'] = string
        } else {
            dev['report'] = string
        }
    }

    public get REPORT(): string {
        return this._output('report_' + this.IO)
    }

    public get IO(): number {
        return this._output('io')
    }

    public get VERSION(): string {
        return this._output('version')
    }

    public get needWss(): boolean {
        return (this.IO == 2 || this.IO == 3 || this.IO == 4) && HTML5;
    }

    public get lanuage(): string {
        return this._output('lanuage');
    }

    public set lanuage(lanuage: string) {
        dis['lanuage'] = lanuage
        dev['lanuage'] = lanuage
        globalThis['gutil_code'] = lanuage;
    }

    /** 是否显示dev */
    public get timezone(): string {
        return this._output('timezone')
    }
    /** 是否显示dev */
    public set timezone(timezone: string) {
        if (BUILD && !(globalThis as any).WEB_DESKTOP_TEST) {
            dis['timezone'] = timezone;
        } else {
            dev['timezone'] = timezone;
        }
    }

    /** 是否显示dev */
    public get DEV(): boolean {
        return this._output('dev');
    }

}

export const config = new GameConfig();