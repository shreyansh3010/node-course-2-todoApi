const MongoCLient = require('mongodb');
const {ObjectID} = require('mongodb');

MongoCLient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to DB');

    /* db.collection('Todos').deleteMany({text:'suvrat'}).then((result)=>{
        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({text:'shreyansh'}).then((res)=>{
        console.log(res);
    }); */

    /* db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
        console.log(res);
    }); */

   /*  db.collection('newCollection').deleteMany({name:'shreyansh jain'}).then((res)=>{
        console.log(res);
    }); */

    /* db.collection('newCollection').deleteOne({name:'sanamti'}).then((res)=>{
        console.log(res);
    }); */

    db.collection('newCollection').findOneAndDelete({
        _id: new ObjectID("5b0457ac6c5f3e004874a9b4")
      }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });
    //db.close();
});