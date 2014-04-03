// scrapes info from http://bitcoincharts.com/

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

var metadataArray = [ ];

request('http://bitcoincharts.com/', function(error, response, page){
  if(!error && response.statusCode == 200){
    var $ = cheerio.load(page); // puts the html in the parser
    $('td.right').each(function(i, elements){
      var a=$(this).prev();
      var price = a.text();
      metadataArray.push(price);
    });

  } // end of if statement
}); // end of function



app.get('/', function(req, res){
  res.send(metadataArray);
});

app.listen(3000);
