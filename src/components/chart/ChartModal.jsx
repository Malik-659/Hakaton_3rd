import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartModal = () => {
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
    <div className="w-64 h-full bg-[#00000060]">
      <div className="w-48 h-48">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartModal;
