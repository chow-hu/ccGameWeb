/*
 * @Description: 游戏常用接口或枚举
 * @Author: zy
 * @Date: 2021-03-31 15:36:37
 * @Reference:
 */

import { Button, Color, Component, EventTouch, Graphics, Label, Mask, Node, ResolutionPolicy, RichText, ScrollView, Size, UIRenderer, UITransform, Vec3, Widget, __private, game, isValid, macro, math, native, screen, sys, view, warn } from 'cc';
import { BUILD, NATIVE } from "cc/env";
import EventDispatcher from '../../framework/event/EventDispatcher';
import { ERichText, ETileButton, NODE_BASE, TileNode, UIBase, convertNum, gui, gutil_char, mixins, sprintf, sprintf_g, ui2d } from '../../framework/ge';
import { StorageData } from '../../framework/storage/StorageData';
import { LocalizedLabelPlus } from '../manager/LocalizedLabelPlus/LocalizedLabelPlus';
import { TapGroupParam } from '../node/TapLayerInfo';
import { pfDialog } from '../node/pfDialog';
import { sdk } from '../sdk/sdk';
import { AppEvent } from './AppEvent';
import { Utils } from './Utils';
import { BUILDER, GDKeys } from './interface';

/**
 * link
 * @param paths 斜杠分割 example: 'a/b/c'
 * @example
 *  let node = nodelink('top/panel/txt',target);
 */
export function nodelink(path: string, target: Node | TileNode): Node | null;
/**
 * link
 * @param paths 斜杠分割 example: 'a/b/c'
 * @param classConstructor Component 子类
 * @example
 *  let label = nodelink('top/panel/txt',target,Label);
 */
export function nodelink<T extends Component>(path: string, target: Node | TileNode, value: __private._types_globals__Constructor<T>): T | null;
export function nodelink<T extends Component>(path: string, target: Node | TileNode, value?: __private._types_globals__Constructor<T>): Node | T | null {
    let node: Node | null;
    if (target instanceof TileNode) {
        return value ? target.link(path, value) : target.link(path);
    } else {
        node = path === NODE_BASE ? target : target.getChildByPath(path);
        if (!node) return null;
        if (!value) return node;
        return node.getComponent(value);
    }
}

/**
 * attach 先找，找不到就添加
 * @param paths 斜杠分割 example: 'a/b/c'
 * @param classConstructor Component 子类
 * @example
 *  let label = nodeattach('top/panel/txt',target,Label);
 */
export function nodeattach<T extends Component>(path: string, target: Node | TileNode, value: __private._types_globals__Constructor<T>): T | null {
    let node: Node | null;
    if (target instanceof TileNode) {
        return target.attach(path, value);
    } else {
        node = path === NODE_BASE ? target : target.getChildByPath(path);
        if (!node) return null;
        return node.getComponent(value) || node.addComponent(value);
    }
}

export function adaptLayout(node: Node): void;
export function adaptLayout(node: Node, span: number): void;
export function adaptLayout(node: Node, left: number, right: number): void;
export function adaptLayout(node: Node, left?: number, right?: number) {
    let _span = 0;
    let margin: { left: number, right: number } = { left: 0, right: 0 };
    if (typeof right === 'undefined' && typeof left === 'number') {
        _span = left;
    } else if (typeof right === 'number' && typeof left === 'number') {
        margin = { left, right };
    }

    let transform = node.getComponent(UITransform);
    if (!transform) return;
    let width = transform.width;
    let children: Node[] = [];
    node.children.forEach(child => child.active && children.push(child));
    let count = children.length;
    if (count === 0) return;
    if (!_span) {
        _span = (width - margin.left - margin.right) / count;
    }
    for (let index = 0; index < children.length; index++) {
        const child = children[index];
        let pos = child.getPosition();
        pos.x = (index + 0.5) * _span - (count / 2) * _span;
        child.setPosition(pos);
    }
}


function renderComponent(node: Node): UIRenderer | null {
    if (node.getComponent(Mask)) return null;
    if (node.getComponent(RichText)) return null;
    return node.getComponent(UIRenderer);
};


/**
 * @description: 节点置灰
 * @param {Node} target 目标节点
 * @param {boolean} gray 是否置灰
 * @param {boolean} depth 是否作用其子节点
 * @param {boolean} isSetBtn 是否处理按钮（默认处理）
 */
export function grayNodeState(target: Node | TileNode, gray: boolean, depth: boolean, isSetBtn: boolean = true): void { // cc.Node Boolean Boolean
    if (target instanceof TileNode) {
        target.list.forEach(item => {
            item && item.node && grayNodeState(item.node, gray, depth, isSetBtn);
        });
    } else {
        let comp: UIRenderer | null = renderComponent(target);
        if (comp) {
            comp.enabled = false;
            comp.enabled = true;
        }
        if (isSetBtn) {
            let btn = target.getComponent(Button) || target.getComponent(ETileButton);
            if (btn) {
                // btn.interactable = !gray;
                btn.enabled = !gray;
            }
        }
        if (!depth) return;
        target.children.forEach(element => {
            grayNodeState(element, gray, depth, isSetBtn);
        });
    }
};
/**
 * @description: 节点置灰
 * @param {Node} target 目标节点
 * @param {boolean} gray 是否置灰
 * @param {boolean} depth 是否作用其子节点
 * @param {string[]} filter 赛选不需要置灰的节点
 * @param {boolean} isSetBtn 是否处理按钮（默认处理）
 */
export function grayTileNodeState(target: TileNode, gray: boolean, depth: boolean, filter: string[] = [], isSetBtn: boolean = true): void { // cc.Node Boolean Boolean
    if (typeof filter === 'boolean') {
        filter = [];
        isSetBtn = !!filter;
    }
    target.forEach((node) => {
        if (node && !filter.includes(node.name)) {
            grayNodeState(node, gray, depth, isSetBtn);
        }
    })
};


