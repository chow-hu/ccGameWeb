/*
 * @Description: 
 * @Author: zy
 * @Date: 2022-05-19 14:37:40
 * @Reference: 
 */
import { Node } from "cc";
import { UIBase } from "../component/UIBase";
export function siblingChildByPriority(one: Node, uiJs: UIBase, panel: Node) {
    if (!one.parent) {
        one.parent = panel;
    }
    let children = panel.children || [];
    let idx = children.length - 1;
    let old = children.indexOf(one);
    for (let index = children.length - 1; index >= 0; index--) {
        const element = children[index];
        if (element === one) continue;
        let uiJs_ = element.getComponent(UIBase);
        if (!uiJs_) continue;
        idx = index;
        if (uiJs_.priority > uiJs.priority) continue;
        idx = index + 1;
        break;
    }
    if (old === idx) return false;
    if (old > -1 && old < idx) idx -= 1;
    one.setSiblingIndex(idx);
    one.active = true;
    return true;
}