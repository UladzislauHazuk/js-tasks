// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для поиска максимального значения в массиве. Если результат функции проверки – true, то вызывать новую функцию, возвращающую максимальное значение массива

const arr = [1, 2, 3, 4, 5, 4, 3, -5, -10];

function getMaxElement(list) {
    return list.reduce((a, b) => a > b ? a : b);
}

function checkArray(check) {
    let result = check.filter(elem => !isNaN(elem));
    return check.length === result.length ? getMaxElement(check) : false;
}

console.log(getMaxElement(arr));