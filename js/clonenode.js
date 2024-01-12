const target = document.querySelector("#list1").children[0];
const copy = target.cloneNode(true);
console.log(copy);

document.querySelector("#list2").children[0].append(target);
// document.querySelector("#jk").append(target);