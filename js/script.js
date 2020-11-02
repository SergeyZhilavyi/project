"use strict";

/*const arr = [1, 4, 6, 8, 10];
arr.pop();
console.log(arr); //[ 1, 4, 6, 8 ]*/

/*const arr = [1, 4, 6, 8, 10];
arr.push(12);
console.log(arr); //[ 1, 4, 6, 8, 10, 12 ]*/
//const arr = [1, 4, 6, 8, 10];
/*for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}*/
/*for (let value of arr) {
  console.log(value);
}*/




/*const arr = [2, 3, 6, 8, 10];
arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});*/
/*0: 2 внутри массива 2,3,6,8,10
1: 3 внутри массива 2,3,6,8,10
2: 6 внутри массива 2,3,6,8,10
3: 8 внутри массива 2,3,6,8,10
4: 10 внутри массива 2,3,6,8,10*/

/*const str = prompt("", "");
const products = str.split(",");
console.log(products.join(' ; '));*/

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a , b) {
  return a - b;
} //[ 2, 8, 10, 13, 26 ]



