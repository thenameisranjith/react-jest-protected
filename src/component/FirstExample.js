import React from "react";
import { Line } from "react-chartjs-2";
const FirstExample = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",

              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 5],
            },
          ],
        }}
        width={300}
        height={500}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default FirstExample;
