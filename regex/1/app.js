// На вход подается строка в виде числа. Необходимо написать регулярное выражение. Если строка состоит только из чисел, то вывести булевое true, в противном случае бросить исключение и обработать

const num = '123456789';

function checkNum(str) {
    try {
        if (!/^[\d]+$/g.test(str)) throw new Error('Не числа');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkNum(num));