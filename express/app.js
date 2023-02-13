const express = require('express');
const app = express();
app.get("/about",function(req,res){
    res.send("Hello express js this is about page ")
});
app.get("/login",function(req,res){
    res.send("Hello express js this is login page ")
});
app.get("/home",function(req,res){
    res.send("Hello express js this is home page ")
});

app.listen(4000);