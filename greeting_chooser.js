const prompt = require('prompt-sync')();

function greetingChooser() {
    let name = prompt("What's your name?");
    if (name === "Alex") {
	console.log("Hello, friend!");
    } else {
        console.log("Hi, stranger!");
    }
}

console.log(greetingChooser())