// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и false в противном случае

const str1 = 'сосна'.split('').sort().join('');
const str2 = 'насос'.split('').sort().join('');

function checkStringAnagramma(firstWord, secondWord) {
    return firstWord === secondWord ? true : false;
}

console.log(checkStringAnagramma(str1, str2));