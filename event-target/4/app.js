// Проверять вводимые группы в input, выводить ниже, если формат правильный

const btn = document.querySelector('.btn');
let obj = {};

function validInput(input) {
    if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]+$/g.test(input)) throw new Error('Неправильный формат');
}

btn.addEventListener('dblclick', () => {
    try {
        const inpt = document.querySelector('input');
        validInput(inpt.value);

        for (const key in obj) {
            if (obj[key] === inpt.value) throw new Error('Такая группа уже есть');
        }

        obj = {};
        obj[Math.random() * 100] = inpt.value;
        
        for (const key in obj) {
            const newEl = document.createElement('p');
            newEl.textContent = obj[key];
            document.querySelector('.res').appendChild(newEl);
            document.querySelector('.res').style = 'border: 1px solid red;';
        }
        
        inpt.value = '';
        
    } catch (error) {
        console.log(error.message);
        inpt.value = '';
    }
});