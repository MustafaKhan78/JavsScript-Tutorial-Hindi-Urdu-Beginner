document.getElementById("box").addEventListener("click",function(e){
    console.clear(); 
    // let ctr1 = e.ctrlKey;
    // if (ctr1) {
    //     console.log("you pressed control key");
    // } else {
    //     console.log("you not paressed key");
    // };

    // let shift = e.shiftKey;
    // if (shift) {
    //     console.log("you pressed shift key");
    // } else {
    //     console.log("you not  paressed shift key");
    // };

    // let alt = e.altKey;
    // if (alt) {
    //     console.log("you pressed alt key");
    // } else {
    //     console.log("you not  paressed alt key");
    // };

    let meta = e.metaKey;
    if (meta) {
        console.log("you pressed meta key");
    } else {
        console.log("you not  paressed meta key");
    };

    // is aap swich case se sath bhi kar skte hai 

    // or agar aap keybord key ke event lagate ho to inout box me lga skte ho
});