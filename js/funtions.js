
function mum(document) {
return document
}

mum('Mustafa');

function Hello(fname="yunus" , lname= "panwar", omn= " ") {
    document.write("Hello" +  "<br>" + fname + " " + lname + " " + omn  + "<br>");
}

sum(40 , 50);

Hello();
Hello();
Hello();
Hello("mustafa" , "khan " , "percentege");

function lum (a , b) {
    console.log(a + b + "<br>");
}



lum(20 , 40);

function sum(math,eng,sci,hindi,ss,san,) {
    const s = math + eng + sci + hindi + ss + san;

    return s;
}


function precentage(tt) {
    const per = tt /600 * 100;
    document.write(per);
}

const total = sum(39,64,36,46,42,51);
precentage(total);




function mus() {
    let a = "mustafa";
    console.log(a);
}

mus();

var c = 20;
function num() {
    console.log(c);
}

num();
console.log(c);


const ayy = [];
for(let k = 0; k < 3; k++) {
   ayy[k] = 'Musatakd'
}
console.log(ayy)


function sum(math,eng,sci,hindi,ss,san,) {
    const s = math + eng + sci + hindi + ss + san;
    return s
}


function precentage(tt) {
    const per = tt /600 * 100;
    return per
}

const tt = sum(39,64,36,46,42,51);
const resul = precentage(total);
console.log(resul)



function fn(name) {
  return name;
};

const obj = {
name : 'Danish'
}

console.log(fn.apply(obj))