var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/love/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title:"First post", author: "Susy"},
        {title:"Pet bunnies", author: "Charlie"},
        {title:"About Pomskies", author: "Colt"}
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
    console.log("Server is Listening")
});