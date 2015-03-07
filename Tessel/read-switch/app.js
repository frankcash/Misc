var tessel = require('tessel'); // import tessel
var gpio = tessel.port['GPIO']; // select the GPIO port

gpio.digital.forEach(function (pin, i) {
  console.log('Value of digital pin', i, '=', pin.read());
});
gpio.analog.forEach(function (pin, i) {
  console.log('Value of analog pin', i, '=', pin.read() * pin.resolution, '/', pin.resolution);
});

// COMMON = 18 ; G5 ; BLUE
// NORMALLY CLOSED = 19 ; G3 ; GREEN
// NORMALLY OPEN = 20 ; G4 ; RED


// var COMMON = gpio.pin['G5']; // on GPIO, can be gpio.digital[0] through 5 or gpio.pin['G3'] through ‘G6’
// COMMON.output(1);

var myPin = gpio.pin['G4']; // on GPIO, can be gpio.digital[0] through 5 or gpio.pin['G3'] through ‘G6’
myPin.output(1);
// gpio.pwmFrequency(980);

// myPin.pwmDutyCycle(1.0); // set the pin to be on 60% of the time

function foo(){


  console.log('Reading pin:', myPin.rawRead());

  foo();
}

setTimeout( foo() , 3000);



// myPin.readPulse('low', 3000, function (err,pulse_len) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
// });
