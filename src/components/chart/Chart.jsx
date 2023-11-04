import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["AMAN", "MALIK", "SULI", "ERKIN"],
    datasets: [
      {
        data: [1, 2, 3, 5],
        backgroundColor: ["aqua", "red", "purple", "black"],
      },
    ],
  };
  const options = {};
  return (
    <div style={{ padding: "500px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Chart;
