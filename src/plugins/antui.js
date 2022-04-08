/*
 * @Author: zhangxin
 * @Date: 2022-02-23 11:06:35
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 17:54:14
 * @Description: 
 */
import { Button, Dropdown, Form, Icon, Input, Layout, Menu, message, notification } from 'ant-design-vue';
import Vue from "vue";




Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);


Vue.prototype.$message = message;
Vue.prototype.$notification = notification;