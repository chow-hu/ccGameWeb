
/*
 * @Description: 
 * @Author: zy
 * @Date: 2024-03-12
 * @Reference: 
 */

import { Node, Sprite, SpriteFrame, Tween, UITransform, Vec3, Widget, instantiate, isValid, tween } from "cc";
import { AssetsLoader } from "../../../framework/asset/AssetsLoader";
import { UIBase, gatlas } from "../../../framework/ge";
import { Utils } from "../../common/Utils";
import { Atlas } from "../../common/interface";

/**
 * 加载玩家头像(支持本地和远端)
 * @param sprite 要设置头像的icon
 * @param avatar_url 头像地址（url或本地name）
 * @param sucCallFunc 成功的回调
 * @returns 
 */
export function getUserIconSpf(host: UIBase, sprite: Sprite, avatar_url: string = null, sucCallFunc: Function = null) {
    if (avatar_url == null || avatar_url.length == 0 || !sprite || !host) {
        return;
    }
    if (avatar_url.toLocaleLowerCase().indexOf("http") == 0 || avatar_url.toLocaleLowerCase().indexOf("https") == 0) {
        host.loadRemoteSprite(sprite, avatar_url, null, sucCallFunc)
        return;
    }
    sprite.spriteFrame = gatlas.get(Atlas.USERICON, avatar_url);
    sucCallFunc && sucCallFunc();
}
/**
 * 加载Http图片(支持远端)
 * @param sprite 要设置头像的icon
 * @param url 图片地址（http://... 或 prop/1.png）
 * @param sucCallFunc 成功的回调
 * @returns 
 */
export function preloadRomoteImg(url: string = null, sucCallFunc: Function = null) {
    if (url == null || url.length == 0) {
        return;
    }
    AssetsLoader.instance.loadRemote(url, { ext: '.jpg' }, (err, res) => {
        sucCallFunc && sucCallFunc(!err);
    }
    );
}


const defaultLoadRes = "sprite/comm/loading";
const __key__ = "_remote_load_";
/**
 * 显示过渡动画
 * @param host 
 * @param parent 
 * @param item 
 * @returns 
 */
const showTransitionAni = function (host: UIBase, parent: Node, item: Node = null) {
    if (!host || !parent || !isValid(parent)) { return; }
    let node: Node = null;
    let res = defaultLoadRes;
    if (parent[__key__] && isValid(parent[__key__])) {
        if (item) {
            parent[__key__].destory();
            parent[__key__] = null;
            node = instantiate(item);
            parent.addChild(node);
        } else {
            node = parent[__key__];
        }
        res = null;
    } else {
        if (item) {
            node = instantiate(item);
            parent.addChild(node);
            res = null;
        } else {
            node = Utils.createSprite(null, "RemoteLoad", parent.layer);
            parent.addChild(node);
        }
    }
    parent[__key__] = node;
    node.active = false;

    let widget = node.getComponent(Widget);
    if (!widget) {
        node.addComponent(Widget);
        widget = node.getComponent(Widget);
    }
    widget.left = widget.right = (parent.getComponent(UITransform).contentSize.width - node.getComponent(UITransform).contentSize.width) / 2;
    widget.top = widget.bottom = (parent.getComponent(UITransform).contentSize.height - node.getComponent(UITransform).contentSize.height) / 2;
    widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
    // widget.isAlignHorizontalCenter = true;
    // widget.horizontalCenter = 0;

    if (res) {
        host.load(res + "/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
            if (err) {
                console.log(err);
                return;
            }
            if (isValid(node)) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
            }
        })
    }
    if (!item) {
        Tween.stopAllByTarget(node);
        node.scale = new Vec3(0.8, 0.8, 1);
        //动画:转圈
        node.active = true;
        node.setPosition(0, 0, 0);
        let widget = node.getComponent(Widget);
        if (widget) {
            // widget.isAlignHorizontalCenter = true;
            // widget.horizontalCenter = 0;
            // widget.updateAlignment();
            widget.left = widget.right = (parent.getComponent(UITransform).contentSize.width - node.getComponent(UITransform).contentSize.width) / 2;
            widget.top = widget.bottom = (parent.getComponent(UITransform).contentSize.height - node.getComponent(UITransform).contentSize.height) / 2;
            widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        }
        tween(node).set({ angle: 0 }).to(1, { angle: -360 }).union().repeatForever().start();
    } else {
        node.active = true;
    }
    //console.log("显示过渡动画:", node)
    return node;
}
const hideTransitionAni = function (parent: Node,) {
    if (!parent || !isValid(parent)) { return; }
    let item: Node = parent[__key__];
    if (item) {
        Tween.stopAllByTarget(item);
        item.removeFromParent();
        parent[__key__] = null;
    }
}
/**
 * 加载远端图片 使用过渡加载动画
 * @returns 
 */
export function loadRomoteSpriteTransitionAni(host: UIBase, sprite: Sprite, url: string = null, resType = null, onComplete: Function = null, remoteLoadNode: Node = null) {
    if (url == null || url.length == 0 || !sprite || !host) {
        return;
    }
    showTransitionAni(host, sprite.node, remoteLoadNode);
    host.loadRemoteSprite(sprite, url, resType, (status) => {
        if (status == true) {
            hideTransitionAni(sprite.node);
        }
        onComplete && onComplete(status);
    })
}


