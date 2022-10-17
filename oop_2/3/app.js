// Реализуйте класс Server, получающий объект из предыдущего задания и сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать генерацию нового id. Обязательными функциями считаются функции middleware, controller, service, repository. Цепочка взаимодействия между методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с этим массивом осуществляется только в repository. Массив находится в приложении

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

                this.checkValue(mail, pwd);

                const clientData = JSON.stringify({
                    mail: mail,
                    pwd: pwd
                });

                const server = new Server();
                const response = server.controller(clientData);

                document.querySelector('.res').innerHTML = response

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

class Server {
    middleware(mail) {
        if (!mail) throw new Error('mail пуст');
    }

    controller(clientData) {
        try {
            const parsedClientData = JSON.parse(clientData);
            this.middleware(parsedClientData.mail);
            return JSON.stringify(this.service(parsedClientData));
        } catch (error) {
            return error.message;
        }
    }

    service(parsedClientData) {
        const rep = this.repository(parsedClientData);
        if (!rep.length) throw new Error('Массив пуст');
        return rep;
    }

    repository(parsedClientData) {
        let arrData = [{
                "id": 1,
                "email": "yesenia@mail.ru",
                "pwd": "pwd12345678"
            }, {
                "id": 2,
                "email": "hanna@mail.ru",
                "pwd": "pwd123123"
            },
            {
                "id": 3,
                "email": "stanislau@mail.ru",
                "pwd": "pwdtest444"
            }, {
                "id": 4,
                "email": "german@mail.ru",
                "pwd": "pwdqqq111"
            },
            {
                "id": 5,
                "email": "maria@mail.ru",
                "pwd": "pwd746552"
            }
        ];

        const filtered = arrData.filter(el => el.mail !== parsedClientData.mail);
        if (arrData.length !== filtered.length) throw new Error('Совпадение есть');
        filtered.push({id: Math.floor(Math.random() * 100), ...parsedClientData});
        arrData = filtered;
        return arrData;
    }
}

const client = new Client();