/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 15:49:47
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-02-25 11:25:55
 * @Description: ...
 */


const getters = {
    token: state => state.user.token,
    role: state => state.user.role
}

export default getters;