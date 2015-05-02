var wifi = require('wifi-cc3000');
//TODO: remove this before pushing
var network = 'foo'; // put in your network name here
var pass = 'bar'; // put in your password here, or leave blank for unsecured
var security = 'wpa2'; // other options are 'wep', 'wpa', or 'unsecured'
var timeouts = 0;

function connect(){
  wifi.connect({
    security: security,
    ssid: network,
    password: pass,
    timeout: 30 // in seconds
  });
}


wifi.on('connect', function(data){
  console.log("connect emitted", data);
});

wifi.on('disconnect', function(data){
  // wifi dropped, probably want to call connect() again
  console.log("disconnect emitted", data);
});

wifi.on('timeout', function(err){
  console.log("timeout emitted");
  timeouts++;
  if (timeouts > 2) {
    powerCycle(); // Resets wifi chip
  }else{
    connect();
  }
});

function powerCycle(){
  wifi.reset(function(){
    timeouts = 0; // reset timeouts
    console.log("done power cycling");
    setTimeout(function(){
      if (!wifi.isConnected()) {
        connect();
      }
    }, 20*1000);
  });
}


connect();
