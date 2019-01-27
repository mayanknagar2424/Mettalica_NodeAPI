//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('metallicaDB');

    //Delete Many

    // db.collection('TradeData').deleteMany({'trades.manager.name':'Tr'}).then((result)=> {          
    //   console.log(result);      
    // },(err)=>{
    //   console.log('Unable to delete metallicaDB records / documents.',err);
    // });
    
    //delete One

    // db.collection('TradeData').deleteOne({'trades.manager.name':'Tr'}).then((result)=> {          
    //   console.log(result);      
    // },(err)=>{
    //   console.log('Unable to delete metallicaDB records / documents.',err);
    // });

    //findOneAnddelete (Returns the deleted object ID)
    db.collection('TradeData').findOneAndDelete({'trades.manager.name':'Tr'}).then((result)=> {          
      console.log(result);      
    },(err)=>{
      console.log('Unable to delete metallicaDB records / documents.',err);
    });
    
    
    //client.close();
});


