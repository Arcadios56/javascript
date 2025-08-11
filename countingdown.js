const prompt = require('prompt-sync')();

function countingDown() {
for(let index = 10; index >=1; index--){
	console.log(index)
}
}

console.log(countingDown())
