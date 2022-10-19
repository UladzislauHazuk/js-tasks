// Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert соответствующее будевое значение. Если значения 2 инпутов являются анаграммами -> true, в противном случае false

class Word {
    constructor() {
        this.isAnagram();
    }

    isAnagram() {
        document.querySelector('.btn').addEventListener('click', () => {
            const inpt1 = document.querySelector('.inpt1').value;
            const inpt2 = document.querySelector('.inpt2').value;
            if (inpt1.split('').sort().join('') === inpt2.split('').sort().join('')) alert(true);
            else alert(false);
        });
    }
}
const word = new Word();