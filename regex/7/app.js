// На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = 'qgfVGjk1997hjk%^&$';

function checkPassword(password) {
    try {
        if (!/^\w.{8,}$/g.test(password)) throw new Error('Пароль не правильного формата');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkPassword(password));