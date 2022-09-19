// Реализуйте функцию, которая принимает число и возвращает возведенную в квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181

let n = prompt('Введите число').split('');

function checkNum(str) {
    if (str.some(el => isNaN(el))) throw new Error('Введены не только числа');
    if (str.some(el => el < 0)) throw new Error('Введены отрицательные числа');
    return true;
}

function getNumberSquared(num) {
    try {
        if (checkNum(n)) {
            const newNum = num.map(el => el ** 2).join('');
            return newNum;
        }
    } catch (error) {
        return error.message;
    }
}

console.log(getNumberSquared(n));