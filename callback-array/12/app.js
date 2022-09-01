// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо создать новый массив из отфильтрованных значений, где строка начинается на [a, h]. Проверка на ввод только текстовых значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = +prompt('Введите количество элементов');
const arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt('Введите элемент массива');
    if (isNaN(input)) {
        arr.push(input);
    }
}

let arr2 = arr.filter(elem => {
    if (elem[0] === 'a' || elem[0] === 'h') {
        return true;
    }
});

console.log(arr2);