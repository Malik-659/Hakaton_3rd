import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getCharts } from "../../store/charts/chartsActions";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const [chartData, setChartData] = useState({});
  const { charts } = useSelector((state) => state.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharts());
  }, []);
  console.log(chartData);

  useEffect(() => {
    if (charts && charts.length > 0) {
      const labels = charts.map((chart) => chart.company);
      const prikol = charts.map((chart) => parseInt(chart.spandings));
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
  }, [charts]);
  console.log(chartData);
  const options = {};
  return (
    <div>
      <h2>Круговая диаграмма</h2>
      <div style={{ width: "500px" }}>
        {chartData.labels && <Pie data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default Chart;
