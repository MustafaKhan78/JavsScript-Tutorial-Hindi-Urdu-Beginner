// date method

// todatestring and getdate method
const a = new Date();
console.log(a.toDateString());

console.log(a.getDate());

// getfullyear and getmonth method
console.log(a.getFullYear());

console.log(a.getMonth());

// getday and gethours method
console.log(a.getDay());

console.log(a.getHours());

// getminutes and getsecond or getmillisecond method
console.log(a.getMinutes());

console.log(a.getSeconds());

console.log(a.getMilliseconds());

// setdate and setfullyear method
a.setDate(20);
console.log(a);
a.setFullYear(2024);
console.log(a);

// setmonth and sethours method
a.setMonth(4);
console.log(a); 
a.setHours(4);
console.log(a);

// setminutes and setseconds or setmillisecond method
a.setMinutes(23);
console.log(a);
a.setSeconds(12);
console.log(a);
a.setMilliseconds(4);
console.log(a);

// prectice shortcut
const b = new Date();

console.log(b.getDay() + "/" + b.getMonth() + "/" + b.getFullYear());
const v = new Date();
console.log(v.toTimeString());