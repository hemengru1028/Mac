const mongoose = require('mongoose')

var Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
   
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel