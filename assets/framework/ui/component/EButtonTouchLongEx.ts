
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

    onTouchEnd(event: EventTouch) {
        super.onTouchEnd(event);

        if (this.cancelEventHandler) {
            this.cancelEventHandler.emit([event]);
        }
    }
}
