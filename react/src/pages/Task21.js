import { useState } from "react";

const Task21 = () => {
    const [value, setValue] = useState()

    function showValues () {
        console.log(value);
    }

    function saveInput (event) {
        setValue({...value, [event.target.name] : event.target.value})
    }

    return(
        <>
            <input name="name" />
            <input name="surname" />
            <input name="age" />
            <button onClick={showValues}>Button</button>
        </>
    )
}

export default Task21