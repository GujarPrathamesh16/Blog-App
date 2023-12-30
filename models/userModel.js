const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, 'firstname is required']
    },
    lastName : {
        type : String,
        required : [true, 'lastname is required']
    },
    email : {
        type : String,
        required : [true, 'email is required']
    },
    password : {
        type : String,
        required : [true, "password is required"]
    }
}, {timestamps : true})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;
