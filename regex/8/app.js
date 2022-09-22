// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения. Если же длина исходной строки изменилась, вывести true, в противном случае бросить исключение и обработать

const str = 'VladislavGazuk1997@%$';

function checkStr(str) {
    try {
        let newStr = str.replace(/[0-9]+.+/, '');
        if (str.length === newStr.length) throw new Error('Ошибка! Исходная строка содержит только буквы!');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkStr(str));