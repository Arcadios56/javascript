const prompt = require('prompt-sync')();

function simpleCalculator () {

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+ or -):");
if (operation === "+") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);

} else if (operation === "-") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
}
}

console.log(simpleCalculator())
