

import { Component, EventTouch, Node, _decorator } from 'cc';
const { ccclass, property, help, executionOrder, menu } = _decorator;


interface EventTouchs extends EventTouch {
    sham?: boolean
}

@ccclass
export default class EViewGroupNesting extends Component {
    private events: EventTouchs[] = [];
    private startTouchPos: any = null;
    private curTouchPos: any = null;
    // private test:boolean = true;

    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onHandleTouchStart, this, true);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onHandleTouchMove, this, true);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchHandle, this, true);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchHandle, this, true);
    }


    private onTouchHandle(event: EventTouchs) {
        // if (this.test) return;
        if (event.sham || event.simulate || event.target === this.node) return;

        // console.log("我的oooooooooooooooooooo--------------------------------------- " ,event.currentTarget.name);

        const cancelEvent: EventTouchs = new EventTouch(event.getTouches(), event.bubbles, event.type);
        cancelEvent.type = event.type;
        cancelEvent.touch = event.touch;
        cancelEvent.sham = true;
        this.events.push(cancelEvent);
    }

    private onHandleTouchStart(event: EventTouchs) {
        // console.log("事件的类型--------------------------------------- " +  event.eventPhase);
        // event.propagationStopped = true;
        this.onTouchHandle(event);
        this.startTouchPos = event.getUILocation();
    }

    private onHandleTouchMove(event: EventTouchs) {
        // console.log("事件的类型--------------------------------------- " +  event.eventPhase);
        // event.propagationStopped = true;
        this.onTouchHandle(event);
        this.curTouchPos = event.getUILocation();
    }

    update() {
        if (this.events.length === 0) return;
        for (let index = 0; index < this.events.length; index++) {
            // console.log("事件的类型--------------------------------------- " + this.events.length);
            // if(index == 0){
            //     this.events[index].preventSwallow = false;
            //     this.events.length = 0;
            //     return; // 第一个事件不触发
            // }
            this.node.dispatchEvent(this.events[index]);
        }
        this.events.length = 0;
    }
}