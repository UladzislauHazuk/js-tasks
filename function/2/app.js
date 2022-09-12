// Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где каждое слово начинается с большого регистра hschool company -> Hschool Company

let str = prompt('Введите строку').split(' ');

function toUpperCaseStr (a) {
    let newArr = a.map(elem => {
        return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
    });
    return newArr.join('');
}

console.log(toUpperCaseStr(str));