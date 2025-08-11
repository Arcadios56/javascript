const prompt = require('prompt-sync')();

function gradeCalculator() {
let score = parseInt(prompt("Enter test score (0-100):"));
	if (score >= 90) {
    console.log("A!");

} else if (score >= 80) {
    console.log("B!");

} else if (score >= 70) {
    console.log("C!");

} else {
    console.log("F!");
}
}

console.log(gradeCalculator())
