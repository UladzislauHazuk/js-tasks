// 5. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Сравнить значения 2 input

import {
    TextField,
    Button
} from "@mui/material";
import {
    useState
} from "react";

const Task14 = () => {
    const [form, setForm] = useState({
        name: '',
        surname: ''
    });

    const changeForm = (event) => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const showResault = () => {
        try {
            if(!form.name) throw new Error('Name is empty');
            if(!form.surname) throw new Error('Surname is empty');
            alert('Success');
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <TextField onChange={changeForm} name="name" id="standard-basic" label="Standard" variant="standard" />
            <TextField onChange={changeForm} name="surname" id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={showResault} variant="outlined">Button</Button>
        </>
    )
}

export default Task14;