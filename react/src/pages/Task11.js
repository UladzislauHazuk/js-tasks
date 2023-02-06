// 2. По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром

import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Task11 = () => {
    const [value, setValue] = useState();

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const doPalindrom = () => {
        let palindrom = value.split('').reverse().join('');
        (value === palindrom) ? alert('Palindrom') : alert('Not a palindrom')
    }

    return(
        <>
            <TextField onChange={changeValue} id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={doPalindrom} variant="outlined">Button</Button>
        </>
    )
}

export default Task11