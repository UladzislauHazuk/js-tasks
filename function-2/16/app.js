// Вычислите сумму массива целых чисел статичного массива используя рекурсию

function getSum(arr) {
    return arr.reduce((sum, elem) => {
        return sum + elem;
    });
}

console.log(getSum([1, 2, 3, 4, 5]));