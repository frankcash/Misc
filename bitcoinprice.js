// scrapes info from http://bitcoincharts.com/

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res){
  res.send('string string string');
});

app.listen(3000);
