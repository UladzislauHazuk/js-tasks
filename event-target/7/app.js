// Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки

const btn = document.querySelector('button');

function checkInput(input) {
    if (input === '') throw new Error('Вы ничего не ввели');
    if (!isNaN(input)) throw new Error('Ошибка! Введены цифры');
}

btn.addEventListener('click', () => {
    let inpt = document.querySelector('input');
    try {
        const res = document.querySelector('.res');
        
        checkInput(inpt.value);

        function checkPalindrom(input) {
            return input.toLowerCase() === input.toLowerCase().split('').reverse().join('');
        }

        checkPalindrom(inpt.value) ? res.textContent = 'Это палиндром' : res.textContent = 'Это не палиндром';

        inpt.value = '';
    } catch (error) {
        alert(error.message);
        inpt.value = '';
    }
});