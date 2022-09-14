// Напишите функцию, которая принимает два параметра: строку и букву. Функция должна подсчитывать количество вхождений указанной буквы в строке. Добавить проверки

function checkString(checkStr) {
    let res = checkStr.split('').filter(el => isNaN(el));
    return checkStr.length === res.length ? true : false;
}

function getNumberOfLetters(str, letter) {
    let count = 0;
    if (checkArray(str)) {
        str.split('').forEach(element => {
            if (element.includes(letter)) count++;
        });
    }
    return count;
}

console.log(getNumberOfLetters('аааааапка', 'а'));