var http = require("http");
var data =[{
    name :"Jai",age :"20",email:"abc@email.com"},
  {  name :"Jai",age :"20",email:"abc@email.com"},
  {name :"Jai",age :"20",email:"abc@email.com"},
  {name :"Jai",age :"20",email:"abc@email.com"},
 { name :"Jai",age :"20",email:"abc@email.com"}
]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900)