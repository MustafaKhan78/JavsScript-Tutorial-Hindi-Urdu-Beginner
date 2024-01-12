// que =>Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    let a = Math.max(...arr);
    let b = Math.min(...arr);
    return [a,b];
};



console.log(minMax([1, 2, 3, 4, 5]));

console.log(minMax([2334454, 5]));

console.log(minMax([1]));