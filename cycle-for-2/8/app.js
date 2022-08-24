// Преобразуйте первую букву каждого слова строки в верхний регистр.


const a = 'random text for example'.trim();
let b = '';

for (let i = 0; i < a.length; i++) {
    if (i === 0) {
        b += a[i].toUpperCase();
        continue;
    } else if (a[i - 1] === ' ') {
        b += a[i].toUpperCase();
        continue;
    } 
    b += a[i];
}

console.log(b);