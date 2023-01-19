import React, { useState } from 'react'
import { people } from "../testing/people";
const UseStateExample = () => {
    const [person, setPerson] = useState(people)
    const deleteSingleItem = (id) => {
        alert(id);
        let newPerson = person.filter(per => per.id !== id)
        setPerson(newPerson)
        console.log(person);
    }
    return (
        <div className="container">
            {person.map(e => {
                return (<div key={e.id}>
                    <h1 onClick={() => { deleteSingleItem(e.id) }}>{e.name}</h1>
                </div>)
            })}
            <button type="button" onClick={() => { setPerson([]) }} style={{ position: "fixed" }}>Clear All</button>
        </div>
    )
}

export default UseStateExample
