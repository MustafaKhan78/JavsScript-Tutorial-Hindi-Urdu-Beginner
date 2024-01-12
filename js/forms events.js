document.getElementById("focus").addEventListener("focus",function() {
    this.style.background = "tan"
})
document.getElementById("cus").addEventListener("focus",function() {
    this.style.background = "tan"
})
document.getElementById("fo").addEventListener("focus",function() {
    this.style.background = "tan"
})

document.getElementById("focus").addEventListener("blur",function() {
    this.style.background = ""
})

document.getElementById("cus").addEventListener("blur",function() {
    this.style.background = ""
})

document.getElementById("fo").addEventListener("blur",function() {
    this.style.background = ""
})

document.getElementById("focus").addEventListener("input", function() {
    document.getElementById("test").innerHTML = document.getElementById("focus").value;
 });
 