/**
 * @description: 秒转换成00:00:00
 * @param {Node} second 秒
 */
export function convertSecondToTime(second: number) {
    let leftSeconds = second;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    if (hour > 0)
        return sprintf('%02d:%02d:%02d', hour, min, sec);
    else
        return sprintf('%02d:%02d', min, sec);
};

/**
 * @description: 秒转换成0天0小时0分0秒,0小时0分0秒,0分0秒
 * @param {Node} second 秒
 */
export function convertSecondToTime2(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    if (days > 0)
        return sprintf(gutil_char('DATESTR_0'), days, hour, min, sec);
    else if (hour > 0)
        return sprintf(gutil_char('DATESTR_1'), hour, min, sec);
    else
        return sprintf(gutil_char('DATESTR_2'), min, sec);
};

/**
 * @description: 秒转换成0天0小:0:0,0:0:0,0:0
 * @param {Node} second 秒
 */
export function convertSecondToTime4(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    if (days > 0)
        return sprintf(gutil_char('DATESTR_3'), days, hour, min, sec);
    else if (hour > 0)
        return sprintf(gutil_char('DATESTR_4'), hour, min, sec);
    else
        return sprintf(gutil_char('DATESTR_5'), min, sec);
};

/**
 * @description: 秒转换成0天0小:0:0,0:0:0,0:0
 * @param {Node} second 秒
 */
export function convertSecondToTime5(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    let tempValue = '';
    let tempValue2 = '';
    let tempValue3 = '';
    if (days > 0) {
        tempValue = (days.toFixed(0).length === 2 ? days.toFixed(0) : '0' + days);
        tempValue2 = (hour.toFixed(0).length === 2 ? hour.toFixed(0) : '0' + hour);
        return tempValue + gutil_char('DAY') + tempValue2 + gutil_char('HOUR');
    }
    else if (hour > 0) {
        tempValue = (hour.toFixed(0).length === 2 ? hour.toFixed(0) : '0' + hour);
        tempValue2 = (min.toFixed(0).length === 2 ? min.toFixed(0) : '0' + min);
        tempValue3 = (sec.toFixed(0).length === 2 ? sec.toFixed(0) : '0' + sec);
        return sprintf(gutil_char('DATESTR_8'), tempValue, tempValue2, tempValue3);
    }
    else {
        tempValue = (min.toFixed(0).length === 2 ? min.toFixed(0) : '0' + min);
        tempValue2 = (sec.toFixed(0).length === 2 ? sec.toFixed(0) : '0' + sec);
        return sprintf(gutil_char('DATESTR_8'), '00', tempValue, tempValue2);
    }
};

/**
 * @description: 秒转换成2位时间
 * @param {Node} second 秒
 */
export function convertSecondToTime6(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = Math.floor(leftSeconds % 60);
    if (days > 0)
        return days + gutil_char('DAY') + (hour ? hour + gutil_char('HOUR_1') : '');
    if (hour > 0)
        return hour + gutil_char('HOUR_1') + (min ? min + gutil_char('MINUTE_1') : '');
    return (min ? min + gutil_char('MINUTE_1') : '') + (sec ? sec + gutil_char('SECONDS') : '') || 0 + gutil_char('SECONDS');
};

/**
 * @description: 超过一天 day： hour or展示时分秒
 * @param {Node} second 秒
 */
export function convertSecondToTime7(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    if (days > 0)
        return days + gutil_char('DAY') + (hour ? hour + gutil_char('HOUR_1') : '');
    else if (hour > 0)
        return sprintf(gutil_char('DATESTR_4'), hour, min, sec);
    else
        return sprintf(gutil_char('DATESTR_5'), min, sec);
};

/**
 * @description: 秒转换成0天,0时,0分,0秒
 * @param {Node} second 秒
 */
export function convertSecondToTime3(second: number) {
    let days = Math.floor(second / 86400);
    let leftSeconds = second - days * 86400;
    let hour = Math.floor(leftSeconds / 3600);
    let min = Math.floor((leftSeconds - hour * 3600) / 60);
    let sec = leftSeconds % 60;
    if (days > 0)
        return days + gutil_char('DAY');
    else if (hour > 0)
        return hour + gutil_char('HOUR');
    else if (min > 0)
        return min + gutil_char('MINUTE');
    else
        return Math.max(sec, 1).toFixed(0) + gutil_char('SECONDS');//最少展示1秒
};

/**
 * @description: 时间戳转换成："年-月-日 时:分:秒"
 * @return {*} "xxxx-xx-xx xx:xx:xx"
 * @param {number} ts 时间戳
 */
export function getNowFormatDate(ts: number): string {
    let date = ts ? new Date(ts) : new Date(StorageData.sysTs);
    let seperator1 = "-";
    let seperator2 = ":";
    let month: number | string = date.getMonth() + 1;
    let strDate: number | string = date.getDate();
    let Hours: number | string = date.getHours();
    let Minutes: number | string = date.getMinutes();
    let Seconds: number | string = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (Hours >= 0 && Hours <= 9) {
        Hours = "0" + Hours;
    }
    if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
    }
    if (Seconds >= 0 && Seconds <= 9) {
        Seconds = "0" + Seconds;
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + Hours + seperator2 + Minutes
        + seperator2 + Seconds;
    return currentdate;
}

/**
 * @description: 时间戳转换成西式日期格式："月(英文),日,年 时:分:秒"
 * @return {*} "xxxx-xx-xx xx:xx:xx"
 * @param {number} ts 时间戳
 */
