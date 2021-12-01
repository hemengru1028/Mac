// 重启页面
import React, {useState, useEffect } from 'react'
import { Progress } from 'antd'

import '../../assets/css/restartpage.css'
function Restartpage(props) {

// console.log(props);

    var [percent, setPercent] = useState(0)
    // console.log(percent);

    if (percent >= 100) {
                
        // clearInterval(timer)
        props.history.push('/')
       }
    useEffect(() => {

      
        // console.log('componentdidMount');
        setInterval(function () {
        //    if (percent >= 100) {
                
        //     clearInterval(timer)
        //     // props.history.push('/')
        //     window.location.href='http://localhost:3000/'
                
               
                
        //     }
        //    else {
           
                setPercent(percent=>percent+5)

                
            // }
       }, 100)
        
     
      
    }, [])

   
   

    return (
        <div>
            <div className='backimg' style={{backgroundImage: "url("+require("../../assets/images/black.jpg").default+")"}}>
                <Progress
                    percent={percent}
                    showInfo={false}
                    className='progress'
                    strokeColor='#fff'
                    trailColor='#666'
                    />
            </div>
        </div>
    )
}

export default Restartpage