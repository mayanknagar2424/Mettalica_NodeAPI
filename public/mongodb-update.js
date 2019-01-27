//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('metallicaDB');

    // db.collection('TradeData').findOneAndUpdate({
    //  _id:new ObjectID('5c152515ba3b06c2ada9288e')     
    // },{
    //   $set:{
    //     name:'mayank nagar....'}      
    // },{
    //   returnOriginal:false
    // }).then((result)=>{
    // console.log(result);
    // });   
    
    // db.collection('TradeData').findOneAndUpdate({
    //   _id:new ObjectID('5c1513e4ba3b06c2ada922f5')    
    //  },{
    //    $set:{
    //      trades:{manager:{name:'TTTTT'}}}      
    //  },{
    //    returnOriginal:false
    //  }).then((result)=>{
    //  console.log(result);
    //  });   

    db.collection('TradeData').findOneAndUpdate({
      _id:new ObjectID('5c1513e4ba3b06c2ada922f5')    
     },{
       $set:{
        
        "trades" : [ {

          "manager" : {
    
            "name" : "TTTTTrrrr",
    
            "roles" : [ "TRADER" ]
    
          },
    
          "tradeDate" : "2017-11-13T05:13:52.332+0000",
    
          "commodity" : "AL",
    
          "side" : "Buy",
    
          "quantity" : 100,
    
          "price" : 1860.15,
    
          "counterParty" : "Lorem",
    
          "location" : "BA",
    
          "tradeStatus" : "OPEN",
    
          "currency" : "USD",
    
          "_links" : {
    
            "self" : {
    
              "href" : "http://localhost:8080/api/trades/1"
    
            },
    
            "trade" : {
    
              "href" : "http://localhost:8080/api/trades/1"
    
            }
    
          }
    
        }
    ]
        
        }      
     },{
       returnOriginal:false
     }).then((result)=>{
     console.log(result);
     });   



    //client.close();
});


