// На вход программе подается строка, состоящая из имени и фамилии человека, разделенных одним пробелом. Напишите программу, которая проверяет, что имя и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

const str = prompt('Введите имя и фамилию').trim();

let a = str.indexOf(' ');

if (str[0] === str[0].toUpperCase() && str[a + 1] === str[a + 1].toUpperCase()) {
    console.log(true);
} else {
    console.log(false);
}