var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

console.log('Running Samsung Deploy Server on port 80 (mandatory)');

app.listen(80);