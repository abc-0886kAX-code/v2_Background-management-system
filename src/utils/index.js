/*
 * @Author: zhangyang
 * @Date: 2021-05-11 17:13:12
 * @LastEditors: yjl
 * @LastEditTime: 2021-07-12 17:52:19
 * @Description: file content
 */
import { isNil, isString, isArray, isNumber, reduce, add, flattenDeep } from 'lodash';

export const isUrl = (path) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/.test(path);

export const routerAs = (regexp) => (path) => regexp.test(path);

export const stringAs = (str) => !isNil(str) && isString(str);

export const numberAs = (num) => !isNil(num) && isNumber(num);

export const arrayAs = (arr) => !isNil(arr) && isArray(arr) && arr.length > 0;

export const defaultString = (str, def = '') => stringAs(str) ? str : def;

export const defaultNumber = (num, def = 0) => numberAs(num) ? num : def;

export const defaultArray = (arr, def = []) => arrayAs(arr) ? arr : def;

export const toPX = (num) => `${num}px`;

export const toPercent = (num) => `${num}%`;

export const toVw = (num) => `${num}vw`;

export const mergeNumber = (numbers, offset) => add(reduce(numbers, add), defaultNumber(offset));

export const deepRange = (list, nodeKey) => flattenDeep(list.map(item => arrayAs(item[nodeKey]) ? deepRange(item[nodeKey]) : item));

/**
 * @description: json格式转children树状结构
 * @param {json} json json数据
 * @param {String} idStr id的字符串
 * @param {String} pidStr 父id的字符串
 * @param {String} chindrenStr children的字符串 
 * @return {Array} 数组
 */        
export function genTreeData(json, idStr, pidStr, chindrenStr) {
    let newJson = [];
    let hash = {};
    let id = idStr || 'id';
    let pid = pidStr || 'pid';
    let children = chindrenStr || 'children';
    let len = json.length;

    for (let i = 0; i < len; i++) {
        hash[json[i][id]] = json[i];
    }

    for (let i = 0; i < len; i++) {
        let jsonVal = json[i];
        let parent = hash[jsonVal[pid]];

        if (parent) {
            !parent[children] && (parent[children] = []);
            parent[children].push(jsonVal);
        } else {
            newJson.push(jsonVal)
        }
    }

    return newJson
}

/**
 * @description: 阻止默认事件
 * @param {*} event  
 * @return {*}
 */
export function stopPropagation(event) {
    event.stopPropagation();
}


/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
export function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}