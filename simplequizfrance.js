const prompt = require('prompt-sync')();

function simpleQuiz() {
let answer = "Paris";
let attempts = 0;

while (attempts < 3) {
let guess = prompt("What is the capital of France? ");

if (guess.toLowerCase() == answer.toLowerCase()) {
	console.log("Correct!");
break;

} else {
	console.log("Try again!");
	attempts++

if (attempts == 3){
console.log("Game-Over!")
}
}
}
}

console.log(simpleQuiz())




