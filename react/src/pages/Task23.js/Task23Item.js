function Task23Item ({item, setValue}) {
    function getValue (event) {
        setValue(event.target.textContent)
    }

    return (
        <div onClick={getValue}>
            <span>{item[0]}</span>
            <span>{item[1]}</span>
            <span>{item[2]}</span>
        </div>
    )
}

export default Task23Item