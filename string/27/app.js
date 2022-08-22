// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const str = prompt('Введите url');

if (str.includes('http') && str.includes('/') && (str.includes('.com') || str.includes('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}