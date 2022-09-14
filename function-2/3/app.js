// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false }
// true, если почта содержит @, .com / .ru. False в противном случае

const email = 'vlad@gmail.com';

function checkMail(newMail) {
    const obj = {
        email: newMail
    };
    if (newMail.includes('@') && newMail.endsWith('.com') || newMail.endsWith('.ru')) {
        return {
            ...obj,
            active: true
        };
    } else {
        return {
            ...obj,
            active: false
        };
    }
}

console.log(checkMail(email));