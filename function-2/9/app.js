// На входе динамичный массив; число n с клавиатуры. Необходимо написать функцию, возвращающую элементы массива, которые больше указанного числа. [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt('Введите количество элементов');

function doArr(value) {
    let arr = [];
    for (let i = 0; i < value; i++) {
        arr.push(+prompt('Введите значение'));
    }
    return arr;
}

function checkArray(newArr) {
    let res = newArr.filter(el => !isNaN(el));
    return newArr.length === res.length ? true : false;
}

function getResult(arr) {
    let a = +prompt('Введите сравниваемоее число');
    let newArr = arr.filter(elem => {
        if (checkArray(arr) && elem > a) return true;
    });
    return newArr;
}

const arr = doArr(n);
console.log(getResult(arr));