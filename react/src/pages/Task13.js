// 4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
// значения 2 input

import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Task13 = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();

    const changeValue1 = (event) => {
        setValue1(event.target.value)
    }

    const changeValue2 = (event) => {
        setValue2(event.target.value)
    }

    const compareValues = () => {
        try {
            if (value1 !== value2) throw new Error('Error');
            alert('Success');
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <>
            <TextField onChange={changeValue1} id="standard-basic" label="Standard" variant="standard" />
            <TextField onChange={changeValue2} id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={compareValues} variant="outlined">Button</Button>
        </>
    )
}

export default Task13;
