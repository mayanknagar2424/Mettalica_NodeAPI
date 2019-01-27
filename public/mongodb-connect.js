const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('metallicaDB');

    db.collection('TradeData').insertOne({
        "trades" : [ {

    "manager" : {

      "name" : "Jr",

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
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert trade',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});


