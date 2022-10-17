// Реализуйте класс Client, содержащий метод sendRequest. 
// Ваша задача получить данные из 2 инпутов: почта и пароль 
// и по клику на кнопку «отправить запрос на сервер» 
// (отправку запроса мы не проходили => просто вывести на экран 
//     образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
    constructor() {
        this.sendRequest();
    }

    sendRequest() {
        const btn = document.querySelector('.btn');

        btn.addEventListener('click', () => {
            try {
                const mail = document.querySelector('.mail').value;
                const pwd = document.querySelector('.pswd').value;
                if (this.checkValue(mail, pwd)) {
                    document.querySelector('.res').innerHTML = JSON.stringify({
                        email: mail,
                        pwd: pwd
                    });
                }
            } catch (error) {
                alert(error.message);
            }
        });

    }

    checkValue(mail, pwd) {
        if (mail.length === 0) throw new Error('wrong mail');
        if (pwd.length === 0) throw new Error('wrong pwd');
        return true;
    }
}

const client = new Client();