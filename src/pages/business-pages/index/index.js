/*
 * @Author: zhangxin
 * @Date: 2022-04-07 13:35:43
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-07 13:36:54
 * @Description: 
 */
import Index from './index.vue';

/* istanbul ignore next */
Index.install = function (Vue) {
    Vue.component(Index.name, Index);
};

export default Index;