/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 16:05:23
 * @LastEditors: ...
 * @LastEditTime:...
 * @Description: ...
 */


if (process.env.NODE_ENV !== 'production') {

    // 使用同步加载依赖
    // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果

    console.log('mock mounting');
    const Mock = require('mockjs')
    require('./services/auth')

    Mock.setup({
        timeout: 800
    })


    console.log('mock mounted')
}