// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
    constructor() {
        this.main();
    }

    main() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const value1 = +document.querySelector('.inpt1').value;
            const value2 = +document.querySelector('.inpt2').value;
            this.doPlus(value1, value2);
            this.doMinus(value1, value2);
            this.doMultiply(value1, value2);
            this.doDel(value1, value2);
        });
    }

    doPlus(value1, value2) {
        document.querySelector('.sum').innerHTML = `Результат суммы: ${value1 + value2}`;
    }

    doMinus(value1, value2) {
        document.querySelector('.min').innerHTML = `Результат разности: ${value1 - value2}`;
    }

    doMultiply(value1, value2) {
        document.querySelector('.mn').innerHTML = `Результат произведения: ${value1 * value2}`;
    }

    doDel(value1, value2) {
        document.querySelector('.del').innerHTML = `Результат деления: ${value1 / value2}`;
    }
}

const domHtml = new DomHtml();