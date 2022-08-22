// Пользователь вводит строку. Необходимо посчитать количество согласных (for)

const str = prompt('Введите значение');
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'б' || str[i] == 'в' || str[i] == 'г' || str[i] == 'д') {
        count += 1;
    }
}

console.log(count);
console.log(str.length-count);