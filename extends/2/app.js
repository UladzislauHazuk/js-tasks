// Реализуйте класс Elem. В нем есть функция html, принимающая строку, селектор. Необходимо отобазить на странице тест в соответствующий селектор

class Elem {
    constructor(str) {
        this.str = str;
    }

    html() {
        document.querySelector(this.str).textContent = 'Hello, World!';

    }
}

const elem = new Elem('.div');
elem.html();