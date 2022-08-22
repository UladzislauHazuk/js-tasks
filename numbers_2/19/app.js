// Ввести строку. Проверить является ли это число или текст. Если число, то выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В противном случае false

let a = prompt('Введите строку');

if (!isNaN(a)) {
    if (a % 2 === 0) {
        console.log('Четное');
    } else {
        console.log('Нечетное');
    }
} else if (a === 'hschool') {
    console.log(true);
} else {
    console.log(false);
}