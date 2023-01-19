import React, { useState } from 'react'

function ButtonNameDisplay() {
    const professionName = ["doctor", "police", "bussinessMen", "engineer"];
    const [myProfession, setMyProfession] = useState("");
    return (
        <div>
            <h2>Button Name display</h2>

            {professionName.map(e => (
                <button
                    className="btn btn-primary ml-2 mr-2"
                    type="submit"
                    key={e}
                    onClick={() => setMyProfession(e)}
                >
                    {e}

                </button>
                
            ))}
            <h1>{myProfession}</h1>
        </div>
    )
}

export default ButtonNameDisplay
