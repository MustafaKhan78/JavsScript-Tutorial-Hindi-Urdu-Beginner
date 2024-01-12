// objects prectice part => 1
const a = {
    fname : "mustafa",
    lastname : "khan",
    age : 17,
    fullname : function() {
        return this.fname + " " + this.lastname
    },
    living : {
        "city" : "jodhpur",
        "jagah" :  "piro ka challa"
    }
}
console.log(a);
console.log(a.living.jagah);

// object part => 2
const b = new Object();
b.fname = 'mustafa';
b.lname = "khan";
b.age = 17;
console.log(b);
console.log(b.fname);

// Array of objects
let student = [
    {name : "mustafa", umar : 17},
    {name : "yunus", umar : 18}
];
console.log(student);
for(let c = 0; c < student.length; c++){
    console.log(student[c].name + " : " + student[c].umar);
}

// const with array and objects
const d = {
    name : "mustafa",
    age : 17
};
console.log(d);
d.name = "ayan"
console.log(d);

const e = ["mustafa","uzma","lily","nabeel"];
console.log(e);
e[3] = "ayaan";

console.log(e);


// for in loop 
const obj = {
    name : "mustafa",
    age : 17,
    id : "mustafa_khan_70",
    school : "sumer pustikar"
};

for(const key in obj) {
    console.log(key +  " : " + obj[key]);
};

// array map function
 const num = [1,2,3,4,5,6,7,8,9,10];
  num.map(function(im) {
    console.log(im * 22);
  })