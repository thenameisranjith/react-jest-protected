import React, { useState } from 'react'

const CallBackRealExample = () => {
    const [students, setStudent] = useState([
        { name: "harry", subject: "JavaScript" },
        { name: "Rohan", subject: "Machine Learning" }
    ])
    let newStudent = { name: "ranjith", subject: "React js" }

    const enrollStudent = (newStudent) => {
        setTimeout(() => {
            students.push(newStudent)
        }, 5000)
    }

    const getStudent = () => {

    }


    enrollStudent(newStudent, getStudent);
    return (
        <div>
            <h1>Real call back</h1>
            {students.map(e => {
                return (<div>
                    <h5>{e.name}
                    </h5>
                </div>)
            })}
        </div>
    )
}

export default CallBackRealExample
