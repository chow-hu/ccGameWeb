
import { EventHandler, EventTouch, _decorator } from "cc";
import { EButtonTouchLong } from "./EButtonTouchLong";

const { ccclass, property, menu } = _decorator;

@ccclass("EButtonTouchLongEx")
@menu('UI/EButtonTouchLongEx')
export class EButtonTouchLongEx extends EButtonTouchLong {

    @property({
        tooltip: "取消事件的回调",
        type: EventHandler,
    })
    private cancelEventHandler = new EventHandler();

    @property({
        tooltip: "开始事件的回调",
        type: EventHandler,
    })
    private startEventHandler = new EventHandler();

    /** 触摸开始 */
    onTouchtStart(event: EventTouch) {
        super.onTouchtStart(event);

        if (this.startEventHandler) {
            this.startEventHandler.emit([event]);
        }
    }


    onTouchEnd(event: EventTouch) {
        super.onTouchEnd(event);

        if (this.cancelEventHandler) {
            this.cancelEventHandler.emit([event]);
        }
    }
}
