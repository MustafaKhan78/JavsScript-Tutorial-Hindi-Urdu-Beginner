let id = setTimeout(function() {
    let target = document.getElementById("test");
    target.style.marginInline = "80px"
},2000);

document.getElementById("text").addEventListener("click",function() {
    clearTimeout(id)
})
