// // day => 1   date => 28/7/2023

// // some and every method 
// const age = [10,20,30,40];
// const b = age.some(mustafa);
// function mustafa(age){
//     return age >= 10
// }
// console.log(b);

// const a = [30, 40, 50];
// const c = a.every(check);
// function check(a) {
//     return a >= 100
// }
// console.log(c);


// // include method

// const d = ["mustafa","ayan","yunus","aman"];
// console.log(d);
// const dd = d.includes("aman");
// console.log(dd);

// // indexof and lastindex of method
// const s = ["mustafa","yunus","mustafa","amaan","hussain",];
// const ss = s.indexOf("amaan");
// console.log(ss);

// const sss = s.lastIndexOf("mustafa");
// console.log(sss);

// // is array
// const r = ["mustafa"];
// if (Array.isArray(r)) {
//     console.log("this is true")
// }else {
//     console.log("this is false")
// };

// // slice and splic method 
// const k = ["mustafa","khan","yunus","panwar","iygyd2","sqysfsf"];
// const kk = k.slice(2, 3);
// console.log(kk);

//  k.splice(2, 4, "mustafa", "khan");
// console.log(k);


// // day => 2  date => 29/7/2023

// // delete and change

// const l = ["mustafa","amaan","tak","khan"];
// console.log(l);
// l[1] = 18;
// console.log(l);
// delete l[1];
// console.log(l);

// // sort and reverse
// const p =["b","c","d","a"];
// console.log(p);

// p.sort();
// console.log(p);

// p.reverse();
// console.log(p);
// // pop and push
// const n = ["no name","name","what","are"];
// console.log(n);

// n.pop();
// console.log(n);

// n.push(123);
// console.log(n);

// // shift and unshift
// const f = [12,13,14,15,16];
// console.log(f);

// f.shift()
// console.log(f);

// f.unshift("mustafa");
// console.log(f);

// // concat and join
// const j = ["first", "second",];
// console.log(j);

// const jj = j.concat("mustafa","khan");
// console.log(jj);

// const jjj = j.join(" / ");
// console.log(jjj);

// // day => 3   date => 30/7/2023


// // table of => 3 

// for(let v = 1; v <= 10; v++) {
//     console.log(v * 3);
// };
// console.log("<br>");


// // even number 

// for(let m = 1; m <= 10; m++) {
//     if (m % 2 == 0) {
//         console.log(m);
//     }
// };
// console.log("<br>");
// // odd number
// for(let g = 1; g <= 20; g++) {
//     if(g % 2 != 0) {
//         console.log(g);
//     }
// }

// // if else condition method
// const per = 46;

// if (per >= 80 && per <= 100) {
//     console.log("you are merit");
// }else if(per >= 60 && per < 79) {
//     console.log("you are first");
// }else if(per >= 46 && per < 59) {
//     console.log("you are second");
// }else if(per >= 33 && per < 45) {
//     console.log("you are thred");
// }else if(per < 33) {
//     console.log("you are fail");
// }else {
//     console.log("please enter valid percenteg");
// };

// // swich case method
// const how = 18;

// switch (true) {
//     case (how >= 1 && how <= 15):
//         console.log("child");
//         break;
//     case (how >= 16 && how < 30 ):
//         console.log("men");
//         break;
//     case (how >= 31 && how <= 50):
//         console.log("old");
//         break
//     default:
//         console.log("enter velid age please");
//         break;
// };


// // Day => 4  Date  => 31/7/2023

// // find and findindex method ?
// const ag = [10,20,30,40,50];
// const ga = ag.find(mustafa);
// function mustafa(at) {
//     return at >= 48;
// }
// console.log(ga);

// const hg = [70,80,90,100];
// const gh =hg.findIndex(must);
// function must(ms) {
//     return ms >= 98;
// }
// console.log(gh);
// // filter method ?
// const io = [20,30,40,50,60];
// const oi = io.filter(oo);
// function oo(aaram) {
//     return aaram >= 22;
// } 
// console.log(oi);

// // To string or value of and fill method ?
// const iu = ["mustafa","khan","yes"];
// iu.toString
// console.log(iu);
// iu.fill("okay");
// console.log(iu);

// // For each loop method ?
// const op = ["mustafa","khan",70];

// op.forEach(function(mitr,index) {
//     console.log(index + " < " + mitr);
// })

// // day => 5, date => 10/8/2023
// // string method

// // length and tolowercase or touppercase method ?

// // includes and startswich or endswich method ?

// // search and match method ?

// // indexof and lastindexof method ?

// // replace and trim method 


// function getFirstValue(arr) {
//     return arr[0];
// }
// console.log(getFirstValue([1,2,3,]));
// console.log(getFirstValue([80,5,100,]));
// console.log(getFirstValue([-500,0,50,]));

// function makePair(num1,num2) {
//     return [num1,num2]
// }

// console.log(makePair(1,2));
// console.log(makePair(51,21));
// console.log(makePair(512124,215));

// function drop(arr,n) {
//     return arr.slice(n);
// }
// console.log(drop([1,2,3],1));
// console.log(drop([1,2,3],2));
// console.log(drop([1,2,3],5));
// console.log(drop([1,2,3],0));



// function multiples(num1, num2) {
//     let a = [];
//     for (let i = 1; i <= num2; i++) {
//         a.push(num1 * i)
//     };
//     return a;
// };

// console.log(multiples(7, 8)) // 7 14 21 28 35

// function mul(num) {
//     let c = [];
//     for(let b = 1; b <= 5; b++){
//         c.push(num * b);
//     };
//     return c;
// };



// console.log(mul(7)); //7 14 21 28 35

// function indexMultiplier(arr) {
//     let b = 0;
//     for (let i = 0; i < arr.length; i++) {
//         b += arr[i] * i
//     };
//     return b;
// }


// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4) =  40

// console.log(indexMultiplier([-3, 0, 8, -6]));
// // (-3*0 + 0*1 + 8*2 + -6*3) = -2

// function indexMultiplie(arr) {
//     let b = 0;
//     for(let i = 0; i < arr.length; i++){
//         b += arr[i] * (i + 1);
//     };
//     return b;
// }


// console.log(indexMultiplie([4,5,-3]));
// // (4*1 + 5*2 + -3*3) = 5

// console.log(indexMultiplie([-1,-3,-7]));
// // (-1*1 + -2*2 + -3*3) = -28

// function multi(arr) {
//     let a = 0;
//     for(let i = 0; i < arr.length; i++){
//         a += arr[i] * (i + 5);
//     };
//     return a;
// };



// console.log(multi([10,15,20,25,-30]));
// //(10*5 + 15*10 + 20*15 + 25*20 + -30*25) 


// for(let c = 1; c <= 5; c++) {
//     for(let d = 1; d <= c; d++) {
//         document.write(c + " ");
//     }
//       document.write("<br>")
// }

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//       line += j + i - 1;
//     }
//     document.write(line);
//     document.write("<br>");
//   }


// const a = "mustafa khan 70"

// const b = a.toLocaleUpperCase();

// console.log(b);


// const a = "MUSTAFA KHAN 70"
// const b = a.toLocaleLowerCase();
// console.log(b);



// const a = "mustafa khan 70"
// const b = a.search("k");

// console.log(b);


// const a = "mustafa khan 70"
// const b = a.match("mustafa");

// console.log(b);



// const a = "mustafa khan 70"
// const b = a.trim("mustafa");

// console.log(b);




// const a = "mustafa khan 70"
// const b = a.replace("mustafa","ayan");

// console.log(b);