import { React } from "react";
import useCounterUD from "../CustomHooks/useCounterUD";
const DecrementCounter = () => {
  const counter = useCounterUD(false);
  return <div> DecrementCounter is == {counter} </div>;
};

export default DecrementCounter;
