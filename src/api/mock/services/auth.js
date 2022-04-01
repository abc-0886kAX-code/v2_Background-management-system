/*
 * @Author: zhangxin
 * @Date: 2022-02-22 17:11:52
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-03-01 09:17:13
 * @Description: 
 */
import routeTree from '@/config/data/router-trees.json';
import Mock from 'mockjs';
import { builder, getBody } from '../util';

const username = ['admin'];

const password = ['admin'];

const role = ['admin'];

const roleType = ['all']

const login = (options) => {
    const body = getBody(options);
    if (!username.includes(body.username) || !password.includes(body.password)) {
        return builder({ isLogin: true }, '账户或密码错误', 500)
    }

    return builder({
        'name': Mock.mock('@name'),
        'username': 'admin',
        'status': 1,
        'role': 'admin',
        'token': '17cc7fc7cbb448bd9e09e428e760a733'
    }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const getUserInfo = (options) => {
    const body = getBody(options);
    if (!role.includes(body.role)) {
        return builder([], '数据库中没有这个角色', 500)
    }

    return builder({
        userId: '666',
        trueName: '管理员',
        roleType: 'all'
    }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const getRoutes = (options) => {
    const body = getBody(options);
    if (!roleType.includes(body.roleType)) {
        return builder([], '角色类型不正确', 500)
    }

    return builder(routeTree, '', 200)
}

const logout = () => {
    return builder({}, '注销成功')
}

Mock.mock(/\/auth\/login/, 'post', login)

Mock.mock(/\/auth\/getUserInfo/, 'post', getUserInfo)

Mock.mock(/\/auth\/getRoutes/, 'post', getRoutes)

Mock.mock(/\/auth\/logout/, 'post', logout)