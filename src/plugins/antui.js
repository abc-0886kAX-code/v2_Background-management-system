/*
 * @Author: zhangxin
 * @Date: 2022-02-23 11:06:35
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-02-28 15:18:00
 * @Description: 
 */
import { Button, Form, Input, message, notification } from 'ant-design-vue';
import Vue from "vue";



Vue.use(Button);
Vue.use(Input);
Vue.use(Form);


Vue.prototype.$message = message;
Vue.prototype.$notification = notification;