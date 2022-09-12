// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения суммы всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую сумму всех элементов массива

const arr = [1, 5, 3, 9, 2, 10, 13];

function checkArray(check) {
    const newArr = check.filter(elem => !isNaN(elem));
    return check.length === newArr.length ? getSum(check) : false;
}

function getSum(resSum) {
    const sum = resSum.reduce((sum, elem) => {
        return sum + elem;
    }, 0);
    return sum;
}

console.log(checkArray(arr));