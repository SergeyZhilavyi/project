"use strict";

/*const str = "test";
console.log(str.length); //4

const arr = [1 ,2 ,4 ,5 ,7];
console.log(arr.length); //5 */

/*const str = "test";
const arr = [1 ,2 ,4 ,5 ,7];
console.log(str[3]); //Выведет t  */

const str = "test";
console.log(str.toUpperCase());
//console.log(str.toLowerCase());
console.log(str); //TEST ,test

//const fruit = "Some fruit";
//console.log(fruit.indexOf("fruit")); // Выведет 5

const fruit = "Some fruit";
console.log(fruit.indexOf("q")); // Выведет -1

 // logg = "Hello world";
 //console.log(logg.slice(4, 8)); // Выведет o wo

 //const logg = "Hello world";
 //console.log(logg.slice(2, 10)); // Выведет llo worl

 //const logg = "Hello world";
 //console.log(logg.slice(2, 11)); // Выведет llo world 

 //const logg = "Hello world";
 //console.log(logg.slice(4)); // Выведет o world

 const logg = "Hello world";
 console.log(logg.slice(-4, -2)); // Выведет or

 //const gonta = "Hello gonta";
 //console.log(gonta.substr(6, 4)); //Выведет gont

 const gonta = "Hello gonta";
 console.log(gonta.substr(6, 3)); //Выведет gon

 //const num = 24.72;
 //console.log(Math.round(num)); //25

 const num = 24.2;
 console.log(Math.round(num)); //24

 // test = "14.4px";
 //console.log(parseInt(test)); //14 

 const test = "14.4px";
 console.log(parseFloat(test)); //14.4

 function createCounter() {
       let counter = 0;
   const myFunction = function() { 
         counter = counter + 3;
         return counter;
       };
       return myFunction;
     }
     const increment = createCounter();
    const c1 = increment();
    const c2 = increment();
    const c3 = increment();
    console.log('example increment', c1, c2, c3);