// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для получения произведения всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую произведение всех элементов массива

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

const getMultElemOfArr = (arrOfValues) => checkElements(arrOfValues) ? arrOfValues.reduce((mult, el) => mult * el, 1) : 'Error';

const arr = fillArray(count);

console.log(getMultElemOfArr(arr));