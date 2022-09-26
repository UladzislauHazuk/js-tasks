// Реализуйтефункцию,принимающуючисло.Вашазадача–выяснитьявляетсяли число идеальным квадратом. В математике квадратное число или идеальный квадрат – это целое число, являющееся квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя. Если является, вывести true, в противном случае false. Добавить проверки
// 3 –> false 
// 25 –> true 
// 49 –> true

function checkNum(num) {
    try {
        if (isNaN(num)) throw new Error('Это не число');
        if (Number.isInteger(Math.sqrt(num))) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return error.message;
    }
}
console.log(checkNum(49));