const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true
},
category:{
   type:mongoose.Schema.ObjectId,
   ref:"category"
},
user:{
    type:mongoose.Schema.ObjectId,
    ref:"user"
}
})

module.exports = mongoose.model('blog',blogSchema)
