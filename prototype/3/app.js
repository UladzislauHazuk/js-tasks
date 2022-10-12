// По условию задачи даны инпут и кнопка.Пользователь вводит в инпут значенияи по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый ключ – индекс элемента массива, а значение – текущее итерируемое значение массива

const btn = document.querySelector('.btn');
const arr = [];
const obj = {};

btn.addEventListener('click', () => {
    const input = document.querySelector('.input');
    arr.push(input.value);
    document.querySelector('array').innerHTML = arr;
    input.value = '';
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    document.querySelector('.object').innerHTML = JSON.stringify(obj);
});