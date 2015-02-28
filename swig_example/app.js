var express=require('express');
var cons=require('consolidate');
var app=express();
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
 
app.get('/', function(req, res){
  res.render('index', {
	    title: 'Consolidate.js'
	  });
});

var users = [];
users.push({name:"Frank"});
users.push({name:"Chris"});

app.get('/users', function(req, res){
  res.render('users', {
	    title: 'Users',
	    users: users
	  });
});
 
app.listen(3000);
console.log('Express server listening on port 3000');
