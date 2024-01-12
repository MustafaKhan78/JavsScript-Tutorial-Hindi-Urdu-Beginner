// chidren method
document.querySelector("#outer").children[1].style.background = 'crimson'
document.querySelector("body").children[0].style.background = 'lightsalmon'

let a = document.querySelector("body").children;

console.log(a);

// chidnodes method

let b = document.querySelector(".abc").childNodes;
document.querySelector(".abc").childNodes[1].style.background = "yellow"

console.log(b);