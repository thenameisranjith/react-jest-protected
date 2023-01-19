import { useEffect, useState } from "react";

const Timer = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const deadline = "December, 31, 2022";

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 3000);
    console.log("14 TIME INTERVAL... ", interval);
    return () => clearInterval(interval);
  }, []);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinute(Math.floor((time / 1000 / 60) % 60));
    setSecond(Math.floor((time / 1000) % 60));
  };
  return (
    <div>
      <span>
        {console.log("rendered.. ")}
        {day}days {hour} hours {minute} minutes {second} seconds{" "}
      </span>
    </div>
  );
};

export default Timer;
