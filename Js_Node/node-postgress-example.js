var express = require('express');
var Pool = require('pg').Pool;

var app = express();

var config = {
  user: 'foo',
  password: 'foobar',
  database: 'bar',
  port: 5432
};

var pool = new Pool(config);

pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('INSERT INTO foo VALUES ($1)', ['1'], function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    // console.log(result.rows[0].number);
    //output: 1
  });
});


app.get('/', function (req, res) {
  res.sendStatus(200);
});


app.get('/listBar', function (req, res){

  pool.connect(function(err, client, done){
    if(err){
      res.sendStatus(500);
      return console.error('error fetching client from pool', err);
    }

    client.query('SELECT * FROM foo', function(err, result){
      done();

      if(err){
        res.sendStatus(500);
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
      res.sendStatus(200);
    });
  })


  // res.sendStatus(200);


})

console.log("now running");
app.listen(3000);
