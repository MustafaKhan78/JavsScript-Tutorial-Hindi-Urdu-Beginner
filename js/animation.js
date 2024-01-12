let a = 0;
let id = setInterval(anim,800);

function anim() {
    a = a + 10;
    if (a === 100) {
        clearInterval(id)
    }else{
    let target = document.getElementById("test");
    target.style.marginBlockStart = a + "px"
    }
}


let b = 0;
let di = setInterval(min,800);

function min() {
    b = b + 10;
    if (b === 100) {
        clearInterval(di);
    } else {
        let get = document.getElementById("text");
        get.style.marginInlineStart = b + "px"
    }
}