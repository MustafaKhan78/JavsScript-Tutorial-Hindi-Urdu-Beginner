// document.getElementById("myinput").addEventListener("keydown",function(e){
//     console.clear();
//     // console.log(e.key);

// })
let left = 0;
let up = 0;

document.querySelector("body").addEventListener("keydown", function (e) {
    console.clear();

    switch (e.key) {
        case "ArrowRight":
            left = left + 5
            break;
        case "ArrowLeft":
            left = left - 5
            break;
        case "ArrowDown":
            up = up + 5
            break;
        case "ArrowUp":
            up = up - 5
            break;


        default:
            console.log("you paresed other key");
            break;
    }

    let target = document.getElementById("box");

    console.log(left);
    console.log(up);

    target.style.marginLeft = left +"px"
    target.style.marginTop = up + "px"

})