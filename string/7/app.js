// На вход программе подаётся строка. Замените все @ на '!' с помощью
// глобального поиска и замены (2 способа)

const a = prompt('Введите значение').replaceAll('@', '!');

console.log(a.split('@').join('!'));