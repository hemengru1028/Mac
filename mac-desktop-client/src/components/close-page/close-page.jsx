// 关机页面
import React, { } from 'react'
function Closepage(props) {
    
    const returnRestartpage = () => {
        props.history.push('/restartpage')
     
    }

    return (
        <div
            className='backimg'
            style={{ backgroundImage: "url(" + require("../../assets/images/sleeppage.png").default + ")" }}
            onClick={()=>{returnRestartpage()}}
        >
            
        </div>
    )
}

export default Closepage