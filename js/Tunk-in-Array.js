//que => Create a function that takes two arrays and insert the second array in the middle of the first array.
function tuckIn(arr1,arr2) {
let counter = 1;
const lastValeue = arr1[1];
for(let i = 0; i < arr2.length; i++){
    arr1[counter] = arr2[i]
    counter++
}
return arr1.concat(lastValeue);
};


console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

console.log(tuckIn([15,150], [45, 75, 35]));

console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));