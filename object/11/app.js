// На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в объект ключ “avg” со значением среднего арифметического введенных с чисел

const obj = {};
let n1 = +prompt('');
let n2 = +prompt('');

obj.res = (n1 + n2) / 2;

console.log(obj);