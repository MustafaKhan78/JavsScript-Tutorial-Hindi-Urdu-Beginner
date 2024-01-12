const target1 = document.getElementById("list1").children[0];
const target2 = document.getElementById("list2").children[2];

let equal = target2.isEqualNode(target1);

console.log(equal);