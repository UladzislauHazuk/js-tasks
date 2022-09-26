// Middleware – cвязующее программное обеспечение. Прежде чем запрос попадет на сервер, запрос поступает в middleware, где находятся функции валидаторы. Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля: почту, имя пользователя. Для проверки полей воспользуйтесь регулярными выражениями. Middleware-функция возвращает true, если оба условия отработали успешно и false в противном случае

const email = 'vladislav.hazuk@gmail.com';
const name = 'Vladislav';

function getValid (email, name) {
    try {
        if(!/^[a-zA-Z0-9_\.]+$/g.test(name)) throw new Error('Некорректное имя');
        if(!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error('Некорректный email');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(getValid(email, name));