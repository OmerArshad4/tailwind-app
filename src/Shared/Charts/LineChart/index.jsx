import {
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState } from "react";

ChartJS.register(
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const LineChart = ({ graphData }) => {
  const [filteredData, setFilteredData] = useState(graphData);

  const data = {
    labels: filteredData?.map((item) => item?.label),
    datasets: [
      {
        label: "Total Cost",
        data: filteredData?.map((item) => item?.FormSubmitted),
        borderColor: "rgb(0, 102, 204)",
        backgroundColor: "#0052DE",
        borderWidth: 1,
        pointRadius: 2,
        pointBackgroundColor: "rgb(0, 102, 204)",
        tension: 0.4,
      },
      {
        label: "Net Profit",
        data: filteredData?.map((item) => item?.FormAccepted),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "#0052DE",
        borderWidth: 1,
        pointRadius: 2,
        pointBackgroundColor: "rgb(34, 197, 94)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "rgb(55, 65, 81)",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} Forms`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(209, 213, 219, 0.2)",
        },
        ticks: {
          color: "rgb(75, 85, 99)",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(209, 213, 219, 0.2)",
        },
        ticks: {
          color: "rgb(75, 85, 99)",
          callback: function (value) {
            return `${value}k`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
