const prompt = require('prompt-sync')();

function guessTheAnimal() {
	let myAnimal = "dog";
let guess = prompt("Guess the animal:").toLowerCase();
if (guess === myAnimal) {
console.log("Correct! It's a dog!");
    
} else {
console.log("Nope, it's a dog!");
}
}

console.log(guessTheAnimal())
