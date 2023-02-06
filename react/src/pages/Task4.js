// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать <div>
// <p>el</p>
// <img/> </div>

const Task4 = () => {
    const arr = ['test', 'test2', 'test3'];
    return(
        <>
            {arr.map(el => <div><p>{el}</p><img alt="img"/></div>)}
        </>
    )
}

export default Task4;