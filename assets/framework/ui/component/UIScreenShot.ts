
import {
    CCFloat,
    Camera,
    Component,
    ImageAsset,
    Node,
    RenderTexture,
    Sprite,
    SpriteFrame,
    Texture2D,
    UITransform,
    Vec3,
    _decorator,
    error,
    isValid,
    log,
    native,
    sys,
    tween,
    v3,
    view,
} from 'cc';
import { PREVIEW } from 'cc/env';
import { CanDcaf_vas2Image } from './CanDcaf_vas2Image';
const { ccclass, property } = _decorator;

@ccclass('UIScreenShot')
export class UIScreenShot extends Component {

    @property(Camera)
    copyCamera: Camera | null = null;
    @property(Node)
    copyNode: Node | null = null;
    @property(Node)
    targetNode: Node | null = null;
    @property(Node)
    arrivedNode: Node | null = null;

    @property(Node)
    targetNode_native: Node | null = null;
    @property(Camera)
    copyCamera_native: Camera | null = null;
    @property(CCFloat)
    range: number = 1.6;

    renderTex: RenderTexture = null;
    renderTex_native: RenderTexture = null;
    _canvas: HTMLCanvasElement = null;
    _buffer: ArrayBufferView = null;
    _buffer_native: ArrayBufferView = null;
    CanDcaf_vas2Image: CanDcaf_vas2Image = null;
    tempPos: Vec3 = new Vec3();

    isCanSavePicture = true;

