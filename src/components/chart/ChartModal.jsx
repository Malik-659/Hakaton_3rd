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
        backgroundColor: ["aqua", "yellow", "purple", "pink"],
      },
    ],
  };
  const options = {};
  return (
    <div className="w-1/3 mr-6 h-11/12 rounded-lg border-2 border-[#9bcbfb] bg-[#b6f2fb80]">
      <div className="w-64 h-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartModal;
