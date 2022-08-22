// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в противном случае false
// anna -> true
// мем -> true
// тест -> false

const word = prompt('Введите слово для проверки');

if (word === word.split('').reverse().join('')) {
    console.log(true);
} else {
    console.log(false);
}