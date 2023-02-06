// 5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае числа четность и нечетность текущего значения в параграфе, в случае строки отобразить саму строку в параграфе

const Task5 = () => {
    const arr = [1, 2, 3, 4, 'test@gmail.ru', 'test2@gmail.ru'];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string' || arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return(
        <p>{newArr}</p>
    )
}

export default Task5;