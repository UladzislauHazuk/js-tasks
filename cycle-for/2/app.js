// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

const a = 12345;

if (!isNaN(a)) {
    let b = a ** 0.5;
    console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
}