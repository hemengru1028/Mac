import React, { useState}from 'react';
import { Form, Input, Button,message} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';


import '../../assets/css/login.css'
import {login} from '../../redux/actions'

const FormItem = Form.Item;
function Login(props) {


    const [username, setUsername] = useState('');
    const [ password , setPassword ] = useState('');

  const  onFinish = () => {

      
     
         if (!username || !password) {
           return message.error('未输入用户名或密码')
         }
     

    props.login({ username, password })

    
    }
  let history = useHistory()
  
  const { msg } = props.user
  // 登录成功后跳转到登录页面
  if (msg === '登录成功!') {
    // props.history.push('/homepage')
    history.push('/homepage')

   }
  
    return (
        <div className='loginForm'>
        <div className='auth-form-header'>
        <h1 className='login-title'>Sign in</h1>
        </div>
        
        {msg ? <div className='error-msg'>{msg}</div> : null}
<Form
name="normal_login"
className="login-form"
initialValues={{
remember: true,
      }} 
onFinish={onFinish}
>
<FormItem
// name="username"
rules={[
  {
    required: true,
    message: '请输入用户名！',
  },
        ]}        
>
        <Input
          defaultValue={username}
          name="username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          // defaultValue={username}
          onChange={(e)=>{setUsername(e.target.value)}} />
</FormItem>
            
<FormItem
// name="password"
rules={[
  {
    required: true,
    message: '请输入密码！',
  },
        ]}
 
>
        <Input
     defaultValue={password}
  prefix={<LockOutlined className="site-form-item-icon" />}
  type="password"
          placeholder="Password"
          name='password'
          // defaultValue={password}
          onChange={(e)=>{setPassword(e.target.value)}}   
/>
</FormItem>


<FormItem>
<Button type="primary" htmlType="submit" className="login-form-button"  >
  登录
</Button>
<div className='register-prompt'>
  <p>没有账号?
 {/* <a href='/register' className='register-text'>去注册</a> */}
 <Link to='/register'>去注册</Link>                      
  </p>
         
</div>
</FormItem>
</Form>
    </div>
    )
}

export default connect(
  state => ({user:state.user}),
  {login}
)(Login)