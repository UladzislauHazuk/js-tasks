// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут с value по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить значение инпута на «+375(29)111-11-11»

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    document.querySelector('.inpt').value = '+375(29)111-11-11';
});