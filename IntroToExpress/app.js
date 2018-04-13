var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi There!!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye");
});

app.get("/dog", function(req,res){
    res.send("Wang!!!");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Sever has started!");
});