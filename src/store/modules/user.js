/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 15:48:13
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 09:43:37
 * @Description: ...
 */
import { getRoutes, getUserInfo, login, logout } from '@/api/auth';
import { NAME, ROLE, ROLE_TYPE, TOKEN_KEY } from '@/config/constant';
import { getCookie, removeCookie, setCookie } from '@/utils/cookie';

const state = {
    token: getCookie(TOKEN_KEY) || '',
    role: getCookie(ROLE) || '',
    name: getCookie(NAME || ''),
    roleType: {},
    roleList: []
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_ROLE: (state, role) => {
        state.role = role;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_INFO: (state, roleType) => {
        state.roleType = roleType
    },
    SET_ROLELIST: (state, roleList) => {
        state.roleList = roleList
    }
}


const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username, password }).then((response) => {
                const { data } = response;
                commit('SET_TOKEN', data.token);
                commit('SET_ROLE', data.role);
                commit('SET_NAME', data.name);
                setCookie(TOKEN_KEY, data.token)
                setCookie(ROLE, data.role)
                setCookie(NAME, data.name)
                resolve(response);
            }).catch((err) => {
                reject(err)
            })
        })
    },

    getUserInfo({ commit }, role) {
        return new Promise((resolve, reject) => {
            getUserInfo({ role }).then((response) => {
                const { data } = response;

                const { roleType, userId, trueName } = data;

                commit('SET_INFO', { roleType, userId, trueName });

                setCookie(ROLE_TYPE, roleType);

                resolve(response);
            }).catch(err => {
                reject(err)
            })
        })
    },


    getRoutes({ commit }, roleType) {
        return new Promise((resolve, reject) => {
            getRoutes({ roleType }).then((response) => {
                commit('SET_ROLELIST', ['11'])
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    },

    logout({ commit }) {
        return new Promise((reolve, reject) => {
            logout().then(response => {
                removeCookie(TOKEN_KEY);
                removeCookie(ROLE_TYPE);
                removeCookie(NAME);
                reolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}