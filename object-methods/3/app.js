// На входе статичный объект и строка str. Написать функцию на поиск в объекте значения str. Values

const obj = {
    id: 1,
    name: 'Vlad',
    age: 25
};

const str = 'Vlad';

function checkValue(obj, str) {
    const arrValues = Object.values(obj);
    let flag = false;
    for (const item of arrValues) {
        if (item === str) {
            flag = true;
            break;
        }
    }
    return flag;
}

console.log(checkValue(obj, str));