export function formatDateUS(ts: number): string {
    let date = ts ? new Date(ts) : new Date(StorageData.sysTs);
    let seperator1 = ",";
    let seperator2 = ":";
    let month: number | string = date.toLocaleString('en-US', { month: 'short' });
    let strDate: number | string = date.getDate();
    let Hours: number | string = date.getHours();
    let Minutes: number | string = date.getMinutes();
    let Seconds: number | string = date.getSeconds();
    if (month.length > 3) {
        month = month.substring(4, 8);
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (Hours >= 0 && Hours <= 9) {
        Hours = "0" + Hours;
    }
    if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
    }
    if (Seconds >= 0 && Seconds <= 9) {
        Seconds = "0" + Seconds;
    }
    let currentdate = month + seperator1 + strDate
        + seperator1 + date.getFullYear() + " " + Hours + seperator2 + Minutes
        + seperator2 + Seconds;
    return currentdate;
}

/**
 * @description: 设置红点
 * @param {Node} node 目标节点
 * @param {boolean | number | any} is 是否显示
 * @param {number} x
 * @param {number} y
 */
export function setNodeRedPoint(node: Node | TileNode, is: boolean | number | any, x?: number, y?: number) {
    let name: string = BUILDER.PFREDPOINT;
    let active: boolean = false;
    if (typeof is == 'number') {
        name = BUILDER.PFNUMREDPOINT;
        active = is > 0;
    } else {
        active = !!is;
    }
    let redPoint: Node | null = nodelink(name, node);
    if (!redPoint) {
        redPoint = gui.build(name, null);
        if (!redPoint) return;
        let nodeTF: UITransform = nodelink(TileNode.BASE, node, UITransform)!;
        if (x === undefined) x = nodeTF.width / 2 * 0.8;
        if (y === undefined) y = nodeTF.height / 2 * 0.8;
        redPoint.setPosition(x, y);
        node instanceof Node ? node.addChild(redPoint) : node.add(redPoint);
    }
    redPoint.active = active;
    if (typeof is == 'number') nodelink('num', redPoint, Label)!.string = '' + (is > 99 ? 99 : is);
}



export function setNodeNumRedPoint(node: Node | TileNode, num: number) {
    let name: string = BUILDER.PFNUMREDPOINT;
    let active: boolean = false;
    //判断node节点下是否存在name为这个的元素 若不存在 add一个上去 如果存在就直接用它
    let numBg: Node | null = nodelink(name, node);
    if (!numBg) {
        numBg = gui.build(name, null);
        if (!numBg) return;
        let nodeTF: UITransform = nodelink(TileNode.BASE, node, UITransform)!;
        numBg.setPosition(nodeTF.width / 2 * 0.8, nodeTF.height / 2 * 0.8);
        node instanceof Node ? node.addChild(numBg) : node.add(numBg);
    }
    active = num > 0
    numBg.active = active;
    nodelink('num', numBg, Label)!.string = '' + (num > 99 ? 99 : num);

}



export function rcTips(rc: number, def?: string) {
    if (def) {
        gui.showTips(def);
    } else {
        if (rc == -1) {
            let tipTxt = gutil_char("ACCOUNT_EXCEPTION");
            gui.showTips(tipTxt);
        } else {
            gui.showTips(gutil_char("SERVER_EXCEPTION"));
        }
    }
}

/**
 * 
 * @param num 转换目标数字
 * @param split 添加分隔符
 * @returns 当英文模式下返回原数字，中文模式下返回格式化中文
 * @example 
 * numToChn(1100) => 一千一百
 * numToChn(1100,'\n') => 一\n千\n一\n百
 */
export function numToChn(num: number, split?: string): string {
    let lanCode = globalThis.gutil_code || 'en';
    if (lanCode != 'en') {
        return num + '';
    }
    let chnLower = gutil_char('CHNLOWERNUM') as string[];
    let chnNumChar = chnLower.slice(0, 10);
    let chnUnitChar = ['', ...chnLower.slice(10, chnLower.length)];
    let chnUnitSection = gutil_char('CONVERTNUM');

    function dotNumToChn(num: number) {
        let index = (num).toString().indexOf('.');
        if (index != -1) {
            let str = (num).toString().slice(index);
            let a = gutil_char('DOT');
            for (let i = 1; i < str.length; i++) {
                a += chnNumChar[parseInt(str[i])];
            }
            return a;
        } else {
            return '';
        }
    }

    //定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
    function sectionToChinese(section: number) {
        let str = '', chnstr = '', zero = false, count = 0;   //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
        while (section > 0) {
            let v = section % 10;  //对数字取余10，得到的数即为个位数
            if (v == 0) {                    //如果数字为零，则对字符串进行补零
                if (zero) {
                    zero = false;        //如果遇到连续多次取余都是0，那么只需补一个零即可
                    chnstr = chnNumChar[v] + chnstr;
                }
            } else {
                zero = true;           //第一次取余之后，如果再次取余为零，则需要补零
                str = chnNumChar[v];
                str += chnUnitChar[count];
                chnstr = str + chnstr;
            }
            count++;
            section = Math.floor(section / 10);
        }
        return chnstr;
    }

    let a = dotNumToChn(num);
    num = Math.floor(num);
    let unitPos = 0;
    let strIns = '', chnStr = '';
    let needZero = false;

    if (num === 0) {
        return chnNumChar[0] + a;
    }
    let substr = false;
    if (num < 20 && num >= 10) {
        substr = true;
    }
    while (num > 0) {
        let section = num % 10000;
        if (needZero) {
            chnStr = chnNumChar[0] + chnStr;
        }
        strIns = sectionToChinese(section);
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
    }
    if (substr) {
        chnStr = chnStr.substr(1, chnStr.length);
    }
    let ret = chnStr + a;
    if (split) {
        ret = ret.split('').join(split);
    }
    return ret;
};

