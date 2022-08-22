// На вход программе подается строка. Напишите программу, которая подсчитывает количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

const str = 'abcABCD12345'.replace(/[0-9]/g, '');
let result = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        result++;
    }
}

console.log(result);