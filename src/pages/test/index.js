/*
 * @Author: zhangxin
 * @Date: 2022-04-08 15:29:19
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 15:29:19
 * @Description: 
 */
import Test from './index.vue';

/* istanbul ignore next */
Test.install = function (Vue) {
    Vue.component(Test.name, Test);
};

export default Test;