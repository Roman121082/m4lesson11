'use strict';

// !!    ЗАДАЧА#2

/* Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.
Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив.
Если сумма 50 или больше, то функция возвращает этот массив.*/

const array = [];
const addNumberToArray = () => {
  const number = Math.floor(Math.random() * 10 + 1);
  array.push(number);

  const sum = array.reduce((accum, item) => accum + item, 0);
  if (sum >= 50) {
    return array;
  } else {
    return addNumberToArray(array);
  }
};
const res = addNumberToArray(array);
console.log(res);