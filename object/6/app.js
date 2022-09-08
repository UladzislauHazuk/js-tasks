// На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    name: 'udemy',
    id: 'hschool'
};

const arr = [];

for (const key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key] * 2);
    }
}

console.log(arr);