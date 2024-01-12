//         DOM CSS styling method

// style method
let element;
// element = document.querySelector("#header").style.backgroundColor = "crimson";
element = document.querySelector("#header").style.color = "tan";
element = document.querySelector("#content h2").style.color = "lightsalmon"
element = document.querySelector("#header").style.fontSize = "15px"

// className method
element = document.querySelector(".content").className = "ui";
console.log(element);

// claslist
document.querySelector("#header h1").classList.add("xyz");
element = document.querySelector("#header h1").classList;
console.log(element);

document.querySelector("#header h1").classList.remove("yz");
element = document.querySelector("#header h1").classList;
console.log(element);