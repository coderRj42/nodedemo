module.exports = function(req,res,next){
    console.log("current route is ", req.originalUrl)
     next();
 }