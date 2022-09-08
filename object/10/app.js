// На входе статичный объект, включающий такие ключи как name, age, birthday, значения ключей – пустые строки. Считать данные с клавиатуры и заполнить объект соответствующими данными. Добавить проверки на ввод

const obj = {
    name: '',
    age: '',
    birthday: ''
};

for (const key in obj) {
    obj[key] = prompt(`Введите значение ${key}`).trim('');
    while (input === '') {
        obj[key] = prompt(`Введите значение ${key}`).trim('');
    }
}

console.log(obj);