document.getElementById("cus").addEventListener("change",function () {
    document.getElementById("test").innerHTML = document.getElementById("cus").value;
})

document.getElementById("focus").addEventListener("select",function() {
    console.log("you select a text");
})

document.getElementById("form").addEventListener("submit",function() {
    alert("you submit a form")
})

document.getElementById("focus").addEventListener("invalid",function() {
   alert("fill the correct email");
})