const prompt = require('prompt-sync') ();

function factorCounter() {

let number = parseInt(prompt("Enter a number:"));
let factors = 0;
for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
        factors++;
}
}

console.log(`Factors: ${factors}`);
}

console.log(factorCounter())


