const prompt = require('prompt-sync')();

function passwordChecker() {
	const password = "secret123";
let input = prompt("Enter password: ");
if (input == password) {
	console.log("Access granted! Welcome!");

} else {
	console.log("Access denied!");

}
}

console.log(passwordChecker())


