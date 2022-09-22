// На вход подается строка вида “имя фамилия возраст”. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать

const name = 'Vladislav Gazuk 25';

function checkStr(str) {
    try {
        if (!/^[a-zA-Z]+ [a-zA-Z]+ [\d]{1, 2}+$/g.test(str)) throw new Error('Не подходит');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkNum(name));