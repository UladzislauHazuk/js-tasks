// Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию. Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

function calculateFibonacci(n) {
    return n <= 1 ? n : calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

console.log(calculateFibonacci(3));