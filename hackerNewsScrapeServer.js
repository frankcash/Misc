// sets up a http server
// and displays the info scraped from hacker news
// to make it work type "node testScrapeServer.js"
// go to http://localhost:8080/
//requires request, cheerio, express

var request = require('request');
var cheerio = require('cheerio');
var express = require('express');

var app = express(); /// creates server

var metadataArray = [ ];

request('https://news.ycombinator.com', function(error, response, html){
		if(!error && response.statusCode == 200){
			var $ = cheerio.load(html);
			$('span.comhead').each(function(i, element){
			var a=$(this).prev(); // selects previous data
			var rank=a.parent().parent().text(); // gets rank by parsing text two elements higher
			var title=a.text(); // parses link title
			var url=a.attr('href'); // parses href attribute from "a" element
			var subtext = a.parent().parent().next().children('.subtext').children(); // gets the subtext from the children
			var points = $(subtext).eq(0).text();
			var username = $(subtext).eq(1).text();
			var comments = $(subtext).eq(2).text();

			var metadata = { // creates a new object
				rank: parseInt(rank),
				title: title,
				url: url,
				points: parseInt(points),
				username: username,
				comments: parseInt(comments)
			};

			metadataArray.push(metadata); // pushes metadata into an array

			});
		
			}
});

app.get('/', function(req, res){ 
  res.send(JSON.stringify(metadataArray)); //sends this to the server
});

app.listen(8080);
