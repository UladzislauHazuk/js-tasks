// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const arr = [1, 2, 3, 4, 5];
let res = 0;

for (const i of arr) {
    res += i;
}

console.log(res);