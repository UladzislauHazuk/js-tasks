// Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо вывести день для введенного числа. 1 -> Понедельник

let a = +prompt('Введите число от 1 до 7');
let result;

switch (a) {
    case 1:
        result = 'Понедельник';
        break;
    case 2:
        result = 'Вторник';
        break;
    case 3:
        result = 'Среда';
        break;
    case 4:
        result = 'Четверг';
        break;
    case 5:
        result = 'Пятница';
        break;
    case 6:
        result = 'Суббота';
        break;
    case 7:
        result = 'Воскресенье';
        break;
    default:
        result = 'Введите значение снова';
        break;
}

console.log(result);