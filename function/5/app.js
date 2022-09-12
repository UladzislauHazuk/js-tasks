// На входе n – количество элементов массива. Далее производится заполнение массива
// с клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для 
// нахождения количества элементов массива

const n = prompt('Введите количество элементов');

function findCountElems (newArr) {
    return newArr.length;
}

function doArr (value) {
    let arr = [];
    for (let i = 0; i < value; i++) {
        arr.push(prompt('Введите значение'));
    }
    let count = findCountElems(arr);
    return count;
}

console.log(doArr(n));