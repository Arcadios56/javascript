const prompt = require('prompt-sync')();

function ageAndHeightCheck() {

let age = parseInt(prompt("Enter age in numbers:"));
let height = parseInt(prompt("Enter height in centimeter:"));

if (age >= 12) {
    if (height >= 140) {
        console.log("Ride allowed!");
    
} else {
        console.log("Too short!");
}
}
}
console.log(ageAndHeightCheck())

