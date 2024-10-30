
import { _decorator, color, EventHandler, EventTouch, Label, PageView, Vec2 } from 'cc';

enum EventType {
    PAGE_CHANGED = 'page-changed',
}


const { ccclass, property } = _decorator;
const _tempVec2 = new Vec2();
@ccclass('CustomPage')
export class CustomPage extends PageView {
    set sizeMode(value){
        this._sizeMode = PageView.SizeMode.Free;
    }
    protected _touchMovePosition = new Vec2();
    private _myLastPageIdx:number = -1; 
    onLoad(): void {
        super.onLoad();
        this.node.on(PageView.EventType.SCROLLING , this.onScrolling, this);
        this.node.on(PageView.EventType.SCROLL_ENDED , this.onScrollEnded, this);
    }
    protected _onTouchBegan (event: EventTouch, captureListeners: any): void {
       
        super._onTouchBegan(event, captureListeners);

    }

    protected _onTouchMoved (event: EventTouch, captureListeners: any): void {
        event.touch!.getUILocation(_tempVec2);
        Vec2.set(this._touchMovePosition, _tempVec2.x, _tempVec2.y);
        super._onTouchMoved(event, captureListeners);
    }
    protected _onTouchEnded (event: EventTouch, captureListeners: any): void {

        super._onTouchEnded(event, captureListeners);
        event.touch!.getUILocation(_tempVec2);
        this.onScrollEnded();
    }

    protected _onTouchCancelled (event: EventTouch, captureListeners: any): void {

        super._onTouchCancelled(event, captureListeners);
        this.onScrollEnded();
        // this.updatePages(this._touchBeganPosition, this._touchEndPosition);
    }

    

    protected _getDragDirection (moveOffset: Vec2):any {
        const locPages = this._pages;
        const cur = this._curPageIdx;
        if (this._direction === PageView.Direction.Horizontal) {
            let dist = moveOffset.x;
            let of = 0;
            let d = dist > 0 ? 1 : -1;
            while(dist !== 0){
                let p = locPages[cur + of].getPosition();
                let q = locPages[cur + of + d]?.getPosition();
                if (!q){
                    break;
                }
                let sc = locPages[cur + of].getScale();
                let sp = Math.abs(q.x - p.x);
                let u = locPages[cur + of]._uiProps.uiTransformComp;
                let w = (d>0?1-u.anchorX : u.anchorX ) * u.width * sc.x;
                sp -= w;
                dist -= w * d;
                if (dist*d <= 0){
                    break;
                }
                of += d;
                u = locPages[cur + of]._uiProps.uiTransformComp;
                if (!u) break;
                // w = (d>0? u.anchorX : 1- u.anchorX ) * u.width;
                dist -= sp*d;
                if (dist*d <= 0){
                    break;
                }
            }
            return of;
        } else {
            let dist = -moveOffset.y;
            let of = 0;
            let d = dist > 0 ? 1 : -1;
            while(dist !== 0){
                let p = locPages[cur + of].getPosition();
                let q = locPages[cur + of + d]?.getPosition();
                if (!q){
                    break;
                }
                let sc = locPages[cur + of].getScale();
                let sp = Math.abs(q.y - p.y);
                let u = locPages[cur + of]._uiProps.uiTransformComp;
                let h = (d>0?1-u.anchorY : u.anchorY ) * u.height * sc.y;
                sp -= h;
                dist -= h * d;
                if (dist*d <= 0){
                    break;
                }
                of += d;
                u = locPages[cur + of]._uiProps.uiTransformComp;
                if (!u) break;
                // w = (d>0? u.anchorX : 1- u.anchorX ) * u.width;
                dist -= sp*d;
                if (dist*d <= 0){
                    break;
                }
            }
            return of;
        }
    }

    private updatePages(beganPosition: Vec2 , endPosition: Vec2 , offset: number = 0) {
        const moveOffset = new Vec2();
        Vec2.subtract(moveOffset, beganPosition, endPosition);
        const index = this._curPageIdx;
        const nextIndex = index + this._getDragDirection(moveOffset) + offset;
        let pages = this.getPages();
		pages.forEach ((v,k) =>{
            v.getComponent(Label).color = (k == nextIndex? color("#ffffff"): color("#56282D"));
		});

    }


    private onScrolling() {
        if (!this._scrolling) return;
        this.updatePages(this._touchBeganPosition , this._touchMovePosition);
    }

    private onScrollEnded() {
        let pages = this.getPages();
        let index = this.curPageIdx;
        // if (this.curPageIdx != this._myLastPageIdx)  {
            EventHandler.emitEvents(this.pageEvents, this, EventType.PAGE_CHANGED);
            this.node.emit(EventType.PAGE_CHANGED, this);
        // }

        this._myLastPageIdx = this.curPageIdx;

		pages.forEach ((v,k) =>{
			v.getComponent(Label).color = (k == index? color("#ffffff"): color("#56282D"));
		});
    }
}

