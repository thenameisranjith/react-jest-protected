import { useState, useEffect } from "react";

const useCounterUD = (inc = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      inc
        ? setCounter((prevCounter) => prevCounter + 1)
        : setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [inc]);

  return counter;
};

export default useCounterUD;
