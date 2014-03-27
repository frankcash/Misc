fs = require('fs'); // imports modules

var content;

fs.readFile('sampleNumbers.txt', 'utf8', function(err,data){
	if(err){
		return console.log(err);
	}
	content = data;
	processFile(); // gives it call back
});

function processFile(){
	console.log(content[0]);
}
