// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести все товары, количество которых больше 10

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const filtered = (array: Obj[]): Obj[] => {
//   const filter = array.filter((elem) => elem.count > 10);
//   return filter;
// };

// const result = filtered(array);
// console.log(result);

// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести все товары в обратном порядке

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const reverse = (array: Obj[]): Obj[] => {
//     const result = array.reverse();
//     return result;
// };

// const result = reverse(array);
// console.log(result);

// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести только те товары, положение которых внутри массива кратно 3

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// };

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const filter = (array: Obj[]): Obj[] => {
//     const filter = array.filter((elem) => elem.count % 3 == 0);
//     return filter;
// };

// const result = filter(array);
// console.log(result);

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const sum = (array: Obj[]): number => {
//   const res = array.reduce((sum, elem) => {
//     return sum + elem.count * elem.price;
//   }, 0);
//   return res;
// };

// const result = sum(array);
// console.log(result);

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести товар с максимальным прайсом

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const getMaxPrice = (array: Obj[]): number => {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     array[i].price > max ? (max = array[i].price) : null;
//   }
//   return max;
// };

// const maxPrice = getMaxPrice(array);
// console.log(maxPrice);

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести средний прайс среди всех продуктов

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const getAveragePrice = (array: Obj[]): number => {
//   const sum = array.reduce((sum, elem) => sum + elem.price, 0);
//   return sum / array.length;
// };

// const averagePrice = getAveragePrice(array);
// console.log(averagePrice);

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести тот товар, где количество * прайс является наибольшим значением

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const getMax = (array: Obj[]): number => {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         let prod = array[i].count * array[i].price;
//         prod > max ? max = prod : null;
//     }
//     return max;
// };

// console.log(getMax(array));

// 8. У вас есть массив строковых значений. Необходимо вывести значения массива без дубликатов. Добавить проверки на тип данных, почту

// const emails: string[] = [
//   "test@mail.ru",
//   "tesssst@mail.ru",
//   "test@mail.ru",
//   "testtt@mail.ru",
// ];

// const isValid = (emails: string[]): never | void => {
//     for (let i = 0; i < emails.length; i++) {
//         if (typeof emails[i] !== 'string') throw new Error(`email not a string ${emails[i]}`);
//         if (!/^[a-z0-9]+@[a-z]+\.[a-z]+$/g.test(emails[i])) throw new Error(`email is invalid ${emails[i]}`);
//     }
// };

// function getUnicEmail(emails: string[]): any {
//     try {
//         isValid(emails);
//         const newArr: string[] = []
//         for (let i = 0; i < emails.length; i++) {
//             if (newArr.indexOf(emails[i]) === -1) {
//                 newArr.push(emails[i])
//             }
//         }
//         return newArr
//     } catch (error: any) {
//         console.log(error.message);
//     }
// }

// const unicEmail = getUnicEmail(emails);
// console.log(unicEmail);

// 9. У вас есть массив объектов вида приведенного в приложении. Необходимо посчитать количество вызовов функции, которая находит минимальный прайс

// interface Obj {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }

// const array: Obj[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];

// const wrapper = (array: Obj[]) => {
//   let count = 0;
//   let min = array[0].price;
//   return (elem: Obj) => {
//     count++;
//     console.log(`Количество: ${count}`);
//     elem.price < min ? (min = elem.price) : null;
//     console.log(`Минимальная цена: ${min}`);
//   };
// };

// const wrap = wrapper(array);

// for (let i = 0; i < array.length; i++) {
//   wrap(array[i]);
// }

//  10. У вас есть массив объектов вида приведенного в приложении. Пользователь вводит значение id: например, 1. Необходимо отобразить в консоль найденный объект используя алгоритм бинарного поиска.

// 11. У вас есть массив строковых значений. Необходимо вывести количество дубликатов в массиве:
// [1, 2, 1, 2, 3, 4, 5, 1] -> 3

// 12. Напишите программу для вывода чисел Фибоначчи используя рекурсию

// 13. Напишите программу для сортировки массива объектов из приложения по id,
// использующую метод пузырька.

// 14. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

// 15. Более сложный вариант. Реализовать функцию f: при вызове f(1, 2, 3) -> вернет 6,
// при вызове f(1)(2)(3)(), тоже вернет 6. Использовать каррирование

// 16. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
