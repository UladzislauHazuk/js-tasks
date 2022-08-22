// На вход программе подается строка. Преобразуйте первую букву каждого слова строки в верхний регистр (for)

const a = prompt('Введите строку');
let b = a[0].toUpperCase();

for (let i = 1; i < a.length; i++) {
    b += (a[i - 1] == ' ') ? a[i].toUpperCase() : a[i];
}

console.log(b);