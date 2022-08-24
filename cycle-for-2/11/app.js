// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

let a = 'Final'.toLowerCase().split('').sort().join('');
let b = 'Anlif'.toLowerCase().split('').sort().join('');

if (a === b) {
    console.log('Слова являются анаграммами');
} else {
    console.log('Слова не являются анаграммами');
}