/**
 * 数字转繁体数字，有缺陷，只能转100以内的数字
 * @param num 转换目标数字
 * @returns 返回格式化中文
 * @example 
 * numToChn(11) => 拾壹
 */
export function numToChn1(num: number): string {
    let str = '';
    const numStr = num + '';
    const strs = gutil_char('CHNUPPERNUM');
    for (let i = 0; i < numStr.length; i++) {
        const tNumStr = numStr[numStr.length - i - 1];
        if (tNumStr == '0' && numStr.length > 1) {
            continue;
        }
        let tStr = '';
        if (i > 0) {
            if (i == 1 && tNumStr == '1') {
                tStr = strs[9 + i];
            } else {
                tStr = strs[+tNumStr] + strs[9 + i];
            }
        } else {
            tStr = strs[+tNumStr];
        }
        str = tStr + str
    }
    return str;
}

/**
 * @description: ListView计算返回col grayX(一般用于适配类似神魔页面的宽度变化lv)
 * @return {*}   { col: number, gapX: number }
 * @param {number} lrParm 距离左右两边屏幕的和或者传入sv组件
 * @param {Node} pfItem listview的pfItem
 * @example:
 * let lvParm = tranListViewParm(this.svContent, pfCard);
 *      this.list = new TileListView({
 *          ...
            gap_x: lvParm.gapX,
            column: lvParm.col,
            ...
        });
 */
export function tranListViewParm(lrParm: number | ScrollView, pfItem: Node, betweenNum?: number): { col: number, gapX: number } {
    let size: Size = globalThis.uisize();
    let col: number = 1;
    let gapX: number = 0;
    let lrGay: number = 0;
    if (lrParm instanceof ScrollView) {
        let widgetComp = lrParm.node.getComponent(Widget);
        if (widgetComp) widgetComp.updateAlignment();
        let svWidth = lrParm.node.getComponent(UITransform)!.width;
        lrGay = size.width - svWidth;
    } else {
        lrGay = lrParm;
    }
    let item1UItf = pfItem.getComponent(UITransform) as UITransform;
    let item1UITfWidth = item1UItf.width * pfItem.scale.x;
    let nContentWidth: number = size.width - lrGay;
    if (typeof betweenNum === 'number') {//如果需要固定宽度
        gapX = betweenNum;
        col = Math.floor((size.width - lrGay) / (item1UITfWidth + betweenNum));
    } else {
        col = Math.floor((size.width - lrGay) / item1UITfWidth);
        gapX = (nContentWidth - col * item1UITfWidth) / (col + 1);
    }
    return { col, gapX };
}

/**
 * @description: 设置节点X，Y（可以单独设置其中一个）
 * @param {Node} node 目标节点
 * @param {number} x
 * @param {number} y
 */
export function setNodeXY(node: Node, x?: number, y?: number) {
    let v3: Vec3 = node.getPosition();
    if (typeof x == 'number') v3.x = x;
    if (typeof y == 'number') v3.y = y;
    node.setPosition(v3);
}


/**
 * @description: 格式化数字的红绿色
 * @param {boolean} darkNum 默认是深绿+红
 * @param {number} spendNum 需要消耗的
 * @param {number} curNum 当前拥有的
 */
export function formatColor(spendNum: number, curNum: number, darkNum: number = 1, color1?: string) {
    let c;
    let b = spendNum > curNum;
    if (darkNum == 1) { // 背景亮
        c = b ? 'cd4f4f' : color1 || '0f7b34'; // 红，绿
    } else if (darkNum == 2) { // 背景暗
        c = b ? 'ff7c6a' : '65c363';
    } else if (darkNum == 3) {
        c = b ? 'e82e2e' : 'd2c8b7';
    }
    else {
        c = b ? 'cd4f4f' : '0f7b34'; // 红，绿
    }
    return '<color=#' + c + '>' + convertNum(curNum) + '</color>';
}

export function colorStr(str: string | number, color: string) {
    return '<color=' + color + '>' + str + '</color>';
}

export function cbs(cb: Function, target: any) {
    return function (...params: any) {
        if (target) {
            if (!isValid(target)) {
                return;
            }
            cb && cb.call(target, ...params);
        } else {
            cb && cb(...params);
        }
    };
}

export function mixinArrById<T extends { id?: number | null }>(from: T[], to: T[], erase?: (v: T) => boolean) {
    if (!Array.isArray(from) || !Array.isArray(to)) {
        return;
    }
    for (let i = 0; i < from.length; i++) {
        if (!from[i]) continue;
        let idx = to!.findIndex(v => v.id === from[i].id);
        if (idx === -1) {
            to.push(from[i]);
            continue;
        }
        if (erase && erase(from[i])) {
            to.splice(idx, 1);
            continue;
        }
        if (typeof from[i] !== 'object') {
            to[idx] = from[i];
        } else
            mixins(from[i], to[idx]);
    }
}

export function mixinArrByKey(from: any[], to: any[], primarykey: string, erase?: (v: any) => boolean) {
    if (!Array.isArray(from) || !Array.isArray(to)) {
        return;
    }
    for (let i = 0; i < from.length; i++) {
        if (!from[i]) continue;
        let idx = to!.findIndex(v => v[primarykey] === from[i][primarykey]);
        if (idx === -1) {
            to.push(from[i]);
            continue;
        }
        if (erase && erase(from[i])) {
            to.splice(idx, 1);
            continue;
        }
        if (typeof from[i] !== 'object') {
            to[idx] = from[i];
        } else
            mixins(from[i], to[idx]);
    }
}


