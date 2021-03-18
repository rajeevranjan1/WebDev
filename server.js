var express = require('express');
var app=express();
//app.use(express.static(__dirname+ '/web-app'));

//Routing
app.get('/',function(req,res){
    res.send("Response from Server...<br>Hello...");
    
});
app.listen(3000,function(){
    console.log("Server is Running on Port 3000...");
});