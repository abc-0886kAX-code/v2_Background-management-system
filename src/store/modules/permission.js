/*
 * @Author: zhangxin
 * @Date: 2022-03-01 09:24:27
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-07 17:48:39
 * @Description: 
 */
import { constantRouterMap, generator, resetRouter } from '@/router';

const state = {
    addRoutes: [],
    routes: []
}
const getters = {
    addRoutes: (state) => state.addRoutes
}
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constantRouterMap.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, routes) {
        return new Promise(resolve => {
            const accessedRoutes = generator(routes);
            commit('SET_ROUTES', accessedRoutes);
            resolve(accessedRoutes);
        })
    },
    resetPermission({ commit }) {
        return new Promise(resolve => {
            commit('SET_ROUTES', []);
            resetRouter();
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}