/**
 * @description: 实现节点左右滑动
 * @param {Node} node node节点
 * @param {Function} lCB 左滑动回调
 * @param {Function} RCB 右滑动回调
 */
export function sliderLR(node: Node, lCB: Function, RCB: Function, clickCB?: Function) {
    if (!isValid(node)) return;
    const starPos = node.getPosition().clone();
    node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
        const touchEvent = event.touch;
        if (!touchEvent) return;
        const movePosX = touchEvent.getPreviousLocation().x - touchEvent.getStartLocation().x;
        ui2d.pos(node, { x: starPos.x + movePosX })
    });

    node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
        const touchEvent = event.touch;
        if (!touchEvent) return;
        const movePosX = touchEvent.getPreviousLocation().x - touchEvent.getStartLocation().x;
        if (Math.abs(movePosX) > 30) {
            movePosX > 30 ? lCB && lCB() : RCB && RCB();
        } else {
            clickCB && clickCB();
        }
        ui2d.pos(node, starPos);
    });

    node.on(Node.EventType.TOUCH_CANCEL, (event: EventTouch) => {
        const touchEvent = event.touch;
        if (!touchEvent) return;
        const movePosX = touchEvent.getPreviousLocation().x - touchEvent.getStartLocation().x;
        if (Math.abs(movePosX) > 30) {
            movePosX > 30 ? lCB && lCB() : RCB && RCB();
        } else {
            clickCB && clickCB();
        }
        ui2d.pos(node, starPos);
    });
}

/**
 * 获取当天开始的时间戳
 * @returns 
 */
export function getDayStartTime(ts?: number): number {
    let tTime = new Date(StorageData.sysTs);
    if (ts) {
        tTime = new Date(ts)
    }
    tTime.setHours(0);
    tTime.setMinutes(0);
    tTime.setSeconds(0);
    tTime.setMilliseconds(0);
    return tTime.getTime();
}

/**
 * 打开卡牌消耗确认弹窗
 * @param data 
 * @returns 
 */
export function openCardSpendConfirmation(data: { cards: Array<number> | Array<string>, txt: string, tTitle?: string, noTipKey?: string, cb: Function }) {
    const time = data.noTipKey ? StorageData.user.get(data.noTipKey, 0) : 0;
    const canTip = data.noTipKey && time > 0 && StorageData.sysTs < time;
    if (canTip) {
        data.cb && data.cb();
        return;
    }
    gui.openLayer('lyCardSpendConfirmation', data);
}

const _tempPos = new Vec3();
const _tempScalePos = new Vec3();
export function nodeAlign(node: Node, alignParm: { left?: number, right?: number }) {
    let target: Node = node.parent!;
    const targetSize = target.getComponent(UITransform)!.contentSize;
    const targetAnchor = target.getComponent(UITransform)!.anchorPoint;
    const uiTrans = node.getComponent(UITransform)!;
    const anchor = uiTrans.anchorPoint;

    node.getPosition(_tempPos);
    node.getScale(_tempScalePos);

    let x = _tempPos.x;
    let width = 0;
    let anchorX = anchor.x;
    let scaleX = _tempScalePos.x;
    let localLeft = 0;
    let localRight = 0;
    const targetWidth = targetSize.width;
    width = uiTrans.width * scaleX;

    localLeft = -targetAnchor.x * targetWidth;
    localRight = localLeft + targetWidth;

    if (typeof alignParm.left === 'number') {
        localLeft += alignParm.left;
        x = localLeft + anchorX * width;
    } else if (typeof alignParm.right === 'number') {
        localRight -= alignParm.right;
        x = localRight + (anchorX - 1) * width;
    } else {
        return 0;
    }

    ui2d.pos(node, { x });
    return x;
}



//生成某个范围的随机数
export function RandomNum(min: number, max: number) {
    var Range = max - min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return min + 1;
    } else if (Math.round(Rand * max) == max) {
        return max - 1;
    } else {
        var num = min + Math.round(Rand * Range) - 1;
        return num;
    }
}

// 确保了生成的随机整数在min到max之间，包括min和max
export function RandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
  * 一维数组转换二维
  * @param num 2
  * @param arr [1,2,3,4]
  * @return [[1,2],[3,4]]
  */
export function arrayChange(num: number, arr: Array<number>) {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, num));
    }
    return newArr;
}

/**
 * 获得每日更新的本地数据
 * @param localKey 
 * @param def 
 * @param isUser 
 * @returns 
 */
export function getDayLocalData(localKey: string, def: any, isUser = false) {
    let nowDay = Math.floor(StorageData.sysTs / (1000 * 3600 * 24));
    if (def == undefined || def == null) return def;
    let value = nowDay + '_' + JSON.stringify(def);
    let dataStr = isUser ? StorageData.user.get(localKey, nowDay + value) : StorageData.local.get(localKey, nowDay + '_' + value);
    let dayStr = dataStr.split('_', 1)[0];
    let localData = JSON.parse(dataStr.slice(dayStr.length + 1));
    if (nowDay === +dayStr) {
        return localData
    } else {
        return def
    }
}

/**
 * 设置每日更新的本地数据
 * @param localKey 
 * @param def 
 * @param isUser 
 * @returns 
 */
export function setDayLocalData(localKey: string, def: any, isUser = false) {
    if (def == undefined || def == null) return;
    let nowDay = Math.floor(StorageData.sysTs / (1000 * 3600 * 24));
    let value = nowDay + '_' + JSON.stringify(def);
    if (isUser) {
        StorageData.user.set(localKey, value)
    } else {
        StorageData.local.set(localKey, value)
    }
}

