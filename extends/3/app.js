// Реализуйте класс Html. В нем функцию renderArr, принимающую селектор. Вам неоходимо отобразить массив ['Minsk', 'Brest', 'Vitebsk'] в принимаемый селектор

class Html {
    constructor(selector) {
        this.selector = selector;
        this.doArr();
    }

    doArr() {
        document.querySelector('.btn').addEventListener('click', () => {
            document.querySelector(this.selector).innerHTML = '';
            const input = document.querySelector('input').value;
            let arr = [];
            for (let i = 0; i < input; i++) {
                arr.push(Math.floor(Math.random() * 10));
            }

            for (let i = 0; i < arr.length; i++) {
                const tegP = document.createElement('p');
                tegP.textContent = arr[i];
                this.renderArr(tegP);
            }

        });
    }

    renderArr(tegP) {
        document.querySelector(this.selector).appendChild(tegP);
    }
}

const html = new Html('.res');