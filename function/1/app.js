// Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида «Привет, {имя} {фамилия}»

const name = prompt('Введите имя');
const surname = prompt('Введите фамилию');

function getName (nameV, surname) {
    return `Привет, ${nameV} ${surname}`;
}

console.log(getName(nameV, surname));