// que => 1,80,-500

// function getFirstValue(arr) {
//     return arr[0];
// };

//  console.log(getFirstValue([1, 2, 3]));
//  console.log(getFirstValue([80, 5, 100]));
//  console.log(getFirstValue([-500, 0, 50]));

// que => [1,2],[51,21],[512124,215]
// function makePair(num1,num2) {
//     return [num1,num2];
// }

// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));

// que => [2,3],[3],[],[1,2,3,];

// function drop(mu,n) {
//     return mu.slice(n);
// }


// console.log(drop([1, 2, 3], 1));
// console.log(drop([1, 2, 3], 2));
// console.log(drop([1, 2, 3], 5));
// console.log(drop([1, 2, 3], 0));

// que => 13 , -31, 0

// function getVoteCount(num) {
//     return num.upvotes - num.downvotes
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))

// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))

// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))


//que =>  [4,3,2,1], [4,3,2,9,9], []

// function reverse(op) {
//     return op.reverse();
// }

// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));


// [1, 2, 3, 4] , [3, 5, 7, 9], [0, -1, -2, -3]
// function incrementItems(pa) {
//     return pa.map(item => item + 1);
// }

// console.log(incrementItems([0, 1, 2, 3])); 
// console.log(incrementItems([2, 4, 6, 8])); 
// console.log(incrementItems([-1, -2, -3,-4])); 


// que => ?
// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0];
// let b = arr[1];

// console.log(a);
// console.log(b);

// console.log("<br>");

//que => Create a function that accepts an array and returns the last item in the array.

// function getLastItem(ar) {
//     return ar[2];
// };
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// que => Create a function that takes an array of numbers or letters and returns a string ?
// function arrayToString(rams) {
//     return rams.toString();
// };


// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// que => Create a function to concatenate two integer arrays
// function concat(ms,i) {
//     return ms.concat(i);
// };

// console.log(concat([1, 2, 5], [2, 6, 8,]));
// console.log(concat([7, 8,], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


// que => Create a function that takes an array and a string as arguments and returns the index of the string.
// function getindex(arr,str) {
//     for(let a = 0; a < arr.length; a++){
//         if (arr[a] === str) {
//         return a;
//         }
//     }
// }
// console.log(getindex(["hi", "edebit", "fgh", "abc"], "fgh"));
// console.log(getindex(["red", "blue", "Blue", "green"], "blue"));
// console.log(getindex(["a", "g", "y", "d"], "d"));
// console.log(getindex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));



// que => Given an index and an array, return the value of the array with the given index
// function valueAt(arr,o) {
//     return arr =  Math.floor(o + 1);
// }

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));

// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));

// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));



// que => Create a function that finds the index of a given item
// function search(arr,item) {
//     for(let a = 0; a <= arr.length; a++) {
//         if (arr[a] === item) {
//             return a;
//         }
//     };
//     if (!arr.includes("item")){
//         return -1;
//     } {
        
//     }
// };

// console.log(search([1, 5, 3], 5));

// console.log(search([9, 8, 3], 3)); 

// console.log(search([1, 2, 3], 4)); 

// que => Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// function sumArray(arr) {
//     let sum = 0;
//     for (let a = 0; a < arr.length; a++) {
//          sum += arr[a];
//     }
//     return sum;
// }


// console.log(sumArray([1, 2, 3, 4, 5]));

// console.log(sumArray([-1, 0, 1]));

// console.log(sumArray([0, 4, 8, 12]));


// que => Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr,item) {
//     for(let a = 0; a < arr.length; a++) {
//         if(!arr.includes(item)){
//             return -1;
//         };
//       if (arr[a]===item) {
//         return a;
//       };
//     };
// };
// console.log(search([1, 2, 3, 4], 3));

// console.log(search([2, 4, 6, 8, 10], 8));

// console.log(search([1, 3, 5, 7, 9], 11));

// que => Write a function to check if an array contains a particular number.
// function check(arr,el) {
//     if (arr.includes(el)) {
//         return true;
//     } else {
//       return false;  
//     };
// };


// console.log(check([1, 2, 3, 4, 5], 3));

// console.log(check([1, 1, 2, 1, 1], 3));

// console.log(check([5, 5, 5, 6], 5));

// console.log(check([], 5));

// que => Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// function arrBetween(num1,num2,arr) {
//     let sum = 0;
//   return arr.filter(elem => elem > num1 && elem < num2)
// };

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));

// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));

// console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// que => The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(ati){
//   return {
//     "needes" : ati * 0.5,
//     "wants" : ati * 0.3,
//     "saving" : ati * 0.2
//   }
// }

// console.log(fiftyThirtyTwenty(10000));

// console.log(fiftyThirtyTwenty(50000));

// console.log(fiftyThirtyTwenty(13450));

