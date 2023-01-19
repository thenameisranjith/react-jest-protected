import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
    const url = "https://api.github.com/users"
    const [value, setValue] = useState(0);
    const [users, setUsers] = useState([])
    useEffect(() => {
        document.title = "Use Effect Example"
    }, [value])

    const changeNumber = () => {
        console.log("HI");
        setValue(value + 1)
    }

    const getGitHubUsers = async () => {
        const response = await fetch(url);
        console.log(response)
        const users = await response.json();
        console.log(users)
        setUsers(users)

    }

    useEffect(() => {
        getGitHubUsers();
    }, [])


    return (
        <div>
            <button type="submit" onClick={() => { changeNumber() }}>Change</button>
            <h1>{value}</h1>
            {users.map(item => {
                return (<div >
                    <h5 key={item.id}>{item.login}</h5>
                </div>)
            })}
        </div>
    )
}

export default UseEffectExample
