import { React, useState, memo } from "react";

const Child = () => {
  const [chilData, setChilData] = useState(["child data"]);
  const addChildData = () => {
    setChilData([...chilData, "new child data"]);
  };
  console.log("Child component render...");
  return (
    <div>
      <h2>Parent Component Data:</h2>
      {chilData.map((data, index) => (
        <p key={index}>
          {data} {index + 1}
        </p>
      ))}
      <button onClick={addChildData}>Add child data</button>
    </div>
  );
};

// export default Child;
export default memo(Child);
