// import { useMemo } from "react";
// import { React, useState } from "react";

// const First = () => {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);
//   const squaredNumber = useMemo(() => {
//     console.log("called 87");
//     return squareNumber(number);
//   }, [number]);

//   const counterHandler = () => {
//     console.log("called handler ..~");
//     setCounter(counter + 1);
//   };
//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       SQUARE IS {squaredNumber}
//       <br />
//       <br />
//       <br />
//       <button onClick={counterHandler}>Add</button>
//       {counter}
//     </div>
//   );
// };

// const squareNumber = (number) => {
//   console.log("called square");

//   return number * number;
// };

// export default First;

// SECOND EXAMPLE

// import { useMemo } from "react";
import { useMemo } from "react";
import { React, useState } from "react";

const First = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [name, setName] = useState("");
  
  const answer = useMemo(() => {
    return add(number1, number2);
  }, [number1, number2]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <br />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      {answer}
    </div>
  );
};
const add = (num1, num2) => {
  console.log("Adding numbers");
  return parseInt(num1) + parseInt(num2);
};
export default First;
