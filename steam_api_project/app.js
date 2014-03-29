var Steam = require('steam-webapi');

var steamAPIKey = "84E02F1B45E5C2655871C427A03D9883";

Steam.ready(steamAPIKey, function(err) {
    if (err) return console.log(err);

    var steam = new Steam({key: steamAPIKey});

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {
        console.log(data);
        // data -> { steamid: '76561197968620915', success: 1 }

        // Get the Player's TF2 Backpack items
        data.gameid = Steam.TF2;

        // getPlayerItems requires { gameid, steamid }
        steam.getPlayerItems(data, function (err, data) {
            console.log(data);
            // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}

        });
    });

});
