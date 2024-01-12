// Que => Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    // return lastName + " ," + firstName
    return lastName.concat(", " + firstName);
};


console.log(concatName("First", "Last"));

console.log(concatName("John", "Doe"));

console.log(concatName("Mary", "Jane"));