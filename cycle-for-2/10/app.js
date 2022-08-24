//  Задача на слово палиндром.

const word = prompt('Введите слово для проверки');

if (word === word.split('').reverse().join('')) {
    console.log(true);
} else {
    console.log(false);
}