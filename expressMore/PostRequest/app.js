var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["tom","jerry","jack"];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.post("/addFriend", function(req, res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends"); 
});

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server start");
});