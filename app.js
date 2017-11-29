var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var book = require('./routes/book'); 
var path = require('path');

app.use('/api/book', book);

app.listen('5000', function(){
    console.log('Port 5000 is openning');});