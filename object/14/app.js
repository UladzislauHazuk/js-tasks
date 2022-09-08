//   14. На входе статичный объект с повторяющимися значениями. Необходимо отфильтровать значения объекта и оставить только уникальные значения

const obj = {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 3,
    6: 4,
    7: 5,
    8: 5
};

const arr = Object.values(obj).sort();

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
        obj[i + 1] = arr[i];
    } else {
        delete obj[i + 1];
    }
}

console.log(obj);