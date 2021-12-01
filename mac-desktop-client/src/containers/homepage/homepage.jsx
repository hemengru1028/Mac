// 主页
import React, { useState, useEffect, } from 'react'
import Cookies from 'js-cookie'  //可以操作前端cookie的对象
// import { Redirect } from 'react-router-dom'
// import { useHistory } from 'react-router';
import {
    SearchOutlined
  } from '@ant-design/icons';
import { Switch } from 'antd';
import { connect } from 'react-redux'
import {resetUser} from '../../redux/actions'

import '../../assets/css/homepage.css'
import brightness from '../../assets/images/控制.png'
import launchpad from '../../assets/images/launchpad.png'
import bear from '../../assets/images/bear.png'
import vscode from '../../assets/images/vscode.png'
import facetime from '../../assets/images/facetime.png'
import safari from '../../assets/images/safari.png'
import terminal from '../../assets/images/terminal.png'
import mail from '../../assets/images/mail.png'
import github from '../../assets/images/github.png'
import song from '../../assets/images/想去海边.jpg'

import songsrc from '../../assets/media/想去海边.mp3'

function Lockscreen(props) {

    var myDate = new Date()
    var time = myDate.toLocaleString()

    const [click, setClick] = useState('false')
    // const [display, setDisplay] = useState('none')
    const [mytime, setMytime] = useState(time)
    let [displaysliderwidth, setDisplaySliderwidth] = useState('45px') //display滑动条宽度
    let [soundsliderwidth, setSoundSliderwidth] = useState('45px') //display滑动条宽度
    const [svgbgcwifi, setSvgbgcwifi] = useState('#333')
    const [svgbgcbluetooth, setSvgbgcbluetooth] = useState('#fff')
    const [svgbluetoothstroke, setSvgbluetoothstroke] = useState('#333')
    const [svgbgcairdrop, setSvgbgcairdrop] = useState('#fff')
    const [svgairdropstroke, setSvgairdropstroke] = useState('#333')
    const [msg, setMsg] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false)
 
  

         // componentDidmount生命周期
         useEffect(() => {
            // 定时器实现时间的动态刷新
               setInterval(function () {
    
                   let timenow = new Date().toLocaleString()
                   setMytime(timenow)
               }, 1000);
            
            const hh = () => {
                // 读取cookie中的userid
                const userid = Cookies.get('userid')
             // 如果没有，自动重定向到登录页面
          if (!userid) {   
              props.history.push('/login') 
         }
      }
           hh()
           
                
           }, []) 

     

    // 点击log out退出登录
    const Logout = (e) => {
        props.history.push('/')
        // 干掉cookie中的userid
        Cookies.remove('userid')
        props.resetUser()
    }
   


  
    

  
    // 右键页面刷新
    const Refresh = () => {
        console.log('ok');
         window.location.reload() //整个页面刷新
     }
      
    
 // 阻止事件冒泡
    const stopPropagation = (e) => {
    e.stopPropagation()
}


 // 鼠标右键出现弹窗
   
    document.oncontextmenu = function (event) {
  
        event.preventDefault();
        
    var desktoppop = document.getElementById('desktoppop');

    desktoppop.style.display = "none";
    desktoppop.style.display = "block";
    desktoppop.style.left = event.offsetX+'px';
    desktoppop.style.top = event.offsetY + 'px';
    
    document.onclick = function (event) {
  
        if (desktoppop) {
          
            desktoppop.style.display = "none"
            
        }
    }
}


  

    var popupwindowiphone = document.getElementsByClassName('popupwindowiphone')[0]; 
    var popupwindowwifi = document.getElementsByClassName('popupwindowwifi')[0]
    var popupwindowsearch = document.getElementsByClassName('popupwindowsearch')[0]
    var popupwindowbrightness = document.getElementsByClassName('popupwindowbrightness')[0]
    

    // 点击屏幕任意位置关闭弹窗
    const closeWindow = (e) => {


        // var popupwindowiphone = document.getElementsByClassName('popupwindowiphone')[0];
        if (popupwindowiphone.classList.contains('block')) {
            popupwindowiphone.classList.remove('block')
            popupwindowiphone.classList.add('none')
        }
        else if (popupwindowwifi.classList.contains('block')) {
            popupwindowwifi.classList.remove('block')
            popupwindowwifi.classList.add('none')
        }
        else if (popupwindowsearch.classList.contains('block')) {
            popupwindowsearch.classList.remove('block')
            popupwindowsearch.classList.add('none')
        }
        else if (popupwindowbrightness.classList.contains('block')) {
            popupwindowbrightness.classList.remove('block')
            popupwindowbrightness.classList.add('none')
        }
    
        setClick('false')
   }
    
    const OpenPopUpWindow = (e) => {
        e.stopPropagation();
        // console.log(e.currentTarget);
        let target = e.currentTarget  //获取到当前触发事件的对象
        let name = target.getAttribute('name')
      
       
        // console.log(e.currentTarget)
        // 当点击的是iPhone图标时出现弹窗
        if (name === 'iphone') {
            // setClick('false')
            // var popupwindowiphone = document.getElementsByClassName('popupwindowiphone')[0]; 
            if (click === 'false') {
                setClick('true')
                setMsg(1)
               
                // console.log('okok');
                // console.log(popupwindowiphone);
                popupwindowiphone.classList.remove('none')
                popupwindowiphone.classList.add('block')

                // 关闭除iPhone以外其余弹窗
                if (popupwindowwifi.classList.contains('block')) {
                    popupwindowwifi.classList.remove('block')
                    popupwindowwifi.classList.add('none')
                }
                else if (popupwindowsearch.classList.contains('block')) {
                    popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')
                }
                else if (popupwindowbrightness.classList.contains('block')) {
                    popupwindowbrightness.classList.remove('block')
                popupwindowbrightness.classList.add('none')
                }
               
            }
            else if (click === "true" && msg === 1) {
                setClick('false')
                popupwindowiphone.classList.remove('block')
                popupwindowiphone.classList.add('none')

                // 关闭除iPhone以外其余弹窗
                popupwindowwifi.classList.remove('block')
                popupwindowwifi.classList.add('none')

                popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')

                popupwindowbrightness.classList.remove('block')
                popupwindowbrightness.classList.add('none')
                return;
            }

         
        }

        // 当点击的是WiFi图标时出现弹窗
        if (name === 'wifi') {
            // console.log('ok');
            // setClick('false')
            // var popupwindowwifi = document.getElementsByClassName('popupwindowwifi')[0]
            if (click === 'false') {
              
                setClick('true')
                popupwindowwifi.classList.remove('none')
                popupwindowwifi.classList.add('block')


                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除wifi以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowsearch.classList.contains('block')) {
                    popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')
                }
                else if (popupwindowbrightness.classList.contains('block')) {
                    popupwindowbrightness.classList.remove('block')
                popupwindowbrightness.classList.add('none')
                }
            }
            else    if (click === "true" && msg === 1) {
                // console.log("我是双条件");
               
           
               popupwindowwifi.classList.remove('block')
               popupwindowwifi.classList.add ('none')

                setClick('false');
                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除wifi以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowsearch.classList.contains('block')) {
                    popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')
                }
                else if (popupwindowbrightness.classList.contains('block')) {
                    popupwindowbrightness.classList.remove('block')
                popupwindowbrightness.classList.add('none')
                }
                return;
            }
            if (click === 'true') {
                // console.log('okok');
                setClick('false')
                // setDisplay('none')
                popupwindowwifi.classList.remove('block')
                popupwindowwifi.classList.add('none')
                // console.log('已关闭弹窗')
            }
          
            
        }

     

        // 当点击的是search图标时出现弹窗
        if (name === 'search') {
            // setClick('false')
            // var popupwindowsearch = document.getElementsByClassName('popupwindowsearch')[0]
            if (click === 'false') {
                setClick('true')
                setMsg(1)
               
                popupwindowsearch.classList.remove('none')
                popupwindowsearch.classList.add('block')
                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除搜索框以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowwifi.classList.contains('block')) {
                    popupwindowwifi.classList.remove('block')
                popupwindowwifi.classList.add('none')
                }
                else if (popupwindowbrightness.classList.contains('block')) {
                    popupwindowbrightness.classList.remove('block')
                    popupwindowbrightness.classList.add('none')
                }
               
            }
            else if (click === "true" && msg === 1) {
                setClick('false')
                
                popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')
                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除搜索框以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowwifi.classList.contains('block')) {
                    popupwindowwifi.classList.remove('block')
                popupwindowwifi.classList.add('none')
                }
                else if (popupwindowbrightness.classList.contains('block')) {
                    popupwindowbrightness.classList.remove('block')
                    popupwindowbrightness.classList.add('none')
                }
                return;
            }
            if (click === 'true') {
                setClick('false')
                popupwindowsearch.classList.remove('block')
                popupwindowsearch.classList.add('none')
                
            }
           
           
        }

   

        // 当点击的是屏幕亮度调节时出现弹窗
        if (name === 'brightness') {
            // setClick('false')
            // var popupwindowbrightness = document.getElementsByClassName('popupwindowbrightness')[0]
            if (click==='false') {
                setClick('true')
                setMsg(1)
                popupwindowbrightness.classList.remove('none')
                popupwindowbrightness.classList.add('block')
                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除屏幕亮度以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowwifi.classList.contains('block')) {
                    popupwindowwifi.classList.remove('block')
                    popupwindowwifi.classList.add('none')
                }
                else if (popupwindowsearch.classList.contains('block')) {
                    popupwindowsearch.classList.remove('block')
                    popupwindowsearch.classList.add('none')
                }

               
            }
            else if (click === "true" && msg === 1) {
                setClick('false')
                popupwindowbrightness.classList.remove('block')
                popupwindowbrightness.classList.add('none')
                // setDisplay('block')
                // console.log('已打开弹窗')

                // 关闭除屏幕亮度以外其余弹窗
                if (popupwindowiphone.classList.contains('block')) {
                    popupwindowiphone.classList.remove('block')
                    popupwindowiphone.classList.add('none')
                }
                else if (popupwindowwifi.classList.contains('block')) {
                    popupwindowwifi.classList.remove('block')
                    popupwindowwifi.classList.add('none')
                }
                else if (popupwindowsearch.classList.contains('block')) {
                    popupwindowsearch.classList.remove('block')
                    popupwindowsearch.classList.add('none')
                }
                return;
            }
        
        } 
     
    }

    
    const ReturnLockScreen = () => {
        props.history.push('/')
    }
   
    
    // WiFi弹窗内的onchange
   const onChange = (checked) => {
        // console.log({checked});
       
       let wifisvgdiv = document.getElementsByClassName('wifi')[0]
       let popupwindowbrightnessswifivgdiv = document.getElementsByClassName('popupwindowbrightnessswifivgdiv')[0]
       if (checked === true) {
           
        // 改变当前WiFi的svg
        wifisvgdiv.innerHTML=` <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>`
       // 改变屏幕亮度弹窗里的WiFi的svg
       popupwindowbrightnessswifivgdiv.innerHTML=` <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>`  
       }
       else {
           wifisvgdiv.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39C17.922 5.841 15.027 5 12 5z"></path></g></svg>`
           popupwindowbrightnessswifivgdiv.innerHTML=`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39C17.922 5.841 15.027 5 12 5z"></path></g></svg>`
       }
    }


    // 点击wifi图标改变svg背景色和状态以及svg
    const changeClick = (e) => {
        // e.stopPropagation();
        let target = e.currentTarget
        let name = target.getAttribute('name')
        if (name === 'wifi') {
            let wifistate = document.getElementsByClassName('wifistate')[0]
            let wifisvgdiv = document.getElementsByClassName('wifi')[0]

            // setClick('false')
            console.log(click);
            if (click === 'false') {

                setClick('true')
                // 改变WiFi的svg
                wifisvgdiv.innerHTML=`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39C17.922 5.841 15.027 5 12 5z"></path></g></svg>`
                target.style.backgroundColor = '#9ca3af40'
                setSvgbgcwifi('#333')
                wifistate.innerHTML = 'Off'  
            }
           if (click === 'true') {
                setClick('false')
                // 改变WiFi的svg
                wifisvgdiv.innerHTML=` <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>`
                target.style.backgroundColor = '#3b82f6'
                setSvgbgcwifi('#fff')
                wifistate.innerHTML = 'On'
            }
           
        }

        if (name === 'bluetooth') {
            let bluetoothstate = document.getElementsByClassName('bluetoothstate')[0]
     
            if (click === 'true') {
                setClick('false')
                target.style.backgroundColor = '#3b82f6'
                setSvgbgcbluetooth('#3b82f6')
                setSvgbluetoothstroke("#fff")
                bluetoothstate.innerHTML = 'On'
            }
            if (click === 'false') {
                setClick('true')
                target.style.backgroundColor = '#9ca3af40'
                setSvgbluetoothstroke("#333")
                setSvgbgcbluetooth('#fff')
                bluetoothstate.innerHTML = 'Off'
                
            }
        }

        if (name === 'airdrop') {
            let airdropstate = document.getElementsByClassName('airdropstate')[0]
            // let wifisvg = document.getElementsByClassName('wifisvg')[0]

            // console.log(wifisvg);

            if (click === 'true') {
                setClick('false')
                target.style.backgroundColor = '#3b82f6'
                setSvgbgcairdrop('#3b82f6')
                setSvgairdropstroke('#fff')
    
                airdropstate.innerHTML = 'Contacts Only'
            }
            if (click === 'false') {
                setClick('true')
                target.style.backgroundColor = '#9ca3af40'
                setSvgbgcairdrop('#fff')
                setSvgairdropstroke('#333')
                airdropstate.innerHTML = 'Off'
               
            }
        }
      
    }
 


  

   

   
    
    
      // 全屏模式
      const requestFullScreen = () =>{
        // console.log('requestFullScreen')
             
          let de = document.getElementById('fullScreenContainer');
             if (de.requestFullscreen) {
               de.requestFullscreen();
             } else if (de.mozRequestFullScreen) {
               de.mozRequestFullScreen();
             } else if (de.webkitRequestFullScreen) {
               de.webkitRequestFullScreen();
             }
       };
     
