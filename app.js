var express = require('express');
var http = require('http');
var app = express();

var token = 'SECRET_TOKEN_f8ed84e8f41e4146403dd4a6bbcea5e418d23a9';
console.log('token: ' + token);

http.createServer(app).listen(8080, function () {
  console.log('express server started');
});
