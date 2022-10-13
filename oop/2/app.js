// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    getSum() {
        return this.value1 + this.value2;
    }

    getSubstrac() {
        return this.value1 - this.value2;
    }

    getMultiply() {
        return this.value1 * this.value2;
    }

    getDivision() {
        return this.value1 / this.value2;
    }
}

const calculator = new Calculator(2, 3);
console.log(calculator.getSum());
console.log(calculator.getSubstrac());
console.log(calculator.getMultiply());
console.log(calculator.getDivision());