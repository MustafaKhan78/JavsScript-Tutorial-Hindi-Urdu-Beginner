const windowSize = "left=200,top=200,width=500,height=320";
let moveWindow;
document.getElementById("open").addEventListener("click",function(){
    moveWindow = window.open('','', windowSize);
});

document.getElementById("move").addEventListener("click",function(){
    moveWindow.moveBy(400, 400);
})

document.getElementById("size").addEventListener("click",function(){
    moveWindow.resizeBy(50, 100)
})