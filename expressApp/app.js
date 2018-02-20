var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hi there");
});

app.get('/dog', function(req, res){
    console.log("someone request dog")
    res.send("Hi dog");
});

app.get('/dog/:dogname', function(req, res){
    console.log("someone request some dog")
    res.send("Hi "+req.params["dogname"]);
});

app.get('*', function(req, res){
    // console.log("someone request dog")
    res.send("this is a * page");
});



app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server start");
});