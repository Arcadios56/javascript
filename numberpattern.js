const prompt = require('prompt-sync')();

function numberPattern() {

for (let index = 1; index <= 3; index++) {
    let numbers = "";
    for (let j = 1; j <= index; j++) {
        numbers += j + " ";
}
    console.log(numbers);
}
}

console.log(numberPattern())

