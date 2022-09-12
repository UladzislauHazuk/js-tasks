// На входе число. Необходимо создать функцию, возвращающую факториал числа 4! = 1 * 2 * 3 * 4

const n = 4;

function getFactNum(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(getFactNum(n));