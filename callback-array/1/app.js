// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполяет массив. Далее необходимо создать массив только из чисел. Если длина массива равна 0, то вывести ‘Массив пуст’. filter

const arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(prompt(''));
}

let res = arr.filter(function (elem) {
    if (!isNaN(elem)) {
        return true;
    }
});

if (res.length === 0) {
    console.log('Массив пуст');
} else {
    console.log(res);
}



let arr = [];
let i = 0;

while (i < 5) {
    arr.push(prompt('Введите значение'));
    i++;
}

let arr_res = arr.filter((elem) => !isNaN(elem));

console.log(arr_res.length === 0 ? 'Пустой массив' : arr_res);