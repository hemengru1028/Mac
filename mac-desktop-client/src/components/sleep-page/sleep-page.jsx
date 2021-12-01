// 睡眠页面
import React, { } from 'react'
import {withRouter} from 'react-router-dom'


import '../../assets/css/sleeppage.css'
function Sleeppage(props) {

    const ReturnLockscreen = () => {
        
        props.history.push('/')

    }
    
    return (
        <div
            className='backimg'
            style={{ backgroundImage: "url(" + require("../../assets/images/sleeppage.png").default + ")" }}
            onClick={()=>{ReturnLockscreen() }}
        >
            
        </div>
    )
}

export default withRouter(Sleeppage)