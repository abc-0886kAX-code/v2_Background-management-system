/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-24 13:47:14
 * @LastEditors: ...
 * @LastEditTime:...
 * @Description: ...
 */

import Cookies from 'js-cookie';

export function getCookie(tokenKey) {
    return Cookies.get(tokenKey)
}

export function setCookie(tokenKey, token) {
    return Cookies.set(tokenKey, token)
}

export function removeCookie(tokenKey) {
    return Cookies.remove(tokenKey)
}