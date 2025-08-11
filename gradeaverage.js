const prompt = require('prompt-sync')();

function gradeAverage() {

let total = 0;
for (let index = 1; index <= 5; index++) {
let score = parseInt(prompt(`Enter score ${index} (0-100):`));
	while (score < 0 || score > 100) {
score = parseInt(prompt(`Invalid score. Enter score ${index} (0-100):`));
}
    total += score;
}
let average = total / 5;
console.log(`Average: ${average}`);
}


console.log(gradeAverage())

