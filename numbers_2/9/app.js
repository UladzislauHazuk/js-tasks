// Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите задачу через switch-case.

let a = prompt('Введите значение');

if (!isNaN(a)) {
    switch (a) {
        case 1:
            result = 'Зима';
            break;
        case 2:
            result = 'Весна';
            break;
        case 3:
            result = 'Лето';
            break;
        case 4:
            result = 'Осень';
            break;
        default:
            result = 'Введите значение снова';
            break;
    }

    console.log(result);

} else {
    console.log('Некорректный ввод');
}