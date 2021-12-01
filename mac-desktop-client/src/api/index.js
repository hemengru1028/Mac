/* 
    包含 n 个接口请求的函数的模块
    函数返回值是 promise对象
*/

import ajax from './ajax'


// 注册接口
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登录接口
export const reqLogin = ({username, password}) => ajax('/login',{username, password}, 'POST')