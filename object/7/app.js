// На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true

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
    count++;
}

if (count === 0) {
    console.log(false);
} else {
    console.log(true);
}