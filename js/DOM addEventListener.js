let element;
document.querySelector("#header").onclick = abc;


function abc() {
    document.querySelector("#header").style.background = "crimson"
}

document.getElementById("header").addEventListener("click", function() {
    this.style.background = "crimson"
})

document.getElementById("header").addEventListener("click", function() {
    this.style.border = "6px dotted yellow"
})

document.getElementById("header").addEventListener("dblclick", function() {
    this.style.backgroundColor = "tan"
    this.style.border = "3px solid crimson"
})

// document.getElementById("header").addEventListener("dblclick",abc);

// document.getElementById("header").addEventListener("mouseleave",xyz);

// function abc() {
//     this.style.background = "green"
// }

// function xyz() {
//     this.removeEventListener("dblclick",abc)
// }


