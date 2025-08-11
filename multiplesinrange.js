const prompt = require('prompt-sync')();

function multiplesInRange() {

let start = parseInt(prompt("Enter start number:"));
let end = parseInt(prompt("Enter end number:"));
for (let index = start; index <= end; index++) {
    if (index % 4 === 0) {
        console.log(index);
}
}
}

console.log(multiplesInRange())