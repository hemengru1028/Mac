// 能发送ajax请求的函数模块 函数的返回值是promise对象

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    if (type === 'GET') {  //发送get请求
        // 准备 url query参数数据
        let dataStr = ''
        // 数据拼接字符串
        Object.keys(data).forEach(key => {  //key就是属性名
            dataStr += key + '=' + data[key] + '&'
        })

        if (dataStr !== '') //已拼接过
        {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
            }
        return axios.get(url)
    }

    else {
        // 发送post请求
        return axios.post(url,data)  //data为包含请求体数据的对象
    }
}