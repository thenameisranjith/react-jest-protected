import { React } from "react";
import useCounterUD from "../CustomHooks/useCounterUD";
const IncrementCounter = () => {
  const counter = useCounterUD();
  return <div> IncrementCounter is == {counter} </div>;
};

export default IncrementCounter;
