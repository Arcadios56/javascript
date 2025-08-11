const prompt = require('prompt-sync')();

function favoriteNumber() {
const favoriteNumber = 7;
let guess = parseInt(prompt("Guess your favorite number: ").toLowerCase());
if (guess == favoriteNumber) {
	console.log("That's my favorite number!");

}else {
	console.log("Nice try, guess again!");
}
}

console.log(favoriteNumber())


