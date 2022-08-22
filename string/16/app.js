// Пользователь вводит строку. Необходимо посчитать количество гласных (for)

const str = prompt('Введите значение');
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'а' || str[i] == 'е' || str[i] == 'о' || str[i] == 'я') {
        count += 1;
    }
}

console.log(count);
console.log(str.length-count);