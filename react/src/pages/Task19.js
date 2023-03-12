import { useState } from "react";

const Task19 = () => {
    const [name, setName] = useState()

    function showName() {
        console.log(name);
    }

    function saveInput(event) {
        setName(event.target.value)
    }

    return(
        <>
            <input onChange={saveInput} />
            <button onClick={showName}></button>
        </>
    )
}

export default Task19