const express = require('express');
var app = express();

//Middleware to transform data in the middle i.e. before sending the response
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
res.send({
name:'Mayank',
Profession:'Developement'
});
}
);

app.get('/help',(req,res)=>{
    res.send('How Can I Help You.');
    }
    );

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
