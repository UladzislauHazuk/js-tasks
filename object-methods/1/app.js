// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и вывести true при наличии совпадения, false в противном случае

const obj = {
    id: 1,
    name: 'Vlad',
    age: 25
};

const str = 'age';

function checkObj(str, obj) {
    const arr = Object.keys(obj);
    let flag = false;
    for (const item of arr) {
        if (item === str) {
            flag = true;
            break;
        }
    }
    return flag;
}

console.log(checkObj(str, obj));
console.log(obj.hasOwnProperty(str));