const prompt = require('prompt-sync')();

function petChooser() {
    let pet = prompt("What's your favorite pet?").toLowerCase();
    if (pet === "dog") {
        console.log("Woof! Dogs are awesome!");
} else {
        console.log("Cool choice, but I love dogs!");
}
}

console.log(petChooser())