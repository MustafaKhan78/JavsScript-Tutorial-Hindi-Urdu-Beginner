// que => Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1,arr2) {
    let a = Math.min(...arr1);
    let aa = Math.max(...arr1);
    let b = Math.max(...arr2);
    let bb =Math.min(...arr2);
    if (a > bb && aa < b) {
        return true;
    }
    return false;
};


// console.log(canNest([1, 2, 3, 4], [0, 6]));

// console.log(canNest([3, 1], [4, 0]));

// console.log(canNest([9, 9, 8], [8, 9]));

// console.log(canNest([1, 2, 3, 4], [2, 3]));
// function seriesResistance(arr) {
//     let sum = 0;
//     for(const key of arr){
//         sum += key
//     }
//     if(sum <= 1){
//         console.log(`${sum} ohm`);
//     }else {
//         console.log(`${sum} ohms`);
//     }
// }

// seriesResistance([1, 5, 6, 3]) 
// seriesResistance([16, 3.5, 6])
// seriesResistance([0.5, 0.5])