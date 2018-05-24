//const MongoCLient = require('mongodb');

const MongoCLient = require('mongodb');


MongoCLient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to DB');

    /* db.collection('Todos').find({completed:true}).toArray().then((doc)=>{
        console.log(JSON.stringify(doc,undefined,2));

    },(err)=>{
        if(err){
            console.log('Unable to fetch todos', err);
        }
    }); */

    /* db.collection('Todos').find().count().then((count)=>{
        console.log(count);

    },(err)=>{
        if(err){
            console.log('Unable to fetch todos', err);
        }
    }); */

    db.collection('Todos').find({text:'shreyansh'}).toArray().then((doc)=>{
        console.log(JSON.stringify(doc,undefined,2));

    },(err)=>{
        if(err){
            console.log('Unable to fetch todos', err);
        }
    });

    //db.close();
});