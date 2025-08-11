const prompt = require('prompt-sync')();

function pinEntrySystem() {
const pin = "1234";
let attempts = 0;

while (attempts < 3) {
let guess = prompt("Enter your PIN:");

if (guess === pin) {
console.log("Access granted!");
        break;

} else {
console.log("Try again!");
attempts++;

        if (attempts === 3) {
console.log("Locked!");
}
}
}
}
console.log(pinEntrySystem())

