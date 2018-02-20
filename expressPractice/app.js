var express = require("express");
var app = express();
var zoo = {
    pig: "oink",
    cow: "moo",
    dog: "woof"
}

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my practice.")
});

app.get("/speal/:animal", function(req, res){
    res.send("The "+ req.params.animal + " says " + zoo[req.params.animal.toLowerCase()]);
});

app.get("/repeat/:word/:time", function(req, res) {
   var times = Number(req.params.time);
   var string = "";
   for(var i = 0; i<times;i++){
       string += req.params.word+"  ";
   }
   res.send(string);
});

app.get("*", function(req, res) {
   res.send("Page not found"); 
});

app.listen(process.env.PORT, process.env
.IP, function(){
    console.log("Server Start!")
});