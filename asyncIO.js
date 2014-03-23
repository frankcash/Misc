// takes a filepath for the third arguement 
// counts the amount of times something appears.

var fs =require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  var count = contents.toString().split('var').length
  console.log(count-1)
})
