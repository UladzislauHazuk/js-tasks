// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть символов 1 строки есть в другой.

const btn = document.querySelector('.btn');

function checkInputs(first, second) {
    if (first === '' || second === '') throw new Error('Пустая строка');
    if (/[\d]/g.test(first) || /[\d]/g.test(second)) throw new Error('Не только буквы');
}

btn.addEventListener('click', () => {
    try {
        const firstInput = document.querySelector('.firstInput').value.trim();
        const secondInput = document.querySelector('.secondInput').value.trim();
        checkInputs(firstInput, secondInput);
        let count = 0;
        for (let i = 0; i < secondInput.length; i++) {
            if (firstInput.includes(secondInput[i])) {
                count++;
            }
        }
        alert(count === secondInput.length);
    } catch (error) {
        alert(error.message);
    }


});