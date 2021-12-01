import { combineReducers } from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
} from './action-types'

const initUser = {
    username:'',//用户名
    msg:'',//错误提示信息
  
}

function user(state = initUser, action) {
    switch (action.type){
        case AUTH_SUCCESS:
          
            // return { ...action.data }
            return {...action.data}
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case RESET_USER:
            return {...initUser,msg:'用户已退出'}
        default:
            return state
    }
  
}

export default combineReducers(
    {
        user,
    }
)