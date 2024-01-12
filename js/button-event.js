 let target = document.getElementById("box").addEventListener("mousedown",function(e) {
    console.clear();
    let text = e.button;
    let color;

    switch (text) {
        case 0:
            color = "crimson";
            break;
        case 1:
             color = "tan";
             break;
        case 2:
             color = "gold";
            break;
    
        default:
            color = "teal";
            break;
    };

    e.target.style.backgroundColor = color;

    // console.log(text)
})