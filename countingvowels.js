const prompt = require('prompt-sync')();

function countingVowels() {
let word = prompt("Enter a word:");
let vowels = 0;
for (let index = 0; index < word.length; index++) {
    if ("aeiou".includes(word[index].toLowerCase())) {
        vowels++;
}
}
console.log(`Vowels: ${vowels}`);
}
console.log(countingVowels())

