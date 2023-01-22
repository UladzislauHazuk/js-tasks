// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень. Добавить необходимые проверки.
// Написать тест для функции

// const doPow = (a, b) => {
//     if(isNaN(a) || isNaN(b)) return false;
//     if(typeof a === 'string' || typeof b === 'string') return false;
//     return a ** b;
// };

// describe('Test doPow function', () => {
//     test('Test toBe success', () => {
//         const pow = doPow(2, 2);
//         expect(pow).toBe(4);
//     });
//     test('Test toBe false', () => {
//         const pow = doPow('a', 'b');
//         expect(pow).toBeFalsy();
//     });
//     test('Test toBe error', () => {
//         const pow = doPow('2', '2');
//         expect(pow).toBeFalsy();
//     });
// })

// 2. Написать функцию которая принимает 2 числа и возвращает результат произведения 2 множителей. 
// Добавить необходимые проверки. Написать тест для функции

// const doMultiply = (a, b) => {
//     if(!a || !b) return false;
//     if(isNaN(a) || isNaN(b)) return false;
//     return a * b;
// }

// describe('Test doMultiply function', () => {
//     test('Test return number', () => {
//         const res = doMultiply(2, 2);
//         expect(res).toBe(4);
//     })
//     test('Test return undefind', () => {
//         const res = doMultiply();
//         expect(res).toBeFalsy();
//     })
//     test('Test return false', () => {
//         const res = doMultiply('a', 'b');
//         expect(res).toBeFalsy();
//     })
// })

// 3. Написать функцию которая принимает массив чисел и находит сумму всех элементов. Добавить необходимые проверки.
// Написать тест для функции

// const doSum = (arr) => {
//     if(!arr.length) return false;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(isNaN(arr[i])) return false;
//         sum += arr[i];
//     }
//     return sum;
// }

// describe('Test doSumFunction', () => {
//     test('Test doSum', () => {
//         const res = doSum([1, 2, 3, 4, 5]);
//         expect(res).toBe(15);
//     })
//     test('Test doSum with string', () => {
//         const res = doSum([1, 2, 'string']);
//         expect(res).toBeFalsy();
//     })
//     test('Test doSum with null', () => {
//         const res = doSum([]);
//         expect(res).toBeFalsy();
//     })
// })

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо вывести все товары, количество которых больше 10 и произведены в Германии Написать тест для функции

// const getData = (arr) => {
//     const filtered = arr.filter(el => el.count > 10 && el.producer === 'Германия');
//     if(!filtered.length) return false;
//     return filtered;
// }

// describe('Test getData function', () => {
//     const arr = [{
//             id: 1,
//             title: 'Часы',
//             count: 10,
//             price: 500,
//             producer: 'Германия'
//         },
//         {
//             id: 2,
//             title: 'Смартфон',
//             count: 33,
//             price: 1500,
//             producer: 'Германия'
//         },
//         {
//             id: 3,
//             title: 'Моноблок',
//             count: 6,
//             price: 2200,
//             producer: 'Германия'
//         },
//         {
//             id: 4,
//             title: 'Ноутбук',
//             count: 13,
//             price: 3000,
//             producer: 'Китай'
//         },
//         {
//             id: 5,
//             title: 'Планшет',
//             count: 22,
//             price: 2100,
//             producer: 'Китай'
//         },
//         {
//             id: 6,
//             title: 'Телевизор',
//             count: 4,
//             price: 4100,
//             producer: 'Германия'
//         },
//         {
//             id: 7,
//             title: 'Холодильник',
//             count: 11,
//             price: 2400,
//             producer: 'Германия'
//         }
//     ]
//     test('Test getData toEqual', () => {
//         const equal = [{
//             id: 2,
//             title: 'Смартфон',
//             count: 33,
//             price: 1500,
//             producer: 'Германия'
//         }, {
//             id: 7,
//             title: 'Холодильник',
//             count: 11,
//             price: 2400,
//             producer: 'Германия'
//         }]
//         const res = getData(arr);
//         expect(res).toHaveLength(2);
//         expect(res).toEqual(equal);
//     })
//     test('Test getData with null', () => {
//         const res = getData([]);
//         expect(res).toBeFalsy();
//     })
// })

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов. Необходимо вывести значения массива без дубликатов. Добавить необходимые проверки.
// Написать тест для функции

// const checkNumbers = (arr) => {
//     const uniqArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(!uniqArr.includes(arr[i])) uniqArr.push(arr[i]);
//     }
//     return uniqArr;
// }

// describe('Test checkNumbers function', () => {
//     const arr = ['+375292285412', '+375292285412', '+375297245412'];
//     test('Test unique', () => {
//         const res = checkNumbers(arr);
//         const equal = ['+375292285412', '+375297245412'];

//         expect(res).toHaveLength(2);
//         expect(res).toEqual(equal);
//     })
// })

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ: значение) где значение число и вывести количество. Добавить необходимые проверки.
// Написать тест для функции

const findCount = (obj) => {
    if (!Object.keys(obj).length) return false;
    let count = 0;
    for (const key in obj) {
        if (!isNaN(obj[key])) count++
    }
    return count;
}

describe('Test findCount function', () => {
    const obj = {
        1: 1,
        2: 'hello',
        3: 'true'
    };
    test('Test findCount', () => {
        const res = findCount(obj);
        expect(res).toBe(1)
    })
    test('Test findCount', () => {
        const res = findCount({});
        expect(res).toBeFalsy();
    })
})