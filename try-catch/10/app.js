// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить исключение и его обработать

const email = 'vladislav.gazuk@gmail.com';

function checkEmail(mail) {
    try {
        if (!email.includes('@')) throw new Error('Ошибка! Неправильный формат почты!');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkEmail(email));