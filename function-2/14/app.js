// Напишите функцию, генерирующую надежный пароль. (Math.random)

function generatePassword(length) {
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+=';
    let randomPassword = '';

    for (var i = 0; i < length; ++i) {
        randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    return randomPassword;
}

console.log(generatePassword(+prompt('Введите длину пароля')));