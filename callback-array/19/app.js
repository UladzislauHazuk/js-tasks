//  На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const n = +prompt('Введите количество элементов');
const arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt('Введите элемент массива');
    if (!isNaN(input)) {
        arr.push(+input);
    }
}

let res = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        break;
    } else {
        res += arr[i];
    }
}

console.log(arr);
console.log(res);