// 退出全屏
const exitFullScreen=() =>{
    // console.log('exitFullscreen')
    var de = document;
    if (de.exitFullscreen) {
      de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
      de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
      de.webkitCancelFullScreen();
    }
    }


// 改变屏幕亮度弹窗中第四个div的svg + 全屏模式切换
    const changeSvgp4 = () => {
        let fullscreensvg = document.getElementsByClassName('fullscreensvg')[0]
        let fullscreentext = document.getElementsByClassName('fullscreentext')[0]
        if (click === 'false') {
            setClick('true')
            fullscreensvg.innerHTML= `<svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.5 0a.5.5 0 01.5.5v4A1.5 1.5 0 014.5 6h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 0110 4.5v-4a.5.5 0 01.5-.5zM0 10.5a.5.5 0 01.5-.5h4A1.5 1.5 0 016 11.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zm10 1a1.5 1.5 0 011.5-1.5h4a.5.5 0 010 1h-4a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4z" clip-rule="evenodd"></path></svg>`
            fullscreentext.innerHTML='Exit Fullscreen'
            // console.log('已进入全屏模式');
            // 进入全屏模式

        //   console.log(!isFullScreen);
                if (!isFullScreen) {
                    requestFullScreen();
                    setIsFullScreen(true)
                    return
                } else {         
                setIsFullScreen(false)
                }
        }
       
        else {
            fullscreensvg.innerHTML = `<svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.5 1a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4A1.5 1.5 0 011.5 0h4a.5.5 0 010 1h-4zM10 .5a.5.5 0 01.5-.5h4A1.5 1.5 0 0116 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zM.5 10a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 010 14.5v-4a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v4a1.5 1.5 0 01-1.5 1.5h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>`
            fullscreentext.innerHTML='Enter Fullscreen'
            setClick('false')
            // console.log('已退出全屏模式');

            // 退出全屏模式
            if (isFullScreen) {
                exitFullScreen()
                setIsFullScreen(false)
                return
              } else {
                // this.setState({isFullScreen: false})
                setIsFullScreen(false)
              }
        }
    }

