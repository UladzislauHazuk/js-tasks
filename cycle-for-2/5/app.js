// Найдите максимальное значение в статичном массиве используя цикл.

const arr = [1, 2, 3, 4, 5, 2, 3, 1];
let a = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
        a = arr[i];
    }
}

console.log(a);