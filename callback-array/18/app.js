// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо создать новый массив, где каждый элемент возведен в квадрат. map

const n = +prompt('Введите количество элементов');
const arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt('Введите элемент массива');
    if (!isNaN(input)) {
        arr.push(+input);
    }
}

const arr2 = arr.map(elem => {
    return elem ** 2;
});

console.log(arr);
console.log(arr2);