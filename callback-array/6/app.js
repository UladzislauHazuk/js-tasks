// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива – число. Some, forEach

let n = prompt('Введите значение');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt('Введите значение массива'));
}

let check = arr.some(elem =>  {
    if (Number.isInteger(elem)) {
        return true;
    }
});

console.log(check);