var express = require('express');
var http = require('https');
var cors = require('cors');
var request = require('request');
var cheerio = require('cheerio');

var app = express();
app.use(express.bodyParser());
app.use(cors());


function callbackForJSON(callback){
	request('https://news.ycombinator.com', function(error, response, html){
			if(!error && response.statusCode === 200){
				var metadataArray = [ ];
				var $ = cheerio.load(html);
				$('span.comhead').each(function(i, element){
				var a=$(this).prev(); //selects previous data
				var title=a.text(); // parses link title
				var url=a.attr('href'); // parses href attribute from "a" element

				var metadata = { // creates a new object
					title:title,
					url:url,
				};
				
				metadataArray.push(metadata); // pushes the object
				});
				callback(metadataArray);
			}
	});
}

app.get('/scrape', function(req,res) { // pushes the info to a sub url
	callbackForJSON(function(data){ // call back to the function
		res.send(data)
	});
})


app.listen(3000);

console.log("The server is now running on port 3000.");
