var http = require("http");
var uc = require("upper-case")
http.createServer(function(req,res){
    res.write(uc.upperCase("node web page"));
    res.end();
}).listen(4000);
var page =`
<h1>Hello Node JS</h1>
<input type ="text" /><br><br><input type ="text" /><br><br><input type ="text" />`