/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-22 18:03:26
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-02-25 11:29:32
 * @Description: ...
 */


import '@/api/mock';
import '@/plugins/antui.js';
import router from '@/router';
import store from '@/store';
import '@/styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import './permission.js';


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