export function createDialog(param: TapGroupParam) {
    let parent = param.host.node;
    let node = parent.getChildByName('pfDialog');
    if (!node) {
        node = gui.build(BUILDER.PFDIALOG, param, param.host.node)!;
    }
    let js = node.getComponent('pfDialog')! as pfDialog;
    return js;
}


/**
 * 后台控制是否显示相应的支付活动按钮
 * @param {string} key key传的是页面名字,名字唯一,
 */
export function isShowActiv(key: string) {
    let showActiv: any = StorageData.statics(GDKeys.BTN_SHOW) || [];
    return !showActiv.includes(key); // 其他不受控制的默认开启
};


/**
 * 找到当前节点所在的页面
 * @param node 
 */

export function findUIBaseInNode<T extends Component>(node: Node, excComp?: __private._types_globals__Constructor<T> | __private._types_globals__AbstractedConstructor<T>) {
    while (node) {
        if (node.getComponent(UIBase) && (!excComp || !node.getComponent(excComp))) {
            break;
        }
        node = node.parent!;
    }

    return node;
}



export const qualityLightColorHex = ['#c6c6c6', '#c6c6c6', '#0f7b34', '#3c61b6', '#813ea4', '#c16d12', '#cd4f4f', '#4b75ff'];



/**
 * 根据剩余时间返回x天前 || x小时前 || x分钟前
 * @param time ms
 */
export function getPastTimeStr(time: number) {
    let str = "";
    time /= 1000;
    if (time >= (24 * 60 * 60)) {
        str = sprintf_g("TIME_2", Math.floor(time / (24 * 60 * 60)));
    } else if (time >= (60 * 60)) {
        str = sprintf_g("TIME_1", Math.floor(time / (60 * 60)));
    } else {
        str = sprintf_g("TIME_0", Math.ceil(time / 60));
    }

    return str;
}


/**
 * 指定随机种子获得随机数
 */
let randomSeed: number = Math.floor(Math.random() * 100);
export function setRandomSeed(seed: number) {
    randomSeed = seed;
}

export function getRandom() {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    return randomSeed / 233280;
}

/**
 * 获取每日刷新时间
 * @param hour 
 * @param minute 
 * @param second 
 */
export function getEndTime(hour: number, minute: number, second: number) {
    hour %= 24;

    let date = new Date(StorageData.sysTs);
    let todayDay = date.getTime() - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) * 1000;
    let endTime = todayDay + (hour * 3600 + minute * 60 + second) * 1000;
    if (endTime < date.getTime()) {
        endTime += 24 * 3600 * 1000;
    }

    return endTime;
}

// 检查key是否为每天首次
export function checkDayFirst(key: string): boolean {
    const lastLoginDate = StorageData.local.get(key, "");
    const currentDate = Utils.getCurrentDate();
    // 如果上次日期为空或与当前日期不一致，则认为是每天首次
    if (lastLoginDate === "" || lastLoginDate !== currentDate) {
        StorageData.local.set(key, currentDate);
        return true;
    }
    return false;
}


/**
 * @description: 离线时间转 文本
 * @param {number} isOnline 是否在线
 * @param {number} ts 离线时刻
 */
export function logoutTs2Str(isOnline: boolean, ts: number) {
    let str = gutil_char('sameless_73')[0];
    if (isOnline) return str;
    let dt = StorageData.sysTs - ts;
    let arr = [1000, 60, 60, 24];
    for (let i = 0; i < arr.length; i++) {
        dt /= arr[i];
        if (dt >= 1) str = Math.floor(i == 0 ? 1 : dt) + gutil_char(['MINUTE_1', 'MINUTE_1', 'HOUR_1', 'DAY'][i]) + gutil_char('sameless_59');
        else break;
    }
    return str;
}



/**
 * 是否是白名单
 */
export function isWhite() {
    return StorageData.statics(GDKeys.ISWHITE) || false;
};


//版本号比较
export function compareVersions(preVersion = '', lastVersion = ''): number {
    const versionA = preVersion.split('.').map(Number);
    const versionB = lastVersion.split('.').map(Number);

    for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
        const numA = versionA[i] || 0;
        const numB = versionB[i] || 0;

        if (numA < numB) {
            return -1;
        } else if (numA > numB) {
            return 1;
        }
    }

    return 0;
}

// 数字滚动效果
export function numRollingAnim(node: Node, tarNum: number, showDecimal?: boolean) {
    // 动画时长(ms)
    let totalTime = 1500;
    // 滚动间隔时间(ms)
    let gapTime = 50;
    // 是否滚动小数位
    showDecimal = showDecimal || false;

    let label = node.getComponent(Label);
    let oriNum = parseFloat(label.string);
    if (tarNum == oriNum) return;
    // 总动画时间1.5秒,算出每次滚动步进
    let step = Math.floor(Math.floor(tarNum - oriNum) / (totalTime / gapTime));
    if (Math.abs(step) < 1) {
        step = step < 0 ? -1 : 1;
    }
    oriNum = oriNum || 0;
    // 如果有小数位,滚动时小数位随机显示模拟滚动效果
    oriNum = Math.floor(oriNum);
    let isIncrease = (tarNum > oriNum);

    let handle = setInterval(() => {
        oriNum = oriNum + step;
        if (isIncrease) {
            if (oriNum > tarNum) {
                label.string = showDecimal ? tarNum.toFixed(2) : tarNum.toString();
                clearInterval(handle);
            } else {
                label.string = showDecimal ? oriNum.toString() + "." + math.randomRangeInt(10, 100).toString() : oriNum.toString();
            }
        } else {
            if (oriNum < tarNum) {
                label.string = showDecimal ? tarNum.toFixed(2) : tarNum.toString();
                clearInterval(handle);
            } else {
                label.string = showDecimal ? oriNum.toString() + "." + math.randomRangeInt(10, 100).toString() : oriNum.toString();
            }
        }
    }, gapTime);
}