    start() {
        let width = view.getVisibleSize().width;
        let height = view.getVisibleSize().height;
        // let widthScale = width / this.copyCamera.node.scale.x;
        // let heightScale = height / this.copyCamera.node.scale.y;
        this.copyCamera.node.setScale(v3(width, height, this.copyCamera.node.scale.z));
        this.copyCamera.orthoHeight = height / this.range.valueOf();
        this.CanDcaf_vas2Image = CanDcaf_vas2Image.getInstance();
        if (PREVIEW && sys.isNative) {
            console.log("暂时不支持模拟器，请构建并测试!");
            return;
        }

        this.renderTex = new RenderTexture();
        this.renderTex.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
        });
        this.copyCamera.targetTexture = this.renderTex;
        this.tempPos = this.copyNode.getPosition();


        this.renderTex_native = new RenderTexture();
        this.renderTex_native.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
        });
        this.copyCamera_native.targetTexture = this.renderTex_native;

        this.targetNode_native.active = true;
    }

    protected onDestroy(): void {
        this.renderTex.destroy();
        this.renderTex_native.destroy();
    }

    onBtnSave() {
        log("=================onBtnSave");
        this.isCanSavePicture = false;
        this.capture();
        // this.capture_native();

        // 定时任务
        this.scheduleOnce(() => {
            if (this && this.copyNode && isValid(this.copyNode)) {
                this.copyNode.setPosition(this.tempPos);
                this.copyNode.getComponent(Sprite).spriteFrame = null;
                this.copyNode.setScale(new Vec3(1, 1, 1));
                this.isCanSavePicture = true;
            }
        }, 3);
    }

    // 截图
    capture() {
        log("=================capture");
        if (isValid(this.targetNode) && isValid(this.renderTex)) {
            var width = this.targetNode.getComponent(UITransform).width;
            var height = this.targetNode.getComponent(UITransform).height;
            var worldPos = this.targetNode.getWorldPosition();
            this._buffer = this.renderTex.readPixels(Math.round(worldPos.x), Math.round(worldPos.y), width, height);

            this.showImage(width, height);

            //原生
            if (sys.isNative) {
                this.nativeImage(width, height);
            } else {
                this.saveAsImage(width, height, this._buffer);
            }
        }
    }

    // 截图
    capture_native() {
        log("=================capture_native");
        if (isValid(this.targetNode_native) && isValid(this.renderTex_native)) {
            var width = this.targetNode_native.getComponent(UITransform).width;
            var height = this.targetNode_native.getComponent(UITransform).height;
            var worldPos = this.targetNode_native.getWorldPosition();
            var anchor = this.targetNode_native.getComponent(UITransform).anchorPoint;
            this._buffer = this.renderTex_native.readPixels(Math.round(worldPos.x - anchor.x * width), Math.round(worldPos.y - anchor.y * height), width, height);

            this.saveAsImage(width, height, this._buffer);
            this.targetNode_native.getChildByName('Sprite').active = false;
        }
    }

    showImage(width: number, height: number) {
        let img = new ImageAsset();
        img.reset({
            _data: this._buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
        });
        let texture = new Texture2D();
        texture.image = img;
        let sf = new SpriteFrame();
        sf.texture = texture;
        sf.packable = false;
        this.copyNode.getComponent(Sprite).spriteFrame = sf;
        this.copyNode.getComponent(UITransform).setContentSize(width, height);
        this.copyNode.getComponent(Sprite).spriteFrame.flipUVY = true;

        this.doCaptureAnim();
    }

    nativeImage(width: number, height: number) {
        log("=================nativeImage");
        let img = new ImageAsset();
        img.reset({
            _data: this._buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
        });
        let texture = new Texture2D();
        texture.image = img;
        let sf = new SpriteFrame();
        sf.texture = texture;
        sf.packable = false;
        this.targetNode_native.getChildByName('Sprite').active = true;
        this.targetNode_native.getChildByName('Sprite').getComponent(Sprite).spriteFrame = sf;
        this.targetNode_native.getChildByName('Sprite').getComponent(Sprite).spriteFrame.flipUVY = true;
        this.scheduleOnce(() => {
            this.capture_native();
        }, 1)
    }

    // 做截图动画
    doCaptureAnim() {
        if (this.copyNode) {
            let scale_fator = 0.95;
            let arrived_fator = 0.2;
            let pos = this.arrivedNode.getPosition();
            tween(this.copyNode)
                .to(0.2, { scale: new Vec3(scale_fator, scale_fator, 1) })
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .parallel(
                    tween(this.copyNode).to(0.5, { scale: new Vec3(arrived_fator, arrived_fator, 1) }),
                    tween(this.copyNode).to(0.5, { position: pos })
                ).start();
        }
    }

    saveAsImage(width: number, height: number, arrayBuffer: ArrayBufferView | number[]) {
        log("=================saveAsImage");
        width = Math.round(width);
        height = Math.round(height);
        if (sys.isBrowser) {
            log("----------------------isBrowser");
            if (!this._canvas) {
                this._canvas = document.createElement('canvas');
                this._canvas.width = width;
                this._canvas.height = height;
            } else {
                this.clearCanvas();
            }
            let ctx = this._canvas.getContext('2d')!;
            let rowBytes = width * 4;
            for (let row = 0; row < height; row++) {
                let sRow = height - 1 - row;

                let imageData = ctx.createImageData(width, 1);
                let start = sRow * width * 4;

                for (let i = 0; i < rowBytes; i++) {
                    imageData.data[i] = arrayBuffer[start + i];
                }
                ctx.putImageData(imageData, 0, row);
            }
            // @ts-ignore
            this.CanDcaf_vas2Image.saveAsPNG(this._canvas, width, height);
        } else if (sys.isNative) {
            log("----------------------isNative");
            console.log("原生平台暂不支持图片下载");

            //@ts-ignore
            let filePath = native.fileUtils.getWritablePath() + 'render_to_sprite_image.png';

            //@ts-ignore
            if (native.saveImageData) {
                //@ts-ignore
                native.saveImageData(this._buffer, width, height, filePath).then(() => {
                    native.bridge.sendToNative("SavePic", filePath);
                }).catch(() => {
                    error("###save image data failed!");
                });
            }
        } else if (sys.platform == sys.Platform.WECHAT_GAME) {
            log("----------------------WECHAT_GAME");
            if (!this._canvas) {
                // @ts-ignore
                this._canvas = wx.createCanvas();
                this._canvas.width = width;
                this._canvas.height = height;
            } else {
                this.clearCanvas();
            }
            var ctx = this._canvas.getContext('2d');
            var rowBytes = width * 4;
            for (let row = 0; row < height; row++) {
                let sRow = height - 1 - row;
                let imageData = ctx.createImageData(width, 1);
                let start = sRow * width * 4;
                for (let i = 0; i < rowBytes; i++) {
                    imageData.data[i] = arrayBuffer[start + i];
                }
                ctx.putImageData(imageData, 0, row);
            }
            // @ts-ignore
            this._canvas.toTempFilePath({
                x: 0,
                y: 0,
                width: this._canvas.width,
                height: this._canvas.height,
                destWidth: this._canvas.width,
                destHeight: this._canvas.height,
                fileType: "png",
                success: function (res) {
                    // @ts-ignore
                    wx.showToast({ title: "截图成功" });
                    // @ts-ignore
                    wx.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: function (res) {
                            // @ts-ignore
                            wx.showToast({ title: "成功保存到设备相册" })
                        }
                    });
                }
            })
        }
    }

    clearCanvas() {
        let ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}