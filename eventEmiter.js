/* M-1
var fs = require('fs');
var rs= fs.createReadStream('./demo.txt')
rs.on('open',function(){
    console.log('demo file is open with resd stream ');
})
*/

var events = require('events');
var eventEmitter=new events.EventEmitter()
eventEmitter.on("speak",function(name){
    console.log(name,"is speaking");
})

eventEmitter.emit("speak","peter");