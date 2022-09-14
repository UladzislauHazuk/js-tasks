// Напишите функцию, принимающую в качестве параметра строку. Необходимо оставить в строке только униакльные символы. IIFE Позволяеткопироватьтекстиз -> позвляеткираьс

(function () {
    let str = 'Позволяеткопироватьтекстиз'.toLowerCase();
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) {
            newStr += str[i];
        }
    }

    return newStr;
})();