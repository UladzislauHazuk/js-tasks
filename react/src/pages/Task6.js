// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+=

const Task6 = () => {
    const pwd1 = 'asdaaaaa';
    const pwd2 = 'asdaaaaa';
    const isValid = () => {
        try {
            if(!/^[\w\.\!\@\#\$\%\^\&\*\+\=]{8,}$/g.test(pwd1)) throw new Error('Error');
            if(!/^[\w\.\!\@\#\$\%\^\&\*\+\=]{8,}$/g.test(pwd2)) throw new Error('Error');
            if(pwd1 !== pwd2) throw new Error('Not the same')
            alert('Success');
        } catch (error) {
            alert(error.message)
        }
    }
    return(
        <>
            <button onClick={isValid}>send</button>
        </>
    )
}

export default Task6;