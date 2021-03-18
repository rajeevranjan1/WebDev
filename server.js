var express = require('express');
var app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,'/web-app')));

//Routing
app.get('/',function(req,res){
    //res.render('index');
    
});
app.listen(3000,function(){
    console.log("Server is Running on Port 3000...");
});