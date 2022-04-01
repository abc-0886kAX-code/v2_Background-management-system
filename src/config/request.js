/*
 * @Author: zhangxin
 * @CreateTime: 2022-01-27 14:13:58
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-03-01 09:55:24
 * @Description: ...
 */

import store from '@/store';
import { Message } from 'ant-design-vue';
import Axios from 'axios';
import axiosRetry from 'axios-retry';


const baseURL = ""

const client = Axios.create({
    //你的配置
    baseURL,
    timeout: 15000
});

//安装axios-retry插件
//当请求失败后,自动重新请求,只有3次失败后才真正失败

axiosRetry(client, { retries: 3 });

//请求拦截器
client.interceptors.request.use(
    config => {

        // 响应头指定了该响应的资源是否被允许与给定的origin共享 处理跨域问题  为什么要等于当前域名 不带清楚
        config.headers['Access-Control-Allow-ORigin'] = window.location.origin;

        //设置token 如果有token  在请求头中添加token
        if (store.getters.token) {
            config.headers['token'] = store.getters.token
        }
        //post请求  使用qs将数据格式化字符串    此条件可以再加 && isNil(config.notFormat)
        //此处隐藏是因为 mock 中的 getBody 接收数据无法转换 ， 可修改getBody方法 或 隐藏此处
        // if (config.method === 'post') {
        //     config.data = qs.stringify(config.data)
        //     console.log(config.data);
        // }
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

//响应拦截器
client.interceptors.response.use(
    response => {
        const res = response.data;

        const { code, message } = res;

        if (code < 400) {
            return res
        } else {
            Message.error(message || '请联系管理员', 4)

            return Promise.reject(new Error(message || 'Error'))
        }

        //业务逻辑 400 500 200 404 等
    },
    error => {
        // 提示报错
        if (!errorLock) {
            errorLock = true;
            Message.error({
                content: error.message || '请联系管理员', duration: 4, onClose: function () {
                    errorLock = false;
                }
            })
        }

        return Promise.reject(error)
    }
)


export default client;

//安装axios-retry插件
//当请求失败后,自动重新请求,只有3次失败后才真正失败


// axiosRetry(client, { retries: 3 });


// export async function request(url: string, config?: AxiosRequestConfig) {
//     const response = await client.request({ url, ...config });

//     const result = response.data;

//     //你的业务判断逻辑
//     //例如 500 404 200

//     return result;
// }
