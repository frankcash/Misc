// go to http://localhost:8080/

var http = require('http');

http.createServer(function(request, response){  // starts a jank server

	response.writeHead(200); // gives it a successful status
	response.write("Server is running.");
	
}).listen(8080);
