function sumOfEvens() {

let sum = 0;
for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        sum += index;
}
}
console.log(`Sum of evens: ${sum}`);
}

console.log(sumOfEvens())

