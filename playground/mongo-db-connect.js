//const MongoCLient = require('mongodb');

const {MongoCLient, ObjectID} = require('mongodb');


MongoCLient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to DB');

   /*  db.collection('Todos').insertOne({
        text:'Somthing todo 2',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    }); */

    /* db.collection('newCollection').insertOne({
        name:'shreyansh jain',
        age:21,
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
    });
 */
    db.close();
});