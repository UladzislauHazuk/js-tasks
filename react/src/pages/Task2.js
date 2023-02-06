// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1

const Task2 = () => {
    const arr = [4, 9, 16];
    const res = arr.map(el => Math.sqrt(el));
    return(
        <h1>{res}</h1>
    )
}

export default Task2;