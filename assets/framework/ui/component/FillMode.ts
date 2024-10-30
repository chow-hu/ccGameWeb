/*
 * @Description: 等比自适应放大填充模式
 * @Author: zy
 * @Date: 2021-03-10 15:30:28
 * @Reference: 
 */
import { _decorator, Component, Size, UITransform, Enum } from 'cc';
const { ccclass, property, menu } = _decorator;
const FillType = Enum({ MIN: 0, MAX: 1, WIDTH: 2, HEIGHT: 3 });
const FillBy = Enum({ SCALE: 0, SIZE: 1 });
const SizeMode = Enum({ UI: 0, VIEW: 1 });
@ccclass('FillMode')
@menu('UI/FillMode')
export class FillMode extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property
    public custom: boolean = false;

    @property({
        visible: function (this: FillMode) {
            return this.custom;
        }
    })
    public fillSize: Size = new Size(0, 0);

    @property({ type: FillType })
    public fillType = FillType.MAX;

    @property({ type: FillBy })
    public fillBy = FillBy.SCALE;

    @property({
        type: SizeMode,
        visible: function (this: FillMode) {
            return !this.custom;
        }
    })
    public sizeMode = SizeMode.UI;

    onLoad() {
        // [3]
        let size: Size = this.fillSize;
        if (!this.custom) {
            if (this.sizeMode === SizeMode.UI) {
                size = globalThis.uisize();
            } else if (this.sizeMode === SizeMode.VIEW) {
                size = globalThis.viewsize();
            }
        }
        let transform = this.node.getComponent(UITransform);
        if (!transform) return;
        let contentSize = transform?.contentSize;
        if (!contentSize || !contentSize.width || !contentSize.height) return;

        let scaleX = size.width / contentSize.width;
        let scaleY = size.height / contentSize.height;
        let dist;
        switch (this.fillType) {
            case FillType.MAX:
                dist = Math.max(scaleX, scaleY);
                break;
            case FillType.MIN:
                dist = Math.min(scaleX, scaleY);
                break;
            case FillType.WIDTH:
                dist = scaleX;
                break;
            case FillType.HEIGHT:
                dist = scaleY;
                break;
            default:
                dist = Math.max(scaleX, scaleY);
                break;
        }
        this._fill(dist, transform);
    }

    _fill(dist: number, transform: UITransform) {
        if (this.fillBy === FillBy.SCALE) {
            this.node.setScale(dist, dist);
        } else {
            let size = new Size(transform.contentSize.width * dist, transform.contentSize.height * dist)
            transform.setContentSize(size);
        }
    }
}


