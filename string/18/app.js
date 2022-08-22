// Пользователь вводит строку. Необходимо вывести все гласные отдельной
// строкой (for) fullstack => ua

let a = prompt('Введите строку');
let str = '';

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
        str += a[i];
    }
}

console.log(str);