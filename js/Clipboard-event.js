let target = document.getElementById("myinput");
let box = document.getElementById("box");

target.addEventListener("copy",function(){
    console.clear();
    console.log("you copied text");
    target.style.backgroundColor = "teal"
})

target.addEventListener("cut",function(){
    console.clear();
    console.log("you cut text");
    target.style.backgroundColor = "crimson"
})

target.addEventListener("paste",function(){
    console.clear();
    console.log("you paste text");
    target.style.backgroundColor = "tan"
})

box.addEventListener("copy",function() {
    box.style.background = "gold"
});