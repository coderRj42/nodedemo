const express = require('express');
const app = express();
app.use('/asserts',express.static('asserts'))
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res)
{
    data={email:'abc@xy.in',address:'delhi',skills:['java','nodemon','php','c','c++']}
    console.warn(req.params.name)
    res.render('profile',{name:req.params.name});
})
app.get("/",function(req,res)
{
    res.render('home',{name:req.params.name});
})
app.get("/login/",function(req,res)
{
    console.log(req.query)
    res.render('login',{name:req.params.name});
})
app.listen(4500);