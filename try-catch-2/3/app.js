// Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
// каждый единичный символ числа, значение – четность / нечетность. Добавить проверки
// 542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” }

const arr = '542613'.split('');

function checkArr(arr) {
    let bool = arr.some(el => isNaN(el) ? false : true);
    if (!bool) throw new Error('В массиве не только числа');
    return true;
}

function getObj(newArr) {
    try {
        checkArr(newArr);
        const obj = {};
        newArr.forEach(el => (+el % 2 === 0) ? obj[+el] = 'чет' : obj[+el] = 'нечет');
        return obj;
    } catch (error) {
        return error.message;
    }
}

console.log(getObj(arr));