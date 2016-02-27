var express = require('express');
var app = express();
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res){
  res.send('hello world');
});

var port = process.env.PORT || 8080;
var server = app.listen(port);