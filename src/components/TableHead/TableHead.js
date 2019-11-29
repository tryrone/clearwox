import React from "react";
import "./TableHead.css";

export default function TableHead() {
  return (
    <div className="tab-header">
      <div className="tab-buis">
        <p>
          Business <i className="fa fa-sort-desc buis"></i>
        </p>
      </div>
      <ul className="sec-tab">
        <li className="sec">
          <p>
            Status/Modified <i className="fa fa-sort-desc buis"></i>
          </p>
        </li>

        <li>
          <p>
            Stats <i className="fa fa-sort-desc buis"></i>
          </p>
        </li>
      </ul>
    </div>
  );
}
