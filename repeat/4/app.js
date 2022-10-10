// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в CamelCase (пример Строки В CamelCase )

const btn = document.querySelector('.btn');
const arr = [];

btn.addEventListener('click', () => {
    const inputs = document.querySelector('.input').value.trim().split(' ');
    let str = '';
    for (let i = 0; i < inputs.length; i++) {
        str += inputs[i][0].toUpperCase() + inputs[i].slice(1).toLowerCase();
    }
    document.querySelector('.res').innerHTML = str[0].toLowerCase() + str.slice(1);
});