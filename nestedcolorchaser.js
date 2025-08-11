const prompt = require('prompt-sync') ();

function nestedColorChaser() {

let color = prompt("Enter a color:");
if (color .toLowerCase() === "red"){

    for (let i = 1; i <= 3; i++) {
        console.log("Red is awesome!");
}
} else {
    console.log("I like red better!");
}
}

console.log(nestedColorChaser())
