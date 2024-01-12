// const newelement = document.createElement("li");
// const newtext = document.createTextNode("boom");
// newelement.appendChild(newtext);

const target = document.getElementById("list")
const oldelement = target.children[1];

// target.replaceChild(newelement,oldelement);

target.removeChild(oldelement)

// console.log(oldelement);