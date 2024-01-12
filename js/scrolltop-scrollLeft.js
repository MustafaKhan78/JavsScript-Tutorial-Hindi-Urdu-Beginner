const target = document.getElementById("box");
target.addEventListener("scroll",() => {
    console.clear();
    console.log(target.scrollTop);
    console.log(target.scrollLeft);
})