// que => Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
// function hasSameBread(arr1,arr2) {
//      if (arr1[0] === arr2[2] && arr2[0] === arr1[2]) {
//         return true;
//     }
//     return false;
// }

// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ));
  
// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));
  
// console.log(hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
// ));

// que => Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// function toNumberArray(arr) {
//     return arr.map(Number);
// }

// console.log(toNumberArray(["9.4", "4.2"]));

// console.log(toNumberArray(["91", "44"]));

// console.log(toNumberArray(["9.5", "8.8"]));


// que => Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
// function parseArray(arr) {
//     return arr.map(String);
// }

// console.log(parseArray([1, 2, "a", "b"]));

// console.log(parseArray(["abc", 123, "def", 456]));

// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));

// console.log(parseArray([]));


// que => Create a function that takes an array and returns the types of values (data types) in a new array.
// function arrayValuesTypes(arr){
//     for (let a = 0; a < arr.length; a++) {
//         return arr.map(lum => typeof lum);
//     }
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

// function tocenvert(arr) {
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         typeof arr[i] === "number" ? result.push(arr[i].toString()) : result.push(+arr[i])
//     };
//     return result;
// }

// que => There is an easy way to assign to array values to the nth index by using rest parameter syntax.
// const [head, tail] = [1, 2, 3, 4];

// console.log(head);
// console.log(tail);

// que => Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number
// function checkSquareAndCube(arr) {
//     return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
// };


// console.log(checkSquareAndCube([4, 8]));

// console.log(checkSquareAndCube([16, 48]));

// console.log(checkSquareAndCube([9, 27]));

// que => You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.
function totalAmountAdjectives(obj) {
    // return Object.values(obj).length;
    let counter = 0;
    for(const key in obj){
        if(obj[key]){
            counter++;
        }
    };
    return counter

    // let counter = 0;
    // for(const key in obj){
    //     if (obj[key]) {
    //         counter++
    //     }
    // }
    // return counter;
}

console.log(totalAmountAdjectives({ a: "moron" }));

console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));

console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));

// function length(s) {
//     return Object.values(s).length
// }


// console.log(length("Hello World"));

// console.log(length("Edabit"));

// console.log(length("wash your hands!"));



// que => Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// function halfQuarterEighth(n) {
//     return [n / 2, n / 4,n / 8];
// }


// console.log(halfQuarterEighth(6));

// console.log(halfQuarterEighth(22));

// console.log(halfQuarterEighth(25));


// // que =>Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
// function nSidedShape(n) {
//     let shape = '';
//    switch (n) {
//     case 3:
//         shape = 'Tiangle'
//         break;
//         case 1:
//             shape = 'Circle'
//             break;
   
//             case 9:
//                 shape = 'Nonegoen'
//                 break;
           
//     default:
//         break;
//    }
// return shape
// }

// console.log(nSidedShape(3));

// console.log(nSidedShape(1));

// console.log(nSidedShape(9));



// que => Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// function getMultipliedArr(arr) {
//     return arr.map(lum => lum*2);
// };

// console.log(getMultipliedArr([2, 5, 3]));

// console.log(getMultipliedArr([1, 86, -5]));

// console.log(getMultipliedArr([5, 382, 0]));

// que =>Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// function findDifference(a,b) {
// // const aSum = a.reduce((acc,crr) => acc * crr)
// // const bSum = b.reduce((acc,crr)=> acc * crr)
// // return Math.abs(aSum - bSum)
// };
// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]));

// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]));

// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]));

// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]));


// que =>Create a function that takes an array of words and transforms it into an array of each word's length.
//function wordLengths(arr) {
//     let lengths = [];
//     for (let word of arr) {
//         lengths.push(word.length);
//     }
//     return lengths;


// }

//console.log(wordLengths(["hello", "world"]));

//console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));

//console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));


// que => Create a function that takes a string and returns a string with spaces in between all of the characters.
// function spaceMeOut(str) {
//     return str.split('').join(' ');
// };

// console.log(spaceMeOut("space"));

// console.log(spaceMeOut("far out"));

// console.log(spaceMeOut("elongated musk"));


// que => You can assign variables from nested arrays like this:

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

// console.log(trans1);
// console.log(trans2);
// console.log(trans3);
// console.log(trans4);


// que => Given an array, rotate the values clockwise by one (the last value is sent to the first position).Check the examples for a better understanding.

// function rotateByOne(arr) {
//     // return arr.length > 1 ? [arr.pop(), ...arr] : arr;
//     const a = arr.splice(-1);
//     arr.unshift(...a);
//     return arr;
// }


// console.log(rotateByOne([1, 2, 3, 4, 5]));

// console.log(rotateByOne([6, 5, 8, 9, 7]));

// console.log(rotateByOne([20, 15, 26, 8, 4]));


