// На странице контейнер из 5 инпутов. Необходимо получить значение соответствующего инпута по target

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('change', (event) => {
    alert(event.target.value);
    event.target.value = '';
});