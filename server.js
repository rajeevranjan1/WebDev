var express = require('express');
var app=express();
const path=require('path');
//app.use(express.static(path.join(__dirname,'/web-app')));
var port = process.env.PORT || 3000;


//Routing
app.get('/',function(req,res){
    res.send("Working!!");
    
});
app.listen(port,function(){
    console.log(`Server is Running on Port ${port}...`);
});