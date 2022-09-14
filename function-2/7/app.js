// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом последующем вызове функции

function multiply() {
    let newString = '';
    return function (a) {
        newString += a;
        return newString;
    };
}

const wrapper = multiply();

console.log(wrapper('обу'));
console.log(wrapper('че'));
console.log(wrapper('ние'));