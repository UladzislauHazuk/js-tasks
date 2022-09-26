// Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t

const str = 'testing'.split('');

function checkStr(str) {
    let bool = str.some(el => (isNaN(el) ? true : false));
    if (!bool) throw new Error('Это не строка');
    return true;
}

function getSymbol(str) {
    try {
        checkStr(str);
        if (str.length % 2 === 0) {
            return str[(Math.floor(str.length / 2)) - 1] + str[Math.floor(str.length / 2)];
        } else {
            return str[Math.floor(str.length / 2)];
        }
    } catch (error) {
        return error.message;
    }

}

console.log(getSymbol(str));