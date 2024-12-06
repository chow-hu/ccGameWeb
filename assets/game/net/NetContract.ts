/*
 * @Description: 网络消息链接器
 * @Author: zy
 * @Date: 2021-03-08 15:26:18
 * @Reference: 
 */
import { game, warn } from "cc";
import { INetContract, NetEvent, NetMsg, PRIORITY, eventDispatcher, gui, gutil_char } from "../../framework/ge";
import { AppEvent } from "../common/AppEvent";
import { rcTips } from "../common/custom-general";
export class NetContract implements INetContract {
    private msgstack: NetMsg[] = [];
    constructor() {
        this.msgstack = [];
        // director.on(Director.EVENT_AFTER_UPDATE, () => {
        //     if (this.msgstack.length > 0) {
        //         let msgdata = this.msgstack.shift()!;
        //         let rc = msgdata.rc;
        //         rc && rcTips(rc);
        //         eventDispatcher.dispatchProtoEvent(msgdata.route, msgdata);
        //     }
        // });
        setInterval(() => {
            if (this.msgstack.length > 0) {
                let msgdata = this.msgstack.shift()!;
                let rc = msgdata.rc;
                rc && rcTips(rc);
                eventDispatcher.dispatchProtoEvent(msgdata.route, msgdata);
            }
        }, game.frameTime)
    }

    onNet(event: NetEvent, data: any) {
        switch (event) {
            case NetEvent.DATA: {
                this._netdata(data);
            } break;
            case NetEvent.WILLOPEN: {
                gui.loading({ forever: true, block: true }, PRIORITY.NET);
            } break;
            case NetEvent.READY: {
                gui.loading(false, PRIORITY.NET);
                this.msgstack = [];
                eventDispatcher.dispatchEvent(AppEvent.SYS_NET_READY, data);
            } break;
            case NetEvent.NOT_READY: {
                gui.showTips(gutil_char('NET_UNSTABLE_TO_CHECK'));
            } break;
            case NetEvent.CONNECT_FAILED: {
                // gui.loading(false, PRIORITY.NET);
                eventDispatcher.dispatchEvent(AppEvent.SYS_NET_CONNECT_FAILED, data);
            } break;
            case NetEvent.CLOSED: {
                eventDispatcher.dispatchEvent(AppEvent.SYS_NET_CLOSED);
            } break;
            case NetEvent.DELAY: {
                eventDispatcher.dispatchEvent(AppEvent.SYS_NET_DELAY_UPDATE, data);
            } break;
            case NetEvent.AUTH_ERROR: {
                this._netautherr();
            } break;
            default: {
                for (const key in NetEvent) {
                    if (Object.prototype.hasOwnProperty.call(NetEvent, key)) {
                        const element = NetEvent[key];
                        if (element == event) {
                            console.log('[EVENT-UNCATCH]:NetEvent.', element);
                        }
                    }
                }
            }
        }
    }

    _netdata(data: NetMsg) {
        this.msgstack.push(data);
    }

    _netautherr() {

    }
}