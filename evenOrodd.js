const prompt = require('prompt-sync')();

function evenOrOdd() {
let number = parseInt(prompt("Enter a number:"));
	if(number % 2 == 0) {
	console.log("Even!");
} else {
	console.log("Odd!");

}
}
console.log(evenOrOdd())

