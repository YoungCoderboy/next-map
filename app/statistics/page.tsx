"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
// Kidnapping and Abduction - 693
// Theft - 3257
// Motor Vehicle Theft - 1901
// Burglary - 612
// Offences against Property - 4512
// Fraud - 956

export const data = {
  labels: [
    "Kidnapping and Abduction",
    "Theft",
    "Motor Vehicle Theft",
    "Burglary",
    "Offences against Property",
    "Fraud",
  ],
  datasets: [
    {
      label: "Cases",
      data: [693, 4512, 3257, 1901, 612, 956],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const labels = [
  "Kidnapping and Abduction",
  "Theft",
  "Motor Vehicle Theft",
  "Burglary",
  "Offences against Property",
  "Fraud",
];
export const dataBar = {
  labels: [
    "Kidnapping and Abduction",
    "Theft",
    "Motor Vehicle Theft",
    "Burglary",
    "Offences against Property",
    "Fraud",
  ],
  datasets: [
    {
      label: "Crime Dataset",
      data: [693, 4512, 3257, 1901, 612, 956],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const StatisticsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-32">
      <Bar className="" data={data} options={options} />
      {/* <h1 className="text-4xl font-bold mb-8">Crime Statistics</h1>
      <div className="m-auto mt-12 bg-black w-96 h-96 ">
        <Pie className="" data={data} />
      </div>
      <div className="m-auto mt-12 bg-black w-96">
        <Bar className="" data={data} options={options} />
      </div> */}
    </div>
  );
};
export default StatisticsPage;
