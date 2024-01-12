// que => Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    const b = s === "" ? true : false;
    return b;
};


console.log(isEmpty(""));

console.log(isEmpty(" "));

console.log(isEmpty("a"));