const per = prompt("what is your precentes");

if(per >= 80 && per <= 100){
    console.log("you are in marit");
}else if(per >= 60 && per < 80){
    console.log("you are in I");
}else if(per >= 45 && per < 60){
    console.log("you are in II");
}else if(per >= 33 && per < 45){
    console.log("you are in III");
}else if(per < 33){
    console.log("you are fail");
}else{
    console.log("please enter valid percent");
}

const a = 10;
const b = 2;
console.log(a === b);