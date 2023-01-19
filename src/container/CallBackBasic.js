import React, { useEffect, useState } from 'react'
const CallBackBasic = () => {
    //  const [lastName, setLastName] = useState(false)

    const add = (a, b, callback) => {
        console.log("add func");
        setTimeout(() => {
            let sum = a + b;
            callback(sum)
        }, 10000)

    }

    const display = (res) => {
        console.log("INSIDE THE DISPLAY", res)
    }


    console.log(add(5, 5, display));

    // const sendData = () => {
    //     setTimeout(() => {
    //         alert("you called me")
    //         setLastName("Kumar")
    //     }, 5000)
    // }
    return (
        <div>
            <h1>CallBack</h1>
            {/* <button type="button" onClick={sendData}>CallBack</button>
            <h4>{lastName}</h4> */}
        </div>
    )
}

export default CallBackBasic
