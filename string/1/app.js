// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false. Добавить проверки для строк. Удалить лишние пробелы

const a = prompt('Введите значение').trim();

if (isNaN(a) && a.toLowerCase() === 'hschool') {
    console.log(true);
} else {
    console.log(false);
}