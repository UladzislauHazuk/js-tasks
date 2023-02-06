// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту

import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Task12 = () => {
    const [value, setValue] = useState();

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const checkEmail = () => {
        try {
            if(!/^[w\.\\!\@\#\$\%\^\&\*\+\=]+@[A-Za-z]+\.[a-z]{2,5}$/g.test(value)) throw new Error('Email is invalid');
            alert('Success');
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <>
            <TextField onChange={changeValue} id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={checkEmail} variant="outlined">Button</Button>
        </>
    )
}

export default Task12;