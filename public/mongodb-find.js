//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('metallicaDB');
    //db.collection('TradeData').find().toArray().then((docs)=> {
     //db.collection('TradeData').find({'trades.manager.name':'Jr'}).toArray().then((docs)=> {
      db.collection('TradeData').find({'trades':{$elemMatch:{'manager.name':'Jr'}}}).toArray().then((docs)=> {
      console.log('metallicaDB');
      console.log(JSON.stringify(docs,undefined,2));
      
    },(err)=>{
      console.log('Unable to fetch metallicaDB',err);
    });
    
    //client.close();
});


