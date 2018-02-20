var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/like/:name", function(req,res){
    var name = req.params.name;
    res.render("like", {nameVar:name});
});

app.get("/posts", function(req, res) {
    var posts = [
       {post: "post1", author: "user1"},
       {post: "post2", author: "user2"},
       {post: "post3", author: "user3"}
       ];
    res.render("posts", {posts: posts});  
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server start");
});