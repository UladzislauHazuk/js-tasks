// На вход программе подается число в двоичной системе счисления. Необходимо преобразовать его в десятичную систему счисления

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const input = +document.querySelector('.inpt').value;
    document.querySelector('.res').innerHTML = parseInt(input, 2);
});