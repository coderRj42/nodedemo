// so basicly in this js file i learned about nodemon to save the compilation time and refresh time 
var http = require("http");
http.createServer(function(req,res){
   res.write("Hello nodemon hELLO NODE")
   res.end() 
}).listen(4000)
// here and now onwrds i'll use nodemon filename.js insterd of node filename.js