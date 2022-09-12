// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

const count = +prompt();

const fillArray = (countOfArr) => {
    const filledArray = [];
    for (let i = 0; i < countOfArr; i++) {
        filledArray.push(+prompt());
    }
    return filledArray;
};

const checkElements = (arrayWithError) => {
    let errors = 0;
    arrayWithError.forEach(el => isNaN(el) || !el ? errors++ : null);
    return errors > 0 ? false : true;
};

const getRes = function (arrOfValues) {
    let arrayEven = arrOfValues.filter(el => el % 2 === 0);
    let multEven = arrayEven.map(el => el**2);
    return multEven;
}

const arr = fillArray(count);

console.log(getRes(arr)); 