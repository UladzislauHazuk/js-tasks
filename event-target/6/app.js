// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то возвращается первая картинка

const img = document.querySelector('.img');
img.style = 'background-image: url(./img/depositphotos_36834363-stock-illustration-vector-computer-programming-icon.jpeg); width: 600px; height: 600px';

img.addEventListener('mouseover', ()=>{
    img.style = 'background-image: url(./img/depositphotos_73685249-stock-illustration-programmer-and-process-coding-programming.jpeg); width: 600px; height: 600px';
});

img.addEventListener('mouseout', ()=>{
    img.style = 'background-image: url(./img/depositphotos_36834363-stock-illustration-vector-computer-programming-icon.jpeg); width: 600px; height: 600px;';
});