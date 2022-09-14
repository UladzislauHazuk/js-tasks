// Работа с замыканием. Напишите функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.

function doArrOfNumbers() {
    let arr = [];
    return function () {
        for (let i = 0; arr.length !== 100; i++) {
            let num = Math.ceil(Math.random() * 100);
            if (!arr.includes(num)) {
                arr.push(num);
            } else {
                continue;
            }
        }
        return arr;
    };
}

const wrapper = doArrOfNumbers();

console.log(wrapper());