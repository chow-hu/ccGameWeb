import { instantiate, isValid, Node, Prefab } from "cc";
import { AssetsLoader, IBundleOption } from "../../../framework/asset/AssetsLoader";
import { gui, UIBase } from "../../../framework/ge";

export interface IWidgetParam {
    right?: number,
    top?: number,
    left?: number,
    bottom?: number,
}

export function addJackPotNode(option: IBundleOption, layer: string = 'prefab/layer/lyJackPotMain', parent?: Node, param?: IWidgetParam) {
    if (parent) {
        let node = parent["[Jackpot]"];
        if (node && isValid(node)) {
            return;
        }
        parent["[Jackpot]"] = null;
    }
    AssetsLoader.instance.loadBundle(option, (err: Error | null | string, bundleName?: string) => {
        if (err) {
            return;
        }
        if (parent) {
            AssetsLoader.instance.bundleLoad(bundleName, layer, Prefab, null, (err: Error | null | string, asset: Prefab) => {
                if (err) {
                    return;
                }
                let node = instantiate(asset)
                parent.addChild(node);
                parent["[Jackpot]"] = node;
                node.getComponent(UIBase).init(param);
            })
        } else {
            gui.openBundleLayer(bundleName, layer, param);
        }
    })
}
