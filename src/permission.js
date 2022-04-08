/*
 * @Author: zhangxin
 * @Date: 2022-02-22 16:33:22
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 16:47:35
 * @Description: 
 */
import { TOKEN_KEY } from '@/config/constant';
import router, { notRoutes } from '@/router';
import store from '@/store';
import { notification } from 'ant-design-vue';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css';
import { getCookie } from './utils/cookie';

NProgress.configure({ showSpinner: false }) // 禁止进度环;

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const hasToken = getCookie(TOKEN_KEY);
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done();
        } else {
            const hasRoles = store.getters.roleList && store.getters.roleList > 0;
            if (hasRoles) {
                next()
            } else {
                try {
                    const role = store.getters.role;

                    const { data: { roleType } } = await store.dispatch('user/getUserInfo', role);

                    const { data: { data: resultRoutes } } = await store.dispatch('user/getRoutes', roleType);

                    const accessRoutes = await store.dispatch('permission/generateRoutes', resultRoutes);

                    accessRoutes.push(notRoutes);
                    router.addRoutes(accessRoutes);
                    next({ ...to, replace: true })

                } catch (err) {
                    console.log(err);
                    notification.error({
                        message: '错误',
                        description: err,
                        duration: 5
                    })

                    await store.dispatch('user/logout')
                    next('/login')
                    NProgress.done();

                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done();
        }
    }
})


router.afterEach(() => {
    NProgress.done();
})