

import React, { useState, }from 'react';
import { Form, Input, Button, message } from 'antd'
import { Link, } from 'react-router-dom'
import { connect, } from 'react-redux'
import { useHistory } from 'react-router';

import '../../assets/css/register.css'
import {register} from '../../redux/actions'


const formItemLayout = {
    labelCol: {
      xs: {
        span: 18,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 18,
      },
      sm: {
        span: 18,
      },
    },
};

const tailFormItemLayout = {
wrapperCol: {
  xs: {
    span: 24,
    offset: 0,
  },
  sm: {
    span: 10,
    offset: 7,
  },
},
};


function Register(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  
 
  let history = useHistory()
  // const dispatch = useDispatch();

  const onFinish = () => {
    
        if (!username || !password || !confirmpassword) {
          return message.error('未输入用户名或密码')
        }
    props.register({ username, password })
    
    }
    
    // <Redirect to='/login'/>
  const { msg } = props.user
//  console.log(msg);
  // 注册成功后跳转到登录页面
  if (msg === '注册成功！') {
  //  props.history.push('/login')
    // <Redirect to='/login'/>
    history.push('/login')
    
  }
 

    return (
        <div className='RegisterForm'>
                <div className='auth-form-header'>
                <h1 className='register-title'>Sign up </h1>
        </div>
        
        {msg ? <div className='error-msg'>{msg}</div> : null}

          <Form
              {...formItemLayout}
      name="normal_login"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
     <Form.Item
        name="username"
        label="用户名"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: '请输入用户名！',
            whitespace: true,
          },
        ]}
      >
              <Input name='username' onChange={ (e)=>{setUsername(e.target.value)}}/>
      </Form.Item>
                    
     <Form.Item
        name="password"
        label="输入密码"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
        hasFeedback
      >
        <Input.Password name='password' onChange={ (e)=>{setPassword(e.target.value)}}/>
      </Form.Item>
              
        <Form.Item
        name="confirmpassword"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认密码！',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('两次输入密码不一致！'));
            },
          }),
        ]}
      >
        <Input.Password name="confirmpassword" onChange={ (e)=>{setconfirmpassword(e.target.value)}}/>
            </Form.Item>
            
       <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit" className='register-form-button'>
                注册
        </Button>
              

            </Form.Item>
            
            <div className='login-prompt'>
     
     <p>
                        已有账号? &nbsp;
    {/* <a href='/login' className='login-text'>去登录</a>  */}
      <Link to='/login'>去登录</Link> 
     </p>        
    </div>
              
    </Form>
            
      </div>
    )
}

export default connect (
  state => ({user: state.user}),
  {register}
)(Register)