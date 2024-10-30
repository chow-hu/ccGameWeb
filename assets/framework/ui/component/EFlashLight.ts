import { CCBoolean, CCFloat, Color, Component, Label, Material, Sprite, Vec2, _decorator, sys } from 'cc';
import { SchedulerManager } from '../../ge';
const { ccclass, property, menu } = _decorator;


/**
 * Name = EFlashLight
 * URL = db://assets/framework/ui/component/EFlashLight.ts
 * Time = 2024 05.09 18:30:35 GMT+0800 (中国标准时间)
 * Author = aby
 * 扫光特效 需要借助shader材质
*/

@ccclass('EFlashLight')
@menu('UI/EFlashLight')
export class EFlashLight extends Component {

    @property({ visible: function () { return false } })
    protected notfirstInit = false;

    @property({
        type: Sprite || Label, visible: function () {
            if (this.notfirstInit == false) {
                (this as any).creatorSprite();
            }
            (this as any).reloadMaterial();
            return false
        }
    })
    protected _comp !: Sprite | Label;

    @property({
        visible: function () { return false }
    })
    protected _lightColor = Color.WHITE.clone();

    @property({
        type: Material, visible: function () { return false }
    })
    protected _material = null;

    @property({ type: CCFloat, visible: function () { return false } })
    protected _lightWidth = 0.3;
    @property({ type: CCFloat, visible: function () { return false } })
    protected _lightAngle = 40;
    @property({ visible: function () { return false } })
    protected _enableGradient = true;

    @property({ visible: function () { return false } })
    protected _cropAlpha = true;

    @property({ visible: function () { return false } })
    protected _enableFog = false;

    @property({ type: Sprite, tooltip: "(二选一)CustomMaterial不为空的图片", visible: function () { return (this.label == null) } })
    public get sprite() {
        if (this._comp && (this._comp instanceof Sprite)) {
            return this._comp;
        }
        return null;
    }
    public set sprite(v: Sprite) {
        this._comp = v;
        this.notfirstInit = true;
        if (this._comp) {
            this._material = this._comp.getMaterialInstance(0);
        }
    }
    @property({ type: Label, tooltip: "(二选一)CustomMaterial不为空的Label", visible: function () { return (this.sprite == null) } })
    public get label() {
        if (this._comp && (this._comp instanceof Label)) {
            return this._comp;
        }
        return null;
    }
    public set label(v: Label) {
        this._comp = v;
        this.notfirstInit = true;
        if (this._comp) {
            this._material = this._comp.getMaterialInstance(0);
        }
    }


    @property({ type: CCFloat, tooltip: "光束宽度(0~1 1为铺满)", visible: function () { (this as any).reloadMaterial(); return true } })
    public get lightWidth() {
        return this._lightWidth;
    }
    public set lightWidth(v) {
        this._lightWidth = v;
        (this as any).setMaterialProperty("lightWidth", this._lightWidth);
    }

    @property({ type: CCFloat, tooltip: "光束倾斜角度", visible: function () { (this as any).reloadMaterial(); return true } })
    public get lightAngle() {
        return this._lightAngle;
    }
    public set lightAngle(v) {
        this._lightAngle = v;
        (this as any).setMaterialProperty("lightAngle", this._lightAngle);
    }

    @property({ type: Color, tooltip: "光束颜色" })
    get lightColor(): Readonly<Color> {
        return this._lightColor;
    }
    set lightColor(value) {
        if (this._lightColor.equals(value)) {
            return;
        }
        this._lightColor.set(value);
        (this as any).setMaterialProperty("lightColor", this._lightColor);
    }
    @property({ type: CCFloat, tooltip: "每帧移动的速度 速度越小总时间越长 真机上速度x15" })
    Speed = 0.05;

    @property({ type: CCFloat, tooltip: "循环时的等待时间" })
    WaitTime = 2.0;

    @property({ type: CCBoolean, tooltip: "是否启用光束渐变", visible: function () { (this as any).reloadMaterial(); return true } })
    public get enableGradient() {
        return this._enableGradient;
    }
    public set enableGradient(v) {
        this._enableGradient = v;
        (this as any).setMaterialProperty("enableGradient", this._enableGradient == true ? 1 : 0);
    }


    @property({ type: CCBoolean, tooltip: "是否裁剪透明区域上的光", visible: function () { (this as any).reloadMaterial(); return true } })
    public get cropAlpha() {
        return this._cropAlpha;
    }
    public set cropAlpha(v) {
        this._cropAlpha = v;
        (this as any).setMaterialProperty("cropAlpha", this._cropAlpha == true ? 1 : 0);
    }

