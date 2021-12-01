
var express = require('express')
var router = express.Router()
const md5 = require('blueimp-md5') //md5加密的函数
const { UserModel } = require('../db/Models/userModel')
const filter = {password:0,__v:0}  //查询时过滤出指定的属性

// 用户注册
router.post('/register', (req, res) => {
    const { username, password } = req.body
    
    UserModel.findOne({ username }, (err, user) => {
        if (user) {
            res.send({code:1, msg:'此用户已存在'})
        }
        else {
            new UserModel({ username, password: md5(password) }).save((err, user) => {
                if (err) {
                    console.log(err);
                }
                else {
                      // 生成一个 cookie(userid: user._id), 并交给浏览器保存
                 res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 }) // 持久化 cookie, 浏`览器会保存在本地文件
                 // 返回包含user的json数据
                 const data = {username, _id:user._id,msg:'注册成功！'}  //响应数据中不要携带password
                 res.send({code:0 ,data})
                }
            })
        }
    })
})


// 用户登录
router.post('/login', (req, res) => {
    const { username, password } = req.body

    UserModel.findOne({ username, password: md5(password) }, filter, (err, user) => {
        if (user) {
            res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 }) // 持久化 cookie, 浏 览器会保存在本地文件

            const data = {username,_id:user._id}
            res.send({code:0, data,msg:'登录成功!'})
        }
        else {
            res.send({code:1, msg:'用户名或密码不正确'})
        }
    })
    
})





module.exports = router;