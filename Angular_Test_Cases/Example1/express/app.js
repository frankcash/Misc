var express = require('express');
var http = require('https');
var cors = require('cors');

var app = express();
app.use(express.bodyParser());
app.use(cors());


var data = [
	{"firstName" : "Jeff", "lastName" : "Winger"},
	{"firstName" : "Troy", "lastName" : "Barnes"},
	{"firstName" : "Britta", "lastName" : "Perry"},
	{"firstName" : "Abeeed", "lastName" : "Perry"}
	];

app.get('/users', function(req, res){
	res.send(data);
});
app.post('/users', function(req, res){
	data.push(req.body);
	res.send(data);
});


app.listen(3000);

console.log("The server is now running on port 3000.");
