// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const arr = [2, 5, 9, 15, 0, 4];
let arr2 = [];

for (const i of arr) {
    if (i % 3 === 0) {
        arr2.push(i);
    }
}

console.log();