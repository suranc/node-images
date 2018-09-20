var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/images/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/images/*",function(req,res){
  res.sendFile(__dirname+req.path);
});


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(2000,function(){
  console.log("Live at Port 2000");
});

