        //  class list method

// add and remove or length or toggle or item method

let element;

document.getElementById("header").addEventListener("click",abc);

function abc() {
    // document.getElementById("header").classList.add("up");
    // document.getElementById("header").classList.remove("up");
    // document.getElementById("header").classList.toggle("op");
    // var a = document.getElementById("header").classList.length;
    // var b = document.getElementById("header").classList.item(0);
    var b = document.getElementById("header").classList.contains("abc");
    console.log(b);
}




