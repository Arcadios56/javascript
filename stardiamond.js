function starDiamond() {
for (let index = 1; index <= 5; index++) {
    let stars = "";
    if (index <= 3) {
        for (let j = 1; j <= index * 2 - 1; j++) {
            stars += "* ";
}
} else {
        for (let j = 1; j <= (6 - index) * 2 - 1; j++) {
            stars += "* ";
console.log(stars);
}
}
}
    
}
console.log(starDiamond())