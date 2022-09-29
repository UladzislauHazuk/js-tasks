// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector('.btn');

function isValid(value) {
    if (!value) throw new Error('Input is empty'); 
    if(!/^\+[0-9]{3}\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/g.test(value)) throw new Error('Неправильный формат номера телефона');
    return true;
}

btn.addEventListener('click', () => {
    let inpt = document.querySelector('.inpt');
    try {
        if(isValid(inpt.value)) {
            inpt.style = 'border: 1px solid black';
            alert(inpt.value);
            inpt.value = '';
        }
    } catch (error) {
        inpt.style = 'border: 1px solid red';
        inpt.value = '';
        alert(error.message);
    }
});