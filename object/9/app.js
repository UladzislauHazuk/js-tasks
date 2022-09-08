// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    name: 'udemy',
    id: 'hschool'
};

let count = 0;

for (const key in obj) {
    if (!isNaN(obj[key])) {
        count++;
    }
}

console.log(count);