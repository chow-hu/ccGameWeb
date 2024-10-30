import { _decorator, Component, Label, Node, RichText } from 'cc';
import { ERichText } from '../../../framework/ge';
const { ccclass, property } = _decorator;


@ccclass('LocalizedLabelUtil')
export class LocalizedLabelUtil extends Component {
    public static getLabel(node:Node){
        return node.getComponent(Label) || node.getComponent(RichText) || node.getComponent(ERichText);
    }
}