// 改变屏幕亮度弹窗中夜间模式切换的svg和text文本
    const changelightsvg = () => {
        let lightsvgdiv = document.getElementsByClassName('lightsvgdiv')[0]
        let lighttext = document.getElementsByClassName('lighttext')[0]
        let backimg = document.getElementsByClassName('backimg')[0]
       
        if (click === 'false') {
            lightsvgdiv.innerHTML = `<svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 512 512" class="text-gray-700 bg-gray-400 bg-opacity-25 rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path></svg>`
            lighttext.innerHTML = 'Dark Mode'
            setClick('true')

            // 已切换为夜间模式，将背景图切换为夜间背景图
            backimg.style.backgroundImage= "url(" + require("../../assets/images/wallpaper-night.jpg").default + ")"

        }
        else {
            lightsvgdiv.innerHTML = `<svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 512 512" class="text-gray-700 bg-gray-400 bg-opacity-25 rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path></svg>`
            lighttext.innerHTML = 'Light Mode'
            setClick('false')

            
            // 已切换为白天模式，将背景图切换为夜间背景图
            backimg.style.backgroundImage= "url(" + require("../../assets/images/wallpaper-day.jpg").default + ")"
        }
    }



// 拖动display进度条调节屏幕亮度
    // 按住按钮不放时执行
     const Changedisplayslilder = (e) => {
        //  e.stopPropagation();
         
         let rangeslider_handle = document.getElementsByClassName('rangeslider_handle')[0]
         let flag

         rangeslider_handle.style.cursor = 'pointer'
         flag = true
        //  console.log(flag);
         let disy = e.pageX - rangeslider_handle.offsetLeft
         
        //  鼠标在屏幕任意区域移动
         document.onmousemove = (e) => {
            //  获取按钮与父级容器X方向的距离
             var x = e.pageX - disy
            //  console.log(x);
             if (flag === true) {
                 //成功限制移动区域
                 if (x < 0) { x = 0 };//避免移动至 左部 外围
                 if (x > 297) { x = 297 };//避免移动至 右部 外围
                // 改变进度条的宽度
                setDisplaySliderwidth(x+'px')
                 let point = x / 297 
                //  let percent = Number(point * 100).toFixed() + '%'
                //  let str = percent
               let backimg=  document.getElementsByClassName('backimg')[0]
                //  console.log(backimg.style);
                backimg.style.filter="brightness("+ point+ ")"
  
             }
         }
         
         document.onmouseup = function () {
             document.onmousemove = null; //弹起鼠标不做任何操作
             flag = false
         }
    }


    // 控制sound进度条改变audio声音大小
    const Changesoundslilder = (e) => {
        let rangeslider_handle = document.getElementsByClassName('rangeslider_handle')[1]
        let flag
        let audio = document.getElementById('audio') //获取到audio

        rangeslider_handle.style.cursor = 'pointer'
        flag = true
        let disy = e.pageX - rangeslider_handle.offsetLeft
        
       //  鼠标在屏幕任意区域移动
        document.onmousemove = (e) => {
           //  获取按钮与父级容器X方向的距离
            var x = e.pageX - disy
           //  console.log(x);
            if (flag === true) {
                //成功限制移动区域
                if (x < 0) { x = 0 };//避免移动至 左部 外围
                if (x > 297) { x = 297 };//避免移动至 右部 外围
               // 改变进度条的宽度
               setSoundSliderwidth(x+'px')

                // console.log(audio.volume);
                let point = x / 297
               
                audio.volume = point    
            }
        }  
        document.onmouseup = function () {
            document.onmousemove = null; //弹起鼠标不做任何操作
            flag = false
        }
    }

  

    // 进入页面时没有音乐播放
    // window.onload = () => {
    //     let audio = document.getElementById('audio') //获取到audio
    //     audio.pause()  //打开页面时无音乐
    // }
