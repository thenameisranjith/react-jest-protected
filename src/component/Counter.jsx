import React from "react";
import IncrementCounter from "./IncrementCounter";
import DecrementCounter from "./DecrementCounter";
const Counter = () => {
  return (
    <div>
      Counter
      <IncrementCounter />
      <DecrementCounter />
    </div>
  );
};

export default Counter;
