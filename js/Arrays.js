
// // arrays tag


// // ul tag in arrays JS
// let ary = [100,20,30];
// let sum = 0;
// console.log("<ul>")
// for(let a = 0; a <= 2; a++){
//     console.log( "<li>" + ary[a] + "</li>");
//      sum += ary[a];
// }
// console.log("total: " + sum);
// console.log("</ul>");


// // new array funtion
// let arr = new Array(0);
// for(let k = 0; k < 1; k++) {
//     arr[k] = "mustafa";
// }

// for(let s = 0; s < 1; s++){
//     console.log(arr[s]);
// }


// // lum addition repeat
// let mus =[10,20,30];
// let lum = 0;
// for(let a = 0; a <= 2; a++){
//     console.log(mus[a]);
//     lum = lum + mus[a];
// }
// console.log("total of " + lum);


// // table on console.log
// let m = [
//     ["mustafa",17,"male","bca"],
//     ["yunus",17,"male","bca"],
//     ["yaasin",18,"male","bba"],
//     ["deepa",16,"female","sci"],
//     ["dipti",16,"female","sci"],
//     ["lily",16,"female","sci"]
// ];
// console.log("<table border='1px' cellspacink='1px' cellpaddink='3px' >")
// for(let s = 0; s < m.length; s++) {
//     console.log("<tr>")
//     for(let p = 0; p < m[s].length; p++) {
//         console.log( "<td>" + m[s][p] + "</td>");
//     }
//     console.log("</tr>");
// }
// console.log("</table>");



// // table on document.write
// let t = [
//     ["aaysha",23,"female","sci"],
//     ["mustafa",45,"male","commarce"]
// ];
// document.write("<table border='1px' cellspacink='2px'>");
// for(let j = 0; j < t.length; j++){
//     document.write("<tr>")
//    for(let o = 0; o < t[j].length; o++) {
//     document.write("<td>" + t[j][o] + "</td>");
//    }
//    document.write("</tr>");
// };

// document.write("</table>");



// // JS function

// // delete and change
// const h = ["mustafa",17,"male","bca"];

// console.log(h);

// h[1] = 18;
// console.log(h);

// delete h[1];
// console.log(h)

// // sort and reverse
// const k = ["mustafa","amaan","rizwan","aayan"];
// console.log(k)

// k.sort()
// console.log(k)

// k.reverse()
// console.log(k);
// // pop and push
// const y = ["haroon","raisa","kaisa"];
// console.log(y);

// y.pop();
// console.log(y);

// y.push("aayese");
// console.log(y);

// // shift and unshift
// const i = ["farook","amaisa","hisab"];
// console.log(i);

// i.shift();
// console.log(i);

// i.unshift("rasid");
// console.log(i);


// // concat and join
// const v = ["mustafa","yunus"];
// const l = v.concat("khan","panwar");
// console.log(l);

// const x = ["mustafa","yunus"];
// const u = ["khan","panwar"];
// const c = x.concat(u);
// console.log(c);
//  const j = c.join(" : ")
//  console.log(j);


// // slice and splice

// const e = ["sara","mumtah","mantsha","farhan","nabeel"];
// console.log(e);

// const d =e.slice(2 , 3);
// console.log(d);

// e.splice(3,0,"mustafa","ayan");
// console.log(e);


// // Array.isArray
// const g = 0;
// console.log(g);

// if(Array.isArray(g)){
//     console.log("this is true");
// }else{
//     console.log("this is false");
// };


// // indexof and lastindexof
// let z = ["mustafa", "ayan", "yunus", "mustafa", "shanawaz","ayan","yunus", "shanawaz"];

// let qq = z.indexOf("shanawaz",5);
// console.log(qq);

// let mustafa =  z.lastIndexOf("mustafa");
// console.log(mustafa);


// //Includs Method in it ans is true and false ;
// let zz = ["mustafa", "ayan", "yunus", "mustafa", "shanawaz","ayan","yunus", "shanawaz"];
// let rr = zz.includes("mustafa");
// console.log(rr);


// //some and every function
// let age = [10,20,30];
// let check = age.some(checkAdult); 
// console.log(check);  
// function checkAdult(age) {
//     return age >= 110;
// }


// let ages = [20, 40, 50, 60];
// let check2 = ages.every(chechAge);
// console.log(check2);
// function chechAge(ages) {
//     return ages >= 30;
// } 
// console.log("<br>");

// // find and findindex
// const mu = [12,15,29,20];
// const mum = mu.find(yahho);
// console.log(mum);
// function yahho(mustafa) {
//     return mustafa >= 18;
// } 
// const umm = mu.findIndex(baba);
// console.log(umm);
// function baba(para) {
//     return para >= 18;
// }

// // filter method
// const ii = [10,20,30,40,50];
// const iii = ii.filter(jago);
// console.log(iii);
// function jago(params) {
//     return params >= 28
// }

// // tostring or valueof and fill method 
// const jk = ["mustafa","khan","aman","tak"];
// jk.toString();
// console.log(jk);

// jk.fill("haa");
// console.log(jk);


// // for each loop
// const kj = ["tina","lily","shahina"];
// kj.forEach(function (value , index) {
//     console.log(index + " : " + value);
// });

// function remove(arr) {
//     arr.splice(3,1)
//     return arr;
// };
// console.log(remove([1, 2, 3, 4, 5]));