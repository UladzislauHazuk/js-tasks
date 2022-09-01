// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = +prompt('Введите количество элементов');
let arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt('Введите элемент массива');
    if (!isNaN(input)) {
        arr.push(+input);
    }
}

arr = arr.filter(elem => {
    if (elem > 0) return true;
});

console.log(arr);