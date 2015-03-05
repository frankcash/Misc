var tessel = require("tessel");

//truthy initial state = high
//false initial state = low
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function(){
	console.log("blinking");
	led1.toggle();
	led2.toggle();
}, 100);
