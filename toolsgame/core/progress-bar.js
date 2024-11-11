/*
 * @Description: 进度条
 * @Author: pck
 * @Date: 2021-03-15 17:49:25
 * @LastEditTime: 2021-03-16 11:00:04
 * @LastEditors: pck
 * @Reference: 
 */
var slog = require('single-line-log').stdout;
var idx = 0;
function ProgressBar(description, bar_length) {
    this.description = description || 'Progress';    // 命令行开头的文字信息
    this.length = bar_length || 25;           // 进度条的长度(单位：字符)，默认设为 25

    this.render = function (opts) {
        var percent = (opts.completed / opts.total).toFixed(4);  // 计算进度(子任务的 完成数 除以 总数)
        var cell_num = Math.floor(percent * this.length);       // 计算需要多少个 █ 符号来拼凑图案

        var cell = '';
        for (var i = 0; i < cell_num; i++) {
            cell += '>';
        }

        var empty = '';
        for (var i = 0; i < this.length - cell_num; i++) {
            empty += '<';
        }
        cell = "\x1B[42m" + cell + "\x1B[0m";
        var cmdText = this.description + ': ' + [' \\ ', ' — ', ' / ', ' O '][idx = (++idx) % 4] + (100 * percent).toFixed(2) + '% ' + cell + empty + ' ' + opts.completed + '/' + opts.total;

        slog(cmdText);
    };
}

module.exports = ProgressBar;