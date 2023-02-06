// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

const Task3 = () => {
    const arr = ['test@gmail.ru', 'testgmail.ru', 'test2@gmail.ru'];
    const res = arr.map(el => el.includes('@') ? <li>{el}</li> : null);
    return(
        <ul>{res}</ul>
    )
}

export default Task3;