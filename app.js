var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index.html');
});

app.listen(port);
console.log('Server started on port ' + port);

module.exports = app;
