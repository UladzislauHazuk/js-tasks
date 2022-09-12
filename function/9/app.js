// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения только четных элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив с четными элементами массива

const arr = [1, 5, 3, 9, 2, 10, 13];

const checkElements = (arrayWithError) => {
    let errors = 0;
    arrayWithError.forEach(el => isNaN(el) || !el ? errors++ : null);
    return errors > 0 ? false : true;
};

const getElemOfArr = (arrOffValue) => checkElements(arrOffValue) ? arrOffValue.filter((elem) => elem % 2 === 0) : 'Error';

console.log(getElemOfArr(arr));