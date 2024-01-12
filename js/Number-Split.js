// que => Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
function numberSplit(m) {
    if (m % 2 === 0) {
        const half = m / 2
        return[half,half]
    }else{
        const half1 = Math.floor(m / 2);
        const half2 = half1 + 1
        return[half1,half2];
    };
};



console.log(numberSplit(4));

console.log(numberSplit(10));

console.log(numberSplit(11));

console.log(numberSplit(-9));