    @property({ type: CCBoolean, tooltip: "是否启用迷雾效果", visible: function () { (this as any).reloadMaterial(); return true } })
    public get enableFog() {
        return this._enableFog;
    }
    public set enableFog(v) {
        this._enableFog = v;
        (this as any).setMaterialProperty("enableFog", this._enableFog == true ? 1 : 0);
    }

    /** 当前位置 */
    private curPos: number = 0;
    /** 统计的时间 */
    private countTime = 0;
    /** 开始的位置 */
    private startPos = 0;
    /** 移动的总时间 */
    private moveAllTime = 0;
    /** 速度（每秒） */
    private speed = 0;

    private isStart = false;

    private handlerScheduler = null;

    private fps = 60;
    start() {
        this.initData();

        this._material = this.getMaterial();
        if (!this._material) {
            return;
        }
        this.reloadMaterial();
        this.isStart = true;

        let self = this;
        let ms = 1 / this.fps;
        SchedulerManager.unscheduleInterval(this.handlerScheduler);
        this.handlerScheduler = SchedulerManager.schedulerInterval((dt) => {
            self.updateMove(ms);
        }, 0)
    }

    initData() {
        this.curPos = 0;
        this.countTime = 0;
        this.startPos = -this.lightWidth / 2;


        if (sys.platform == sys.Platform.ANDROID || sys.platform == sys.Platform.IOS) {
            //每毫秒移动多少距离
            this.speed = this.Speed * 15;
        } else {
            //每毫秒移动多少距离
            this.speed = this.Speed;
        }
        //总路程 = 1
        this.moveAllTime = ((1 + this.lightWidth / 2) / this.speed) + this.WaitTime;
        //log(`EFlashLight:速度:${this.speed} 总时间:${this.moveAllTime} 等待时间:${this.WaitTime} 一次运行的时间:${this.moveAllTime - this.WaitTime}`)
        this.curPos = this.startPos;
    }

    /** 重新加载所有属性 */
    reloadMaterial() {
        this._material = this.getMaterial();
        if (!this._material) {
            return;
        }

        this._material.setProperty("enableGradient", this.enableGradient == true ? 1 : 0);
        this._material.setProperty("cropAlpha", this.cropAlpha == true ? 1 : 0);
        this._material.setProperty("enableFog", this.enableFog == true ? 1 : 0);

        this._material.setProperty("lightColor", this.lightColor);
        this._material.setProperty("lightAngle", this.lightAngle);
        this._material.setProperty("lightWidth", this.lightWidth);

    }

    /** 设置材质对应的属性 */
    private setMaterialProperty(key, value) {
        this._material = this.getMaterial();
        if (!this._material) {
            return;
        }
        this._material.setProperty(key, value);
    }

    /** 更新移动 */
    updateMove(dt: number) {
        if (!this.isStart || !this._material) {
            return;
        }
        //总时间
        this.countTime = this.countTime + dt;
        //当前路程
        this.curPos = this.curPos + dt * this.speed;
        this._material.setProperty("lightCenterPoint", new Vec2(this.curPos, this.curPos));
        if (this.countTime > this.moveAllTime) {
            this.curPos = this.startPos;
            this.countTime = 0;
        }
    }
    // updateSharder(dt: number) {
    //     if (!this.isStart || !this._material) {
    //         return;
    //     }
    //     this.curPos += dt * this.speed;
    //     this.countTime += dt;
    //     this._material.setProperty("lightCenterPoint", new Vec2(this.curPos, this.curPos));
    //     if (this.curPos > (this.moveAllPos)) {
    //         this.curPos = this.startPos;
    //         this.countTime = 0;
    //     }
    // }

    /** 创建图片 */
    creatorSprite() {
        if (!this._comp) {
            this._comp = this.node.getComponent(Sprite);
        }
        if (!this._comp) {
            this._comp = this.node.getComponent(Label);
        }
        if (!this._comp) {
            this._comp = this.node.addComponent(Sprite);
        }
    }
    /** 检测Material */
    getMaterial() {
        if (!this._comp) {
            return null;
        }
        return this._comp.getMaterialInstance(0);
    }

    onDestroy() {
        this.isStart = false;
        SchedulerManager.unscheduleInterval(this.handlerScheduler);
    }
}


