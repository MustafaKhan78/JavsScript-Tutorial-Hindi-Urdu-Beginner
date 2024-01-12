// Que => Create a function that takes an array of numbers and returns the second largest number.

 function secondLargest(arr) {
    return arr.sort((a,b) => b-a)[1];
 }





console.log(secondLargest([10, 40, 30, 20, 50]));

console.log(secondLargest([25, 143, 89, 13, 105]));

console.log(secondLargest([54, 23, 11, 17, 10]));