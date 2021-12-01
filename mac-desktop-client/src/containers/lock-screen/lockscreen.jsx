// 锁屏

import React, { } from 'react'
// import {Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../assets/css/lockscreen.css'
import {login} from '../../redux/actions'

import header from '../../assets/images/header.jpg'
import sleep from '../../assets/images/sleep.png'
import restart from '../../assets/images/restart-line.png'
import shutdown from '../../assets/images/shut-down-line.png'
import questionmark from '../../assets/images/问号.png'


function Lockscreen (props) {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
//    const  changeValue=(e)=> {
//     // let username = e.target.username;
//     setUsername(
//         e.target.value
//      )
  
// }

    const ReturnHomepage = () => {      
        props.history.push('/homepage')
    }

    const ReturnSleeppage = (e) => {
        e.stopPropagation()
      props.history.push('/sleeppage')
    }
    
    const ReturnRestartpage = (e) => {
        e.stopPropagation()
        props.history.push('/restartpage')
    }

    const ReturnClopsetpage = (e) => {
        e.stopPropagation()
        props.history.push('/closepage')
    }

    // 阻止事件冒泡
    const stopPropagation = (e) => {
        e.stopPropagation()
    }
  
        return (
            <div
                className='backimg'
                style={{ backgroundImage: "url(" + require("../../assets/images/wallpaper-day.jpg").default + ")" }}
                // onClick={()=>{ReturnLockscreen() }}
            >
                  <div className='entrance'>
            
            <div className='user'>
                <div className='header'>
                    <img src={header} alt=''/>
                </div>

                <div className='nickname'>
                          <h3>召吉里的何梦茹</h3>
                              {/* <input  type="text"
                                placeholder='请输入用户名'
                                onChange={(e)=>{changeValue(e)}}
                                value={username}
                            /> */}
                </div>
                <div className='password'>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                     
                            />
                     <img src={questionmark} alt="" />   
                </div>
                <div className='text'>
                   <h5 onClick={ReturnHomepage}>Click to enter</h5>     
                </div>
                <div className="register">
                            <a href="/login" onClick={(e)=>{stopPropagation(e)}} >用户登录</a>
                            &nbsp;
                            <a href="/register" onClick={(e)=>{stopPropagation(e)}}>注册</a>
                 </div>       
                    
            </div>
            <div className='operation'>
                        <div
                            className='roundbox'
                            onClick={(e) => { ReturnSleeppage(e) }}>
                        <div className='sleep items' >

                                <img src={sleep} alt=""  />
                        </div>
                        <span>Sleep</span>
                </div>
                        <div
                            className='roundbox'
                            onClick={(e)=>{ReturnRestartpage(e) }}
                        >
                        <div className='restart items'>
                                {/* <Link to='/restartpage'><img src={restart} alt="" /></Link> */}
                                <img src={restart} alt="" />
                                
                           
                        </div>
                        <span>Restart</span>
                </div>
                        <div
                            className='roundbox'
                            onClick={(e)=>{ReturnClopsetpage(e) }}
                        >
                        <div className='shutdown items'>
                                {/* <Link to='/closepage'><img src={shutdown} alt="" /></Link> */}
                                <img src={shutdown} alt=""  />
                           
                        </div>
                        <span>Close</span>
                </div>
            </div>
        </div>
                
          </div>
        )

}


export default connect(
    state => ({ user: state.user }),
    {login}
)(Lockscreen)