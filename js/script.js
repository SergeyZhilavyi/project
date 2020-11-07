"use strict";

/*const obj = {
    a: 10,
    b: 5
};

const copy = obj;//Это ссылка на объект
copy.a = 15;
console.log(copy);
console.log(obj);*/

//{ a: 15, b: 5 }
//{ a: 15, b: 5 }

//***Способы создания копий для объекта***
//Способ 1. Пишем свою функцию
function copy(mainObj) {
    let objCopy = {};//Создаём пустую копию объекта
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];//Делаем копию всех свойств главного объекта
    }
        return objCopy;//Возвращаем копию объекта наружу, для работы с ним
}

//Протестируем нашу функцию
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
//Копируем объект, для создаём переменную newNumbers
const newNumbers = copy(numbers); //совершили клонирование
newNumbers.a = 15;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

//Результат: { a: 15, b: 5, c: { x: 7, y: 4 } }
// { a: 2, b: 5, c: { x: 7, y: 4 } }
//Протестируем код более тщательно
//и заметим одну особенность
//после newNumbers пишем newNumbers.c.x = 10
//Получаем: { a: 15, b: 5, c: { x: 10, y: 4 } }
//{ a: 2, b: 5, c: { x: 10, y: 4 } }
//***Конец первого способа ***/


