const prompt = require('prompt-sync')();

function guessWithHints() {

let answer = 25;
while (true) {
    let guess = parseInt(prompt("Enter a number guess:"));
    if (guess > answer) {
        console.log("Too high!");

} else if (guess < answer) {
        console.log("Too low!");

} else {
        console.log("Correct!");
        break;
}
}
}
console.log(guessWithHints())
