var fs = require('fs');

export default function get_line(filename, line_no, callback) {
    fs.readFile(filename, function (err, data) {
		      if (err){ throw err;}
		        let lines = data.toString('utf-8').split("\n");
		      if(+line_no > lines.length){
					        return callback('File end reached without finding line', null); // if no lines
					      }
		      callback(null, lines[+line_no]); // call back
		    });
}
