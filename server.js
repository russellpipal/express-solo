var mainApp = require("./modules/app");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.listen(3000, function(){
  console.log("listening on port 3000");
});

app.post("/balance", function(req, res){
  var min = parseInt(req.body.min);
  var max = parseInt(req.body.max);
  res.send(mainApp.getBalance(min, max));
});
