// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true, в противном случае false (isNaN)

let a = prompt('Введите значение');

if (!isNaN(a)) {
    console.log('true');
} else {
    console.log('false');
}