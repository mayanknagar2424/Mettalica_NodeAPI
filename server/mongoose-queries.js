
var {mongoose} = require('./db/trade-mongoose')
var {TradeData} = require('./models/tradedata');

var id = '5c170ea490174e27c094dd9d';
TradeData.find({
    _id:id
}).then((tradedata)=>{
    console.log('tradedata',tradedata);
});


TradeData.findOne({
    _id:id
}).then((trdata)=>{
    console.log('trdata',trdata);
});


TradeData.findById(id).then((trddata)=>{
    if(!trddata){
        return console.log('Id Not Found');
    }
    console.log('trddata',trddata);
});