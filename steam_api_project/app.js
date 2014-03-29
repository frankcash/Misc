var Steam = require('steam-webapi');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');

var metadataArray = [ ];
var steamAPIKey = "<key>";

var app = express(); // creates server

Steam.ready(steamAPIKey, function(err) {
    if (err) return console.log(err);

    var steam = new Steam({key: steamAPIKey});

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'howdoiskill'}, function(err, data) {
        console.log(data);
        // data -> { steamid: '76561197968620915', success: 1 }

        // sets the game ID
        data.gameid = Steam.DOTA2;

        // gets heroes
        steam.getHeroes(data, function (err, data) {
            console.log(data);
            metadataArray.push(data);
            // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}

        });
    });

});

app.get('/', function(req, res){
  res.send(JSON.stringify(metadataArray, null, 4)); // sends this to the server
});


app.listen(8080); // listens to port 8080
