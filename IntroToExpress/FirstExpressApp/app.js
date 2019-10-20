var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!")
});

// "/bye" => "Goodbye"
app.get("/bye", function(req,res){
    res.send("Bye");
});

// "/dog" => "MEOW"
app.get("/dog", function(req,res){
    console.log("SOMEONE MADE A REQUEST TO /DOG")
    res.send("MEOW!!")
});

app.get("/r/:subredditName",function(req,res){
    var subreddit = req.params.subredditName;
    console.log(req.params)
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT")
});

app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
    console.log(req.params)
    res.send("Welcome to the comments page")
});

// Catch All
app.get("*", function(req,res){
    res.send("YOU ARE A STAR")
});

//Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("Server listening on PORT 3000...");
});