var express = require('express');
var bodyParser = require('body-parser'); 

var {mongoose} =    require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {users} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((result)=>{
        res.send(result);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});


















/* 

var newTodo = new Todo({
   text:'cook dinner' 
});

newTodo.save().then((res)=>{
    console.log('Saved Todo',res)
},(e)=>{
    console.log('Unable to save to Todo');
}); */

/* var Todo2 = mongoose.model('Todo2',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:true
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newTodo = new Todo2({
    text:'   shreyansh jain   '
});

newTodo.save().then((res)=>{
    console.log('Data saved :',res);
},(e)=>{
    console.log('Unable to insert...');
}); */




/* var newtodo = new users({
    text:'   '
});

newtodo.save().then((res)=>{
    console.log('Data saved: ',res);
},(e)=>{
    console.log('Unable to insert...');
}); */