document.addEventListener("click",function(e){
    console.clear();
    const x = e.pageX;
    const y = e.pageY;

    const x2 = e.clientX;
    const y2 = e.clientY;
    console.log("pagex :" + x);
    console.log("clientx : " + x2);

    console.log("pagey : " + y);
    console.log("clienty : "+ y2);
})