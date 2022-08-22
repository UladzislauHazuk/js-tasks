// Пользователь вводит строку. Необходимо повторить ее трижды

let a = prompt('Введите текст');

if (isNaN(a)) {
    console.log(a.repeat(3));
} else {
    console.log('Некорректный ввод');
}