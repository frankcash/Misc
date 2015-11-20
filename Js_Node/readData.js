var fs = require('fs');

function get_line(filename, line_no, callback) {
    fs.readFile(filename, function (err, data) {
		      if (err){ throw err;}
		      var lines = data.toString('utf-8').split("\n");
		      if(+line_no > lines.length){
					       return callback('File end reached without finding line', null); // if no lines
					}
		      callback(null, lines[+line_no]); // callback
		    });
}

get_line("foo.dat", 8, function(data, info){
  console.log(info);
});
