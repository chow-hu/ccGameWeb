import { Game, game, js } from "cc";
import { EDITOR, HTML5 } from "cc/env";
/*
 * @Description: 调试环境
 * @Author: zy
 * @Date: 2021-04-01 16:23:41
 * @Reference:
 */
export const _config_: Record<string, any> = {
    report_2: "https://hdsf8pm230.dpeuk328fvdjkweizm29fn0k.org",        //上报地址(动态)
    report_3: "https://prod-collection.topbigdata.com",                //上报地址(动态)
    io: 2, // 1 内网  2 外网测试  3 外网正式  4 预发布
    version: '1.1.3',
    fps: false,                                 //是否显示帧率
    dev: true,                                 //开发者模式 显示debug
    lanuage: 'en',
    timezone: "Asia/Kolkata",                  //时区：印度-加尔各答
}

if (HTML5 && window.location && window.location.href) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "io") {
            _config_.io = pair[1];
        }
    }
}

EDITOR && game.once(Game.EVENT_ENGINE_INITED, function () {
    js.mixin(js.getClassByName("sp.Skeleton").prototype, {
        updateAnimation(dt: number) {
            this.markForUpdateRenderData();
            if (this.paused) return;
            dt *= this._timeScale * 1.0;
            if (!this.isAnimationCached()) { this._instance.updateAnimation(dt); return; }
            if (!this._isAniComplete) { this._updateCache(dt); return; }
            if (this._animationQueue.length === 0 && !this._headAniInfo) {
                const frameCache = this._animCache;
                if (frameCache && frameCache.isInvalid()) {
                    frameCache.updateToFrame(0);
                    const frames = frameCache.frames;
                    this._curFrame = frames[frames.length - 1];
                }
            } else {
                this._headAniInfo ??= this._animationQueue.shift();
                this._accTime += dt;
                if (this._accTime > this._headAniInfo?.delay) {
                    const aniInfo = this._headAniInfo;
                    this._headAniInfo = null;
                    this.setAnimation(0, aniInfo?.animationName, aniInfo?.loop);
                }
            }
        }
    })
})