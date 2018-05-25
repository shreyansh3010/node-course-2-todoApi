var mongoose = require('mongoose');

var users = mongoose.model('Users',{
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

module.exports = {users};