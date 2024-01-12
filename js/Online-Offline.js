let target = document.getElementById("box");


window.addEventListener("online",function(){
    target.innerHTML = "you are online"
    target.style.background = "crimson"
});

window.addEventListener("offline",function(){
    target.innerHTML = "you are offline"
    target.style.background = "tan"
});




if (navigator.onLine) {
    console.log("Online");
}else{
    console.log("offline");
};