import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
} from './action-types'

import {
    reqRegister,
    reqLogin,
}from '../api/index'
// import { Redirect } from 'react-router-dom'

//授权成功的同步action
const authSuccess = (user,msg) => ({type:AUTH_SUCCESS,data:{user,msg}})
//错误提示信息的同步action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
// 重置用户的同步action
export const resetUser =(msg)=>({type:RESET_USER,data:msg})



// 注册异步action
export const register = (user) => {
    const { username, password } = user
    
    return async dispatch => {
        const response = await reqRegister({ username, password })
        const result = response.data
       
        if (result.code === 0) {
            // console.log(result);
            dispatch(authSuccess(result.data, result.data.msg))

            // window.location.reload() //整个页面刷新
            // <Redirect to='/login'/>
        }
        else {
            dispatch(errorMsg(result.msg))
        }
    }
}

// 登录异步action、
export const login = (user) => {
    const { username, password } = user
    // console.log(user);
    
    return async dispatch => {
        const response = await reqLogin({ username, password })
        const result = response.data

        // console.log(result);
        if (result.code === 0) {
            dispatch(authSuccess(result.data, result.msg))
            // window.location.reload() //整个页面刷新
        }
        else {
            dispatch(errorMsg(result.msg))
        }
    }
}