// На вход программе подается строка, где каждое слово заканчивается “_”. Программа должна убрать “_” и первую букву каждого слова (помимо первого), преобразовать в верхний регистр (for)

const a = prompt('Введите строку').replaceAll('_', ' ');
let result = '';

for (let i = 0; i < a.length; i++) {
    if (a[i - 1] != ' ') {
        result += a[i];
    } else {
        continue;
    }
}

console.log(result.toUpperCase());