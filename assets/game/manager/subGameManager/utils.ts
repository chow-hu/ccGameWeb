import { instantiate, isValid, Node, Prefab } from "cc";
import { AssetsLoader, IBundleOption } from "../../../framework/asset/AssetsLoader";
import { gui, gutil_char, UIBase } from "../../../framework/ge";
import { AppConst } from "../../common/AppConst";
import { SubGameOrientation } from "./interface";
import { Cache } from "../../cache/Cache";

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

export function jumpToExit(tip?: string) {
    let gameId = Cache.User.getUser().game;
    let pack = AppConst.GetGamePackageConfById(gameId);
    let orientation = Cache.User.getDisplayMode() || pack?.orientation || SubGameOrientation.portrail;
    gui.openLayer('lyGameExit', { orientation, tip: tip || gutil_char('TIME_LOSE')[1] })
}
