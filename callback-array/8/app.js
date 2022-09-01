// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Если все элементы массива – числа, то вывести логическое true, в противном случае false. Every, forEach

const n = +prompt('Введите количество элементов');
const arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt('Введите элемент');
    arr.push(+input);
}

let res = arr.every(elem => {
    if (!isNaN(elem)) {
        return true;
    } else {
        return false;
    }
});

console.log(res);

arr.forEach(elem => {
    if (!isNaN(elem)) {
        console.log(true);
    } else {
        console.log(false);
    }
});