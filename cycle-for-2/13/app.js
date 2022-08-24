// Найдите минимальное значение в массиве используя цикл

const arr = [5, 4, 11, 2, 35, 67];
let arr2 = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr2) {
        arr2 = arr[i];
    }
}

console.log(arr2);