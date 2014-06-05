var express = require('express');
var http = require('https');
var cors = require('cors');

var app = express();
app.use(express.bodyParser());
app.use(cors());
app.set('port', 3000);

var data = [
	{"firstName" : "Jeff", "lastName" : "Winger"},
	{"firstName" : "Troy", "lastName" : "Barnes"},
	{"firstName" : "Britta", "lastName" : "Perry"},
	{"firstName" : "Abed", "lastName" : "Perry"}
	];

app.get('/users', function(req, res){
	res.send(data);
});
app.post('/users', function(req, res){
	res.send(req.body);
});
