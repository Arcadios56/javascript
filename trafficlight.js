const prompt = require('prompt-sync')();

function trafficLight() {
let color = prompt("Enter color (red, green, or yellow):").toLowerCase();

if (color === "green") {
console.log("Go!");

} else if (color === "red") {
console.log("Stop!");

} else if (color === "yellow") {
console.log("Wait!");

}
}
console.log(trafficLight()) 




