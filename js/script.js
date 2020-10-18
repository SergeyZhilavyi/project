"use strict";

/*function showFirstMessage() {
    console.log("Hello world!");
}

showFirstMessage();*/

//Второй вариант 
/*function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello world!");*/

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello world!");
console.log(num);