// 1. При вводе данных в input отображать вводимое значение в параграф текущей
// страницы

import { TextField } from "@mui/material";
import { useState } from "react";

const Task10 = () => {
    const [value, setValue] = useState();

    const setParagraph = (event) => {
        setValue(event.target.value)
    } 

    return(
        <>
            <p>{value}</p>
            <TextField onChange={setParagraph} id="standard-basic" label="Standard" variant="standard" />
        </>
    )
}

export default Task10;