// 改变音乐播放的暂停/开始按键
        const changeSvg = (e) => {
            

            let audio = document.getElementById('audio') //获取到audio

            if (click === 'true') {
                let svgdivsong = document.getElementsByClassName('svgdivsong')[0]
                svgdivsong.innerHTML=`<svg stroke="currentColor" fill="#000" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"></path></svg>`
                setClick('false')

                audio.play() 
               
            }
            if (click === 'false') {
                let svgdivsong = document.getElementsByClassName('svgdivsong')[0]
                svgdivsong.innerHTML=`<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>`
                setClick('true')
                audio.pause()
              
                // audio.play = flase
            }
    }
    

    // 点击sleep
    const ReturnSleeppage = (e) => {
      
        props.history.push('/sleeppage')
    }

    // 点击restart
    const ReturnRestartpage = (e) => {
      
        // console.log('重启');
        props.history.push('/restartpage')
    }

    // 点击shut down
    const ReturnClosepage = (e) => {
      
        props.history.push('/closepage')
    }


      return (
            
        <div
            className='backimg'
            id='fullScreenContainer'
            style={{ backgroundImage: "url(" + require("../../assets/images/wallpaper-day.jpg").default + ")",  }}
            onClick={(e)=>{closeWindow(e)}}
        >
              <div className='homepagefull' >
            <div className='nightwind-prevent'>
                <div className='sign flex flex-row items-center'>
                        <div
                            className=' ipone-icon flex-row inline-flex'
                            onClick={ (e)=>{OpenPopUpWindow(e)}}
                            // click={click}
                            name='iphone'
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
                    </div>
                    <span className='font-semibold'>Bear</span>
                </div>

                    {/*点击iPhone弹窗  */}                          
                <div  className='popupwindowiphone none' onClick={(e)=>{stopPropagation(e)} }  >
                    <ul className='pop1'>
                        <li>About This Mac</li>
                    </ul>
                    <ul className='pop2'>
                            <li>System Preferences...</li>
                            <li>App Store...</li>
                    </ul>
                    <ul className='pop3'>
                        <li>Recent Items</li>
                    </ul>
                    <ul className='pop4'>
                        <li>Force Quit...</li>
                    </ul>
                    <ul className='pop5'>
                            <li onClick={(e)=>{ReturnSleeppage(e)}}>Sleep</li>
                            <li onClick={(e)=>{ReturnRestartpage(e)}}>Restart...</li>
                            <li onClick={(e)=>{ReturnClosepage(e)}}>Shut Down...</li>
                    </ul>
                    <ul className='pop6'>
                            <li onClick={(e)=>{ReturnLockScreen(e)}}>Lock Screen</li>
                            <li onClick={(e)=>{Logout(e)}}>Log Out</li>
                    </ul>
                      </div>
                   
                       
                       
                    

                <div className='various-icons flex flex-row justify-end items-center '>
                    <div className='electricity inline-flex flex-row'>
                            <span className='mt mt-1' >100%</span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z" clip-rule="evenodd"></path><path d="M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z"></path></svg> 
                        
                    </div>
                        <div
                            className='wifi inline-flex flex-row '
                            onClick={(e) => { OpenPopUpWindow(e) }}
                            name = 'wifi'
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                    </div>
                    <div
                            className='search inline-flex flex-row'
                            onClick={(e) => { OpenPopUpWindow(e) }}
                            name = 'search'
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
                        {/* <img src={search} alt="" /> */}
                    </div>
                    <div
                            className='screen-brightness inline-flex flex-row'
                            onClick={(e) => { OpenPopUpWindow(e) }}
                            name='brightness'
                        >
                        <img src={brightness} alt="" />
                    </div>

                    {/* 点击亮度调节弹窗 */}
                        <div className='popupwindowbrightness none' onClick={ (e)=>stopPropagation(e)}  >
                        
                        <div className="gridcontainer grid">
                                <div className=' control-grid p1 '>
                                    
                                    <div className='div1'>
                                        <div
                                            className='svgdiv popupwindowbrightnessswifivgdiv'
                                            onClick={(e) => { changeClick(e) }}
                                            style={{ backgroundColor: '#9ca3af40' }}
                                            name = 'wifi'
                                        >
                                        <svg className='wifisvg'  stroke="#999" fill={svgbgcwifi} stroke-width="0" viewBox="0 0 640 512" class="bg-gray-400 bg-opacity-25 text-gray-700 rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                                        </div>
                                  
                                        <div className='text'>
                                            <span className='wifitext'>Wi-Fi</span>
                                            <span className='wifistate'>Off</span>
                                        </div>
                                    </div>
                                    
                                    <div className='div2'>
                                        <div
                                            className='svgdiv'
                                            name='bluetooth'
                                            onClick={(e) => { changeClick(e) }}
                                        >
                                    <svg stroke={svgbluetoothstroke} fill={svgbgcbluetooth} stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="bg-blue-500 text-white rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>
                                        </div>
                                  
                                        <div className='text'>
                                            <span className='bluetoothtext'>Bluetooth</span>
                                            <span className='bluetoothstate'>Off</span>
                                        </div>
                                    </div>
                                    <div className='div3'>

                                        <div
                                            className='svgdiv'
                                            name='airdrop'
                                            onClick={(e) => { changeClick(e) }}
                                        >
                                    <svg stroke={svgairdropstroke} fill={svgbgcairdrop} stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="bg-blue-500 text-white rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                                    </div>
                                  
                                        <div className='text'>
                                            <span className='airdroptext'>AirDrop</span>
                                            <span className='airdropstate'>Off</span>
                                        </div>
                                    </div>
                            </div>
                                <div className=' control-grid p2   col-span-2'>
                                    <div className='svg lightsvgdiv' onClick={changelightsvg}>
                                    <svg stroke="#333" fill="#333" stroke-width="0" viewBox="0 0 512 512" class="text-gray-700 bg-gray-400 bg-opacity-25 rounded-full p-2" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path></svg>
                                    </div>
                                    <div className='text '>
                                        <span className='lighttext'>Light Mode</span>
                                    </div>
                                </div>

                                <div className=' control-grid p3 flex '>
                                <svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.041 10.5h5.918a3 3 0 00-5.918 0zM4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11zm4-8a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 3zm8 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 11a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM4.464 7.464a.5.5 0 01-.707 0L2.343 6.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z" clip-rule="evenodd"></path></svg>
                                    <span className='text'>Keyboard Brightness</span>
                                </div>
                                
                                <div className=' control-grid p4' onClick={changeSvgp4}>
                                    <div className='fullscreensvg'>
                                    <svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.5 1a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4A1.5 1.5 0 011.5 0h4a.5.5 0 010 1h-4zM10 .5a.5.5 0 01.5-.5h4A1.5 1.5 0 0116 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zM.5 10a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 010 14.5v-4a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v4a1.5 1.5 0 01-1.5 1.5h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>
                               </div>
                                    <span className='text fullscreentext'>Enter Fullscreen</span>
                                </div>
                            </div>

                            {/* display滑动条  */}
                        <div className=' control-grid p5 '>
                                <span className='text'>Display</span>
                                <div className='sliderdiv'>
                                    <div className='svgdiv'>
                                    <svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 512 512" class="text-gray-500" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path></svg>
                                    </div>
                                    <div className='rangeslider'>
                                        <div
                                            className='rangeslider_fill'
                                            style={{ width: displaysliderwidth}}
                                           
                                        ></div>
                                        <div
                                            className='rangeslider_handle'
                                            onMouseDown={(e)=>{Changedisplayslilder(e)}}
                                        >
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                             {/* sound滑动条  */}
                        <div className=' control-grid p6 '>
                            <span className='text'>Sound</span>
                                <div className='sliderdiv'>
                                    <div className='svgdiv'>
                                    <svg stroke="currentColor" fill="#333" stroke-width="0" viewBox="0 0 512 512" class="text-gray-500" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"></path><path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"></path><path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"></path></svg>
                                    </div>
                                    <div className='rangeslider'>
                                        <div className='rangeslider_fill'  style={{ width: soundsliderwidth}}></div>
                                        <div className='rangeslider_handle' onMouseDown={(e)=>{Changesoundslilder(e)}}></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 音乐播放 */}
                            <div className=' control-grid p7'>
                                 <audio
                                     id='audio'
                                    // src={songsrc}
                                    src={songsrc}
                                    loop
                                    autoplay
                                  Volume
                                >
                                    </audio>
                                <img src={song} alt="" />
                                <div className='song'>
                                    <span className='font-medium'>想去海边</span>
                                    <span className='text-xs'>夏日入侵企画</span>
                                </div>
                              
                                {/* 音乐播放的暂停/开始键 */}
                                <div
                                    className='svgdivsong'
                                    onClick={(e)=>{changeSvg(e)}}
                                >
                                    <svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>
                                  
                                </div>
                               
                        </div>
                    </div>

                        {/* 点击WiFi弹窗 */}
                        <div className='popupwindowwifi none' onClick={ (e)=>stopPropagation(e)}>
                            <div className='wifitext'>Wi-Fi</div>
                            <div className='icon'>
                            <Switch className='Switch' defaultChecked onChange={onChange} />
                            </div>
                        </div>

                       <span> {mytime }</span>
                        {/* <span>
                            
                    Thu May 20
                    </span>
                    <span>
                    9:35 PM
                    </span> */}
                </div>
                </div>
                
                {/* 点击搜索出现的弹窗 */}
                <div className='popupwindowsearch none' onClick={ (e)=>stopPropagation(e)} >
                    <div className='w-full'>
                        <div className='col-start'>
                            <SearchOutlined
                                className='search-svg'
                                style={{ width: '30px',height: '30px',fontSize:'28px', color: '#524e56',marginTop:'24px' }} />
                        </div>
                        <input
                            className='spotlight-input'
                            placeholder='Spotlight Search'
                            type="text"
                           
                            />
                    </div>
                </div>


            <div className='bottom' >
                <ul>
                    <li className='ml-end'>
                        <img src={launchpad} alt="" className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={bear} alt=""  className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={safari} alt=""  className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={vscode} alt="" className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={facetime} alt="" className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={terminal} alt="" className='willchange' />
                    </li>
                    <li className='ml-end'>
                        <img src={mail} alt="" className='willchange'/>
                    </li>
                    <li className='ml-end'>
                        <img src={github} alt="" className='willchange' />
                    </li>
                </ul>
            </div>
            
            </div>
            

            {/* 鼠标右键弹窗 */}
            <div
                id="desktoppop"
                style={{ display: 'none' }}
                className='refresh'
                onClick={(e)=>{stopPropagation(e)}}                >
                <ul>
                    <li onClick={Refresh} >刷新</li>
                    </ul>
            </div>
            
        </div>
        
       
    )
}


export default connect(
    state => ({ user: state.user }),
    {resetUser}
)(Lockscreen)