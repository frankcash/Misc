// scrapes a site then
// counts the amount of times something appears

var request = require('request');
var cheerio = require('cheerio');

// change the url to one that you want to use
request('https://news.ycombinator.com/item?id=7449728', function(error, response, html){
		var count = "";
		var runningTotal = 0;
		if(!error && response.statusCode == 200){
			var $ = cheerio.load(html); // parses the whole page
			// change the selector to needed selector
			$('span.comment').each(function(i, element){
				var text = $(this).text(); // gets the text of the comment
				count = text.toString().split('the').length // change the .split(selection) to specific text you are looking for
				runningTotal += count - 1;
			}); // end of grabbing each ".comment"
			console.log(runningTotal);
		} // end of if statement
}); // end of request statement
