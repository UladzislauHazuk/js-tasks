// На входе значение. Необходимо его обработать. Если это число и оно не является четным, бросить исключение

const num = prompt('enter value');

const doData = (num) => {
    try {
        if (!isNaN(num) || num % 2 === 1) throw new Error('Нечетное либо строка');
        return num;
    } catch (error) {
        return error.message;
    }
};

console.log(doData(num));