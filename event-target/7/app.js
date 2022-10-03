// Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inpt = document.querySelector('input');
    const res = document.querySelector('.res');

    function checkPalindrom(input) {
        return input.toLowerCase() === input.toLowerCase().split('').reverse().join('');
    }

    checkPalindrom(inpt.value) ? res.textContent = 'Это палиндром' : res.textContent = 'Это не палиндром';     
});