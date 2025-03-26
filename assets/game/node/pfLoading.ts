


import { Enum, Node, Tween, _decorator, sp, tween } from 'cc';
import { UIBase } from '../../framework/ge';


const Type = Enum({ LOGIN: 0, GAME: 1, SECONDHALL: 2, OTHER: 3 });



const { ccclass, property } = _decorator;
@ccclass('pfLoading')
export class pfLoading extends UIBase {
    @property(Node)
    click!: Node;

    @property(Node)
    img!: Node;

    @property(Node)
    spine!: Node;

    _handler: number;

    /**
     * 
     * @param parm ={ 
     *      ts: 10,          持续时间
     *      delay: 2 ,       延迟多少秒显示
     *      forever:boolean, 是否永久不关闭
     *      block            blockInput
     *      isSpine          动效
     *      aniName          名字
     * }
     */
    init(parm: any) {
        if (!parm) {
            this.showLoading(false);
        } else {
            this.showLoading(true, parm.isSpine, parm.aniName, parm.block, parm.forever, parm.delay, parm.ts);
        }
    }

    showLoading(active: boolean = false, isSpine: boolean = false, aniName: string = '', block: boolean = false, forever = false, delay = 0, ts = 0) {
        Tween.stopAllByTarget(this.img);
        Tween.stopAllByTarget(this.spine);
        if (!active) {
            this.click.active = false;
            this.node.active = false
            this.img.active = false;
            this.spine.active = false;
        } else {
            this.node.active = true;
            this.click.active = block == null ? this.click.active : block;
            if (forever) {
                if (isSpine) {
                    this.img.active = false;
                    this.spine.active = true;
                    this.spine.getComponent(sp.Skeleton).setAnimation(3, aniName, true);
                } else {
                    this.img.active = true;
                    this.spine.active = false;
                    tween(this.img).by(1, { angle: -360 }).union().repeatForever().start();
                }
            } else {
                if (isSpine) {
                    this.img.active = false;
                    this.spine.active = false;
                    tween(this.spine).delay(delay).call(() => {
                        this.spine.active = true;
                        this.spine.getComponent(sp.Skeleton)?.setAnimation(3, aniName, true);
                    }).delay(ts).call(() => {
                        this.img.active = false;
                        this.spine.active = false;
                        this.click.active = false;
                    }).start();
                } else {
                    this.spine.active = false;
                    this.img.active = false;
                    tween(this.img).delay(delay).call(() => {
                        this.img.active = true;
                        tween(this.img).by(1, { angle: -360 }).union().repeatForever().start()
                    }).delay(ts).call(() => {
                        this.img.active = false;
                        this.spine.active = false;
                        this.click.active = false;
                    }).start();
                }
            }
        }
    }

    protected onDisable(): void {
        this.click.active = false
    }

}


