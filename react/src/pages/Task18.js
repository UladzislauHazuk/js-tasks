import axios from "axios";
import { useEffect, useState } from "react";

const Task18 = () => {
    const [value, setValue] = useState();

    async function getValue () {
        const response = await axios.get('https://api.ipify.org/?format=json ');
        setValue(response.data.ip)
    }

    useEffect(() => {
        getValue()
    }, []);

    return(
        <>
           <div>{value}</div> 
        </>
    )
}

export default Task18