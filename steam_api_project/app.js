// this will pull data using the STEAM API and display it as JSON on a web server
//WEB API can only handle 100,000 calls


// sets up the modules
var Steam = require('steam-webapi');
var express = require('express');

// sets your key to var
var steamAPIKey = "<key>";

var app = express(); // creates server
var metadataArray = []; // initializes the array
function getInfo(callback){
  Steam.ready(steamAPIKey, function(err) {
      if (err) return console.log(err);

      var steam = new Steam({key: steamAPIKey});

      // Retrieve the steam ID from a steam username/communityID
      steam.resolveVanityURL({vanityurl:'howdoiskill'}, function(err, data) {
          // data -> { steamid: '76561197968620915', success: 1 }
          console.log(data);

          // sets the game ID to Dota2
          data.gameid = Steam.DOTA2;

          //could cache it
          //could have a timer to hit the page again and cache it again

          // gets heroes from Dota2
          steam.getHeroes(data, function (err, data) {
              console.log(data);  // {heroes: [ {name: 'npc_dota_hero_antimage', id:1} ... ]}

              // this array will be manipulatable by calling an index and then a property
              metadataArray.push(data); // sends it to an array so the JSON can be displayed on the page/used easier

              callback(metadataArray); // adds a callback
          });
      });
  });
}

app.get('/', function(req, res){
  // res.send(JSON.stringify(metadataArray, null, 4)); // sends this to the server
  getInfo(function(data){
    res.send(data) // sends the data to the server
  });
});


app.listen(8000); // listens to port 8000
