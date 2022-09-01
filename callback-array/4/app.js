// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

const arr = [];

while (arr.length !== 5) {
    let input = prompt('Введите значение');
    if (!isNaN(input) || input === '') {
        arr.push(+input);
    }
}

console.log(arr);



const arr = [];

for (; ;) {
    let input = prompt('Введите значение');
    if (!isNaN(input) || input === '') {
        arr.push(+input);
    }
    if (arr.length === 5) break;
}

console.log(arr);