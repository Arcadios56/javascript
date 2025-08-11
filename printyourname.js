const prompt = require('prompt-sync')();

function printYourName() {
let name = prompt("What's your name?");
for (let index = 1; index <= 3; index++) {
       
console.log(`${name}!`);
console.log(`${name}!`);
console.log(`${name}!`);
console.log(); 
}
}

console.log(printYourName())