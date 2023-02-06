// 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
// квадрат и отобразить на странице

const Task1 = () => {
    const arr = [1, 2, 3, 4, 5];
    const res = arr.map(el => el ** 2);
    return(
        <div>{res}</div>
    )
}

export default Task1;