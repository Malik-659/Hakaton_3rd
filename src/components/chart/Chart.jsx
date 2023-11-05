import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const [chartData, setChartData] = useState({});
  const { charts, oneChart } = useSelector((state) => state.charts);
  const dispatch = useDispatch();
  
  console.log(oneChart);

  useEffect(() => {
    if (oneChart && oneChart.length > 0) {
      const labels = oneChart.map((chart) => chart.compani);
      const prikol = oneChart.map((chart) => chart.price);
      setChartData({
        labels: labels,
        datasets: [
          {
            data: prikol,
            backgroundColor: [
              "rgb(255, 99, 132",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "#20B2AA",
              "#6A5ACD",
              "#FF00FF",
              "#DC143C",
              "#3CB371",
            ],
          },
        ],
      });
    }
  }, [oneChart]);
  const options = {};
  return (
    <div className="w-2/5 p-4 mr-6 h-11/12 rounded-lg border-2 border-[#9bcbfb] bg-[#b6f2fb80]">
      <h2 className="text-center">Круговая диаграмма</h2>
      <div style={{ width: "500px" }}>
        {chartData.labels && <Pie data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default Chart;
