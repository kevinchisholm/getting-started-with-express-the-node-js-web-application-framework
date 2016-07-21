var express = require('express');
var app = express();
var path    = require("path");


app.use(express.static(path.join(__dirname, 'www')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});