// siblings nextelementsibling and previouselementsiblings
document.querySelector(".c").nextElementSibling.style.background = "crimson"
document.querySelector(".c").previousElementSibling.style.background = "tan"
let a = document.querySelector(".c").nextElementSibling;
let b = document.querySelector(".c").previousElementSibling;

console.log(a);
console.log(b);

// sibling nextsibling and previoussibling

let c = document.querySelector(".b").nextSibling;
let d = document.querySelector(".b").previousSibling;

console.log(c);
console.log(d);