const prompt = require('prompt-sync')();

function passwordRetry() {

let correctPassword = "python";
let attempts = 0;

while (attempts < 3) {

    let password = prompt("Enter password:");
    if (password === correctPassword) {
        console.log("Success!");
        break;
    } else {
        console.log("Try again!");
        attempts++;

        if (attempts === 3) {
            console.log("Locked out!");
        }
    }
}
}

console.log(passwordRetry())

