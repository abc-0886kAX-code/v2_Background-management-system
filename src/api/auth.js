/*
 * @Author: zhangxin
 * @Date: 2022-01-27 15:51:00
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-02-28 17:17:45
 * @Description: 
 */
import axios from '@/config/request';


//登录接口
export const login = (data) => axios.request({
    url: '/auth/login',
    method: 'post',
    data
})


export const getUserInfo = (data) => axios.request({
    url: '/auth/getUserInfo',
    method: 'post',
    data
})

export const getRoutes = (data) => axios.request({
    url: '/auth/getRoutes',
    method: 'post',
    data
})

//退出登录
export const logout = () => axios.request({
    url: '/auth/logout',
    method: 'post'
})