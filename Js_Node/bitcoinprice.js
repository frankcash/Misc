// scrapes info from http://bitcoincharts.com/
// need to find a way to "responsibly" update prices without restarting server
// doge coin:  http://dogepay.com
// litecoin: www.ltc-charts.com
// need to find standarized prices of dogecoin, litcoin, etc

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express(); // starts server

request('http://bitcoincharts.com/', function(error, response, page){
  var metadataArray = [ ]; // array
  if(!error && response.statusCode == 200){
    var $ = cheerio.load(page); // puts the html in the parser
    $('td.right').each(function(i, elements){ // sets the starting element
      var a=$(this);
      var price = a.text();
      metadataArray.push(price);
      app.get('/', function(req, res){
        res.send(JSON.stringify(metadataArray, null, 4)); // sends to server
      });
    });

  } // end of if statement
}); // end of function


app.listen(3000);
