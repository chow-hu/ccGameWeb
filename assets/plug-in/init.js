/*
 * @Description: 引擎初始化相关
 * @Author: zy
 * @Date: 2021-02-22 17:10:42
 * @Reference:
 */
globalThis['gutil_code'] = 'en';
globalThis['gutil_uuid'] = function (uuid) {
    let lanCode = globalThis['gutil_code'];
    if (globalThis['uuid_' + lanCode]) {
        return globalThis['uuid_' + lanCode][uuid] || uuid;
    }
    return uuid;
}
let _viewsize;
globalThis['viewsize'] = function () {
    if (globalThis['EDITOR']) {
        return cc.view.getVisibleSize();
    }
    if (!_viewsize) {
        let size;
        let frameSize = cc.screen.windowSize;
        let viewSize = cc.view.getVisibleSize();
        let scale1 = frameSize.width / frameSize.height;
        let scale2 = viewSize.width / viewSize.height;
        let width, height;
        if (scale1 > scale2) {
            width = viewSize.height * frameSize.width / frameSize.height;
            height = viewSize.height;
        } else {
            width = viewSize.width;
            height = viewSize.width * frameSize.height / frameSize.width;
        }
        size = new cc.Size(width, height);
        _viewsize = size;
    }
    return _viewsize;
}

let _uisize;
globalThis['uisize'] = function () {
    if (globalThis['EDITOR']) {
        return cc.view.getVisibleSize();
    }
    if (!_uisize) {
        let size;
        let frameSize = cc.screen.windowSize;
        let viewSize = cc.view.getVisibleSize();
        let scale1 = frameSize.width / frameSize.height;
        let scale2 = viewSize.width / viewSize.height;
        let width, height;
        if (scale1 > scale2) {
            width = viewSize.height * frameSize.width / frameSize.height;
            height = viewSize.height;
        } else {
            width = viewSize.width;
            height = viewSize.width * frameSize.height / frameSize.width;
        }
        //if (height / width > 2) height -= 50;
        size = new cc.Size(width, height);
        _uisize = size;
    }
    return _uisize;
}

let _uirect;
globalThis['uirect'] = function () {
    if (!_uirect) {
        let uiSize = globalThis.viewsize();
        let viewSize = cc.view.getVisibleSize();
        let rect = new cc.Rect((viewSize.width - uiSize.width) / 2, (viewSize.height - uiSize.height) / 2, uiSize.width, uiSize.height);
        _uirect = rect;
    }
    return _uirect;
}

let _oldCalculateDT = cc.game._calculateDT;
globalThis.timeScale = 1;
cc.game._calculateDT = (function () {
    return this._deltaTime = _oldCalculateDT.call(cc.game) * globalThis.timeScale;
}).bind(cc.game);

let _FIX_TOP_BANNER = undefined;
globalThis['uiTopFixedHeight'] = function () {
    if (_FIX_TOP_BANNER == undefined) {
        let rect = cc.sys.getSafeAreaRect();
        let uirect = globalThis.uirect();
        _FIX_TOP_BANNER = (uirect.y + uirect.height) - (rect.y + rect.height);
        if (_FIX_TOP_BANNER > 1) {
            _FIX_TOP_BANNER = Math.max(_FIX_TOP_BANNER, 40);
        }
    }
    return _FIX_TOP_BANNER;
}

globalThis['uiTopFixed'] = function () {
    return globalThis.uiTopFixedHeight() > 1;
}