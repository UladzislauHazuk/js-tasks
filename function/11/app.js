// На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и false в противном случае

const str = 'топот';

function checkStringPolindrom(check) {
    return check === check.split('').reverse().join('') ? true : false;
}

console.log(checkStringPolindrom(str));