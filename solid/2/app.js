// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.main();
    }

    middleware(value) {
        try {
            if(!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}/g.test(value)) throw new Error('Ошибка ввода почты');
            alert(true);
        } catch (error) {
            alert(error.message);
        }
    }

    main() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const value = document.querySelector('.inpt').value;
            this.middleware(value);
        });
    }
}

const domHtml = new DomHtml();