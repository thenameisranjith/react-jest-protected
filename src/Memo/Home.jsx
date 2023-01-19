import { React, useState } from "react";
import Child from "./Child";
const Home = () => {
  const [parentData, setParentData] = useState(["parent data"]);
  const addParentData = () => {
    setParentData([...parentData, "new parent data"]);
  };

  console.log("Parent component render...");
  return (
    <div>
      <h2>Parent Component Data:</h2>
      {parentData.map((data, index) => (
        <p key={index}>
          {data} {index + 1}
        </p>
      ))}
      <button onClick={addParentData}>Add parent data</button>
      <Child />
    </div>
  );
};

export default Home;
