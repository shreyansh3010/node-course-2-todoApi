var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    compeleted :{
        type: Boolean
    },
    completedAt:{
        type: Number  
    }
});

module.exports = {Todo};