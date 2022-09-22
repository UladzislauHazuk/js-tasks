// На вход подается строка в виде электронной почты пользователя. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать

const mail = 'vladislav.gazuk@gmail.com';

function checkEmail(email) {
    try {
        if (!/^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error('Не подходит формат почты');
        return email;
    } catch (error) {
        return error.message;
    }
}

console.log(checkEmail(mail));