var mongoose = require('mongoose');
var TradeData = mongoose.model('TradeData', {
   
  // trades: [{
  //   manager : {
  //     name: [String],
  //     roles: [String]
  //   },
  //   tradeDate : String,
  //   commodity : String,
  //   side : String,
  //   quantity : Number,
  //   price : Number,
  //   counterParty : String,
  //   location : String,
  //   tradeStatus : String,
  //   currency : String,
  //   _links : {
  //     self : {
  //       href : [String]
  //     },
  //     trade : {
  //       href : [String]
  //     }
  //   }
  // }]
  
    managerName: String,
    managerRoles: String,
    tradeDate : String,
    commodity : String,
    side : String,
    quantity : Number,
    price : Number,
    counterParty : String,
    location : String,
    tradeStatus : String,
    currency : String,
    _links_self_href : String,
    _links_trade_href : String
  
  });

  module.exports = {TradeData};