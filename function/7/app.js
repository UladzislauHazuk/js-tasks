// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки. Вторая для получения суммы всех строчных элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных элементов массива

const arr = ['обу', 'че', 'ние'];

function checkArray(check) {
    const newArr = check.filter(elem => isNaN(elem));
    return check.length === newArr.length ? getSum(check) : false;
}

function getSum(resSum) {
    const sum = resSum.reduce((sum, elem) => {
        return sum + elem;
    });
    return sum;
}
console.log(checkArray(arr));