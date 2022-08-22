// Дана строка 'aaabbbccc'. Вырежите из нее слово 'bbb' тремя разными способами

const a = 'aaabbbccc';

console.log(a.slice(a.indexOf('b'), a.lastIndexOf('b')) + 'b');