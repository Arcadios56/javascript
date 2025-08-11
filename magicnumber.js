const prompt = require('prompt-sync')();

function magicNumber() {
	let magicNumber = 42;
let guess = parseInt(prompt("Guess the magic number:"));

if (guess === magicNumber) {
        console.log("You found the magic number!");
} else {
        console.log("Keep looking!");
}
}

console.log(magicNumber())

