const express = require('express');
const app = express();
const router = express.Router();
const checkURL=require('./routingmiddleware');
app.get("/login",function(req,res){
   // res.send("Hello express js this is login page ")
   res.sendFile(__dirname+"/login.html")
});
router.get("/home",checkURL,function(req,res){
    //res.send("Hello express js this is home page ")
res.sendFile(__dirname+"/home.html")
});
router.get("/about",checkURL,function(req,res){
    //res.send("Hello express js this is about page ")
    res.sendFile(__dirname+"/about.html")
});
app.use('/',router);
app.listen(4000);