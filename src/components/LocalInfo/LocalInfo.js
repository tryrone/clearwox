import React from "react";
import PieChart from "react-minimal-pie-chart";
import "./LocalInfo.css";

export default function LocalInfo() {
  return (
    <div className="container">
      <div className="local-bis">
        <div className="rounded">
          {" "}
          <i></i>{" "}
        </div>
        <div className="local-info">
          <h2>4,307</h2>
          <p>Local Businesses</p>
        </div>
      </div>
      <div className="more-info">
        <ul>
          <li className="hex">
            <div className="hexagon">
              <i className="fa fa-exclamation "></i>
              <div class="face1"></div>
              <div class="face2"></div>
            </div>
            <div className="local-info-2">
              <h2>91</h2>
              <p>Verification Required</p>
            </div>
          </li>

          <li className="pie-data">
            <div className="rounded-chart">
              <PieChart
                data={[
                  { title: "One", value: 30, color: "#dff6f0" },
                  { title: "Two", value: 27, color: "#36b5b0" },
                  { title: "Three", value: 28, color: "#36b5b0" }
                ]}
              />
            </div>
            <div className="local-info-3">
              <h2>67%</h2>
              <p>Published</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
