import {useState} from 'react';

function getNumbers () {
    const [number, setNumber] = useState();

    useEffect(() => {
        const arr = [];
        for (let i = 0; i <= 20; i+=2) {
            arr.push(i);
        }
        setNumber(arr);
    }, [])

    

    return (
        <>
            {number.map(el => <p>{el}</p>)}
        </>
    )
}

export default getNumbers