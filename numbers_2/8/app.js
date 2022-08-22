// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру месяца (2 способа)

let a = +prompt('Введите номер месяца');
let result;

switch (a) {
    case 12:
    case 1:
    case 2:
        result = 'Зима';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Весна';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Лето';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Осень';
        break;
    default:
        result = 'Введите значение снова';
        break;
}

console.log(result);