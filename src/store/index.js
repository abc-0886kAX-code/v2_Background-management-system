/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 15:46:04
 * @LastEditors: ...
 * @LastEditTime:...
 * @Description: ...
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import modules from './modules';



Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {
        ...getters
    },
    mutations: {},
    actions: {},
    modules: {
        ...modules
    }
});