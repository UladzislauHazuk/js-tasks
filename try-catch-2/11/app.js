// Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

const str = 'rkqodlw';
const str2 = 'world';

function checkWord(symbols, word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (symbols.includes(word[i])) count++;
    }

    return (word.length === count) ? true : false;
}

console.log(checkWord(str, str2));