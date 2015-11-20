// prints the users input
var result = "";

for (var i = 2; i < process.argv.length; i++){
	result += process.argv[i];
}

console.log(result);
