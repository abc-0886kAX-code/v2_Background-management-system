/*
 * @Author: zhangxin
 * @Date: 2022-04-02 13:59:24
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 14:03:43
 * @Description: 
 */

import MenuM from './menu-m.vue';

/* istanbul ignore next */
MenuM.install = function (Vue) {
    Vue.component(MenuM.name, MenuM);
};

export default MenuM;