// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются анаграммами. Добавить проверки на ввод.

class Anagram {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    checkStr() {
        const str1Sort = this.str1.split('').sort().join('');
        const str2Sort = this.str2.split('').sort().join('');

        return str1Sort === str2Sort ? true : false;
    }
}

const anagram = new Anagram('пила', 'липа');
console.log(anagram.checkStr());