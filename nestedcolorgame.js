const prompt = require('prompt-sync')();

function nestedColorGame() {

const favoriteColor = "blue";
let attempts = 0;

while (attempts < 3) {
let guess = prompt("Guess the color:");
if (guess.toLowerCase() === favoriteColor) {
console.log("Correct!");
        break;
} else if (guess.toLowerCase() === "green") {
        console.log("Close!");
} else {
        console.log("Wrong!");
}
    attempts++;
}
}
console.log(nestedColorGame())
