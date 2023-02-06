// 7. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент возвращает 2 кнопки и параграф, в котором отображается значение состояния number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к стейту numberю При клике на -1 вычиталось 1 числовое значение

import { Button } from "@mui/material";
import { useState } from "react";

const Task16 = () => {
    const [number, setNumber] = useState(1);

    const doPlus = () => {
        setNumber(number + 1)
    }

    const doMinus = () => {
        setNumber(number - 1)
    }

    return(
        <>
            <p>{number}</p>
            <Button onClick={doPlus} variant="outlined">+1</Button>
            <Button onClick={doMinus} variant="outlined">-1</Button>
        </>
    )
}

export default Task16