// Напишите функцию, принимающую в качестве параметра статичный объект. Функция возвращает количество пар ключ / знаечение. IIFE

(function (obj) {
    let amount = Object.entries(obj).length;
    return amount;
})({
    name: 'Vlad',
    age: 25,
    city: 'Gdansk'
});