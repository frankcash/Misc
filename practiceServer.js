// sets up a very small http server
// to make it work type into your terminal "node practiceServer.js"
// go to http://localhost:8080/

var http = require('http');

http.createServer(function(request, response){  // starts a jank server

	response.writeHead(200); // gives it a successful status
	response.write("Doge is running.");
	setTimeout(function(){
		response.end("Doge is done.");
	}, 5000);
	
}).listen(8080);
