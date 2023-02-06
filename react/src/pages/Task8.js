// 3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
// палиндромом

const Task8 = () => {
    return ( <
        input onKeyDown = {
            (event) => {
                if (event.key === 'Enter') {
                    let reverse = event.target.value.split('').reverse().join('');
                    if (event.target.value === reverse) {
                        alert('Success')
                    } else alert('Error');
                }
            }
        }
        />
    )
}

export default Task8;