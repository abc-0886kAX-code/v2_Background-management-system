/*
 * @Author: zhangxin
 * @Date: 2022-04-02 13:59:24
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-02 13:59:24
 * @Description: 
 */

import Menu from './menu.vue';

/* istanbul ignore next */
Menu.install = function (Vue) {
    Vue.component(Menu.name, Menu);
};

export default Menu;