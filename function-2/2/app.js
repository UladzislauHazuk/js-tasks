// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки 

const n = +prompt('Введите количество элементов');

function doArr(value) {
    let arr = [];
    for (let i = 0; i < value; i++) {
         arr.push(prompt('Введите элемент'));
    }
    return arr;
}

const checkValue = (newArr) => {
    const error = newArr.filter(el => isNaN(el));
    return newArr.length === error.length ? true : false;
};

const findValue = (arr) => {
    let total = '';
    if (checkValue(arr)) {
        arr.forEach(el => {
            if (el.length > total.length) {
                total = el;
            }
        });
        return total;
    } else {
        return 'error';
    }
};

console.log(findValue(doArr(n)));