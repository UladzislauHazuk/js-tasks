// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    a: 1,
    10: 'udemy',
    c: 2,
    3: 'hschool'
};

for (const key in obj) {
    if (isNaN(obj[key])) {
        console.log(obj[key]);
    }
}