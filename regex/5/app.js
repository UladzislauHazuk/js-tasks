// На вход подается строка в виде url. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать

const url = 'https://github.com/VladislavGazuk';

function checkUrl(url) {
    try {
        if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(url)) throw new Error('Не подходит url');
        return url;
    } catch (error) {
        return error.message;
    }
}

console.log(checkUrl(url));