const prompt = require('prompt-sync')();

function positiveOrnegative() {
let number = parseInt(prompt("Enter a number: "));
if(number > 0) {
	console.log("Positive!")
} else {
 	console.log("Negative! or zero!")
}
}
console.log(positiveOrnegative())
