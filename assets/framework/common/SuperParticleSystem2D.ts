import { _decorator, CCBoolean, CCFloat, CCInteger, ParticleSystem2D } from 'cc';
import { EDITOR } from 'cc/env';
const { ccclass, property, menu } = _decorator;

class CustomParticles extends Array {
    constructor(...args) {
        super(...args);
        return new Proxy(this, {
            get(target, prop, receiver) {
                if (typeof target[prop] === 'function') {
                    // 如果获取的属性是一个函数（即数组的方法），则返回一个包装后的函数
                    return function (...args) {
                        if (prop == "push") {
                            if (args[0]) {
                                args[0]["frameindex"] = 0;  //当前帧
                                args[0]["lastFrameTime"] = 0;
                            }
                        }
                        //@ts-ignore
                        // console.log(`即将调用数组方法: ${prop}`, args[0]);

                        let result = target[prop].apply(target, args);
                        //@ts-ignore
                        // console.log(`数组方法: ${prop} 调用完毕`);
                        return result;
                    };
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    }
}

@ccclass('SuperParticleSystem2D')
@menu('UI/SuperParticleSystem2D')
export class SuperParticleSystem2D extends ParticleSystem2D {

    /**
     * !#zh 是否启用粒子动画
     * @property {CCBoolean} enableAnimation
     * @default false
     */
    @property({ type: CCBoolean, tooltip: "是否启用粒子动画" })
    public get enableAnimation() {
        return this._enableAnimation;
    };

    /** 设置帧动画的开关 */
    public set enableAnimation(value) {
        let old = this._enableAnimation;
        this._enableAnimation = value;
        if (old != this._enableAnimation) {
            if (this._renderSpriteFrame) {
                this.resetSystem();
                this._applySpriteFrame();
                if (EDITOR) {
                    this.node.emit('spriteframe-changed', this);
                }
            }
        }
    };
    /**
     * !#zh 帧动画贴图的列数
     * @property {CCInteger} sizeX
     * @default 0
     */
    @property({ type: CCInteger, tooltip: "帧动画贴图的列数", serializable: true, visible: function () { return this.enableAnimation; } })
    public sizeX = 0;

    /**
     * !#zh 帧动画贴图的行数
     * @property {CCInteger} sizeY
     * @default 0
     */
    @property({ type: CCInteger, tooltip: "帧动画贴图的行数", serializable: true, visible: function () { return this.enableAnimation; } })
    public sizeY = 0;

    /**
     * !#zh 帧动画贴图，每一张序列帧图的宽度（需要等宽）
     * @property {CCFloat} uv_deltaX
     * @default 0
     */
    @property({ type: CCFloat, tooltip: "帧动画贴图，每一张序列帧图的宽度（需要等宽）", serializable: true, visible: function () { return this.enableAnimation; } })
    public uv_deltaX = 0;

    /**
     * !#zh 帧动画贴图，每一张序列帧图的高度（需要等高）
     * @property {CCFloat} uv_deltaY
     * @default 0
     */
    @property({ type: CCFloat, tooltip: "帧动画贴图，每一张序列帧图的高度（需要等高）", serializable: true, visible: function () { return this.enableAnimation; } })
    public uv_deltaY = 0;
    /**
     * !#zh 帧动画贴图，序列帧动画的帧率（默认60帧）
     * @default 0
    */
    @property({ type: CCInteger, tooltip: "帧动画贴图，序列帧动画的帧率（默认60帧）", serializable: true, visible: function () { return this.enableAnimation; } })
    public animationRate = 60;

    @property({ serializable: true, visible: false })
    private _enableAnimation = false;

    public simulatorUpdateParticleBuffer: Function = null;

    constructor() {
        super();
        this._simulator.particles = new CustomParticles();

        this._simulator.updateParticleBuffer = this.decorateMethod(this._simulator.updateParticleBuffer, 'updateParticleBuffer');
        this._simulator.emitParticle = this.decorateMethod(this._simulator.emitParticle, 'emitParticle');
    }
    public decorateMethod(method: Function, name: string) {
        const self = this;
        return function () {
            // console.log("method.name:", method.name)
            let topName = "_top_";
            let afterName = "_after_";
            if (self[topName + name]) {
                self[topName + name].apply(self, arguments);
            }
            // console.log("在原方法调用前植入的函数");
            const result = method.apply(self._simulator, arguments);

            if (self[afterName + name]) {
                self[afterName + name].apply(self, arguments);
            }
            return result;
        }
    }

    _top_emitParticle(pos) {
        // console.warn("最后一个：", this._simulator.particles[this._simulator.particles.length - 1])
    }

    _after_emitParticle(pos) {
        // console.warn("最后一个：", this._simulator.particles[this._simulator.particles.length - 1])
        let particle: any = this._simulator.particles[this._simulator.particles.length - 1];

        if (particle) {
            //animation mode
            particle.enableAnimation = this.enableAnimation;
            if (particle.enableAnimation) {
                particle.sizeX = this.sizeX;
                particle.sizeY = this.sizeY;
                particle.frameindex = 0;
                particle.lastFrameTime = particle.timeToLive;
                particle.uv_deltaX = this.uv_deltaX;
                particle.uv_deltaY = this.uv_deltaY;
                particle.animationRate = this.animationRate;
            }
        }
    }
    _after_updateParticleBuffer(particle, pos, buffer, offset: number) {
        const vbuf = buffer.vData;

        //animation mode
        // if (!particle.enableAnimation) { return; }
        let spriteframeSize = this._renderSpriteFrame?.getOriginalSize();
        if (spriteframeSize) {
            let maxFrameIndex = particle.sizeX * particle.sizeY;
            let nextFramePosIndex = (particle.frameindex + 1) % maxFrameIndex;
            let duration = 1 / particle.animationRate;
            if (particle.lastFrameTime - particle.timeToLive > duration) {
                let sizeY = Math.floor(nextFramePosIndex / particle.sizeX);
                let sizeX = nextFramePosIndex % particle.sizeX
                let uv_x = sizeX * particle.uv_deltaX / spriteframeSize.width;
                let uv_y = sizeY * particle.uv_deltaY / spriteframeSize.height;
                let uv_w = particle.uv_deltaX / spriteframeSize.width;
                let uv_h = particle.uv_deltaY / spriteframeSize.height;

                //uv bl
                vbuf[offset + 3] = uv_x;
                vbuf[offset + 4] = uv_y + uv_h;
                //uv br
                vbuf[offset + 12] = uv_x + uv_w;
                vbuf[offset + 13] = uv_y + uv_h;
                //uv tl
                vbuf[offset + 21] = uv_x;
                vbuf[offset + 22] = uv_y;
                //uv tr
                vbuf[offset + 30] = uv_x + uv_w;
                vbuf[offset + 31] = uv_y;

                particle.frameindex++;
                particle.lastFrameTime = particle.timeToLive;
            }
        }

    }
}


