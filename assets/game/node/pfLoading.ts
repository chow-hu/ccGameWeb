


import { Enum, Node, Tween, _decorator, sp, tween } from 'cc';
import { UIBase } from '../../framework/ge';


const Type = Enum({ LOGIN: 0, GAME: 1, SECONDHALL: 2, OTHER: 3 });



const { ccclass, property } = _decorator;
@ccclass('pfLoading')
export class pfLoading extends UIBase {
    // @property(Node)
    // click!: Node;

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
     *      type,            位置类型
     *      notshow          不显示Loading 默认false 显示
     * }
     */
    init(parm: any) {
        Tween.stopAllByTarget(this.img);
        if (!parm) {
            // this.click.active = false;
            this.node.active = false
            this.img.active = false;
            this.spine.active = false;
        } else {
            this.node.active = true
            // this.click.active = parm.block == undefined ? this.click.active : parm.block;

            let notshow = parm.notshow || false;

            if (parm.type == Type.LOGIN || parm.type == Type.GAME || parm.type == Type.SECONDHALL) {
                if (notshow) {
                    this.img.active = false
                    // this.spine.active = false;
                } else {
                    this.img.active = false
                    this.spine.active = true;
                    this.spine.getComponent(sp.Skeleton).setAnimation(0, "zjh", true);
                    //this.spine.getComponent(sp.Skeleton).timeScale = 0.9
                }
            } else {
                this.spine.active = false;
                let forever = parm.forever || false  // 长久
                if (forever) {
                    if (notshow) {
                        this.img.active = false;
                    } else {
                        this.img.active = true;
                        tween(this.img).by(1, { angle: -360 }).union().repeatForever().start()
                    }
                } else {
                    let delay = parm.delay || 0  // 延迟
                    let ts = parm.ts || 0        // 持续时长
                    this.img.active = false;

                    tween(this.img).delay(delay).call(() => {
                        this.img.active = !notshow;
                        tween(this.img).by(1, { angle: -360 }).union().repeatForever().start()
                    }).delay(ts).call(() => {
                        Tween.stopAllByTarget(this.img);
                        this.img.active = false
                        // this.click.active = false;
                    }).start();
                }
            }


        }
    }

    // protected onDisable(): void {
    //     this.click.active = false
    // }

}


