var request = require('request');

request({
	uri: 'https://flightaware.com/about/careers/apply?data=',
	method: 'POST',
	json:{
	"name":"Charles Cash",
	"email":"cfcash@mtu.edu",
	"urls:":"https://github.com/frankcash",
	"comment":"I also have a very nice site in a private repo I can provide code for upon request."
	}
}, function(error, response, body){
		console.log(body);
});
