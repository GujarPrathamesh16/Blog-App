const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'title is required']
    },
    description : {
        type : String,
        required : [true, 'description is required']
    },
    image : {
        type : String,
        required : [true, 'image is required']
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'User',  //reference from collection named 'User'
        // User
        required : [true, 'user is required']
    }
}, {timestamps : true})

const blogModel = mongoose.model('Blog', blogSchema)  //'User'is the name of model stored in MongoDb.

module.exports = blogModel;
