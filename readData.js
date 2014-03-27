fs = require('fs');

fs.readFile('sampleNumbers.txt', 'utf8', function(err,data){
	if(err){
		return console.log(err);
	}
	content = data;
	processFile();
});
