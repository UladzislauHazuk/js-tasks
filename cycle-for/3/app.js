// Напишите скрипт, который будет находить факториал числа. Факториал – это
// произведение всех целых чисел, меньше данного, и его самого.
// 5 -> 1*2*3*4*5

let a = prompt('Введите значение');

if (!isNaN(a) && +a > 0) {
    a = +a;
    let result = 1;

    for (let i = 1; i <= a; i++) {
        result *= i;
    }
}