/**
 * 复制文本
 */
export function copyText(text: string) {
    if (NATIVE) {
        native.copyTextToClipboard(text);
    } else {
        let selectText = (textbox, startIndex, stopIndex) => {
            if (textbox.createTextRange) {
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveStart('character', startIndex);//起始光标
                range.moveEnd('character', stopIndex - startIndex);//结束光标
                range.select();//不兼容苹果
            } else {
                textbox.setSelectionRange(startIndex, stopIndex);
                textbox.focus();
            }
        }

        var el = document.createElement("textarea");
        el.value = text
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt';
        document.body.appendChild(el);
        var selected;
        var selection = document.getSelection();
        if (selection.rangeCount > 0) {
            selected = selection.getRangeAt(0);
        }
        selectText(el, 0, el.value.length);
        try {
            const msg = document.execCommand('copy') ?
                'successful' : 'unsuccessful';
            console.log("复制成功");
        } catch (err) {
            console.log("复制失败");
        }
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }

}

/**
 * 生成二维码
 */
export function generateQRCode(node: Node, url: string) {
    console.log("=======generateQRCode=======");
    // QRErrorCorrectLevel = {
    //     L : 1,
    //     M : 0,
    //     Q : 3,
    //     H : 2
    // };
    let QRErrorCorrectLevel = 1;

    let qrcode = globalThis.genQRCode(-1, QRErrorCorrectLevel);
    qrcode.addData(url);
    qrcode.make();

    let grph = node.getComponent(Graphics);
    grph.fillColor = Color.BLACK;
    let h = node.getComponent(UITransform).height / qrcode.getModuleCount();
    let w = node.getComponent(UITransform).width / qrcode.getModuleCount();

    for (let i = 0; i < qrcode.getModuleCount(); i++) {
        for (let j = 0; j < qrcode.getModuleCount(); j++) {
            if (qrcode.isDark(i, j)) {
                let sizeW = (Math.ceil((j + 1) * w) - Math.floor(j * w));
                let sizeH = (Math.ceil((i + 1) * w) - Math.floor(i * w));
                grph.rect(Math.round(j * w), Math.round(i * h), sizeW, sizeH);
                grph.fill();
            }
        }
    }
}

/**
 * 千分位转换
 * // 使用示例
 * var number = 1234567.123;
 * var formattedNumber = formatWithCommas(number); // "1,234,567.123"
 * @param number 
 * @returns 
 */
export function formatWithCommas(number: number | string, dot: number = 2) {
    // var parts = number.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return parts.join(".");
    dot = dot < 0 ? 0 : dot;
    number = parseFloat(number.toString());
    if (dot == 0) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        return number.toFixed(dot).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
}

/**
 * 千分位转换钱
 * @param number 
 * @param dot 保留小数
 */
export function formatMoneyCommas(number: number, dot: number = 2, isSymbol: boolean = false) {
    let n = Utils.formatRespMoney(number, dot);
    let symbol = isSymbol ? gutil_char("CURRENCY_SYMBOL") : ""
    return symbol + formatWithCommas(n, dot);
}

/**
 * 字母转换钱
 * @param number 
 * @param dot 保留小数
 * @returns 
 */
export function formatMoneyUnion(number: number, dot: number = 2, isSymbol: boolean = false) {
    let n = Utils.formatRespMoney(number, dot);
    let symbol = isSymbol ? gutil_char("CURRENCY_SYMBOL") : ""
    return symbol + Utils.formatMoneyUnion(n, dot);
}

export function getIpAddress(cb: Function) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(json => {
            cb && cb(json.ip)
        })
}

// 
/**
 * 扩展 Date 原型以添加 format 方法
 * // 使用格式化方法
 * var date = new Date();
 * console.log(date.format("yyyy-MM-dd hh:mm:ss"));
 * console.log(date.format("yyyy年MM月dd日 hh时mm分ss秒"));
 * console.log(date.format("yyyy-MM-dd"));
 * console.log(date.format("hh:mm:ss"));
 */
export function dateFormat(timestamp: number, fmt: string): string {
    if (timestamp < 10000000000) timestamp *= 1000; // 转毫秒
    let date = new Date(timestamp);
    const re = /(y+)/;
    if (re.test(fmt)) {
        const t = re.exec(fmt)[1];
        fmt = fmt.replace(
            t,
            (date.getFullYear() + "").substring(4 - t.length)
        );
    }
    const o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };

    if (timestamp < 1000000000000) {
        // if (timestamp < 1000000000000000) {
        let tmpTime = timestamp % (1000 * 60 * 60 * 24);
        o["h+"] = Math.floor(tmpTime / (1000 * 60 * 60 * 24));
    }
    // if (timestamp  < 60*60*1000*24)


    for (let k in o) {
        const regx = new RegExp("(" + k + ")");
        if (regx.test(fmt)) {
            const t = regx.exec(fmt)[1];
            fmt = fmt.replace(
                t,
                t.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length)
            );
        }
    }
    return fmt;
}

export function setLabelRenderCallback(label: Label | RichText | ERichText, key: string, ...params) {
    let localizedLabelPlus = label.getComponent(LocalizedLabelPlus);
    if (!localizedLabelPlus) {
        localizedLabelPlus = label.addComponent(LocalizedLabelPlus);
    }
    localizedLabelPlus.setKey(null);
    localizedLabelPlus.renderCb = cbs(() => {
        if (label && label.isValid) {
            if (params.length) {
                label.string = sprintf_g(key, ...params);
            } else {
                label.string = gutil_char(key);
            }
        }
    }, this);
}

