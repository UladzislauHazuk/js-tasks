// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить проверки

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const inpt = document.querySelector('.inpt').value;
    const obj = {};
    for (let i = 0; i < inpt; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    const count = qtyOfPair(obj);
});

function qtyOfPair() {
    let arr = Object.entries(obj);
    return arr.length;
}