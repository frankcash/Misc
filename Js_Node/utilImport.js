import {capitalize, wordCount} from "./utils";
import {get_line} from "./readData.js";

console.log(capitalize("foo"));
console.log(wordCount("f\no f"));


get_line('./sampleNumbers.txt', 0, function(err, line){ // calls the function on the defined file
  console.log('The line: ' + line);
});
