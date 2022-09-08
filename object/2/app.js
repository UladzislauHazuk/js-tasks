// На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
    a: 1,
    10: 'udemy',
    c: 2,
    3: 'hschool'
};

for (const key in obj) {
    if (!isNaN(key)) {
        console.log(key);
    }
}