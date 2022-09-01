// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет 5 первыми значениями массив. Далее необходимо создать массив из тех значений, которые являются числами и НЕ равны 2 другим введенным. Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод только чисел после каждого введенного элемента. forEach

const arr = [];
const arr2 = [];
let i = 0;

while (i < 7) {
    if (i < 5) {
        let input = prompt('Введите значение');
        if (!isNaN(input)) {
            arr.push(input);
        }
    } else {
        let input = prompt('Введите значение');
        if (!isNaN(input)) {
            arr2.push(input);
        }
    }
    i++;
}

const arr_res = [];

arr.forEach((elem) => {
    if (!arr2.includes(elem)) {
        arr_res.push(elem);
    }
});

console.log(arr_res);