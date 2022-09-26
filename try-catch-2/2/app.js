// Реализайте функцию, которая принимает статичный массив и возвращает новый массив с отфильтрованными значениями. Массив считается отфильтрованным, если в нем присутствуют только числа
// [ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
// [ 1, 2, “aasf”, “1”, “123”, 123 ] –> [ 1, 2, 123 ]

let arr = [1, 2, 3, 's', 4];

function checkArr(arr) {
    return arr.filter(el => typeof el === 'number');
}

console.log(checkArr(arr));