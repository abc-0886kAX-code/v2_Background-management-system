/*
 * @Author: zhangxin
 * @Date: 2022-02-28 16:06:54
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-02-28 16:12:22
 * @Description: 
 */


//时间提示语

export function timeFix() {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好';
}