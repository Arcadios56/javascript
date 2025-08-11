const prompt = require('prompt-sync')();

function primeNumberCheck() {

let number = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    
for (let index = 2; index < number; index++) {
if (number % index === 0) {
            isPrime = false;
            break;
}
}
}

if (isPrime) {
    console.log("Prime!");

} else {
    console.log("Not prime!");
}
}

console.log(primeNumberCheck())
