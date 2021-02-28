import axios from 'axios'
import {message} from "antd";

/*
能发送异步 ajax 请求的函数模块
封装 axios 库
函数的返回值是 promise 对象
1. 优化1: 统一处理请求异常?
    在外层包一个自己创建的 promise 对象
    在请求出错时, 不 reject(error), 而是显示错误提示
2. 优化2: 异步得到不是 response , 而是 response.data
   在请求成功 resolve 时: resolve(response.data)
 */

export default function ajax(url, data = {}, method) {
    return new Promise(function (resolve, reject) {
        let promise
        //执行异步ajax请求
        if (method === "GET") {
            promise = axios.get(url, {params: data})  //params 配置指定的是 query 参数
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            message.error('请求错误' + error.message, 3)
        })
    })
}
