const MongoCLient = require('mongodb');
const {ObjectID} = require('mongodb');

MongoCLient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to DB');

    /* db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5b0695bb3b76d07ced9858ee')
    },{
        $set:{
            text:'shreyansh jain'
        }
    },{
        returnOrignal:false
    }).then((res)=>{
        console.log(res);
    });
 */
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b0695bb3b76d07ced9858ee')
    },{
        $inc:{
            age:2
        }
    },{
        returnOrignal : false
    }).then((res)=>{
        console.log(res);
    });


    //db.close();
});