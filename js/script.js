"use strict";

const options = {
  time: 'winter',
  lenght: 5,
  climate: 'is cold',
  features: {
     ice: 'slippery',
     snow: 'white'
  }

};
//С помощью метода Object.keys узнаём длину объекта
console.log(Object.keys(options).length); //4

//console.log(options.features.ice); //slippery
//Удаляем одно свойство из объекта
/*delete options.features.snow;
console.log(options);*/

//Перебераем свойства объекта
/*for (let key in options) {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
}*/
//Выведет:
/*Свойство time имеет значение winter
Свойство lenght имеет значение 5
Свойство climate имеет значение is cold
Свойство features имеет значение [object Object]*/

//Решаем проблему корректного вывода вложенного объекта

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
//Выведет:
/*Свойство time имеет значение winter
Свойство lenght имеет значение 5
Свойство climate имеет значение is cold
Свойство ice имеет значение slippery
Свойство snow имеет значение white*/ 