// 从字符串中提取出网址
export function findUrl(str: string): string {
    if (!str) return "";
    let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    let url = str.match(reg);
    if (url) {
        return url[0];
    }
    return "";
}

export function cutStringByLen(src: string, len?: number) {
    let count = 0;
    if (!len) return src.slice();
    for (let i = 0; i < src.length; i++) {
        if (src[i].charCodeAt(0) > 0Xff) {
            count += 2;
        } else {
            count += 1;
        }
        if (count > len) {
            return src.slice(0, i - 1) + '...';
        }
    }
    return src.slice();
}
/** 横竖屏状态 */
export let ScreenOrientation = macro.ORIENTATION_PORTRAIT;
/** true 横屏  false 竖屏 */
export function setOrientation(flag, notCheck = false) {
    let orientation = flag ? macro.ORIENTATION_LANDSCAPE : macro.ORIENTATION_PORTRAIT;
    if (!notCheck) {
        if (ScreenOrientation == orientation) {
            warn("屏幕方向一致,无需设置")
            return;
        }
    }
    ScreenOrientation = orientation;


    EventDispatcher.instance.dispatchEvent(AppEvent.SYS_ORIENTATION, true);
    setTimeout(() => {
        EventDispatcher.instance.dispatchEvent(AppEvent.SYS_ORIENTATION, false);
    }, 500)

    setTimeout(() => {
        const _desingSize = view.getDesignResolutionSize();
        if (sys.os == sys.OS.ANDROID) {
            const dir = flag ? "H" : "V";
            sdk.setOrientation(dir)
        }
        const _frameSize = screen.windowSize;
        let width = Math.max(_frameSize.width, _frameSize.height);
        let height = Math.min(_frameSize.width, _frameSize.height);
        screen.windowSize = flag ? new Size(width, height) : new Size(height, width);
        width = Math.max(_desingSize.width, _desingSize.height);
        height = Math.min(_desingSize.width, _desingSize.height);
        view.setOrientation(orientation);
        view.setDesignResolutionSize(flag ? width : height, flag ? height : width, ResolutionPolicy.SHOW_ALL);
        if (sys.os == sys.OS.WINDOWS && !BUILD) {
            let rotate = document.getElementById('btn-rotate');
            rotate.click();
            if (rotate.className == 'checked' && !flag || rotate.className == '' && flag) {
                rotate.click();
            }
        }
        globalThis.dispatchEvent(new Event('resize'));
    }, game.frameTime * 5)
}

/** true 横屏  false 竖屏 */
export function getOrientation() {
    return ScreenOrientation == macro.ORIENTATION_LANDSCAPE;
}
/** 
 * 倒计时是<1h，则显示：分秒 （后面再跟一个10的倒计时，1秒内倒计完）；
 * 倒计时是>1h，则显示：时分秒 ；
*/
export function formatCountdownTime(time) {
    if (time < 1 * 60 * 60 * 1000) {
        let minute = Math.floor(time / (60 * 1000));
        let second = Math.floor((time - minute * (60 * 1000)) / 1000);
        let millisecond = Math.floor((time - minute * (60 * 1000) - second * 1000) / 10);

        return (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + ":" + ((millisecond < 10 ? "0" + millisecond : millisecond));
    } else {
        let hour = Math.floor(time / (60 * 60 * 1000));
        let minute = Math.floor((time - hour * (60 * 60 * 1000)) / (60 * 1000));
        let second = Math.floor((time - hour * (60 * 60 * 1000) - minute * (60 * 1000)) / 1000);
        return (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
    }
}

/** 
 * 欧式格式化数字,每三位插入","
 * flag: true小数保留两位, 不传或false不保留小数
 * dig: 保留几位小数,默认2位
 * floatFlag: true小数点后补0 的方式,默认false 能被一百整除那就后面的小数位都补零， 否则不变
*/
export function formatNumEu(num: any, flag: boolean = true, dig: number = 2, floatFlag: boolean = false) {
    if (num == null) return;

    if (num == 0) {
        return "0.00";
    }

    let numstr = num.toString();
    let digits = numstr.split(".");

    let left = "";
    let right = "";
    let str = "0";
    if (digits[0]) {
        left = digits[0];
    }

    if (digits[1]) {
        for (let i = 0; i < dig; i++) {
            let a = digits[1][i];
            if (!floatFlag) {
                if (a) {
                    right += a;
                } else {
                    right += "0";
                }
            } else {
                right += "0";
            }
        }
    } else {
        for (let i = 0; i < dig; i++) {
            right += "0";
        }
    }

    digits = [left, right];

    str = left + "." + right;


    // check if contains illegal charactor other than 0-9 and "."
    for (let i = 0; i < str.length; i++) {
        let a = str.charCodeAt(i);
        if ((a < 48 || a > 57) && a != 46) {
            return;
        }
    }
    // check the prefix
    if (digits.length > 2 || str.startsWith(".") || (str.startsWith("0") && !str.startsWith("0."))) {
        return;
    }

    let numInt = digits[0].split("");
    numInt = numInt.reverse();
    let tmp = "";
    for (let i = 0; i < numInt.length; i++) {
        tmp = tmp + numInt[i];
        if ((i + 1) % 3 == 0 && i != numInt.length - 1) {
            tmp = tmp + ",";
        }
    }
    let result = "";
    for (let i = 0; i < tmp.length; i++) {
        result = result + tmp.charAt(tmp.length - 1 - i);
    }
    return flag ? result + "." + digits[1] : result;
}

export function closeAlertButNet(tag: string | Node | number | -1, filters: string[] = []) {
    gui.closeAlert(tag, filters.concat(['NET']))
}
