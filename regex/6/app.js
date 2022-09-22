// На вход подается строка вида: путь к файлу. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const url = 'C:/Users/Admin/Desktop/test.txt';

function checkUrl(url) {
    try {
        if (!/^[A-Z]:(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+\.[a-z]{1,3}$/g.test(url)) throw new Error('Не подходит url');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkUrl(url));