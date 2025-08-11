const prompt = require('prompt-sync')();

function numberGuessingGame() {
	const secret = 8;
let guess = parseInt(prompt("Enter a guess: ").toLowerCase());
if (guess == 8) {
	console.log("Correct!");

} else {
	console.log("Try again!");

}
}

console.log(numberGuessingGame())