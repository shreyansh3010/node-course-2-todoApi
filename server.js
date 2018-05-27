var express = require('express');
var bodyParser = require('body-parser'); 
var {ObjectID} = require('mongodb');

var {mongoose} =    require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {users} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;
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

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    
    Todo.findOneAndRemove(id).then((result)=>{
        res.send({result});
    },(e)=>{
        res.status(400).send(e);
    });

});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.send(404).send(); 
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.send(404).send();
        }
        res.send({todo});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(port,()=>{
    console.log('Started on port '+port);
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