"use strict";

function first() {
  // Какие-то действия
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();
//Выведет: 2,1

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`); //сначала эта
  callback(); //Потом эта
}

learnJS('JavaScript', function(){

  console.log('Я прошёл этот урок !');

}); //Выведет: Я учу: JavaScript
//Я прошёл этот урок ! 



function learn(lang, callback) {
  console.log(`Я учу: ${lang}`); //сначала эта
  callback(); //Потом эта
}

function done() {

  console.log('Я прошёл этот урок !');
}

learn('JavaScript', done);

 //Выведет: Я учу: JavaScript
//Я прошёл этот урок ! 