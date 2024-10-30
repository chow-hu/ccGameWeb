import { _decorator, CCString, Component, Label, Node, RichText } from 'cc';
import { ERichText, NODE_BASE } from '../../../framework/ge';
import { nodelink } from '../../common/custom-general';
import { LocalizedLabelPlus } from './LocalizedLabelPlus';
import { LocalizedLabelUtil } from './LocalizedLabelUtil';
const { ccclass, property } = _decorator;

@ccclass('LocalizeLabelConfig')
export class LocalizeLabelConfig {
    @property(Node)
    node!: Node;

    @property(CCString)
    key: string = '';
}

@ccclass('LocalizedLabelHelp')
export class LocalizedLabelHelp extends Component {
    @property(LocalizeLabelConfig)
    config: LocalizeLabelConfig[] = [];

    protected onLoad(): void {
        this.initLabelPlus();
        this.addLabelPlus();
    }

    initLabelPlus() {
        this.config.forEach((value: LocalizeLabelConfig) => {
            if (value.node && value.key) {
                let cmp = LocalizedLabelUtil.getLabel(value.node);
                if (cmp && value.key) {
                    let llp = value.node.getComponent(LocalizedLabelPlus);
                    if (!llp) {
                        llp = value.node.addComponent(LocalizedLabelPlus);
                    }
                    llp.setKey(value.key);
                }
            }
        })
    }

    private addLabelPlus() {
        let labels = [].concat(this.node.getComponentsInChildren(Label)).concat(this.node.getComponentsInChildren(ERichText)).concat(this.node.getComponentsInChildren(RichText));
        labels.forEach((value: Component) => {
            let cmp = nodelink(NODE_BASE, value.node, LocalizedLabelPlus);
            if (!cmp) {
                cmp = value.node.addComponent(LocalizedLabelPlus);
            }
        });
    }
}


