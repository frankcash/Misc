var express = require('express');
var cors = require('cors');
var request = require('request');


var app = express();
app.use(express.bodyParser());
app.use(cors());


app.get('/users', function(req, res){
  request('https://api.twitch.tv/kraken/streams/?game=DayZ&limit=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      console.log(info) // Print the google web page.
      res.send(info);
      console.log(info['_total']);
    }
  })
});

app.listen(3000);

console.log("The server is now running on port 3000.");
