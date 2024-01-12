
            //   string method prectice

// length and tolowercase or touppercase
const a = "mustafa is a great men is"
const b = a.length
console.log(b);

const c = a.toLocaleLowerCase()
console.log(c);
const d =a.toUpperCase()
console.log(d);

// includes method
const e = a.includes("mustafA")
console.log(e);

// startswith amd endswith method
const f = a.startsWith("mustafa")
console.log(f);

const g = a.endsWith("men")
console.log(g);

// search and match method
const h = a.search("is")
console.log(h);

const i = a.match(/is/g)
console.log(i);

// indexof and lastindexof method
const j = a.indexOf("is")
console.log(j);

const k = a.lastIndexOf("is")
console.log(k);

// replace and trim method 
const l = a.replace("mustafa","ayaan")
console.log(l);
// space hatane ke liye kaam aata hai trim 
const m = a.trim();
console.log(m);

// ChartAt and charcode or fromcharcode
const aa = a.charAt(24);
console.log(aa);

const bb = a.charCodeAt(0);
console.log(bb);


const cc = String.fromCharCode(45);
console.log(cc);

// concat and split
const a2 = "hello"
const a3 = "world"
const dd = a.concat(" ",a2, " ",a3);
console.log(dd);

const ee = a.split("a")
console.log(ee);


// repeat and slice
const ff = a.repeat(10)
console.log(ff);
const hh = a.slice(1)
console.log(hh);
// substr and subtring 
const ii = a.substr(0,8)
console.log(ii);
const jj = a.substring(2,7)
console.log(jj); 

// toString and valueof
const aaa = 50;
const kk = aaa.toString()
console.log(kk + " " + 20);
const mm = a.valueOf()
console.log(mm);