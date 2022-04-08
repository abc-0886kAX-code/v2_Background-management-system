/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 15:49:47
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 09:44:36
 * @Description: ...
 */


const getters = {
    token: state => state.user.token,
    role: state => state.user.role,
    roleList: state => state.user.roleList
}

export default getters;