import { useState } from "react";

const Task17 = () => {
    const [value, setValue] = useState();

    function getValue (event) {
        setValue(event.target.textContent)
    }

    return(
        <>
            <div onClick={getValue}>
                <p>About</p>
                <p>Blog</p>
                <p>Programm</p>
            </div>
            <div>
                <p>{value}</p>
            </div>
        </>
    )
}

export default Task17