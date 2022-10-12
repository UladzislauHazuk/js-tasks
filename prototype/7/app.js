// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на кнопку вызывается функция, принимающая три параметра: количество столбов (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50 сантиметров). Рассчитайте расстояние между первым и последним столбом в сантиметрах

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const amountInpt = +document.querySelector('.amountInpt').value;
    const distanceInpt = +document.querySelector('.distanceInpt').value;
    const widthInpt = +document.querySelector('.widthInpt').value;

    document.querySelector('.res').innerHTML = widthInpt * amountInpt + (distanceInpt * 100) * (amountInpt - 1);
});