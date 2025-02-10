"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: [
      "Dodatki pigmenty, stabilizatory, żywice",
      "Drewno, mączka drzewna, włókna bambusowe",
      "HPDE (ang. high density polyetylene) polietylen o dużej gęstości",
    ],
    datasets: [
      {
        data: [10, 55, 35],
        backgroundColor: ["#4CAF50", "#FFD700", "#FF6347"],
        hoverBackgroundColor: ["#45A049", "#FFC107", "#FF4500"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="mx-auto w-full md:w-1/2 p-6" style={{ height: "300px" }}>
      <h2 className="text-center text-xl font-bold mb-4">
        Skład desek kompozytowych
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
}
