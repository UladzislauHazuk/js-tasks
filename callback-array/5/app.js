// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в противном случае false. forEach

const arr = [];
const arr2 = [];

for (let i = 0; i < 10; i++) {
    let input = +prompt('Введите значение');
    if (i < 5) {
        arr.push(input);
    } else {
        arr2.push(input);
    }
}

let arr_res = 0;

arr.forEach(elem => {
    if (arr2.includes(elem)) {
        arr_res += 1;
    }
});

if (arr_res === 5 && arr.length === arr2.length) {
    console.log(true);
}