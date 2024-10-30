/*
 * @Description: 飘字
 * @Author: zy
 * @Date: 2024-03-12
 * @Reference: 
 */
import { _decorator, instantiate, Node, NodePool, Tween, tween, UITransform, Vec3 } from 'cc';
import { ERichText, ui2d, UIBase } from '../../framework/ge';
import { AppEvent } from '../common/AppEvent';
import { nodelink } from '../common/custom-general';
const { ccclass, property, menu } = _decorator;

@ccclass('pfTipsPanel')
@menu('node/pfTipsPanel')
export class pfTipsPanel extends UIBase {

    @property(Node)
    tip!: Node;
    @property(Node)
    panel!: Node;

    private _msglist: string[] = [];
    private _nodepool!: NodePool;

    onInit() {
        this._nodepool = new NodePool();
        this.on([AppEvent.FLOAT_TIPS]);
    };

    start() {
        this.schedule(this._tip, 0.1);
    }

    _pushMsg(msg: string[]) {
        this._msglist = this._msglist.concat(msg);
        let set = new Set(this._msglist);
        this._msglist = Array.from(set);
    };

    _tip() {
        if (this._msglist.length < 0) return;
        let msg = this._msglist.shift();
        if (!msg) return;
        msg = msg + '';
        this._tipTxt(msg);
    };

    _tipTxt(msg: string) {
        let node = this._nodepool.get();
        if (!node) {
            node = instantiate(this.tip);
            node.active = true;
        }
        if (!node) return;
        node.parent = this.panel;

        node.setPosition(this.tip.getPosition());
        let comp = nodelink('txt', node, ERichText)!;
        comp.string = '<outline color=black width=1><color=#fbf9a6>' + msg + '</c></outline>';
        node.getComponent(UITransform).width = comp.getComponent(UITransform).width + 20;
        node.getComponent(UITransform).height = comp.getComponent(UITransform).height + 20;
        this._tweenTip(node);
    }

    _tweenTip(node: Node) {
        Tween.stopAllByTarget(node);
        let tw = tween(node);
        tw.tag(100);
        tw.to(0.2, { position: new Vec3(0, 0, 0) }, { easing: 'sineIn' }).call(() => {
            this._sortTips();
        }).start();

        tw = tween(node);
        tw.delay(2).call(() => {
            this._nodepool.put(node);
        }).start();

    };

    _sortTips() {
        let children = this.panel.children;
        let index: number;
        for (index = 0; index < children.length;) {
            const child = children[index];
            let pos = child.getPosition();
            if (Math.round(pos.y) < 0) {
                break;
            }
            index++;
        }
        if (index === 0) {
            return;
        }
        index = index - 1;
        let targetNode = children[index];
        if (!targetNode) return;
        let pos = targetNode.getPosition();
        if (Math.round(pos.y) === 0) {
            pos.y = 0;
            targetNode.setPosition(pos);
        }
        try {
            Tween.stopAllByTag(100, targetNode);
        } catch (error) {
            console.log(error);
        }
        for (index = index - 1; index >= 0; index--) {
            const child = children[index];
            pos.y += ui2d.size(child).height + 20;
            try {
                Tween.stopAllByTag(100, child);
            } catch (error) {
                console.log(error);
            }
            child.setPosition(pos);
        }
    };
    onEvents(event: string, data: any) {
        switch (event) {
            case AppEvent.FLOAT_TIPS: {
                this._pushMsg(data);
            } break;
            default:
                break;
        }
    };
    onRemove() {
        this._nodepool.clear();
    };
}


