import { useState } from "react";

const CounterTest = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <div>
      <button onClick={() => setIncrement(increment + 1)}>Add</button>
      <h1>{increment}</h1>
    </div>
  );
};

export default CounterTest;
