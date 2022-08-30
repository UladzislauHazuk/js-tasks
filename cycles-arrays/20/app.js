// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом. Использовать for
// 55639217 -> 5:563:921:7.

const arr = [55639217];
let str = String(arr);
const arr2 = [str[0]];

for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
        arr2.push(':', str[i]);
    } else {
        arr2.push(str[i]);
    }
}

console.log(arr2.join(''));