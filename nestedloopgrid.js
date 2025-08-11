function nestedLoopGrid() {

for (let index = 1; index <= 5; index++) {
let numbers = "";
for (let j = 1; j <= 3; j++) {
        numbers += (index - 1) * 3 + j + " ";
}
    console.log(numbers);
}
}

console.log(nestedLoopGrid())
