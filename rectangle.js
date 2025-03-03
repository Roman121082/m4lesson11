'use strict';

/* Задача #1
Создать объект rectangle, который описывает ширину и высоту
(свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера
для получения периметра и площади прямоугольника Сеттеры могут принимать
только числа Геттеры возвращают строку число + "см"пример "40см"

По умолчанию значения высоты и ширины заданы 5 см */


const rectangle = {
  width: 5,
  height: 5,
 
  set widthA(width) {
    this.width = width;
  },

  set heightB(height) {
    this.height = height;
  },
  get perimeterRectangle() {
    const perimeter = (this.width + this.height) * 2;
    return `Периметр прямоугольника равен: ${perimeter} см`;
  },
  get squareRectangle() {
    const square = this.width * this.height;
    return `Площадь прямоугольника равна: ${square} квадратных см`;
  },
};
rectangle.widthA = 15;
rectangle.heightB = 25;
console.log(rectangle.perimeterRectangle);
console.log(rectangle.squareRectangle);

