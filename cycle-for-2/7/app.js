// Преобразуйте первую букву строки в верхний регистр несколькими способами 

const a = 'hschool'.trim();
const b = a[0].toUpperCase() + a.slice(1);

console.log(b);

const c = 'hschool'.trim();
let d = '';

for (let i = 0; i < c.length; i++) {
    if (i === 0) {
        d += c[i].toUpperCase();
        continue;
    }
    d += c[i];
}

console.log(d);