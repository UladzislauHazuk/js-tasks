import { useState } from "react"
import Task23Item from "./Task23Item"

const Task23 = () => {
    const [value, setValue] = useState(0)

    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    return(
        <>
            <div>{value}</div>
           {arr.map((el, index) => <Task23Item key={index} item={el} setValue={setValue} />)}
        </>
    )
}

export default Task23