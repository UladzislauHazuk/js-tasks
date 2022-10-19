// Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert соответствующее будевое значение. Если значения 2 инпутов являются палиндромом -> true, в противном случае false

class Word {
    constructor() {
        this.isPalindrome();
    }
    
    isPalindrome() {
        document.querySelector('.btn').addEventListener('click', () => {
            const inpt1 = document.querySelector('.inpt1').value;
            const inpt2 = document.querySelector('.inpt2').value;

            if (inpt1 === inpt1.split('').reverse().join('') && inpt2 === inpt2.split('').reverse().join('')) alert(true);
            else alert(false);
        });
    }

}
const word = new Word();