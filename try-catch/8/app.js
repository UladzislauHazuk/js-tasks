// Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const str = "jklmnpq";
const first = alphabet.indexOf(str[0]);
let strIndex = 0;

for (let i = first; i < alphabet.length; i++) {
    if (str[strIndex] === alphabet[i]) {
        strIndex++;
    } else {
        console.log(alphabet[i]);
        break;
    }
}