import React from "react";
import { Bar } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import "./GraphChart.css";

export default function GraphChart() {
  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  };
  const bar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <div className="chart">
      <Bar data={bar} options={options} />
    </div>
  );
}
