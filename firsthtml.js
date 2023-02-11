var http = require("http");

http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type": "text/html"})
    res.write(page);
    res.end();
}).listen(4000);
var page =`
<h1>Hello Node JS</h1>
<input type ="text" /><br><br><input type ="text" /><br><br><input type ="text" />`