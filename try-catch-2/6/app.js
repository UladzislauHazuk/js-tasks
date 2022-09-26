// Реализуйте функцию, которая принимает любое неотрицательное целое число и возвращает его числа в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число. Добавить проверки
// 42145 –> 54421
// 145263 –> 654321
// 123456789 –> 987654321

const num = '42145';

function checkArr(num) {
    if (num < 0) throw new Error('Число отрицательное');
    if (isNaN(num)) throw new Error('Это не число');
    return true;
}

function doSort(newNum) {
    try {
        checkArr(newNum);
        return newNum.split('').sort().reverse().join('');
    } catch (error) {
        return error.message;
    }
}

console.log(doSort(num));