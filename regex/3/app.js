// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на “!”. Если же длина исходной строки изменилась, вывести true, в противном случае бросить исключение и обработать

const str = 'Vladislav Gazuk';

function checkStr(str) {
    try {
        const chenged = str.replace(/ /g, '!');
        if (chenged.includes(' ')) throw new Error('ERROR');
        return chenged;
    } catch (error) {
        return error.message;
    }
}

console.log(checkStr(str));