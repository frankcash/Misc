var express = require('express');
var cons = require('consolidate');
var app = express();

app.set('view engine', 'html');
app.engine('html', cons.swig); // sets template engine
app.set('views', __dirname + '/views'); // sets dir for views

app.use(express.static(__dirname + '/public'));

// sets up CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res){
  res.render('index',{ });
});



app.listen(3000);

console.log('Server started: http://localhost:3000/');
