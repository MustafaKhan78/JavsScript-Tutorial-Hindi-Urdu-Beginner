// DOM get method prectice

// innertext and innerhtml method
let element = document.getElementById("content").innerText;
console.log(element);

element = document.getElementById("content").innerHTML;
console.log(element);

// getAttribute and getAttributeNode
element = document.getElementById("content").getAttribute("id");
console.log(element);

element = document.getElementById("content").getAttributeNode("class");
console.log(element);

// Attributes
element = document.getElementById("content").attributes[0].name;
console.log(element);



               // DOM set method

// innertext and innerhtml method
let b = document.getElementById("header").innerText = "wow";
console.log(b);

b = document.getElementById("header").innerHTML = "<h1>wow</h1>";
console.log(b);


// setAttribute and Attribute or removeAttribute
document.getElementById("header").setAttribute("style","border:10px dotted yellow");

document.getElementById("header").removeAttribute("class");

document.getElementById("header").attributes[0].value = "header";






