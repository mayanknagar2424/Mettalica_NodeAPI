
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/trade-mongoose');
var {TradeData} = require('./models/tradedata');

const {MongoClient,ObjectID} = require('./db/trade-mongoose')


//Middleware 
var app = express();
var cors = require('cors');
app.use(cors()); // Use this after the variable declaration

app.use(bodyParser.json());

//DELETE 
app.post('/deletetradedata',(req,res)=>{
    //console.log(req.body);
     
     MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
        
     if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('metallicaDB');
    var id = req.body.id;

     db.collection('TradeData').deleteOne({"_id":ObjectID(id)}, function(err,result){
        console.log('Item deleted');
        db.close();
     });
    });
});

//UPDATE
app.post('/updatetradedata',(req,res)=>{
    //console.log(req.body);
     var tradedata = new TradeData({      
            managerName: req.body.managerName,
            managerRoles: req.body.managerRoles,
            tradeDate : req.body.tradeDate,
            commodity : req.body.commodity,
            side : req.body.side,
            quantity : req.body.quantity,
            price : req.body.price,
            counterParty : req.body.counterParty,
            location : req.body.location,
            tradeStatus : req.body.tradeStatus,
            currency : req.body.currency,
            _links_self_href : req.body._links_self_href,
            _links_trade_href : req.body._links_trade_href
                     
   
     });

     MongoClient.connect('mongodb://localhost:27017/metallicaDB',(err,client)=>{
        
     if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('metallicaDB');
    var id = req.body.id;

     db.collection('TradeData').updateOne({"_id":ObjectID(id)},{$set : tradedata},function(err,result){
        console.log('Item inserted');
        db.close();
     });
    });
});

   

//POST
app.post('/inserttradedata',(req,res)=>{
    //console.log(req.body);
     var tradedata = new TradeData({      
            managerName: req.body.managerName,
            managerRoles: req.body.managerRoles,
            tradeDate : req.body.tradeDate,
            commodity : req.body.commodity,
            side : req.body.side,
            quantity : req.body.quantity,
            price : req.body.price,
            counterParty : req.body.counterParty,
            location : req.body.location,
            tradeStatus : req.body.tradeStatus,
            currency : req.body.currency,
            _links_self_href : req.body._links_self_href,
            _links_trade_href : req.body._links_trade_href
                     
   
     });

    tradedata.save().then((doc)=> {
        res.send(doc);
    },(e)=>{
        res.send(e);
    });
});

//GET
app.get('/tradedata',(req, res)=>{
  TradeData.find().then((tradedata)=>{
    res.send({tradedata});
  },
  (e)=>{
    res.status(400).send(e);
  })
});

//connection start
app.listen(3000,()=>{
    console.log('Trade server started on Port 3000');
});


// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var otherTodo = new Todo({
//   text: 'Something to do'
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

// // User
// // email - require it - trim it - set type - set min length of 1
// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// });

// var user = new User({
//   email: 'andrew@example.com   '
// });

// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
