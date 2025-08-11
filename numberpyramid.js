function numberPyramid() {

for (let index = 1; index <= 4; index++) {
let numbers = "";
for (let j = 1; j <= index; j++) {
        numbers += index + " ";
}
    console.log(numbers);
}
}

console.log(numberPyramid())