import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './redux/store'


import Homepage from './containers/homepage/homepage'
import Lockscreen from './containers/lock-screen/lockscreen'
import Sleeppage from './components/sleep-page/sleep-page'
import Restartpage from './components/restart-page/restart-page'
import Closepage from './components/close-page/close-page'
import Login from './containers/login/login'
import Register from './containers/register/register'


import './assets/css/index.css'

// import 'antd/dist/antd.css'

ReactDOM.render(

  <Provider store={store}>
    
    <Router>
    <Route exact path='/' component={Lockscreen}></Route>
      <Route path='/homepage' component={Homepage}></Route>
      <Route path='/sleeppage' component={Sleeppage}></Route>
      <Route path='/restartpage' component={Restartpage}></Route>
      <Route path='/closepage' component={Closepage}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
   </Router>
   </Provider>
,
  document.getElementById('root')
);


