// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Выведите произведение всех элементов массива. Проверки на ввод только чисел. Использовать forEach, reduce

const n = +prompt('Введите количество элементов');
const arr = [];

for (let i = 0; i < n; i++) {
    let input = +prompt('Введите элемент');
    if (!isNaN(input)) {
        arr.push(+input);
    }
}

let res = 1;

arr.forEach(elem => {
    res *= elem;
});

const res = arr.reduce((sum, elem) => {
    return sum * elem;
}, 1);

console.log(res);