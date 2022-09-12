// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения массива с удоенными значенями каждого элемента. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

const arr = [1, 5, 3, 9, 2, 10, 13];

function checkArray(check) {
    let result = check.filter(elem => !isNaN(elem));
    return check.length === result.length ? getResMult(check) : false;
}

function getResMult(resMult) {
    let result = resMult.map(elem => elem * 2);
    return result;
}

console.log(checkArray(arr));